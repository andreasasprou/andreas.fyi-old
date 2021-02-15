import React, { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import * as notionTypes from 'notion-types';
import { Box } from '@chakra-ui/react';

export interface TableOfContentsEntry {
  id: notionTypes.ID;
  type: notionTypes.BlockType;
  text: string;
  indentLevel: number;
}

interface TableOfContentsProps {
  toc: TableOfContentsEntry[];
}

const TOP = 0;

const cs = (...classes: Array<string | undefined | false>) =>
  classes.filter((a) => !!a).join(' ');

const uuidToId = (uuid: string) => uuid.replace(/-/g, '');

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const throttleMs = 100;

  // this scrollspy logic was originally based on
  // https://github.com/Purii/react-use-scrollspy
  const actionSectionScrollSpy = throttle(() => {
    const sections = document.getElementsByClassName('notion-h');

    let prevBBox: DOMRect | null = null;
    let currentSectionId: string | null = activeSection;

    for (let i = 0; i < sections.length; ++i) {
      const section = sections[i];
      if (!section || !(section instanceof Element)) continue;

      if (!currentSectionId) {
        currentSectionId = section.getAttribute('data-id');
      }

      const bbox = section.getBoundingClientRect();
      const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0;
      const offset = Math.max(150, prevHeight / 4);

      // GetBoundingClientRect returns values relative to viewport
      if (bbox.top - offset < 0) {
        currentSectionId = section.getAttribute('data-id');

        prevBBox = bbox;
        continue;
      }

      // No need to continue loop, if last element has been detected
      break;
    }

    setActiveSection(currentSectionId);
  }, throttleMs);

  useEffect(() => {
    window.addEventListener('scroll', actionSectionScrollSpy);

    actionSectionScrollSpy();

    return () => {
      window.removeEventListener('scroll', actionSectionScrollSpy);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      overflowY="auto"
      maxH={`calc(100vh - ${TOP}px)`}
      position="sticky"
      top={TOP}
      py={4}
      maxW={380}
      display={{
        base: 'none',
        md: 'flex',
      }}
      w="100%"
      pl={2}
    >
      <div className="notion-aside-table-of-contents">
        <nav className="notion-table-of-contents notion-gray">
          {toc.map((tocItem) => {
            const id = uuidToId(tocItem.id);

            return (
              <a
                key={id}
                href={`#${id}`}
                className={cs(
                  'notion-table-of-contents-item',
                  `notion-table-of-contents-item-indent-level-${tocItem.indentLevel}`,
                  activeSection === id &&
                    'notion-table-of-contents-active-item',
                )}
              >
                <span
                  className="notion-table-of-contents-item-body"
                  style={{
                    display: 'inline-block',
                    marginLeft: tocItem.indentLevel * 16,
                  }}
                >
                  {tocItem.text}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </Box>
  );
}

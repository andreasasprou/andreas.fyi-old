import React from 'react';
import { BoxProps, chakra, Text, TextProps } from '@chakra-ui/react';
import Tippy from '@tippyjs/react';
import { Box } from '@chakra-ui/layout';
import { followCursor } from 'tippy.js';
import { LayoutConstants } from 'utils/constants/client';

interface BodyTextProps extends TextProps {}

export function BodyText({ ...rest }: BodyTextProps) {
  return (
    <Text
      mt={LayoutConstants.margin.paragraph}
      fontSize="lg"
      lineHeight={1.8}
      {...rest}
    />
  );
}

interface BodyTextWithPopoverProps extends TextProps {
  hoverContent: React.ReactElement | string;
  contentProps?: BoxProps;
  followCursor?: boolean;
  interactive?: boolean;
}

export function BodyTextWithPopover({
  hoverContent,
  contentProps = {},
  followCursor: shouldFollowCursor = true,
  interactive,
  ...rest
}: BodyTextWithPopoverProps) {
  return (
    <Tippy
      followCursor={shouldFollowCursor}
      arrow={false}
      interactive={interactive}
      content={
        <Box bg="#f2aa4cff" maxW={300} p={4} {...contentProps}>
          <Text color="black" fontSize="xl">
            {hoverContent}
          </Text>
        </Box>
      }
      hideOnClick={false}
      plugins={[followCursor]}
    >
      <chakra.span
        backgroundImage="linear-gradient(to right, #f2aa4cff 75%, transparent 75%)"
        backgroundPosition="0 1.08em"
        backgroundRepeat="repeat-x"
        backgroundSize="6px 2px"
        as="span"
        _hover={{
          cursor: 'help',
        }}
        {...rest}
      />
    </Tippy>
  );
}

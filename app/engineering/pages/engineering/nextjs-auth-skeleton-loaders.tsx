import { Box, Link } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import { LayoutConstants, ROUTES } from 'utils/constants/client';
import Layout from 'layouts/Layout';
import { NotionRenderer, Code } from 'react-notion-x';
import TweetEmbed from 'react-tweet-embed';
import * as notionTypes from 'notion-types';

import { NotionAPI } from 'notion-client';
import { getPageTableOfContents } from 'notion-utils';

import { NotionStyles } from 'engineering/styles/notion';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import { TableOfContents } from 'ui/TableOfContents';
import Prism from 'prismjs';
import { NextSeo } from 'next-seo';

const getTableOfContentsFromRecordMap = (
  recordMap: notionTypes.ExtendedRecordMap,
) => {
  const pageItem = Object.values(recordMap.block).find(
    (value) => value.value.type === 'page',
  );

  return getPageTableOfContents(
    pageItem?.value as notionTypes.PageBlock,
    recordMap,
  );
};

interface PageProps {
  recordMap: notionTypes.ExtendedRecordMap;
}

const title =
  "Recreating Vercel's static in-app page skeleton loaders in Next.js";

const url = `https://andreas.fyi${ROUTES.Engineering.article(
  'nextjs-auth-skeleton-loaders',
)}`;
const seoDescription =
  'Strategies and patterns for per-page authentication and skeleton loaders inspired by Vercel in Next.js.';

const Tweet = (props) => (
  <TweetEmbed
    {...props}
    options={{
      ...props.options,
      theme: 'dark',
    }}
  />
);

function NextjsAuthSkeletonLoadersPage({ recordMap }: PageProps) {
  const toc = getTableOfContentsFromRecordMap(recordMap);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Flex w="100%" pt={LayoutConstants.margin.large}>
      <NextSeo
        title={`${title} - Andreas Asprou`}
        description={seoDescription}
        canonical={url}
        openGraph={{
          url: url,
          title,
          description: seoDescription,
          images: [
            {
              url: 'https://andreas.fyi/og-skeleton-loader.jpg',
              width: 2400,
              height: 1257,
              alt: 'Vercel skeleton loaders',
            },
          ],
          site_name: 'Andreas.fyi',
        }}
        twitter={{
          handle: '@andyasprou',
          site: '@andyasprou',
          cardType: 'summary_large_image',
        }}
      />
      <NotionStyles />
      <Box w="100%">
        <Heading>{title}</Heading>
        <NotionRenderer
          components={{ code: Code, tweet: Tweet }}
          recordMap={recordMap}
          darkMode
          fullPage={false}
          showTableOfContents
        />
      </Box>
      <TableOfContents toc={toc} />
    </Flex>
  );
}
NextjsAuthSkeletonLoadersPage.getLayout = (page) => (
  <Layout title={title}>{page}</Layout>
);

const notion = new NotionAPI();

export async function getStaticProps() {
  const recordMap = await notion.getPage(
    'Final-Recreating-Vercel-s-static-in-app-page-skeleton-loaders-in-Next-js-60a752e697ae4dfa9c56997a336eb265',
  );

  return {
    props: {
      recordMap,
    },
  };
}

export default NextjsAuthSkeletonLoadersPage;

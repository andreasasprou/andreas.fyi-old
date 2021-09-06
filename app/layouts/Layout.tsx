import React, { ReactNode } from 'react';
import { Box, BoxProps, Container, Text } from '@chakra-ui/layout';
import { NextSeo, NextSeoProps } from 'next-seo';
import { Link } from '@chakra-ui/react';
import { LayoutConstants } from 'utils/constants/client';
import { SubscribeCard } from 'ui/SubscribeCard';
import { PageTitle } from 'ui/common';

interface LayoutProps extends Omit<BoxProps, 'title'> {
  children: ReactNode;
  title: string | string[];
  ogImage?: string;
  url?: string;
  description?: string;
}

function Layout({
  title,
  description = '',
  children,
  url,
  ogImage,
  ...rest
}: LayoutProps) {
  return (
    <Box w="100%" h="100%" {...rest}>
      <NextSeo
        title={`${title} - Andreas Asprou`}
        description="Andreas Asprou."
        twitter={{
          handle: '@andyasprou',
          site: '@andyasprou',
          cardType: 'summary_large_image',
        }}
        {...(url
          ? {
              canonical: url,
            }
          : {})}
        {...(ogImage
          ? {
              openGraph: {
                url: url,
                title: title as string,
                description,
                images: [
                  {
                    url: 'https://andreas.fyi/key-chars-of-early-stage-founders-og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: title as string,
                  },
                ],
                site_name: 'Andreas.fyi',
              },
            }
          : {})}
      />
      <Container
        py={{
          base: '20px',
          md: '90px',
        }}
        maxW="1300px"
      >
        <PageTitle>
          {typeof title === 'string' ? title : title.join(' / ')}
        </PageTitle>
        {children}
        <Text
          color="orange.300"
          fontSize="xl"
          mt={LayoutConstants.margin.large}
        >
          This website is built using{' '}
          <Link
            textDecoration="underline"
            href="https://blitzjs.com/"
            isExternal
          >
            Blitz
          </Link>
          ,{' '}
          <Link
            textDecoration="underline"
            href="https://chakra-ui.com/"
            isExternal
          >
            Chakra UI
          </Link>{' '}
          and hosted on{' '}
          <Link
            textDecoration="underline"
            href="https://vercel.com/"
            isExternal
          >
            Vercel
          </Link>
          .
        </Text>
        <SubscribeCard mt={4} />
      </Container>
    </Box>
  );
}

export default Layout;

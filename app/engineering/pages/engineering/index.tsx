import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Layout from 'layouts/Layout';
import { PageSection } from 'ui/common';
import { Link } from 'blitz';
import { ROUTES } from 'utils/constants/client';
import { ArrowForwardIcon } from 'chakra-ui/packages/icons/src/ArrowForward';
import Icon from '@chakra-ui/icon';

function Engineeringpage() {
  return (
    <PageSection minH="30vh">
      <Link href={ROUTES.Engineering.article('nextjs-auth-skeleton-loaders')}>
        <Flex
          align="center"
          maxW={700}
          bg="gray.900"
          borderRadius="md"
          p={4}
          _hover={{
            cursor: 'pointer',
            bg: 'gray.800',
            transition: 'bg 0.3s ease',
          }}
        >
          <Box mr={4}>
            <Text color="blue.300" fontSize="lg" fontWeight={500} mb={2}>
              <span>
                Patterns for recreating Vercel's static in-app page skeleton
                loaders in Next.js
              </span>
            </Text>
            <Text fontSize="lg">
              Strategies and patterns for per-page authentication and skeleton
              loaders inspired by Vercel in Next.js.
            </Text>
          </Box>
          <Icon fontSize="2xl" ml="auto" mt="-4px" as={ArrowForwardIcon} />
        </Flex>
      </Link>
    </PageSection>
  );
}

Engineeringpage.getLayout = (page) => (
  <Layout title="Engineering">{page}</Layout>
);

export default Engineeringpage;

import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Link } from 'blitz';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Icon from '@chakra-ui/icon';
import Layout from 'layouts/Layout';
import { BodyText, PageSection } from 'ui/common';
import { ROUTES } from 'utils/constants/client';

interface PostLinkProps {
  href: string;
  title: string;
  excerpt: string;
  date: string;
}

function PostLink({ href, title, excerpt, date }: PostLinkProps) {
  return (
    <Link href={href}>
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
            <span>{title}</span>
          </Text>
          <Text fontSize="lg">{excerpt}</Text>
          <Text mt={1} color="whiteAlpha.700">
            {date}
          </Text>
        </Box>
        <Icon fontSize="2xl" ml="auto" mt="-4px" as={ArrowForwardIcon} />
      </Flex>
    </Link>
  );
}

function ThinkingPage() {
  return (
    <PageSection minH="30vh">
      <PostLink
        title="December 2020"
        excerpt="Things I read, learned and thought about in December 2020."
        href={ROUTES.Thinking.roundUp('dec-2020')}
        date="10/12/2020"
      />
      <PostLink
        title="Key Characteristics of Successful Early Stage Founders"
        excerpt="The four qualities that you often come across in successful early stage founders."
        href={ROUTES.Thinking.FounderCharacteristics}
        date="05/09/2021"
      />
    </PageSection>
  );
}

ThinkingPage.getLayout = (page) => (
  <Layout title="Thinking with the door open">{page}</Layout>
);

export default ThinkingPage;

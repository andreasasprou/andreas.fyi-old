import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Link } from 'blitz'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Icon from '@chakra-ui/icon'
import Layout from 'layouts/Layout'
import { PageSection } from 'ui/common'
import { ROUTES } from 'utils/constants/client'

function ThinkingPage() {
  return (
    <PageSection minH="30vh">
      <Link href={ROUTES.Thinking.roundUp('dec-2020')}>
        <Flex
          align="center"
          maxW={700}
          bg="gray.900"
          borderRadius="md"
          p={4}
          _hover={{
            cursor: 'pointer',
            bg: 'gray.800',
            transition: 'bg 0.3s ease'
          }}
        >
          <Box mr={4}>
            <Text color="blue.300" fontSize="lg" fontWeight={500} mb={2}>
              <span>December 2020</span>
            </Text>
            <Text fontSize="lg">Things I read, learned and thought about in December 2020.</Text>
          </Box>
          <Icon fontSize="2xl" ml="auto" mt="-4px" as={ArrowForwardIcon} />
        </Flex>
      </Link>
    </PageSection>
  )
}

ThinkingPage.getLayout = (page) => <Layout title="Thinking with the door open">{page}</Layout>

export default ThinkingPage

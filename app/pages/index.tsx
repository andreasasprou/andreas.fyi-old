import { BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"
import React from "react"
import { NextSeo } from "next-seo"
import { Container, Link, LinkProps, Stack, Text, TextProps } from "@chakra-ui/layout"

const Title = (props: TextProps) => (
  <Text
    fontSize={{
      base: "3xl",
      md: "4xl",
    }}
    {...props}
  />
)

const HomeLink = (props: LinkProps) => (
  <Link
    px="4px"
    textDecoration="underline"
    borderRadius="md"
    fontWeight="inherit"
    _hover={{
      opacity: 0.9,
    }}
    {...props}
  />
)

const Home: BlitzPage = () => {
  return (
    <>
      <NextSeo title="Andreas Asprou" description="Andreas Asprou." />
      <Container py="90px" maxW="1300px">
        <Text fontWeight={500} fontSize="xl">
          Andreas Asprou
        </Text>
        <Stack
          maxW="650px"
          mt={{
            base: 12,
            md: 28,
          }}
          spacing={6}
        >
          <Title>Coming soon.</Title>
          <Title>
            You'll find me working on{" "}
            <HomeLink href="https://www.flick.tech" target="_blank">
              Flick.tech
            </HomeLink>{" "}
            and{" "}
            <HomeLink href="https://www.dweet.com" target="_blank">
              Dweet.com
            </HomeLink>
          </Title>
          <Title>
            If you'd like to get in touch, consider{" "}
            <HomeLink href="mailto:andyasprou@hey.com?subject=Hello">writing an email</HomeLink> or
            sending a{" "}
            <HomeLink href="https://twitter.com/andyasprou/" target="_blank">
              tweet
            </HomeLink>
            .
          </Title>
        </Stack>
      </Container>
    </>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home

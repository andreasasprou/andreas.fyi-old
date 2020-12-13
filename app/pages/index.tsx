import { BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"
import React from "react"
import { NextSeo } from "next-seo"
import { Container, Link, LinkProps, Stack, StackProps, Text } from "@chakra-ui/layout"
import { HomeText } from "../components/HomeText"
import {
  DigitalProducts,
  LifePhilosophies,
  OptimizeHealth,
  Relationships,
} from "../components/TitlesWithMoreInfo"

const Section = (props: StackProps) => (
  <Stack
    maxW="850px"
    mt={{
      base: 12,
      md: 28,
    }}
    spacing={6}
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
        <Text color="orange.300" fontWeight={600} fontSize="xl">
          Andreas Asprou
        </Text>
        <Section>
          <HomeText>I'm a deliberate, unconventional and obsessive individual.</HomeText>
          <HomeText>
            I live to work ("workaholic"): attempting to optimize my life around being able to
            create exceptional <DigitalProducts /> and learn as much as possible.
          </HomeText>
          <HomeText>I spend most of my time writing code and designing systems.</HomeText>
          <HomeText>
            In my down time I think deeply about my <LifePhilosophies />, <OptimizeHealth /> and
            attempt to <Relationships />.
          </HomeText>
        </Section>
        <Section>
          <HomeText>
            You'll find me working on{" "}
            <HomeLink href="https://www.flick.tech" target="_blank">
              Flick.tech
            </HomeLink>{" "}
            and{" "}
            <HomeLink href="https://www.dweet.com" target="_blank">
              Dweet.com
            </HomeLink>
          </HomeText>
          <HomeText>
            If you'd like to get in touch, consider{" "}
            <HomeLink href="mailto:andyasprou@hey.com?subject=Hello">writing an email</HomeLink> or
            sending a{" "}
            <HomeLink href="https://twitter.com/andyasprou/" target="_blank">
              tweet
            </HomeLink>
            .
          </HomeText>
        </Section>
      </Container>
    </>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home

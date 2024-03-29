import { BlitzPage } from 'blitz'
import React from 'react'
import { Link, LinkProps } from '@chakra-ui/layout'
import Layout from 'app/layouts/Layout'
import { PageSection, PageText } from 'ui/common'
import { DigitalProducts, MyJourney } from 'home/components'

const HomeLink = (props: LinkProps) => (
  <Link
    px="4px"
    textDecoration="underline"
    borderRadius="md"
    fontWeight="inherit"
    _hover={{
      opacity: 0.9
    }}
    {...props}
  />
)

const Home: BlitzPage = () => {
  return (
    <>
      <PageSection>
        <PageText>
          Hey, I'm Andreas. A deliberate, unconventional and obsessive individual.
        </PageText>
        <PageText>
          The main purpose of this site is to document the lessons from <MyJourney /> over the last
          few years.
        </PageText>
      </PageSection>
      <PageSection>
        <PageText>
          I live to work ("workaholic"): attempting to optimize my life around being able to create
          exceptional <DigitalProducts /> that feel like magic to use and learn as much as possible.
        </PageText>
        <PageText>I spend most of my time writing code and designing systems.</PageText>
        <PageText>
          In my down time I write & think deeply about my life philosophies, optimizing my health
          and my attempt to build strong relationships.
        </PageText>
      </PageSection>
      <PageSection>
        <PageText>
          You'll find me working on{' '}
          <HomeLink href="https://www.flick.tech" target="_blank">
            Flick.tech
          </HomeLink>{' '}
          and{' '}
          <HomeLink href="https://www.dweet.com" target="_blank">
            Dweet.com
          </HomeLink>
        </PageText>
        <PageText>
          In the future, I will continue building{' '}
          <HomeLink href="https://www.garn.io" target="_blank">
            Garn.io
          </HomeLink>
          . If you're interested in helping online businesses reduce churn, please reach out.
        </PageText>
        <PageText>
          If you'd like to get in touch, consider{' '}
          <HomeLink href="mailto:andyasprou@hey.com?subject=Hello">writing an email</HomeLink> or
          sending a{' '}
          <HomeLink href="https://twitter.com/andyasprou/" target="_blank">
            tweet
          </HomeLink>
          .
        </PageText>
      </PageSection>
    </>
  )
}

Home.getLayout = (page) => <Layout title="Me">{page}</Layout>

export default Home

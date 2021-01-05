import { BlitzPage } from "blitz";
import Layout from "app/layouts/Layout";
import React from "react";
import { NextSeo } from "next-seo";
import { Container, Link, LinkProps } from "@chakra-ui/layout";
import { PageSection, PageText, PageTitle } from "ui/common";
import { DigitalProducts, LifePhilosophies, OptimizeHealth, Relationships } from "home/components";

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
);

const Home: BlitzPage = () => {
  return (
    <>
      <PageSection>
        <PageText>I'm a deliberate, unconventional and obsessive individual.</PageText>
        <PageText>
          I live to work ("workaholic"): attempting to optimize my life around being able to create
          exceptional <DigitalProducts /> and learn as much as possible.
        </PageText>
        <PageText>I spend most of my time writing code and designing systems.</PageText>
        <PageText>
          In my down time I think deeply about my <LifePhilosophies />, <OptimizeHealth /> and
          attempt to <Relationships />.
        </PageText>
      </PageSection>
      <PageSection>
        <PageText>
          You'll find me working on{" "}
          <HomeLink href="https://www.flick.tech" target="_blank">
            Flick.tech
          </HomeLink>{" "}
          and{" "}
          <HomeLink href="https://www.dweet.com" target="_blank">
            Dweet.com
          </HomeLink>
        </PageText>
        <PageText>
          In the future, I will continue building{" "}
          <HomeLink href="https://www.garn.io" target="_blank">
            Garn.io
          </HomeLink>
          . If you're interested in helping online businesses reduce churn, please reach out.
        </PageText>
        <PageText>
          If you'd like to get in touch, consider{" "}
          <HomeLink href="mailto:andyasprou@hey.com?subject=Hello">writing an email</HomeLink> or
          sending a{" "}
          <HomeLink href="https://twitter.com/andyasprou/" target="_blank">
            tweet
          </HomeLink>
          .
        </PageText>
      </PageSection>
    </>
  );
};

Home.getLayout = (page) => <Layout title="Me">{page}</Layout>;

export default Home;

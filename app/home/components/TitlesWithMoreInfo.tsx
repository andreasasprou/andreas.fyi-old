import React from "react";
import { Box, ListItem, Text, Link } from "@chakra-ui/layout";
import { LinkProps, List } from "@chakra-ui/react";
import PageTextWithHover from "../../components/common/PageTextWithHover";

const Content = ({ text }: { text: string }) => (
  <Text fontSize="inherit">
    Every now and then I write in Bear about <strong>{text}</strong>.
    <Box my={8} /> I'm in the process of migrating my personal notes to this digital brain dump.
    Come back here soon to read about my lessons and recommendations regarding {text}.
  </Text>
);

export function DigitalProducts() {
  return (
    <PageTextWithHover
      hoverContent={<Content text="building, designing and scaling digital products" />}
    >
      digital products
    </PageTextWithHover>
  );
}

const BoldExternalLink = (props: LinkProps) => (
  <Link fontWeight={500} textDecoration="underline" isExternal {...props} />
);

export function MyJourney() {
  return (
    <PageTextWithHover
      contentProps={{
        minW: 400,
        maxW: "auto",
      }}
      hoverContent={
        <List spacing={3} listStyleType="disc">
          <ListItem>
            Bootstrapping my first business{" "}
            <BoldExternalLink href="https://www.flick.tech">Flick.tech</BoldExternalLink> to $2M ARR
            in a couple of years whilst graduating computer science at Imperial College London in
            the top 3 of the cohort.
          </ListItem>
          <ListItem>
            Co-founding <BoldExternalLink href="https://www.dweet.com">Dweet.com</BoldExternalLink>{" "}
            - the first business that is successfully bringing the world of freelance work to the
            fashion & retail industries.
          </ListItem>
          <ListItem>
            Founding & solo-developing multiple other side-projects{" "}
            <BoldExternalLink href="https://combox.app">Combox</BoldExternalLink> &{" "}
            <BoldExternalLink href="https://garn.io">Garn.io</BoldExternalLink>.
          </ListItem>
        </List>
      }
      interactive
    >
      the journey I've been on
    </PageTextWithHover>
  );
}

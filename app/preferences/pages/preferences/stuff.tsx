import React from "react";
import { Box, Heading } from "@chakra-ui/layout";
import Layout from "layouts/Layout";
import { LayoutConstants } from "utils/constants/client";
import { BodyText } from "thinking/components";
import { Link } from "ui/common";

const sections = [
  {
    title: "Software Development Tools/Frameworks",
    items: [
      {
        text: "Blitz",
        link: "https://blitzjs.com/",
      },
      {
        text: "Chakra UI",
        link: "https://chakra-ui.com/",
      },
      {
        text: "Stitches",
        link: "https://stitches.dev/",
      },
      {
        text: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        text: "Vercel",
        link: "https://vercel.com/",
      },
      {
        text: "Render",
        link: "https://render.com/",
      },
    ],
  },
  {
    title: "Digital Products",
    items: [
      {
        text: "Loom",
        link: "https://www.loom.com/",
      },
      {
        text: "Notion",
        link: "https://notion.so",
      },
      {
        text: "Hey",
        link: "https://hey.com",
      },
      {
        text: "Simple Analytics",
        link: "https://simpleanalytics.com/",
      },
      {
        text: "Bear",
        link: "https://bear.app/",
      },
      {
        text: "Pitch",
        link: "https://pitch.com",
      },
    ],
  },
  {
    title: "Physical Products",
    items: [
      {
        text: "Remarkable",
        link: "http://remarkable.com/",
      },
    ],
  },
  {
    title: "Health Products",
    items: [
      {
        text: "Levels",
        link: "https://www.levelshealth.com/",
      },
      {
        text: "Oura",
        link: "https://ouraring.com/",
      },
      {
        text: "ChiliSleep",
        link: "https://www.chilitechnology.com/",
      },
      {
        text: "Eight Sleep",
        link: "https://www.eightsleep.com/",
      },
      {
        title: "Walden meditation cushion",
        link: "https://walden.us/",
      },
    ],
  },
  {
    title: "Supplements",
    items: [
      {
        text: "Seed",
        link: "https://seed.com/",
      },
      {
        text: "Heights",
        link: "https://yourheights.com/",
      },
      {
        text: "NeuroHacker",
        link: "https://neurohacker.com/",
      },
      {
        text: "C8 MCT Oil",
        link:
          "https://www.amazon.co.uk/Available-Friendly-BPA-Free-Caprylic-Ketosource%C2%AE/dp/B01LZ3DXT5",
      },
    ],
  },
  {
    title: "Food",
    items: [
      {
        text: "PerfectKeto bars",
        link: "https://shop.perfectketo.com/products/keto-bars",
      },
    ],
  },
  {
    title: "Home",
    items: [
      {
        text: "Feddies Flowers (b-monthly deliveries for the Mother)",
        link: "https://www.freddiesflowers.com/",
      },
      {
        title: "DÉ Tableware By Ann Demeulemeester - Serax",
        link: "https://www.serax.com/en/collection/de",
      },
      {
        title: "Always Pan",
        link: "https://fromourplace.com/products/always-essential-cooking-pan",
      },
    ],
  },
  {
    title: "Places",
    items: [],
  },
  {
    title: "Newsletters",
    items: [],
  },
  {
    title: "Podcasts",
    items: [],
  },
  {
    title: "Blogs",
    items: [],
  },
];

function StuffILikePage() {
  return (
    <Box pt={LayoutConstants.margin.large}>
      <Heading>Stuff I like</Heading>
      {sections.map(({ title, items }) => (
        <Box key={title} maxW={LayoutConstants.textMaxWidth} my={LayoutConstants.margin.small}>
          <Heading size="md" mb={LayoutConstants.margin.paragraph}>
            {title}
          </Heading>
          {items.map(({ text, link }) => (
            <Link href={link} key={text} isExternal>
              <BodyText color="inherit">{text}</BodyText>
            </Link>
          ))}
          <BodyText>(more coming soon)</BodyText>
        </Box>
      ))}
    </Box>
  );
}

StuffILikePage.getLayout = (page) => <Layout title="Stuff I Like">{page}</Layout>;

export default StuffILikePage;

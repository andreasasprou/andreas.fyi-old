import React from "react"
import { Box, Code, Heading, Link, Text } from "@chakra-ui/layout"
import Layout from "layouts/Layout"
import { LayoutConstants } from "utils/constants/client"
import { BodyText, BodyTextWithPopover, Quote } from "thinking/components"

const sections = [
  {
    title: "Software Development Tools/Frameworks",
    items: [],
  },
  {
    title: "Digital Products",
    items: [
      {
        text: "Notion",
        link: "https://notion.so",
      },
      {
        text: "Hey",
        link: "https://hey.com",
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
      {
        text: "Hey",
        link: "https://hey.com",
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
        text: "Hey",
        link: "https://hey.com",
      },
    ],
  },
  {
    title: "Supplements",
    items: [],
  },
]

function StuffILikePage() {
  return (
    <Box py={LayoutConstants.margin.large}>
      <Heading>Stuff I like</Heading>
      {sections.map(({ title, items }) => (
        <Box key={title} maxW={LayoutConstants.textMaxWidth} my={LayoutConstants.margin.small}>
          <Heading size="md" mb={LayoutConstants.margin.paragraph}>
            {title}
          </Heading>
          <Quote></Quote>
        </Box>
      ))}
    </Box>
  )
}

StuffILikePage.getLayout = (page) => <Layout title="Stuff I Like">{page}</Layout>

export default StuffILikePage

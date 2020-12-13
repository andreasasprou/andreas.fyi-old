import React from "react"
import { Box, Text } from "@chakra-ui/layout"
import PageTextWithHover from "../../components/common/PageTextWithHover"

const Content = ({ text }: { text: string }) => (
  <Text fontSize="inherit">
    Every now and then I write in Bear about <strong>{text}</strong>.
    <Box my={8} /> I'm in the process of migrating my personal notes to this digital brain dump.
    Come back here soon to read about my lessons and recommendations regarding {text}.
  </Text>
)

export function DigitalProducts() {
  return (
    <PageTextWithHover
      hoverContent={<Content text="building, designing and scaling digital products" />}
    >
      digital products
    </PageTextWithHover>
  )
}

export function OptimizeHealth() {
  return (
    <PageTextWithHover hoverContent={<Content text="my diet, routines, habits etc" />}>
      optimizing my health
    </PageTextWithHover>
  )
}

export function LifePhilosophies() {
  return (
    <PageTextWithHover hoverContent={<Content text="my life philosophies" />}>
      life philosophies
    </PageTextWithHover>
  )
}

export function Relationships() {
  return (
    <PageTextWithHover
      hoverContent={<Content text="how I navigate relationships and mental health" />}
    >
      build strong relationships
    </PageTextWithHover>
  )
}

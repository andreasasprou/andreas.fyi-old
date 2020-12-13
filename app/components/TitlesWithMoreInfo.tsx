import React from "react"
import { Box, Text } from "@chakra-ui/layout"
import TextWithHover from "./TextWithHover"

const Content = ({ text }: { text: string }) => (
  <Text fontSize="inherit">
    Every now and then I write in Bear about <strong>{text}</strong>.
    <Box my={8} /> I'm in the process of migrating my personal notes to this digital brain dump.
    Come back here soon to read about my lessons and recommendations regarding {text}.
  </Text>
)

export function DigitalProducts() {
  return (
    <TextWithHover
      hoverContent={<Content text="building, designing and scaling digital products" />}
    >
      digital products
    </TextWithHover>
  )
}

export function OptimizeHealth() {
  return (
    <TextWithHover hoverContent={<Content text="my diet, routines, habits etc" />}>
      optimizing my health
    </TextWithHover>
  )
}

export function LifePhilosophies() {
  return (
    <TextWithHover hoverContent={<Content text="my life philosophies" />}>
      life philosophies
    </TextWithHover>
  )
}

export function Relationships() {
  return (
    <TextWithHover hoverContent={<Content text="how I navigate relationships and mental health" />}>
      build strong relationships
    </TextWithHover>
  )
}

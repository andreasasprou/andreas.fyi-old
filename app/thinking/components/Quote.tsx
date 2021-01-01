import React from "react"
import { TextProps } from "@chakra-ui/react"
import { BodyText } from "./BodyText"

interface QuoteProps extends TextProps {}

export function Quote({ ...rest }: QuoteProps) {
  return (
    <BodyText
      fontWeight={400}
      px={4}
      py={3}
      bg="gray.800"
      borderRadius="md"
      fontStyle="italic"
      {...rest}
    />
  )
}

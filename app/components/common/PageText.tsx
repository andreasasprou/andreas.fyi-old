import React from "react"
import { Text, TextProps } from "@chakra-ui/layout"

interface PageTextProps extends TextProps {}

export function PageText({ ...rest }: PageTextProps) {
  return (
    <Text
      fontSize={{
        base: "3xl",
        md: "4xl",
      }}
      {...rest}
    />
  )
}

export function PageTextHighlight({ ...rest }: PageTextProps) {
  return <PageText as="span" color="brand.500" {...rest} />
}

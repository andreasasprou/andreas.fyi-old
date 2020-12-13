import React from "react"
import { Text, TextProps } from "@chakra-ui/layout"

interface HomeTextProps extends TextProps {}

export function HomeText({ ...rest }: HomeTextProps) {
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

import React from "react"
import { Box, TextProps, Text } from "@chakra-ui/layout"
import { Tooltip } from "react-tippy"
import { HomeText } from "./HomeText"

interface TextWithHover extends TextProps {
  hoverContent: React.ReactElement | string
  followCursor?: boolean
}

function TextWithHover({ children, hoverContent, followCursor = true, ...rest }: TextWithHover) {
  return (
    <Tooltip
      followCursor={followCursor}
      arrow={false}
      html={
        <Box bg="#f2aa4cff" maxW={300} p={10}>
          <Text color="black" fontSize="xl">
            {hoverContent}
          </Text>
        </Box>
      }
      hideOnClick={false}
    >
      <HomeText
        backgroundImage="linear-gradient(to right, #f2aa4cff 75%, transparent 75%)"
        backgroundPosition="0 1.04em"
        backgroundRepeat="repeat-x"
        backgroundSize="8px 3px"
        as="span"
        _hover={{
          cursor: "help",
        }}
        {...rest}
      >
        {children}
      </HomeText>
    </Tooltip>
  )
}

export default TextWithHover

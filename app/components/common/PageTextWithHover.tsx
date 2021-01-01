import React from "react"
import { Box, TextProps, Text } from "@chakra-ui/layout"
import { PageText } from "./PageText"
import { Tooltip } from "./Tooltip"

interface PageTextWithHoverProps extends TextProps {
  hoverContent: React.ReactElement | string
  followCursor?: boolean
}

export function PageTextWithHover({
  children,
  hoverContent,
  followCursor = true,
  ...rest
}: PageTextWithHoverProps) {
  return (
    <Tooltip
      followCursor={followCursor}
      arrow={false}
      content={
        <Box bg="#f2aa4cff" maxW={300} p={10}>
          <Text color="black" fontSize="xl">
            {hoverContent}
          </Text>
        </Box>
      }
      hideOnClick={false}
    >
      <PageText
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
      </PageText>
    </Tooltip>
  )
}

export default PageTextWithHover

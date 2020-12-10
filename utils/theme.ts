import { mode } from "@chakra-ui/theme-tools"
import { extendTheme } from "@chakra-ui/react"

const styles = {
  global: (props) => ({
    fontFamily: "body",
    color: mode("gray.800", "whiteAlpha.900")(props),
    bg: mode("white", "gray.800")(props),
    lineHeight: "base",
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
    "html, body, #__next": {
      h: "100%",
      w: "100%",
    },
    body: {
      bg: mode("white", "black")(props),
    },
  }),
}

export const theme = extendTheme({
  styles,
})

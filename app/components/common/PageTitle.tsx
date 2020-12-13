import React from "react"
import { Text, TextProps } from "@chakra-ui/layout"
import { Link } from "@chakra-ui/react"
import { Link as NextLink } from "blitz"
import { ROUTES } from "utils/constants/client"

interface PageTitleProps extends TextProps {}

export function PageTitle({ children, ...rest }: PageTitleProps) {
  return (
    <Text color="orange.300" fontWeight={600} fontSize="xl" {...rest}>
      <NextLink href={ROUTES.Home}>
        <Link>Andreas.FYI</Link>
      </NextLink>{" "}
      / {children}
    </Text>
  )
}

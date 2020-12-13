import { Stack, StackProps } from "@chakra-ui/layout"
import React from "react"
import { LayoutConstants } from "utils/constants/client"

export const PageSection = (props: StackProps) => (
  <Stack maxW="850px" mt={LayoutConstants.margin.large} spacing={6} {...props} />
)

export const PageSubSection = (props: StackProps) => (
  <PageSection mt={LayoutConstants.margin.small} {...props} />
)

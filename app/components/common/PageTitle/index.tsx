import { dynamic } from "@blitzjs/core";
import React from "react";
import { Box } from "@chakra-ui/layout";

export const PageTitle = dynamic(() => import("./PageTitle"), {
  ssr: false,
  loading: () => <Box minH="32px" />,
});

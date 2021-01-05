import React, { ReactNode } from "react";
import { Box, BoxProps, Container, Text } from "@chakra-ui/layout";
import { PageTitle } from "ui/common";
import { NextSeo } from "next-seo";
import { Link } from "@chakra-ui/react";
import { LayoutConstants } from "utils/constants/client";
import { SubscribeCard } from "ui/SubscribeCard";

interface LayoutProps extends BoxProps {
  children: ReactNode;
  title: string;
}

function Layout({ title, children, ...rest }: LayoutProps) {
  return (
    <Box w="100%" h="100%" bg="black" {...rest}>
      <NextSeo title={`${title} - Andreas Asprou`} description="Andreas Asprou." />
      <Container py="90px" maxW="1300px">
        <PageTitle>{title}</PageTitle>
        {children}
        <Text color="orange.300" fontSize="xl" mt={LayoutConstants.margin.large}>
          This website is built using{" "}
          <Link textDecoration="underline" href="https://blitzjs.com/" isExternal>
            Blitz
          </Link>
          ,{" "}
          <Link textDecoration="underline" href="https://chakra-ui.com/" isExternal>
            Charka UI
          </Link>{" "}
          and hosted on{" "}
          <Link textDecoration="underline" href="https://vercel.com/" isExternal>
            Vercel
          </Link>
          .
        </Text>
        <SubscribeCard mt={4} />
      </Container>
    </Box>
  );
}

export default Layout;

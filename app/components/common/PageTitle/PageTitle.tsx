import React from "react";
import { Flex, FlexProps, Text } from "@chakra-ui/layout";
import { Link, Stack, TextProps } from "@chakra-ui/react";
import { Link as NextLink, useRouter } from "blitz";
import { ROUTES } from "utils/constants/client";
import { useIsMobile } from "utils/hooks";
import { NavigationMenu } from "./NavigationMenu";

interface PageTitleProps extends FlexProps {}

const PageTitleText = (props: TextProps) => (
  <Text lineHeight={1.4} color="orange.300" fontSize="xl" {...props} />
);

function MenuLink({
  href,
  children,
  ...rest
}: TextProps & {
  href: string;
  children: TextProps["children"];
}) {
  const router = useRouter();
  const isActive = router.pathname.includes(href);

  return (
    <PageTitleText textDecoration={isActive ? "underline" : "none"} {...rest}>
      <NextLink href={href}>
        <Link>{children}</Link>
      </NextLink>
    </PageTitleText>
  );
}

export function PageTitle({ children, ...rest }: PageTitleProps) {
  return (
    <Flex align="center" {...rest}>
      <PageTitleText fontWeight={600}>
        <NextLink href={ROUTES.Home}>
          <Link>Andreas.FYI</Link>
        </NextLink>{" "}
        / {children}
      </PageTitleText>

      <Flex ml="auto" align="center">
        <Stack
          direction="row"
          spacing={6}
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <MenuLink href={ROUTES.Thinking.RoundUps}>Thinking</MenuLink>
          <MenuLink href={ROUTES.Quantified.Sleep}>Self Quantification</MenuLink>
        </Stack>
        <NavigationMenu ml={6} />
      </Flex>
    </Flex>
  );
}

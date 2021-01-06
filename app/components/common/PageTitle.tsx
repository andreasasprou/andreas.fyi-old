import React from "react";
import { Flex, FlexProps, Text } from "@chakra-ui/layout";
import {
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuItemProps,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import { Link as NextLink, useRouter } from "blitz";
import { ROUTES } from "utils/constants/client";
import { HamburgerIcon } from "chakra-ui/packages/icons/src/Hamburger";

interface PageTitleProps extends FlexProps {}

function MenuItemLink({
  to,
  ...rest
}: {
  to: string;
} & MenuItemProps) {
  const router = useRouter();
  const pathname = router.pathname;

  const isActive = pathname.includes(to);

  return (
    <NextLink href={to}>
      <MenuItem
        color={isActive ? "brand.500" : "whiteAlpha.900"}
        bg={pathname.includes(to) ? "whiteAlpha.100" : "transparent"}
        {...rest}
      />
    </NextLink>
  );
}

export function PageTitle({ children, ...rest }: PageTitleProps) {
  return (
    <Flex align="center" {...rest}>
      <Menu autoSelect={false}>
        <MenuButton mr={4} mt="-2px">
          <Icon fontSize="xl" color="orange.300" as={HamburgerIcon} />
        </MenuButton>
        <Portal>
          <MenuList zIndex={15} position="relative">
            <MenuGroup title="Thinking">
              <MenuItemLink to={ROUTES.Thinking.RoundUps}>Round ups</MenuItemLink>
              <MenuItemLink to={ROUTES.Preferences.Stuff}>Stuff I like</MenuItemLink>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Self-Quantified">
              <MenuItemLink to={ROUTES.Quantified.Sleep}>Sleep</MenuItemLink>
            </MenuGroup>
          </MenuList>
        </Portal>
      </Menu>
      <Text lineHeight={1.4} color="orange.300" fontWeight={600} fontSize="xl">
        <NextLink href={ROUTES.Home}>
          <Link>Andreas.FYI</Link>
        </NextLink>{" "}
        / {children}
      </Text>
    </Flex>
  );
}

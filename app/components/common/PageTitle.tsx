import React from "react";
import { Flex, FlexProps, Text } from "@chakra-ui/layout";
import {
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuButtonProps,
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
import { useIsMobile } from "utils/hooks";

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

function NavMenu({ ...rest }: MenuButtonProps) {
  return (
    <Menu autoSelect={false}>
      <MenuButton
        borderRadius="md"
        p={1}
        w={35}
        h={35}
        display="flex"
        alignItems="center"
        justfiyContent="center"
        _focus={{
          bg: "whiteAlpha.200",
        }}
        mt="-3px"
        {...rest}
      >
        <Icon mt="-1px" fontSize="2xl" color="orange.300" as={HamburgerIcon} />
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
  );
}

export function PageTitle({ children, ...rest }: PageTitleProps) {
  const isMobile = useIsMobile();

  return (
    <Flex align="center" {...rest}>
      {!isMobile && <NavMenu mr={4} />}
      <Text lineHeight={1.4} color="orange.300" fontWeight={600} fontSize="xl">
        <NextLink href={ROUTES.Home}>
          <Link>Andreas.FYI</Link>
        </NextLink>{" "}
        / {children}
      </Text>
      {isMobile && <NavMenu ml="auto" />}
    </Flex>
  );
}

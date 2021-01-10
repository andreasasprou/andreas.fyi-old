import React from 'react';
import { Flex, FlexProps, Text } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react';
import { Link as NextLink } from 'blitz';
import { ROUTES } from 'utils/constants/client';
import { useIsMobile } from 'utils/hooks';
import { NavigationMenu } from './NavigationMenu';

interface PageTitleProps extends FlexProps {}

function PageTitle({ children, ...rest }: PageTitleProps) {
  const isMobile = useIsMobile();

  return (
    <Flex align="center" {...rest}>
      {!isMobile && <NavigationMenu mr={4} />}
      <Text lineHeight={1.4} color="orange.300" fontWeight={600} fontSize="xl">
        <NextLink href={ROUTES.Home}>
          <Link>Andreas.FYI</Link>
        </NextLink>{' '}
        / {children}
      </Text>
      {isMobile && <NavigationMenu ml="auto" />}
    </Flex>
  );
}

export default PageTitle;

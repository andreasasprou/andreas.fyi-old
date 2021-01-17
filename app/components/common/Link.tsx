import React, { Ref } from 'react';
import { Link as CLink, LinkProps } from '@chakra-ui/react';

export const Link = React.forwardRef(function Link(
  { ...rest }: LinkProps,
  ref: Ref<HTMLAnchorElement>,
) {
  return <CLink ref={ref} color="blue.300" {...rest} />;
});

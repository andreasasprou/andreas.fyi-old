import React, { Ref } from 'react';
import { Text, TextProps } from '@chakra-ui/layout';

interface PageTextProps extends TextProps {}

export const PageText = React.forwardRef(function PageText(
  { ...rest }: PageTextProps,
  ref: Ref<HTMLParagraphElement>,
) {
  return (
    <Text
      ref={ref}
      fontSize={{
        base: '3xl',
        md: '4xl',
      }}
      {...rest}
    />
  );
});

export function PageTextHighlight({ ...rest }: PageTextProps) {
  return <PageText as="span" color="brand.500" {...rest} />;
}

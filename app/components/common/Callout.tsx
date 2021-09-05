import { Flex, Heading, HeadingProps, Text, FlexProps } from '@chakra-ui/react';
import React from 'react';

interface CalloutProps extends FlexProps {
  emoji?: string;
  title?: string;
  titleProps?: HeadingProps;
}

export function Callout({
  children,
  emoji = '💡',
  title,
  titleProps,
  ...rest
}: CalloutProps) {
  const emojiText = (
    <Text display="block" ml="-4px" mr="8px" mt="-4px" fontSize="2xl">
      {emoji}
    </Text>
  );

  return (
    <Flex
      borderRadius="md"
      bg="whiteAlpha.200"
      p="16px"
      fontSize="md"
      lineHeight={1.4}
      fontWeight={500}
      direction={title ? 'column' : 'row'}
      {...rest}
    >
      {title ? (
        <Flex align="center" mb={2}>
          {emojiText}
          <Heading size="md" {...titleProps}>
            {title}
          </Heading>
        </Flex>
      ) : (
        emojiText
      )}
      {children}
    </Flex>
  );
}

import React from "react";
import { TextProps, Text } from "@chakra-ui/react";
import { LayoutConstants } from "utils/constants/client";
import { BodyText } from "./BodyText";

interface QuoteProps extends TextProps {
  quotePosition?: "left" | "right";
  name: string;
}

const quoteBase: TextProps = {
  position: "absolute",
  fontFamily: "emoji",
  fontSize: "4em",
  lineHeight: 1,
};

export function Quote({ quotePosition = "left", children, name, ...rest_ }: QuoteProps) {
  const rest: TextProps = {
    ...rest_,
  };

  if (quotePosition === "left") {
    rest._before = {
      ...quoteBase,
      content: '"\\201C"',
      left: -14,
      top: 0,
    };
  } else {
    rest._after = {
      ...quoteBase,
      content: '"\\201D"',
      right: -12,
      bottom: -8,
    };
  }

  return (
    <BodyText
      as="blockquote"
      fontWeight={400}
      px={4}
      py={3}
      bg="whiteAlpha.200"
      borderRadius="md"
      fontStyle="italic"
      position="relative"
      mt={LayoutConstants.margin.paragraph}
      {...rest}
    >
      {children}
      <Text mt={2}> - {name}</Text>
    </BodyText>
  );
}

import React from "react";
import Tippy, { TippyProps } from "@tippyjs/react";
import { followCursor } from "tippy.js";

interface TooltipProps extends TippyProps {}

export function Tooltip({ children, ...rest }: TooltipProps) {
  return (
    <Tippy plugins={[followCursor]} {...rest}>
      {children}
    </Tippy>
  );
}

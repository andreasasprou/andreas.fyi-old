import { mode } from '@chakra-ui/theme-tools';

import { extendTheme, useColorModeValue } from '@chakra-ui/react';
import { MenuStyles } from './component-styles';
import { gray } from './colors';

const styles = {
  global: (props) => ({
    fontFamily: 'body',
    color: mode('gray.800', 'whiteAlpha.900')(props),
    bg: mode('white', 'gray.800')(props),
    lineHeight: 'base',
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
};

export const theme = extendTheme({
  components: {
    Menu: MenuStyles,
    List: {
      baseStyle: {
        container: {
          pl: 5,
        },
      },
    },
  },
  styles,
  colors: {
    brand: {
      500: '#f2aa4cff',
    },
    gray,
  },
  fonts: {
    body:
      '"Silka",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono:
      'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },
});

export const ColorConstants = {
  bg: {
    light: 'white',
    dark: 'black',
  },
  color: {
    light: 'gray.800',
    dark: 'whiteAlpha.900',
  },
};

export function useBgColor() {
  const { light, dark } = ColorConstants.bg;
  return useColorModeValue(light, dark);
}

import {
  defineStyleConfig,
  StyleFunctionProps,
} from '@chakra-ui/react';

export const ButtonStyles = defineStyleConfig({
  baseStyle: {},
  variants: {
    primary: (props: StyleFunctionProps) => ({
      bg: 'transparent',
      border: '2px solid',
      color:
        props.colorMode === 'dark'
          ? 'brand.primary'
          : 'brand.primary',

      borderColor:
        props.colorMode === 'dark'
          ? 'brand.primary'
          : 'brand.primary',
      _hover: {
        bg: 'transparent',
        color: props.colorMode === 'dark' ? 'brand.red' : 'brand.red',
        borderColor:
          props.colorMode === 'dark' ? 'brand.red' : 'brand.red',
      },
    }),
    secondary: (props: StyleFunctionProps) => ({
      border: '2px solid',
      color:
        props.colorMode === 'dark'
          ? 'brand.secondary'
          : 'brand.secondary',
      borderColor:
        props.colorMode === 'dark'
          ? 'brand.secondary'
          : 'brand.secondary',
      _hover: {
        color:
          props.colorMode === 'dark'
            ? 'brand.orange'
            : 'brand.orange',
        borderColor:
          props.colorMode === 'dark'
            ? 'brand.orange'
            : 'brand.orange',
      },
    }),

    tertiary: (props: StyleFunctionProps) => ({
      size: 'xs',
      border: '0px solid',
      color:
        props.colorMode === 'dark'
          ? 'brand.primary'
          : 'brand.primary',
      _hover: {
        color:
          props.colorMode === 'dark'
            ? 'brand.secondary'
            : 'brand.secondary',
        borderColor:
          props.colorMode === 'dark'
            ? 'brand.secondary'
            : 'brand.secondary',
      },
    }),
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
});

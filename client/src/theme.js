import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Adega Serif', sans-serif",
    body: "'Adega Serif', sans-serif",
  },
  components: {
    Input: {
      variants: {
        filled: {
          field: {
            _focus: {
              bg: 'white',
            },
          },
        },
      },
    },
  },
});

export default theme;

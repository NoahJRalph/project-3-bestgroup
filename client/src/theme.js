import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
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
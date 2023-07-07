import './App.css';

import React from 'react'

import { ChakraProvider, Container, Box } from '@chakra-ui/react';

import './App.css';
// import Footer from './components/footer'
import Homepage from './pages/Homepage';

//! to Test stuff import file and <AddFileName /> and add it inside of the Box
// this is a box[container[homepage][AddFileName]]

function App() {
  return (
    <ChakraProvider>
      <Box
        bg={'pink.200'}
        p={'4'}
        minH={'100vh'}>
        <Container
          bg={'teal.400'}
          maxWidth="1200px"
          width={["100%", "80%", "60%"]} margin="auto">
          <Homepage />
          {/*< />  */}
        </Container>
      </Box>
    </ChakraProvider >
  )
}

export default App;


/**========================================================================
 * *                                INFO
 *   
 *? maxWidth 
 *    allows you to set the maximum width that the box can expand to
 * 
 *? width={["100%", "80%", "60%"]}
 *     array of values to make the box responsive to different screen sizes
 * 
 **    <Box maxWidth="1200px" width={["100%", "80%", "60%"]} margin="auto">*    
 *    This box is responsive and has a maximum width!  
 **    </Box
 *     
 *    the box will have a maximum width of 1200px. On small screens, it will 
 *    take up 100% of the container width, on medium screens 80%, and on large 
 *    screens 60%. However, it will never exceed 1200px in width due to the 
 *    maxWidth prop. The margin="auto" centers the box if it does not take up 
 *    the full width of the container.
 *
 *========================================================================**/
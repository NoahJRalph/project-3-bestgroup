// app.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container, Box } from '@chakra-ui/react';
import Homepage from './pages/homepage';
import Dashboard from "./pages/Dashboard";
import NavBar from './components/navbar';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box
          bg="black"
          p="4"
          minH="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Container
            bg="purple.300"
            maxW={{ base: '90%', md: '1400px' }} // Set maxW using CSS media queries
            width="100%" // Set width to 100%
            p={[4, 8]}
            borderRadius="md"
            boxShadow="lg"
            overflow="hidden" // Add overflow property
          >
            <NavBar />
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/" element={<Dashboard />}></Route>
            </Routes>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  );
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
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container, Box } from '@chakra-ui/react';
import Homepage from './pages/homepage';
import Dashboard from './pages/Dashboard';
import NavBar from './components/layouts/navbar';
import theme from './theme';
import './fonts.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Router>
          <Box
            bg="black"
            p="2"
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Container
              bg="transparent"
              bgGradient="radial-gradient(circle, purple.300 0%, purple.800 100%)"
              maxW={{ base: '95%', md: '1400px', lg: '90vw', xl: '80vw' }}
              width="100%"
              p={[6, 2]}
              borderRadius="md"
              boxShadow="lg"
              overflow="hidden"
            >
              <NavBar />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Container>
          </Box>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
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
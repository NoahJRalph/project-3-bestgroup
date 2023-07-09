import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Link as ChakraLink } from '@chakra-ui/react';
import SearchBar from '../components/searchbar';

function NavBar() {
  return (
    <Box
      bg="purple.300"
      border="3px solid black"
      py={2}
      position="fixed"
      bottom={0}
      left={0}
      width="100%"
      zIndex={10}
    >
      <Flex>
        <Box
          bg="black"
          mx={4}
          p={2}
          borderRadius="xl"
          border="1px solid black"
        >
          <ChakraLink as={Link} to="/" color="white">
            Homepage
          </ChakraLink>
        </Box>
        <Box
          bg="black"
          mx={4}
          p={2}
          borderRadius="xl"
          border="1px solid black"
        >
          <ChakraLink as={Link} to="/dashboard" color="white">
            Dashboard
          </ChakraLink>
        </Box>
        <Spacer />
        <SearchBar />
      </Flex>
    </Box>
  );
}

export default NavBar;


    // <nav>

    //   <ul className='navbar-links'>
    //     <li>
    //       <button onClick={() => handleLinkClick('home')} className={activePage === 'home' ? 'active' : ''}>
    //         Home
    //       </button>
    //     </li>
    //     <li>
    //       <button onClick={() => handleLinkClick('topics')} className={activePage === 'topics' ? 'active' : ''}>
    //         Topics
    //       </button>
    //     </li>
    //     <li>
    //       <button onClick={() => handleLinkClick('login')} className={activePage === '' ? 'active' : ''}>
    //         Login
    //       </button>
    //     </li>
    //   </ul>
    // </nav>
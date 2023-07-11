import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, useBreakpointValue, Link as ChakraLink, Icon } from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineDashboard } from 'react-icons/ai';
import SearchBar from '../components/searchbar';
import CreatePostButton from '../components/createPostButton';
import NewPost from './newPost';

function NavBar() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      bg="purple.300"
      border="3px solid black"
      py={1}
      position="fixed"
      bottom={0}
      left={0}
      width="100%"
      zIndex={10}
    >
      <Flex alignItems="center">
        <Box
          bg="white"
          mx={2}
          p={1}
          borderRadius="xl"
          border="3px solid black"
          width={isMobile ? '25%' : 'auto'}
          display="flex"
          alignItems="center"
          justifyContent={isMobile ? 'center' : 'flex-start'}
        >
          {isMobile ? (
            <Icon as={AiOutlineHome} boxSize={4} />
          ) : (
            <ChakraLink as={Link} to="/" color="black">
              Homepage
            </ChakraLink>
          )}
        </Box>
        <Box
          bg="white"
          mx={2}
          p={1}
          borderRadius="xl"
          border="3px solid black"
          width={isMobile ? '25%' : 'auto'}
          display="flex"
          alignItems="center"
          justifyContent={isMobile ? 'center' : 'flex-start'}
        >
          {isMobile ? (
            <Icon as={AiOutlineDashboard} boxSize={4} />
          ) : (
            <ChakraLink as={Link} to="/dashboard" color="black">
              Dashboard
            </ChakraLink>
          )}
        </Box>
        <Spacer />
        <Box
          bg="white"
          mx={2}
          p={1}
          borderRadius="xl"
          border="3px solid black"
          width={isMobile ? '25%' : 'auto'}
          display="flex"
          alignItems="center"
          justifyContent={isMobile ? 'center' : 'flex-start'}
        >
          <NewPost />
        </Box>
        <Box
          bg="white"
          mx={2}
          p={1}
          borderRadius="xl"
          border="3px solid black"
          width={isMobile ? '25%' : 'auto'}
          display="flex"
          alignItems="center"
          justifyContent={isMobile ? 'center' : 'flex-start'}
        >
          <SearchBar />
        </Box>
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
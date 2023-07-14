import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  Spacer,
  useBreakpointValue,
  Link as ChakraLink,
  Icon,
} from '@chakra-ui/react';
import { AiOutlineHome, AiOutlineDashboard } from 'react-icons/ai';
import SearchBar from './searchbar';
import NewPost from '../postRelated/newPost';
import UserProfile from '../user/userProfile';

const NavBar = ({ username }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <Box
      bgGradient="linear-gradient(to bottom, purple.300, purple.500)"
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
          bgGradient="linear-gradient(to bottom, white, gray.400)"
          mx={2}
          p={isMobile ? 3 : 3}
          borderRadius="xl"
          border="3px solid black"
          width={isMobile ? '25%' : 'auto'}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {isMobile ? (
            <Link to="/" style={{ color: isActive('/') ? 'purple.600' : 'black' }}>
              <Icon as={AiOutlineHome} boxSize={5} />
            </Link>
          ) : (
            <ChakraLink
              as={Link}
              to="/"
              color={isActive('/') ? 'purple.600' : 'black'}
            >
              Homepage
            </ChakraLink>
          )}
        </Box>
        <Box
          bgGradient="linear-gradient(to bottom, white, gray.400)"
          mx={2}
          p={isMobile ? 3 : 3}
          borderRadius="xl"
          border="3px solid black"
          width={isMobile ? '25%' : 'auto'}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {isMobile ? (
            <Link
              to="/dashboard"
              style={{ color: isActive('/dashboard') ? 'purple.600' : 'black' }}
            >
              <Icon as={AiOutlineDashboard} boxSize={5} />
            </Link>
          ) : (
            <ChakraLink
              as={Link}
              to="/dashboard"
              color={isActive('/dashboard') ? 'purple.600' : 'black'}
            >
              Dashboard
            </ChakraLink>
          )}
        </Box>




        <Box bgGradient="linear-gradient(to bottom, white, gray.400)"
          mx={2}
          p={isMobile ? 3 : 3}
          borderRadius="xl"
          border="3px solid black"
          width={isMobile ? '25%' : 'auto'}
          display="flex"
          alignItems="center"
          justifyContent="center">
          {isMobile ? (
            <Link
              to={`/userProfile/${username}`}
              style={{ color: isActive(`/userProfile/${username}`) ? 'purple.600' : 'black' }}
            >
              <Icon as={AiOutlineDashboard} boxSize={5} />
            </Link>
          ) : (
            <ChakraLink
              as={Link}
              to={`/userProfile/${username}`}
              color={isActive(`/userProfile/${username}`) ? 'purple.600' : 'black'}
            >
              UserProfile
            </ChakraLink>
          )}
        </Box>


        {!isMobile && <Spacer />}
        <Box
          bgGradient="linear-gradient(to bottom, white, gray.400)"
          mx={2}
          p={isMobile ? 2 : 2}
          borderRadius="xl"
          border="3px solid black"
          width={isMobile ? '25%' : 'auto'}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <NewPost />
        </Box>
        <Box
          bgGradient="linear-gradient(to bottom, white, gray.400)"
          mx={2}
          p={isMobile ? 2 : 2}
          borderRadius="xl"
          border="3px solid black"
          width={isMobile ? '25%' : 'auto'}
          display="flex"
          alignItems="center"
          justifyContent="center"
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
import React from 'react';
import {
  Flex,
  Box,
  Image,
  Heading,
  Text,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Spacer,
  PopoverArrow,
  PopoverCloseButton,
  useMediaQuery,
} from '@chakra-ui/react';
import Brain from '../../assets/brain.png';
import Auth from '../../utils/auth';

function PageHeader() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }
  const currentPage = 'Dashboard'; // Placeholder for the current page


  const [isLargerThanMobile] = useMediaQuery('(min-width: 480px)');

  return (
    <Flex
      bgGradient="linear-gradient(to bottom, purple.300, purple.500)"
      py={1}
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex={10}
      border="3px solid black"
      justify="center"
    >
      <Spacer />
      <Box
        bgGradient="linear-gradient(to bottom, white, gray.400)"
        px={2}
        p={2}
        border="3px solid black"
        borderRadius="xl"
        fontSize={{ base: 'md', sm: 'lg' }}
      >
        <Flex alignItems="center" justify="center">
          <Image
            boxSize="30px"
            objectFit="cover"
            maxW={{ base: '100%', sm: '180px' }}
            src={Brain}
            alt="rendering of a human brain"
            borderRadius="lg"
          />
          <Heading ml={2} color="black" fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}>
            Brainsync
          </Heading>
          {Auth.loggedIn() ? (
            <Text ml={2} color="gray.500" fontSize={{ base: 'sm', sm: 'md' }}>
              {Auth.getProfile().data.username}
            </Text>
          ) : ('')}
        </Flex>
      </Box>
      <Spacer />
      {Auth.loggedIn() ? (
        <Flex align="center" position="relative">
          <Box position="absolute" right="0" pr={2}>

            {isLargerThanMobile ? (
              <Popover placement="bottom-end">
                <PopoverTrigger>

                  <Box pr={2}> {/* Add padding-right */}
                    <Avatar name={Auth.getProfile().data.username} src={Auth.getProfile().data.avatar} size="md" cursor="pointer" />
                  </Box>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    <button className='logout-button' onClick={logout}>
                      Logout
                    </button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ) : (
              <Popover placement="bottom-end">
                <PopoverTrigger>
                  <Avatar name={Auth.getProfile().data.username} src={Auth.getProfile().data.avatar} size="md" cursor="pointer" />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    <button className='logout-button' onClick={logout}>
                      Logout
                    </button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            )}
          </Box>
        </Flex>) : ('')}
    </Flex>
  );
}

export default PageHeader;
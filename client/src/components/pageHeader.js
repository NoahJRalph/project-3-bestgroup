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
import Brain from '../assets/brain.png';
import Logout from './logout';

function PageHeader() {
  const currentUser = {
    name: 'John Doe',
    avatar: 'https://example.com/avatar.jpg',
  };

  const currentPage = 'Dashboard'; // Placeholder for the current page

  const [isLargerThanMobile] = useMediaQuery('(min-width: 480px)');

  return (
    <Flex
      bg="purple.300"
      py={1}
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex={10}
      border="3px solid black"
      justify="center" // Center the content horizontally
    >
      <Spacer />
      <Box
        bg="white"
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
          <Heading ml={2} color="black" fontSize={{ base: 'md', sm: 'lg' }}>
            Brainsync
          </Heading>
          <Text ml={2} color="gray.500" fontSize={{ base: 'sm', sm: 'md' }}>
            {currentPage}
          </Text>
        </Flex>
      </Box>
      <Spacer />
      <Flex align="center">
        {isLargerThanMobile ? (
          <>
            <Popover placement="bottom-end">
              <PopoverTrigger>
                <Box pr={2}> {/* Add padding-right */}
                  <Avatar name={currentUser.name} src={currentUser.avatar} size="md" cursor="pointer" />
                </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Logout />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </>
        ) : (
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Avatar name={currentUser.name} src={currentUser.avatar} size="md" cursor="pointer" />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Logout />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Flex>
    </Flex>
  );
}

export default PageHeader;



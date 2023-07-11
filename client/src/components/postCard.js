import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  useBreakpointValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  IconButton,
  Button,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { Avatar, Heading, Text } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiChat, BiShare } from 'react-icons/bi';

function PostCard() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Card
      w={isMobile ? '100%' : { base: '100%', md: '85%', lg: '1000px' }}
      mx="auto"
      p={isMobile ? 4 : 4}
      my={isMobile ? 1 : 4}
    >
      <CardHeader>
        <Flex justify="space-between" align="center">
          <Flex gap="4" alignItems="center">
            <Box>
              <Heading size="sm">username</Heading>
              <Text>timestamp</Text>
            </Box>
          </Flex>
          <Popover>
            <PopoverTrigger>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDotsVertical />}
              />
            </PopoverTrigger>
            <PopoverContent maxW="xs">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                <Flex justifyContent="center" alignItems="center" flexDirection="column">
                  <Button variant="ghost" mb={2}>
                    Edit
                  </Button>
                  <Button variant="ghost">Delete</Button>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </CardHeader>
      <CardBody py={1}>
        <Heading fontSize="md">Post Title</Heading>
        <Text mt={2} mb={14}>
          (postBody text goes here)
        </Text>
      </CardBody>
      <CardFooter>
        <Box
          bg="gray.200"
          p={0}
          width="100%"
          position="absolute"
          bottom={0}
          left={0}
          borderRadius="xl"
          borderTopRadius={0}
        >
          {isMobile ? (
            <Flex justifyContent="space-between" alignItems="center" px={4}>
              <IconButton variant="ghost" aria-label="Comment" icon={<BiChat />} />
              <IconButton variant="ghost" aria-label="Share" icon={<BiShare />} />
            </Flex>
          ) : (
            <Flex justifyContent="center" alignItems="center">
              <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                Comment
              </Button>
              <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                Share
              </Button>
            </Flex>
          )}
        </Box>
      </CardFooter>
    </Card>
  );
}

export default PostCard;


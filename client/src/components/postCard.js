import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Box, useBreakpointValue, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow, PopoverCloseButton, IconButton, Button, HStack, Flex } from '@chakra-ui/react';
import { Avatar, Heading, Text } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiChat, BiShare } from 'react-icons/bi';

function PostCard() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Card maxW="600px"> {/* Increase the maxW value for a wider card */}
      <CardHeader>
        <Flex justify="space-between" align="center">
          <Flex gap="4" alignItems="center">
            <Avatar name="(name of user)" src="(link to user image)" />

            <Box>
              <Heading size="sm">username goes here</Heading>
              <Text>turn this into a timestamp</Text>
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
                  <Button variant="ghost" mb={2}>Edit</Button>
                  <Button variant="ghost">Delete</Button>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </CardHeader>
      <CardBody>
        <Heading>Post Title</Heading>
        <Text>(postBody text goes here)</Text>
      </CardBody>

      <CardFooter
        justify="center"
        flexWrap="wrap"
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        {isMobile ? (
          <HStack spacing={4}>
            <IconButton variant="ghost" aria-label="Comment" icon={<BiChat />} />
            <IconButton variant="ghost" aria-label="Share" icon={<BiShare />} />
          </HStack>
        ) : (
          <>
            <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
              Comment
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
              Share
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}

export default PostCard;









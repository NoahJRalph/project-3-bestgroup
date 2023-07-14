import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Button,
  useBreakpointValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  IconButton,
  Flex,
  useDisclosure
} from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiChat, BiShare } from 'react-icons/bi';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import NewComment from '../comments/newComment';

const PostCard = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, error, data } = useQuery(QUERY_POSTS);

  const [showPopup, setShowPopup] = useState(false);

  if (loading) return <h3>Loading posts...</h3>;
  if (error) return <h3>Error! {error.message}</h3>;

  const posts = data.posts;
  if (!posts.length) {
    return <h3>Be the first to post</h3>;
  }

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    posts.map(post => (
      <Box key={post._id}>
        <Card
          w={isMobile ? '100%' : { base: '100%', md: '85%', lg: '100%' }}
          mx="auto"
          p={isMobile ? 3 : 4}
          my={isMobile ? 1 : 4}
        >
          <CardHeader>
            <Flex justify="space-between" align="center">
              <Flex gap="2" alignItems="center">
                <Box>
                  <Heading size="md" fontWeight="bold">{post.postAuthor}</Heading>
                  <Text>{post.createdAt}</Text>
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
                      <Button variant="ghost">Ignore</Button>
                    </Flex>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </CardHeader>
          <CardBody py={1}>
            <Heading style={{ fontSize: '7xl' }} fontWeight="bold">{post.postTitle}</Heading>
            <Text mt={2} mb={14}>
              {post.postText}
            </Text>
          </CardBody>
          <CardFooter>
            <Box
              bg="gray.400"
              p={0}
              width="100%"
              position="absolute"
              bottom={0}
              left={0}
              borderTopRadius={0}
            >
              {isMobile ? (
                <Flex justifyContent="space-evenly" alignItems="center" px={4}>
                  <IconButton isOpen={isOpen} variant="ghost" aria-label="Comment" icon={<BiChat />} w="40%" />
                  <IconButton variant="ghost" aria-label="Share" icon={<BiShare />} w="40%" onClick={handleShareClick} />
                </Flex>
              ) : (
                <Flex justifyContent="center" alignItems="center">
                  <Box flex="1">
                    <NewComment postId={post._id} />
                  </Box>
                  <Box flex="1" ml={2}>
                    <Button variant="ghost" leftIcon={<BiShare />} w="100%" onClick={handleShareClick}>
                      {isMobile ? null : 'Share'}
                    </Button>
                  </Box>
                </Flex>
              )}
            </Box>
          </CardFooter>
        </Card>
        {showPopup && (
          <Box
            position="fixed"
            bottom="20px"
            right="20px"
            p={2}
            bg="gray.800"
            color="white"
            borderRadius="md"
            zIndex="9999"
          >
            Copied to clipboard!
          </Box>
        )}
      </Box>
    ))
  )
}

export default PostCard;

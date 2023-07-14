import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Box, Text, Heading, Avatar, Button } from '@chakra-ui/react';

import { QUERY_ME } from '../../utils/queries';
import { REMOVE_POST } from '../../utils/mutations';

import NavBar from '../layouts/navbar';

const UserProfile = () => {
  // Fetch the user's profile data from the server
  const { loading, data } = useQuery(QUERY_ME);
  const [removePost] = useMutation(REMOVE_POST, {
    refetchQueries: [QUERY_ME],
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  // Check if the data object is undefined
  if (!data || !data.me) {
    return <Text>Error: User profile data not found.</Text>;
  }

  // Extract user data from the response
  const { me } = data;

  const handleDeletePost = async (postId) => {
    try {
      await removePost({ variables: { postId } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box p={4}>
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar size="xl" name={me.username} />
        <Box ml={4}>
          <Heading size="lg">{me.username}</Heading>
        </Box>
      </Box>

      {me.posts.map((post) => (
        <Box
          key={post._id}
          bg="gray.400"
          p={4}
          borderRadius="xl"
          boxShadow="0 0 7px 3px white"
          my={2} // Adjust the vertical padding here
		  position="relative" // Add position relative
		  zIndex="1" // Set a higher z-index to bring it forward
        >
          <Heading size="md">{post.postTitle}</Heading>
          <Text>{post.postText}</Text>
          <Text>Author: {post.postAuthor}</Text>
          <Text>Created At: {post.createdAt}</Text>
          <Button onClick={() => handleDeletePost(post._id)}>
            Delete Post
          </Button>
        </Box>
      ))}

      <NavBar />
    </Box>
  );
};

export default UserProfile;


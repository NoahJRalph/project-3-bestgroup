import React from 'react';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import PageHeader from '../layouts/pageHeader';
import NavBar from '../layouts/navbar';
import SinglePostCard from './singlePostCard';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_POST } from '../../utils/queries';

const CommentBox = ({ comment }) => {
  return (
    <Box
      bgGradient="linear(to-b, white, gray.200)"
      p={4}
      borderRadius="xl"
      boxShadow="sm"
    >
      <Box>
        <Text>{comment.commentText}</Text>
      </Box>
    </Box>
  );
};

const CommentContainer = ({ comments }) => {
	return (
	  <Box
		bg="gray.400"
		borderRadius="xl"
		p={4}
		position="relative" // Add position relative
		zIndex="1" // Set a higher z-index to bring it forward
	  >
		{comments.map((comment, index) => (
		  <Box key={comment._id} my={index !== 0 ? 2 : 0}>
			<CommentBox comment={comment} />
		  </Box>
		))}
	  </Box>
	);
  };

function SinglePost() {
  const { postId } = useParams(); // Get post ID from URL params
  const { loading, error, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: postId },
  });
  const post = data?.post || {};
  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <Box>
      <PageHeader />
      <Box mt={16} mb={16} mx="auto" maxW="900px">
        <VStack spacing={4} align="stretch">
          <SinglePostCard post={post} />
          <CommentContainer comments={post.comments} />
        </VStack>
      </Box>
      <NavBar />
    </Box>
  );
}

export default SinglePost;
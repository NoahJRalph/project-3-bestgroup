import React from 'react';
import { Divider, Box, Flex, Card, Stack, Text, VStack } from '@chakra-ui/react';
import PageHeader from '../layouts/pageHeader';
import SinglePostCard from './singlePostCard'
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_POST } from '../../utils/queries';

function SinglePost() {
	const { postId } = useParams();  // Get post ID from URL params
	const { loading, error, data } = useQuery(QUERY_SINGLE_POST, {
		variables: { postId: postId }
	});
	const post = data?.post || {}
	if (loading) return <p>Loading post...</p>;
	if (error) return <p>Error! {error.message}</p>;


	return (

		<Box>
			<PageHeader />
			<Box mt={16} mb={16}>
				<Flex justify="center">
					<VStack>
						<SinglePostCard post={post} />
						<Card p={4} m={2} border='solid'>
							{post.comments.map((comment) => (
								<Stack spacing='4'>

									<Box>
										<Text key={comment._id}>{comment.commentText}</Text>
									</Box>
									<Divider />
								</Stack>
							))}

						</Card>
					</VStack>
				</Flex>
			</Box>
		</Box>
	);
}

export default SinglePost;
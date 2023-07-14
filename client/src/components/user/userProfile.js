import { useQuery } from '@apollo/client';
import { Box, Text, Heading, Avatar, Button } from '@chakra-ui/react';

import { QUERY_ME } from '../../utils/queries';
import { useMutation } from '@apollo/client';
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

	const handleDeletePost = async postId => {
		try {
			await removePost({ variables: { postId } });
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<Box p={4}>
			<Box display="flex" alignItems="center" mb={4}>
				<Avatar size="xl" name={me.username} />
				<Box ml={4}>
					<Heading size="lg">{me.username}</Heading>

				</Box>
			</Box>


			<Box mb={4}>
				<Heading size="md">Posts</Heading>
				<Text>Post Count: {me.posts.length}</Text>
				<ul>
					{me.posts.map((post) => (
						<li key={post._id}>
							<Text>{post.postTitle}</Text>
							<Text>{post.postText}</Text>
							<Text>Author: {post.postAuthor}</Text>
							<Text>Created At: {post.createdAt}</Text>
							<Button onClick={() => handleDeletePost(post._id)}>Delete Post</Button>
						</li>
					))}
				</ul>
			</Box>

			<NavBar />
		</Box>
	);
};

export default UserProfile;

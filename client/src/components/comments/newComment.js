import React, { useState } from 'react';
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Textarea,
	useBreakpointValue,
	Box,
	Center,
	Flex
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';
import { QUERY_SINGLE_POST } from '../../utils/queries';
import { BiChat } from 'react-icons/bi';
import Auth from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

const NewComment = ({ postId }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const isMobile = useBreakpointValue({ base: true, md: false });
	const navigate = useNavigate();

	const [formState, setFormState] = useState({
		commentText: '',
	});
	const [addComment, { error }] = useMutation(ADD_COMMENT, {
		update(cache, { data: { addComment } }) {
			const data = cache.readQuery({ query: QUERY_SINGLE_POST, variables: { postId } });

			// make sure to add checks for data and data.post 
			// to avoid errors when these are not available
			if (data && data.post) {
				// get the existing comments from the post
				let comments = data.post.comments;

				// append the new comment to them
				let newComments = [...comments, addComment.comments[0]];

				// write the new comments to the cache
				cache.writeQuery({
					query: QUERY_SINGLE_POST,
					variables: { postId },
					data: {
						...data,
						post: {
							...data.post,
							comments: newComments,
						},
					},
				});
			}
		}

	});


	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await addComment({
				variables: {
					...formState,
					postId,
					postAuthor: Auth.getProfile().data.username,
				},
			});

			setFormState({
				commentText: '',
			});
			navigate(`/singlePost/${postId}`);
		} catch (err) {
			console.error(err);
		} finally {
			onClose();
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	return (
		<Box>
			<Button
				onClick={onOpen}
				variant="ghost"
				color="black"
				justifyContent="center"
				textAlign="center"
				width="100%"
			>
				<Flex justifyContent="center" alignItems="center">
					<Center boxSize={isMobile ? 6 : undefined}>
						<BiChat />
					</Center>
					{!isMobile && <span style={{ marginLeft: '0.5rem' }}>Comment</span>}
				</Flex>
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>New Comment</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Textarea
							name="commentText"
							value={formState.commentText}
							onChange={handleChange}
							placeholder="Enter your comment..."
							fontSize="sm"
							size="sm"
							resize="none"
							borderRadius="md"
						/>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost" onClick={handleFormSubmit}>
							Submit
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default NewComment;
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
	Center
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';
import { QUERY_SINGLE_POST } from '../../utils/queries';
import { RiAddLine } from 'react-icons/ri';

import { useNavigate } from 'react-router-dom'

const NewComment = ({ postId }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const isMobile = useBreakpointValue({ base: true, md: false });
	const navigate = useNavigate();

	const [formState, setFormState] = useState({
		commentText: '',
	});
	const [addComment, { error }] = useMutation(ADD_COMMENT, {
		refetchQueries: [{ query: QUERY_SINGLE_POST, variables: { postId } }],
	});


	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			await addComment({
				variables: {
					...formState,
					postId
				},
			});

			setFormState({
				commentText: '',
			});
			onClose();
			// navigate('/singlePost');
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		})
	};

	return (
		<Box>
			<Button
				onClick={onOpen}
				variant="ghost"
				color="black"
				leftIcon={
					isMobile ? (
						<Center boxSize={6} >
							<RiAddLine />
						</Center>
					) : null
				}
				justifyContent={isMobile ? 'center' : 'flex-start'}
				textAlign={isMobile ? 'center' : 'left'}
				width={isMobile ? '100%' : undefined}
			>
				{isMobile ? null : 'Add Comment'}
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>New Comment</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Textarea
							name='commentText'
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

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
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT, QUERY_SINGLE_POST } from '../../utils/queries';
import { RiAddLine } from 'react-icons/ri';

const NewComment = ({ postId }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [commentText, setCommentText] = useState('');
	const [addComment, { error }] = useMutation(ADD_COMMENT, {
		refetchQueries: [{ query: QUERY_SINGLE_POST, variables: { postId } }],
	});
	const isMobile = useBreakpointValue({ base: true, md: false });

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			await addComment({
				variables: {
					postId,
					commentText,
				},
			});

			setCommentText('');
			onClose();
		} catch (err) {
			console.error(err);
		}
	};

	const handleTextChange = (e) => {
		const inputValue = e.target.value;
		setCommentText(inputValue);
	};

	return (
		<Box>
			<Button
				onClick={onOpen}
				variant="ghost"
				color="black"
				leftIcon={isMobile ? <RiAddLine boxSize={6} /> : null}
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
							value={commentText}
							onChange={handleTextChange}
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

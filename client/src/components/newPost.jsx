import React, { useState } from 'react'
import { 
	Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, 
	ModalBody, ModalFooter, Text, useDisclosure, Textarea, Box, Input } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { ADD_POST } from '../utils/mutations'
import Auth from '../utils/auth';

const NewPost = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	let [postTitle, setPostTitle] = useState('')
	let [postText, setPostText] = useState('')
  const [characterCount, setCharacterCount] = useState(0)
  const [addPost, { error }] = useMutation(ADD_POST)

  const handleFormSubmit = async (event) => {
		event.preventDefault();
	
		try {
			const { data } = await addPost({
				variables: {
					postTitle,
					postText,
					postAuthor: Auth.getProfile().data.username, 
				},
			})
	
			setPostTitle('')
			setPostText('')
			onClose() // Close the modal after successful post creation
		} catch (err) {
			console.error(err);
		}
	}
	

  const handleTitleChange = (e) => {
    let inputValue = e.target.value
    setPostTitle(inputValue)
  }

  const handleTextChange = (e) => {
    let inputValue = e.target.value
    if (inputValue.length <= 280) {
      setPostText(inputValue)
      setCharacterCount(inputValue.length)
    }
  }

	return (
		<Box>
			<Button onClick={onOpen}>Create Post</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>New Post</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input 
						fontSize='sm'
						placeholder='Title'
						value={postTitle}
						onChange={handleTitleChange}/>
						<Textarea 
						value={postText} 
						onChange={handleTextChange} 
						placeholder='Text... '
						fontSize='sm'
						size='sm'
						resize={'none'}
						borderRadius={'md'}
						/>
						<Text mb='4px' fontSize='xs'>Character Count: {characterCount}/280</Text>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant='ghost' onClick={handleFormSubmit}>Submit</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default NewPost

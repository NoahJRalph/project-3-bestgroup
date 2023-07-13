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
  Input,
  Link,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { RiAddLine } from 'react-icons/ri';

import Auth from '../../utils/auth';

const NewPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('things happen')
    try {
      const fish = Auth.getProfile().data.username
      console.log({ postText, postTitle, fish })
      const { data } = await addPost({
        variables: {
          postTitle,
          postText,
          postAuthor: Auth.getProfile().data.username,
        },

      });
      console.log('hey ')
      setPostTitle('');
      setPostText('');
      onClose();
      // Close the modal after successful post creation
    } catch (err) {
      console.error(err);
    }
  };

  const handleTitleChange = (e) => {
    let inputValue = e.target.value;
    setPostTitle(inputValue);
  };

  const handleTextChange = (e) => {
    let inputValue = e.target.value;
    setPostText(inputValue);
  };

  return (
    <Box>
      {Auth.loggedIn() ? (
        <>
          <Button
            onClick={onOpen}
            variant="ghost"
            color="black"
            leftIcon={isMobile ? <RiAddLine boxSize={6} /> : null} // Increase boxSize for mobile
            justifyContent={isMobile ? 'center' : 'flex-start'}
            textAlign={isMobile ? 'center' : 'left'}
            width={isMobile ? '100%' : undefined}
          >
            {isMobile ? null : 'Create Post'}
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>New Post</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  fontSize="sm"
                  placeholder="Title"
                  value={postTitle}
                  onChange={handleTitleChange}
                />
                <Textarea
                  value={postText}
                  onChange={handleTextChange}
                  placeholder="Text... "
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
        </>
      ) : (
        <p>
          <Link to="/homepage">Please login</Link>
        </p>
      )}
    </Box>
  );
};

export default NewPost;

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
  Center,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS } from '../../utils/queries';
import { RiAddLine } from 'react-icons/ri';

import Auth from '../../utils/auth';

const NewPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [formState, setFormState] = useState({
    postTitle: '',
    postText: '',
  });

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      const data = cache.readQuery({ query: QUERY_POSTS });
      cache.writeQuery({
        query: QUERY_POSTS,
        data: {
          ...data,
          posts: [addPost, ...data.posts],
        },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addPost({
        variables: {
          ...formState,
          postAuthor: Auth.getProfile().data.username,
        },

      });
      console.log('hey ')
      setFormState({
        postText: '',
        postTitle: ''
      });
      onClose();
      // Close the modal after successful post creation
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
      {Auth.loggedIn() ? (
        <>
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
            } // Increase boxSize for mobile
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
                  name='postTitle'
                  fontSize="sm"
                  placeholder="Title"
                  value={formState.postTitle}
                  onChange={handleChange}
                />
                <Textarea
                  name='postText'
                  value={formState.postText}
                  onChange={handleChange}
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

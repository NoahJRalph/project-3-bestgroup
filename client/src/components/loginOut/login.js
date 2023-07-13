import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input, Stack, InputGroup, InputLeftElement
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'

import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../utils/mutations'
import Auth from '../../utils/auth'


const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = async (event) => {
    const { name, value } = event.target
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault()

    try {

      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      console.log('Token set in local storage:', data.login.token);
      setIsLoggedIn(true);

    } catch (e) {
      console.error(e)
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    })
  }


  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            {isLoggedIn ? (
              <p>you are logged in and should of bee redirected</p>
            ) : (

              <form onSubmit={handleFormSubmit}>
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <EmailIcon color='black' />
                    </InputLeftElement>
                    <Input
                      type='email'
                      placeholder='Email'
                      name='email'
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <LockIcon color='black' />
                    </InputLeftElement>
                    <Input
                      type='password'
                      placeholder='Password'
                      name='password'
                      value={formState.password}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Stack>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}


          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleFormSubmit}>
              Login
            </Button>
            <Button variant='ghost' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginModal;

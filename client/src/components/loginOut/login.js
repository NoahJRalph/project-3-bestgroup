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
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../utils/mutations'
import Auth from '../../utils/auth'
import { useNavigate } from 'react-router-dom';

function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  // update state based on form input changes
  const handleChange = async (event) => {
    const { name, value } = event.target
    console.log('change happened')
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    console.log('hi')
    try {
      const { data } = await login({
        variables: { ...formState },
      })
      console.log({ data })
      Auth.login(data.login.token)
    } catch (e) {
      console.error(e)
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    })
    onClose()
    navigate('/dashboard')
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

            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
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

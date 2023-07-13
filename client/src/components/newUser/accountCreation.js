import React, { useState } from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure, Input, 
	Stack, 
	InputGroup, 
	InputLeftElement
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { FaUserAlt } from 'react-icons/fa';
import { useMutation } from '@apollo/client'
import { ADD_NEW_USER } from '../../utils/mutations'
import Auth from '../utils/auth';






function CreateUserModal() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [formState, setFormState] = useState({
		username: '',
		email: '',
		password: '',
	  });
	  const [addUser, { error, data }] = useMutation(ADD_NEW_USER);

	
	  const handleChange = (event) => {
		const { name, value } = event.target;
	
		setFormState({
		  ...formState,
		  [name]: value,
		});
	  };
	
	  const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(formState);
	
		try {
		  const { data } = await addUser({
			variables: { ...formState },
		  });
	
		  Auth.login(data.addUser.token);
		} catch (e) {
		  console.error(e);
		}
	  };
	
			
	
			


	return (
		<>
			<Button onClick={onOpen}>Create Account</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Account Creation</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
					<form onSubmit={handleFormSubmit}>
     					 <Stack spacing={4}>
       					 <InputGroup>
  					        <InputLeftElement pointerEvents='none'>
  					          <FaUserAlt color='gray.300' size={16} />
  					        </InputLeftElement>
  					        <Input type='text' placeholder='Username' name='username' onChange={handleChange} />
  					      </InputGroup>

  					      <InputGroup>
  					        <InputLeftElement pointerEvents='none'>
  					          <EmailIcon color='black' />
  					        </InputLeftElement>
  					        <Input type='email' placeholder='Email' name='email' onChange={handleChange}/>
  					      </InputGroup>

  					      <InputGroup>
  					        <InputLeftElement pointerEvents='none'>
  					          <LockIcon color='black' />
  					        </InputLeftElement>
  					        <Input type='password' placeholder='Password' name='password' onChange={handleChange} />
  					      </InputGroup>
  					    </Stack>
   					 </form>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							Create
						</Button>
						<Button variant='ghost' onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
export default CreateUserModal;

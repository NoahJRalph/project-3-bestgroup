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






function CreateUserModal() {
	const { isOpen, data, onOpen, onClose } = useDisclosure()
	
		    let [username, setUsername] = useState('');
		    let [email, setEmail] = useState('');
		    let [password, setPassword] = useState('');
		    const [addUser, { error, data }] = useMutation(ADD_NEW_USER);
	
		    const handleFormSubmit = async (event) => {
		      event.preventDefault();
		  
		      try {
		        const { data } = await addUser({
		          variables: {
		            username,
		            email,
		            password,
		          },
		        });
		        setUsername('');
		        setEmail('');
		        setPassword('');
		      } catch (err){
		        console.log(err);
		      }
		    };
		  
		    const handleUsernameChange = (e) => {
		      let inputValue = e.target.value;
		      setUsername(inputValue);
			  console.log('Username', inputValue);
		    };
		  
		    const handleEmailChange = (e) => {
		      let inputValue = e.target.value;
		      setEmail(inputValue);
			  console.log('Email', inputValue);
		    };
		  
		    const handlePasswordChange = (e) => {
		      let inputValue = e.target.value;
		      setPassword(inputValue);
			  console.log('Password', inputValue);
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
  					        <Input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
  					      </InputGroup>

  					      <InputGroup>
  					        <InputLeftElement pointerEvents='none'>
  					          <EmailIcon color='black' />
  					        </InputLeftElement>
  					        <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
  					      </InputGroup>

  					      <InputGroup>
  					        <InputLeftElement pointerEvents='none'>
  					          <LockIcon color='black' />
  					        </InputLeftElement>
  					        <Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
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

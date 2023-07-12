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
	const { isOpen, onOpen, onClose } = useDisclosure()
	
		    let [username, setUsername] = useState('');
		    let [email, setEmail] = useState('');
		    let [password, setPassword] = useState('');
		    const [addUser, { error }] = useMutation(ADD_NEW_USER);
	
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
		    };
		  
		    const handleEmailChange = (e) => {
		      let inputValue = e.target.value;
		      setEmail(inputValue);
		    };
		  
		    const handlePasswordChange = (e) => {
		      let inputValue = e.target.value;
		      setPassword(inputValue);
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
					<form onSubmit={[handleFormSubmit, console.log(data)]}>
     					 <Stack spacing={4}>
       					 <InputGroup>
  					        <InputLeftElement pointerEvents='none'>
  					          <FaUserAlt color='gray.300' size={16} />
  					        </InputLeftElement>
  					        <Input type='text' placeholder='Username' onChange={handleUsernameChange}/>
  					      </InputGroup>

  					      <InputGroup>
  					        <InputLeftElement pointerEvents='none'>
  					          <EmailIcon color='black' />
  					        </InputLeftElement>
  					        <Input type='email' placeholder='Email' onChange={handleEmailChange}/>
  					      </InputGroup>

  					      <InputGroup>
  					        <InputLeftElement pointerEvents='none'>
  					          <LockIcon color='black' />
  					        </InputLeftElement>
  					        <Input type='password' placeholder='Password' onChange={handlePasswordChange} />
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
export default CreateUserModal

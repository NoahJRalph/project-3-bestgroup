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
} from '@chakra-ui/react';
import Form from './accountCreationForm';
import { useMutation } from '@apollo/client';
import { ADD_NEW_USER } from '../utils/mutations';



// functionality for creating a new user
const formHandler = async (event) => {
	event.preventDefault();
	const newUsername = event.target.elements.newUsername.value;
	const newEmail = event.target.elements.newEmail.value;
	const newPassword = event.target.elements.newPassword.value;
  
	try {
	  const [addNewUser] = useMutation(ADD_NEW_USER);
	  const { data } = await addNewUser({
		variables: {
		  username: newUsername,
		  email: newEmail,
		  password: newPassword,
		},
	  });
	  console.log(data);
	}catch (error){
	  console.error(error);
	}
  }
  



function CreateUserModal() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<form onSubmit={formHandler}>
			<Button onClick={onOpen}>Create Account</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Account Creation</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Form />
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							Create
						</Button>
						<Button variant='ghost' onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</form>
	)
}
export default CreateUserModal

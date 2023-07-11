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






function CreateUserModal() {
	const { isOpen, onOpen, onClose } = useDisclosure()


  
	return (
		<>
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
		</>
	)
}
export default CreateUserModal

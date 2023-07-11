// import {
// 	Modal,
// 	ModalOverlay,
// 	ModalContent,
// 	ModalHeader,
// 	ModalFooter,
// 	ModalBody,
// 	ModalCloseButton,
// 	Button,
// 	useDisclosure,
// } from '@chakra-ui/react';
// import Form from '../pages/newUserform';



// function NewUserModal() {
// 	const { isOpen, onOpen, onClose } = useDisclosure()

// 	return (
// 		<>
// 			<Button onClick={onOpen}>Login</Button>

// 			<Modal isOpen={isOpen} onClose={onClose}>
// 				<ModalOverlay />
// 				<ModalContent>
// 					<ModalHeader>Modal Title</ModalHeader>
// 					<ModalCloseButton />
// 					<ModalBody>
// 						<Form />
// 					</ModalBody>

// 					<ModalFooter>
// 						<Button colorScheme='blue' mr={3} onClick={onClose}>
// 							Login
// 						</Button>
// 						<Button variant='ghost' onClick={onClose}>Close</Button>
// 					</ModalFooter>
// 				</ModalContent>
// 			</Modal>
// 		</>
// 	)
// }
// export default SignInModal
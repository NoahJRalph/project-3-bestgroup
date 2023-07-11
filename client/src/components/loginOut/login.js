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
import LoginForm from './loginForm';
import { useNavigate } from 'react-router-dom';

function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  // submit form and redirect to the dashboard
  const handleFormSubmit = () => {
    onClose();
    navigate('/dashboard'); // Redirect to the dashboard
  };

  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LoginForm onSubmit={handleFormSubmit} />
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

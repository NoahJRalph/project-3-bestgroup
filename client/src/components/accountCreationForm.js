import { Input, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { FaUserAlt } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { ADD_NEW_USER } from '../utils/mutations';







// Form component
function Form() {
  // functionality for creating a new user
  const FormHandler = async (event) => {
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
    };
  return (
    <form onSubmit={FormHandler}>
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <FaUserAlt color='gray.300' size={16} />
        </InputLeftElement>
        <Input type='text' placeholder='Username' />
      </InputGroup>

      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <EmailIcon color='black' />
        </InputLeftElement>
        <Input type='email' placeholder='Email' />
      </InputGroup>

      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <LockIcon color='black' />
        </InputLeftElement>
        <Input type='password' placeholder='Password' />
      </InputGroup>
    </Stack>
    </form>
  );
}

export default Form;
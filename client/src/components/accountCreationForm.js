import { Input, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { FaUserAlt } from 'react-icons/fa';

// Form component
function Form() {
  return (
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
  );
}

export default Form;
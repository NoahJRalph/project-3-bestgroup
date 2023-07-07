import { Input, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';


//? is this to sign in or to create a new user
function Form() {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <EmailIcon color='gray.300' />
        </InputLeftElement>
        <Input type='text' placeholder='Username' id='new-username' />
      </InputGroup>

      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <EmailIcon color='gray.300' />
        </InputLeftElement>
        <Input type='email' placeholder='Email' id='new-email' />
      </InputGroup>

      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <LockIcon color='gray.300' />
        </InputLeftElement>
        <Input type='password' placeholder='Password' id='new-password' />
      </InputGroup>
    </Stack>
  );
}

export default Form;

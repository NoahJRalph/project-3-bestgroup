import { Input, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

// LoginForm component
function LoginForm() {
  return (
    <Stack spacing={4}>
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

export default LoginForm;
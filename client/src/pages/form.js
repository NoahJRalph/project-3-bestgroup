import { Input, Stack, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

function form() {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <EmailIcon color='gray.300' />
        </InputLeftElement>
        <Input type='text' placeholder='Username' />
      </InputGroup>

      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <EmailIcon color='gray.300' />
        </InputLeftElement>
        <Input type='email' placeholder='Email' />
      </InputGroup>

      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <LockIcon color='gray.300' />
        </InputLeftElement>
        <Input type='password' placeholder='Password' />
      </InputGroup>
    </Stack>
  );
}

export default form;
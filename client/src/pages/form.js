import { Input, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';


//? is this to sign in or to create a new user
function Form() {
  return (
    //I added id's to all of these elements thinking they were necessary to get specific information from different forms. If things are messing up, delete here first. Brian
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <EmailIcon color='gray.300' />
        </InputLeftElement>
        <Input type='text' placeholder='Username' id='newUsername' />
      </InputGroup>

      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <EmailIcon color='gray.300' />
        </InputLeftElement>
        <Input type='email' placeholder='Email' id='newEmail' />
      </InputGroup>

      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <LockIcon color='gray.300' />
        </InputLeftElement>
        <Input type='password' placeholder='Password' id='newPassword' />
      </InputGroup>
    </Stack>
  );
}

export default Form;

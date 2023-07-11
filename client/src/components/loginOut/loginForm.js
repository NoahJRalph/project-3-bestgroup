import { Input, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

// LoginForm component
const LoginForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(); // Call the onSubmit function provided by the parent component
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <EmailIcon color='black' />
          </InputLeftElement>
          <Input
            type='email'
            placeholder='Email'
            name='email'
            value={formState.email}
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <LockIcon color='black' />
          </InputLeftElement>
          <Input
            type='password'
            placeholder='Password'
            name='password'
            value={formState.password}
            onChange={handleChange}
          />
        </InputGroup>
      </Stack>
    </form>
  );
}

export default LoginForm;

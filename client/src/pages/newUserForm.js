// import React from 'react';
// import { Input, Stack, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
// import { EmailIcon, LockIcon } from '@chakra-ui/icons';
// import { useMutation } from '@apollo/client';
// import { ADD_NEW_USER } from '../utils/mutations';


// //front end functionality for creating a new user
// const formHandler = async (event) => {
//   event.preventDefault();
//   const newUsername = event.target.elements.newUsername.value;
//   const newEmail = event.target.elements.newEmail.value;
//   const newPassword = event.target.elements.newPassword.value;

//   try {
//     const [addNewUser] = useMutation(ADD_NEW_USER);
//     const { data } = await addNewUser({
//       variables: {
//         username: newUsername,
//         email: newEmail,
//         password: newPassword,
//       },
//     });
//     console.log(data);
//   }catch (error){
//     console.error(error);
//   }
// }





// //? is this to sign in or to create a new user
// function Form() {
//   return (
//     <form onSubmit={formHandler}>
//     <Stack spacing={4}>
//       <InputGroup>
//         <InputLeftElement pointerEvents='none'>
//           <EmailIcon color='gray.300' />
//         </InputLeftElement>
//         <Input type='text' placeholder='Username' id='newUsername' />
//       </InputGroup>

//       <InputGroup>
//         <InputLeftElement pointerEvents='none'>
//           <EmailIcon color='gray.300' />
//         </InputLeftElement>
//         <Input type='email' placeholder='Email' id='newEmail' />
//       </InputGroup>

//       <InputGroup>
//         <InputLeftElement pointerEvents='none'>
//           <LockIcon color='gray.300' />
//         </InputLeftElement>
//         <Input type='password' placeholder='Password' id='newPassword' />
//       </InputGroup>

//       <Button colorScheme='blue' size='md'>Submit</Button>

//     </Stack>
//     </form>
//   );
// }



// export default Form;

import React from 'react';
import { Container, Box, Heading, Text, Image, Stack, Center, VStack, } from '@chakra-ui/react';
import AuthService from '../utils/auth'


//using JWT to provide username on profile page
const UserProfile = () => {
    // const { user } = AuthService.getProfile();
    return (
        <Container maxW='6xl'>
            {/* Header */}
            <Box bg='#F7FAFC' p={10}>
                <Center mb={5}>
                    <Image src='/logo_transparent.png' alt="Logo" w={'24%'} />
                    <Heading as='h3' size='md' ml={8}>
                        Welcome
                    </Heading>
                </Center>
            </Box>
        </Container>
    )
}
export default UserProfile
//container to display user profile
//[]
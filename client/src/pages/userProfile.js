import React from 'react';
import { Container, Box, Heading, Text, Image, Stack, Center, VStack, } from '@chakra-ui/react';
import AuthService from '../utils/auth'


//using JWT to provide username on profile page
const UserProfile = () => {
    const { user } = AuthService.getProfile();
    
}

//container to display user profile
[]
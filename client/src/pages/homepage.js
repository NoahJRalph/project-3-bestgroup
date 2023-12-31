import React from 'react';
import { Container, Box, Heading, Text, Image, Stack, Center, VStack } from '@chakra-ui/react';
import Brain from '../assets/brain.png';
import HomepageDemo from '../assets/homepageDemo.gif';
import SignInModal from '../components/newUser/accountCreation';
import LoginModal from '../components/loginOut/login';

function Homepage() {
  return (
    <Container maxW="90%">
      <Box position="relative" minHeight="80vh">
        <Center bg="black" py={2} boxShadow="0 0 7px 3px white" borderRadius="xl">
          <VStack spacing={4} color="white" textAlign="center">
            <Heading fontSize="4xl">Brainsync</Heading>
            <Image
              boxSize="100px"
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src={Brain}
              alt="rendering of a human brain"
              borderRadius="lg"
            />
            <Text fontSize="2xl" >Meld your mind with others</Text>
          </VStack>
        </Center>
        <Center >
          <Container>
            <Image
              src={HomepageDemo}
              alt='demonstration gif of brainsync posts'
              position='absolute'
              top='55%'
              left='50%'
              transform="translate(-50%, -50%)"
              width="400px"
              height="auto"
            />
          </Container>

        </Center>
        <Stack
          direction="column"
          spacing={4}
          position="absolute"
          bottom={8}
          left="50%"
          transform="translateX(-50%)"
          textAlign="center"
          width="100%"
          maxWidth={{ base: '90%', sm: '50%' }}
          margin="auto"
        >
          <Box
            bg="black"
            borderRadius="xl"
            boxShadow="0 0 7px 3px white"
            p={4}
            _hover={{
              boxShadow: '0 0 5px white',
            }}
            width="100%"
          >
            <VStack spacing={4} width="100%">
              <SignInModal />
              <LoginModal />
            </VStack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default Homepage;
import React from 'react';
import { Container, Box, Heading, Text, Image, Stack, Center, VStack, } from '@chakra-ui/react';
import Brain from '../assets/brain.png';
import SignInModal from '../components/newUser/accountCreation';
import LoginModal from '../components/loginOut/login';

function Homepage() {
	return (
		<Container maxW="100%">
			<Box position="relative" minHeight="80vh">
				<Center bg="black" py={4} boxShadow="0 0 7px 3px white" borderRadius="xl">
					<VStack spacing={4} color="white" textAlign="center">
						<Heading>Brainsync</Heading>
						<Image
							boxSize="80px"
							objectFit="cover"
							maxW={{ base: '100%', sm: '200px' }}
							src={Brain}
							alt="rendering of a human brain"
							borderRadius="lg"
						/>
						<Text>Meld your mind with others</Text>
					</VStack>
				</Center>
				<Stack
					direction="column"
					spacing={4}
					position="absolute"
					bottom={8}
					left="50%"
					transform="translateX(-50%)"
					textAlign="center"
					width="100%" // Set width to 100% to expand with the parent container
					maxWidth={{ base: '90%', sm: '50%' }} // Adjust the maxWidth here as per your requirement
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











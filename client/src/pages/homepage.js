import { Container, Box, Heading, Text, Image, Stack, Center, VStack } from '@chakra-ui/react';
import Brain from '../assets/brain.png'
import SignInModal from '../components/modal-login';
import NewPost from '../components/newPost';

//todo: Make a Create new user button 
//todo: Make it so that after user login/created the page sends the user to the Dashboard
function Homepage() {
	return (
		<Container >
			<Box>
				<Center bg={'red.400'}>
					<VStack>
						<Heading>This is the Homepage</Heading>
						<Image
							boxSize='150px'
							objectFit='cover'
							maxW={{ base: '100%', sm: '200px' }}
							src={Brain}
							alt='rendering of a human brain'
							borderRadius='lg'
						/>
						<Text>is Homepage the landing page?</Text>

						<Stack direction='row' spacing={8}>
							<SignInModal />
							<NewPost />
						</Stack>
					</VStack>
				</Center>
			</Box>
		</Container >
	);
}

export default Homepage;

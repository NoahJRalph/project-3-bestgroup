import React from 'react';
import { Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from '@chakra-ui/react';

//example 
const PostCard = () => {
	return (
		<Card>
			<CardHeader>
				<Heading size='md'>Post Title</Heading>
			</CardHeader>
			<CardBody>
				<Text>View a summary of all your customers over the last month.</Text>
			</CardBody>
			<CardFooter>
				<Button>View here</Button>
			</CardFooter>
		</Card>
	)
}

export default PostCard


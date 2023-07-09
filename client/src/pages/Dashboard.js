import React from 'react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';
import CardGrid from '../components/cardGrid';

// todo: User profile
// userName:
// profile icon:
// todo: Past viewed posts
// todo: posts made by user
// todo: comments made by user

function Dashboard() {
  return (
    <Container>
      <Box>
        <Heading>Dashboard</Heading>
        <CardGrid />
        <Text>Is the homepage the landing page?</Text>
      </Box>
    </Container>
  );
}

export default Dashboard;

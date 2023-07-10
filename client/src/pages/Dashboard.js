import React from 'react';
import { Container, Box, Text } from '@chakra-ui/react';
import CardGrid from '../components/cardGrid';
import PageHeader from '../components/pageHeader';
import NewPost from '../components/newPost';

function Dashboard() {
  return (
    <Container>
      <Box>
        <PageHeader />
        <Box mt={20}>
          <NewPost />
          <CardGrid />
          <Text>Is the homepage the landing page?</Text>

        </Box>
      </Box>
    </Container>
  );
}

export default Dashboard;





// todo: User profile
// userName:
// profile icon:
// todo: Past viewed posts
// todo: posts made by user
// todo: comments made by user
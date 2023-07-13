import React from 'react';
import { Container, Box, Flex } from '@chakra-ui/react';
import PageHeader from '../components/layouts/pageHeader';
// import UserProfile from '../components/user/userProfile';
import CardGrid from '../components/postRelated/cardGrid';

function Dashboard() {
  return (
    <Container>
      <Box>
        <PageHeader />
        <Box mt={16} mb={16}>
          <Flex justify="center">
            <CardGrid />
          </Flex>

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
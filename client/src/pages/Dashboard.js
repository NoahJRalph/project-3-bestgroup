import React from 'react';
import { Container, Box, Flex, Link } from '@chakra-ui/react';
import PageHeader from '../components/layouts/pageHeader';
import NavBar from '../components/layouts/navbar'
// import UserProfile from '../components/user/userProfile';
import CardGrid from '../components/postRelated/cardGrid';

import Auth from '../utils/auth';

function Dashboard() {
  return (
    <Container>

      <Box>
        <PageHeader />
        <Box mt={16} mb={16}>
          {Auth.loggedIn() ? (<Flex justify="center">
            <CardGrid />
          </Flex>
          ) : (
            <p>
              <Link to="/homepage">Please login</Link>
            </p>
          )}
        </Box>
        <NavBar />
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
import React from 'react';
import { SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from '@chakra-ui/react';

function CardGrid() {
  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
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
      <Card>
        <CardHeader>
          <Heading size='md'>Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size='md'>Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}

export default CardGrid;

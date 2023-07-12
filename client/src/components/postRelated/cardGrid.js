import React from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import PostCard from './postCard';

function CardGrid() {
  return (
    <Flex justify="center" align="center">
      <SimpleGrid
        spacing={3}
        templateColumns={[
          'repeat(1, minmax(280px, 1fr))', // Mobile screen width (full width)
          'repeat(auto-fill, minmax(460px, 1fr))', // Medium screen width
          'repeat(auto-fill, minmax(900px, 1fr))', // Large screen width
        ]}
        width={[
          '100%', // Mobile screen width (full width)
          '100%', // Medium screen width
          '100%', // Large screen width
        ]}
      >
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </SimpleGrid>
    </Flex>
  );
}

export default CardGrid;
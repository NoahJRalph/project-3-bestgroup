import React from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';
import PostCard from './postCard';

function CardGrid() {
  return (
    <Flex justify="center" align="center">
      <SimpleGrid
        spacing={3}
        templateColumns={['repeat(1, 1fr)', 'repeat(auto-fill, minmax(340px, 1fr))', 'repeat(auto-fill, minmax(1000px, 1fr))']}
        width="100%"
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

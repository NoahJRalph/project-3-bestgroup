import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import PostCard from '../components/postCard';

function CardGrid() {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns={['repeat(1, 1fr)', 'repeat(auto-fill, minmax(340px, 1fr))', 'repeat(auto-fill, minmax(800px, 1fr))']}
      width="100%"
    >
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </SimpleGrid>
  );
}

export default CardGrid;
import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import PostCard from '../components/postCard';

import PostCard from './cardLayouts';

function CardGrid() {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns={['repeat(1, 1fr)', 'repeat(auto-fill, minmax(300px, 1fr))']}>
      <PostCard />
      <PostCard />
      <PostCard />
    </SimpleGrid>
  );
}

export default CardGrid;
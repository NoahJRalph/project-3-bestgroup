import React from 'react';
import { useQuery } from '@apollo/client';

import { SimpleGrid, Flex } from '@chakra-ui/react';
import PostCard from './postCard';

import { QUERY_POSTS } from '../../utils/queries';

const CardGrid = () => {
  const { loading, data } = useQuery(QUERY_POSTS)
  const post = data?.post || []

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
        {loading ? (
          <div>Loading...</div>
        ) : (
          <PostCard
            posts={post}
            title="Brains syncing..."
          />
        )}
      </SimpleGrid>
    </Flex>
  );
}

export default CardGrid;
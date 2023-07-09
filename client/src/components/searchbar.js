import React, { useState } from 'react';
import { Input, IconButton, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Flex alignItems="center">
      <Input
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
        size="md"
        variant="filled"
        mr={2}
      />
      <IconButton
        aria-label="Search"
        icon={<SearchIcon />}
        onClick={handleSearch}
        variant="solid"
        colorScheme="purple"
        size="md"
      />
    </Flex>
  );
}

export default SearchBar;

import React, { useState } from 'react';
import { Input, IconButton, Flex, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  // Check if screen size is mobile
  const checkIsMobile = () => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
  };

  // Add event listener for screen resize
  useState(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <Flex alignItems="center">
        <Button
          colorScheme="gray"
          size="md"
          onClick={toggleInput}
          variant="solid"
        >
          {showInput ? 'Search' : <SearchIcon />}
        </Button>
        {showInput && (
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
            size="md"
            variant="filled"
            ml={2}
          />
        )}
      </Flex>
    );
  }

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
        colorScheme="gray"
        size="md"
      />
    </Flex>
  );
}

export default SearchBar;


// Review mobile size functionality of search button
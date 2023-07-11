import React, { useState } from 'react';
import { Input, IconButton, Flex, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [showInputModal, setShowInputModal] = useState(false);

  const handleSearch = () => {
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleInputModal = () => {
    setShowInputModal(!showInputModal);
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
          onClick={toggleInputModal}
          variant="solid"
        >
          <SearchIcon />
        </Button>
        <Modal isOpen={showInputModal} onClose={toggleInputModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Search</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={handleChange}
                size="md"
                variant="filled"
              />
              <Button mt={4} colorScheme="blue" onClick={handleSearch}>
                Search
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
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
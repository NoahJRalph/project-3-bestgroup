import React from 'react';
import { Button, useBreakpointValue, } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

function CreatePostButton() {
  const handleCreatePost = () => {
    // Handle the logic for creating a new post
    console.log('Create a new post');
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Button
      variant="ghost"
      color="black"
      onClick={handleCreatePost}
      leftIcon={<RiAddLine />}
      justifyContent={isMobile ? 'center' : 'flex-start'}
      textAlign={isMobile ? 'center' : 'left'}
      width={isMobile ? '100%' : undefined}
    >
      {isMobile ? null : 'Create Post'}
    </Button>
  );
}

export default CreatePostButton;





import React from 'react'
import { 
	Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, 
	ModalBody, ModalFooter, Text, useDisclosure, Textarea } from '@chakra-ui/react'

const NewPost = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	let [value, setValue] = React.useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  return (
    <>
      <Button onClick={onOpen}>Create Post</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
					<Text mb='8px'>Value: {value}</Text>
						<Textarea value={value} onChange={handleInputChange} placeholder='Here is a sample placeholder'
        size='sm'
				resize={'none'}
      />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default NewPost
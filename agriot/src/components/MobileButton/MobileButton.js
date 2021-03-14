import React, { useState, Component } from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
  Center,
  Container, 
  Divider,
  Badge,
  Heading,
  Text,
  InputGroup,
  InputRightAddon,
  Input,
  Flex,
  Tag,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  useDisclosure
} from '@chakra-ui/react';

import ARModal from '../ARModal/ARModal.js'

 function MobileButton(){ 

  const { isOpen, onOpen, onClose } = useDisclosure()

  return ( 
    <Box maxW="sm" maxH="3xl" borderWidth="2px" borderRadius="lg" bg="gray.900" width="80" overflow="hidden">
    <Box d="flex" flexDirection="column" m="5" as="div">
        <Box
      as="button"
      p={1}
      color="white"
      fontWeight="bold"
      borderRadius="md"
      bgGradient="linear(to-r, teal.500,green.500)"
      _hover={{
        bgGradient: "linear(to-r, red.500, yellow.500)",
      }}
      onClick={onOpen}
    >
      <a target="_blank" href="https://ecocrib-ar.netlify.app/">Go View</a>

    </Box>
    </Box>
    <ARModal isOpen={isOpen} onClose={onClose}>
    <Text>Visit this site on your phone to test our AR features out!</Text>
    </ARModal>
</Box>
  );
}

export default MobileButton;

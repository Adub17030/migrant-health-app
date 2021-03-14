import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  Heading,
} from '@chakra-ui/react';

import ARButton from '../ARButton/ARButton.js'

function Feature({ title, desc, ...rest }) {
    return (
        <Flex bgGradient="linear(to-l, #7928CA, #FF0080)" minH="100vh" minW="100vw" justify="center" fontSize="xl">   
        <Box p={5} mt="30vh" bg="white" maxW="40rem" maxH="25rem" borderRadius="xl" shadow="md" borderWidth="1px" {...rest}>
        <Heading color="black" fontSize="4xl">{title}</Heading>
        <Text color="black" mt={4}>Visit this link on the laptop to view our dashboard!</Text>
        <Text color="black" mt={4}>{desc}</Text>
        <Box
      as="button"
      p={2}
      mt={5}
      color="white"
      fontWeight="bold"
      borderRadius="md"
      bgGradient="linear(to-r, teal.500,green.500)"
      _hover={{
        bgGradient: "linear(to-r, red.500, yellow.500)",
      }}
     
    >
      <a target="_blank" href="https://ecocrib-ar.netlify.app/">Go View</a>
      
    </Box>
      </Box>
      </Flex>
    )
  }

function MobileView() {

  return (
   <>
    <VStack spacing={8}>
      <Feature
        title="Looks like you're on a phone..."
        desc="You can test our AR feature from your phone right now! Just tap the button below!"
      />
    </VStack>
   </>
  );
}

export default MobileView;

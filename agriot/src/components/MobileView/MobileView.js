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

function Feature({ title, desc, ...rest }) {
  return (
    <Flex
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      minH="100vh"
      minW="100vw"
      justify="center"
      fontSize="xl"
    >
      <Box
        p={5}
        mt="30vh"
        bg="white"
        maxW="40rem"
        maxH="25rem"
        borderRadius="xl"
        shadow="md"
        borderWidth="1px"
        {...rest}
      >
        <Heading color="black" fontSize="4xl">
          {title}
        </Heading>
        <Text color="black" mt={4}>
          {desc}
        </Text>
        <Box
          as="button"
          maxW="10rem"
          mt={5}
          p={2}
          color="white"
          fontWeight="bold"
          borderRadius="3xl"
          bgGradient="linear(to-r, teal.500,green.500)"
          _hover={{
            bgGradient: 'linear(to-r, red.500, yellow.500)',
          }}
        >
          <Link to="/signin">Get Started</Link>
        </Box>
      </Box>
    </Flex>
  );
}

function MobileView() {
  return (
    <>
      <VStack spacing={8}>
        <Feature
          title="RefugeeAid"
          desc="              A platform to help monitor and incease acceabilty for refugee
          health records
"
        />
      </VStack>
    </>
  );
}

export default MobileView;

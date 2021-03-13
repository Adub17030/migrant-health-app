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
  VStack,
  HStack,
  Grid,
  GridItem,
  Flex,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';

import Farmers from '../../assets/farmers.png'
import Background from '../../assets/leafbackground.png'
import InfoItem from '../InfoItem/InfoItem.js'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

 
  render(){ 
  return (
    <Flex bg="white" direction="column" justify="center" alignItems="center">
    <Flex bg="white" minH="90vh" justify="center" fontSize="xl">   
    <Flex pt="10rem" pl="10rem" pr="10rem" mt="10rem" direction="column">
    <Text
        bgGradient="linear(to-l,#f12711,  #f5af19)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
    >
    Vertical Farming Made Easy
    </Text>
    <Text fontWeight="extrabold" fontSize="2xl" color="yellow.500">Calculate expenses, get guides, and use our one-stop setup to start your local community vertical farm!</Text>
    
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
        bgGradient: "linear(to-r, red.500, yellow.500)",
      }}
    >
      Get Started
    </Box>

    </Flex>

    <Flex pr="10rem" mt="10rem" >
        <Image
         boxSize="500px"
         borderRadius="full"
         src={Farmers}
         alt="Farmers"
         objectFit="cover"
        />
    </Flex>
    </Flex>

    <Flex justify="center" alignItems="center" minW="100vw" bg="green.400">
    <HStack pt={5} spacing="5rem">
        <InfoItem src={Background} heading="Benefit"></InfoItem>
        <InfoItem src={Background} heading="Benefit"></InfoItem>
        <InfoItem src={Background} heading="Benefit"x></InfoItem>
    

    </HStack>
    </Flex>

    </Flex>
  );
  }
}

export default LandingPage;
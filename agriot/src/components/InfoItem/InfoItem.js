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
import Background from '../../assets/leafbackground.png'

class InfoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

  render(){ 
  return (
    <Box bg="white" maxW="sm" borderColor="white" shadow="lg" borderWidth="1px" borderRadius="lg" borderOverflow="hidden">
      <Image ml="0.02rem" src={this.props.src} borderRadius="lg" objectFit="stretch"/>
      <Flex justify="center" alignItems="center" direction="column">
        <Heading bgClip="text" bgGradient="linear(to-l,#f12711,  #f5af19)" size="xl">{this.props.heading}</Heading>
        <Text color="green.200">YeeHaw</Text>
      </Flex>
    </Box>
  );
  }
}

export default InfoItem;
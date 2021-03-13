import React, { useState, useEffect, Component } from 'react';
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
  SimpleGrid,
} from '@chakra-ui/react';


import StatsItem from '../StatsItem/StatsItem.js';


//https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component

class StatsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

render() {
  return (  
    
    <SimpleGrid ml="5rem" mt="2rem" columns={{sm: 2, md: 4}} spacingX="2em" spacingY="2em">
    
    <StatsItem heading="Temp. Usage" value="200" ></StatsItem>
    <StatsItem heading="Light Usage" value="150"></StatsItem>
    <StatsItem heading="Water Usage" value="750"></StatsItem>
    <StatsItem heading="All " value="1100" ></StatsItem>
    </SimpleGrid>
    
  );
  }
}

export default StatsGrid;

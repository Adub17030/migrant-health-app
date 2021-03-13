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
    
    <SimpleGrid ml="5rem" mt="1rem" columns={{sm: 2, md: 4}} spacingX="2em" spacingY="2em">
    
    <StatsItem heading="Balance" value="$50,600" ></StatsItem>
    <StatsItem heading="10D Volume" value={this.state.volume} ></StatsItem>
    <StatsItem heading="Market Cap" value={this.state.marketCap} ></StatsItem>
    <StatsItem heading="All Time High" value="$50,600" ></StatsItem>
    <StatsItem heading="Typical Hold" value="$50,600" ></StatsItem>
    <StatsItem heading="Activity" value="$50,600" ></StatsItem>
    <StatsItem heading="Popularity" value="$50,600" ></StatsItem>
    <StatsItem heading="Share Supply" value="$50,600" ></StatsItem>

    </SimpleGrid>
    
  );
  }
}

export default StatsGrid;

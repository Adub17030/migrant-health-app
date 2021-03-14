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
import StatusList from '../StatusList/StatusList.js'
import StatsGrid from '../StatsGrid/StatsGrid.js'
import StatChart from '../StatChart/StatChart.js'
import ARButton from '../ARButton/ARButton.js'
import EcoData from '../EcoData/EcoData'
import ProgressChart from '../ProgressChart/ProgressChart'; 


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

 
  render(){ 
  return (
    <Flex color="white" justify="center">

    <Flex direction="column">
    <Heading ml={1} mt={5} mb={5} size="lg">EcoCrib Data</Heading>
    <EcoData></EcoData>
    <Heading ml={1} mt={5}size="lg">Reward Progress</Heading>
    <ProgressChart></ProgressChart>
    </Flex>

    <Flex direction="column"> 
    <Flex>
      <Heading ml={5} mt={5} size="lg">{"Live Data"}</Heading>
    </Flex>
    <StatChart> </StatChart>
    <StatsGrid stock={this.state.stock}></StatsGrid>
    {/* Chart comes here */}
    {/*Table or Transactions come here*/}
    </Flex>
    


    <Flex mt={5} ml={20} direction="column">
    <Heading mb={5} size="lg">Visualize Footprint</Heading>
    <ARButton></ARButton>
    <Heading size="lg" mt={5}>View Sensors</Heading>
    <StatusList></StatusList>
    </Flex>
    </Flex>
  );
  }
}

export default Dashboard;
import React from 'react';
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
} from '@chakra-ui/react';
import InfoItem from '../InfoItem/InfoItem.js'

function StatusList(props) {
  return (  
    
    <VStack spacing="10px" align="left" mt={5}>
        <InfoItem sensorName="Temperature"></InfoItem>
        <InfoItem sensorName="Lights 1"></InfoItem>
        <InfoItem sensorName="Lights 2"></InfoItem>
    </VStack>
  );
}

export default StatusList;

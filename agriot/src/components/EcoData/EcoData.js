import React, { useState, Component } from 'react';
import fetch from 'node-fetch';
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
} from '@chakra-ui/react';


class EcoData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp_data: 0,
      bright_data: 0
    };
   
  }
  fetchTemp() {
    fetch('https://ecocrib-app.herokuapp.com/temp').then(data => {
      setState({
        temp_data: data
      })
    })
  }
  fetchBright() {
    fetch('https://ecocrib-app.herokuapp.com/bright').then(data => {
      setState({
        bright_data: data
      })
    })
  }
  



render(){
  return ( 
    <Box maxW="sm" height="10xs" borderWidth="2px" borderRadius="lg" bg="gray.900" width="80" overflow="hidden">
  
    <HStack spacing={35}>
    <Box m="5" as="div">
    <HStack spacing={-5}>
    <Text fontSize="md" pr="10" >Temp: {this.state.stockData ? "5" : "--"}</Text>   
    <Popover>
            <PopoverTrigger>
            <Tag size="xs" variant="subtle" borderRadius="full" colorScheme="cyan">&nbsp;?&nbsp;</Tag>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Temp</PopoverHeader>
              <PopoverBody>This is the ambient temperature of your dorm room currently!</PopoverBody>
            </PopoverContent>
        </Popover>
   
    </HStack>

    <HStack mt={25} spacing={-5}>
    <Text fontSize="md" pr="10" >Light: {this.state.stockData ? "5" : "--"}</Text>

        <Popover>
            <PopoverTrigger>
            <Tag size="xs" variant="subtle" borderRadius="full" colorScheme="cyan">&nbsp;?&nbsp;</Tag>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Light Level</PopoverHeader>
              <PopoverBody>We measure light level on a scale of 1 - 10!</PopoverBody>
            </PopoverContent>
        </Popover>

    </HStack>

    </Box>

    <Box as="div" mr={this.boxMargin}>
    <HStack spacing={-5}>
    <Text fontSize="md" pr="10" >Water: {this.state.stockData ? "5" : "--"}</Text>   
    <Popover>
            <PopoverTrigger>
            <Tag size="xs" variant="subtle" borderRadius="full" colorScheme="cyan">&nbsp;?&nbsp;</Tag>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Water Temperature</PopoverHeader>
              <PopoverBody>Try to use less hot water throughout the day to reduce your footprint!</PopoverBody>
            </PopoverContent>
        </Popover>
   
    </HStack>

    <HStack mt={25} spacing={-5}>
    <Text fontSize="md" pr="10" >Total: {this.state.stockData ? "5" : "--" }</Text>

        <Popover>
            <PopoverTrigger>
            <Tag size="xs" variant="subtle" borderRadius="full" colorScheme="cyan">&nbsp;?&nbsp;</Tag>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Total Footprint: </PopoverHeader>
              <PopoverBody>Your total footprint based on various energy factors!</PopoverBody>
            </PopoverContent>
        </Popover>

    </HStack>

    </Box>
    </HStack>

</Box>
  );
}
}

export default EcoData;

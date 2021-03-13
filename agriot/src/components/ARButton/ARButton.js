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
} from '@chakra-ui/react';

// const fetchStockData = e =>{
//     fetch('https://equitia-git-po5vn34pmq-ue.a.run.app/user/' + userID + '/createAlgo', { method: 'POST', body: data })
//       .then(res => console.log(res.text()))
//       .then(json => console.log(json))
// }
const finnhub_token = "c11f1u748v6tj8r9gsqg"; 


class StockForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTicker: "",
      stockData: '',
      boxMargin: 0,
    };

  }


render(){
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
    >
      Click here
    </Box>
    </Box>
</Box>
  );
}
}

export default StockForm;

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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import theme from './Theme.js';
import LandingPage from './components/LandingPage/LandingPage.js'
import Header from './components/Navbar/Navbar.js'


function App() {
  return (
    <ChakraProvider theme={theme}>
      
      <Header></Header>
      <LandingPage></LandingPage>
     
  
    </ChakraProvider>
  );
}

export default App;

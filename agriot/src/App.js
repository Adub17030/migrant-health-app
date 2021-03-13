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
import Dashboard from './components/Dashboard/Dashboard.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      
    <Header></Header>
     <Switch>
      <Route path="/" component={LandingPage} exact/>
      <Route path="/dashboard" component={Dashboard} exact/>
    </Switch>
    </ChakraProvider>
  );
}

export default App;

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
import { useMediaQuery } from 'react-responsive'
import MobileView from './components/MobileView/MobileView.js';

function App() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  return (
    <ChakraProvider theme={theme}>
    {isDesktopOrLaptop && <>  
    <Header></Header>
     <Switch>
      <Route path="/" component={LandingPage} exact/>
      <Route path="/dashboard" component={Dashboard} exact/>
    </Switch>
    </>
    }

    {isTabletOrMobile &&
    <MobileView></MobileView>
    }

    </ChakraProvider>
  );
}

export default App;

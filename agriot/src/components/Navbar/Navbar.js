import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  PseudoBox,
  Image,
} from '@chakra-ui/react';

import { Link as ButtonLink } from '@chakra-ui/react';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';
// import { CloseIcon, MenuIcon } from ".../Icons"
import { Link } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Logo from '../../assets/Logo.png';

const MenuItems = props => {
  const { isLast, ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      as="ins"
      fontWeight="bold"
      {...rest}
    >
      <Link to={'/' + props.route}>{props.name}</Link>
    </Text>
  );
};

const Header = props => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      bg={['white', 'white']}
      color={['teal.500', 'teal.500', 'primary.700', 'primary.700']}
      {...props}
    >
      <Flex align="center">
        {/* <Image
        src={Logo}
        size="100px"
        /> */}
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {/* {show ? <CloseIcon /> : <MenuIcon />} */}| \/
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          {/* <ColorModeSwitcher mr="6"/> */}
          <MenuItems name="Home" route=""></MenuItems>
          <MenuItems name="Dashboard" route="dashboard"></MenuItems>
          <MenuItems name="Rewards" route="dashboard"></MenuItems>
          <MenuItems name="About" route="dashboard"></MenuItems>
          <Button
            ml={5}
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            size="sm"
            variant="solid"
          >
            <MenuItems name="Sign In" route="signin" isLast></MenuItems>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;

import React from "react"
import { Box, Flex, Text, Button, Stack, PseudoBox } from "@chakra-ui/react"

import { Link as ButtonLink } from "@chakra-ui/react"

import { ColorModeSwitcher } from '../../ColorModeSwitcher';
// import { CloseIcon, MenuIcon } from ".../Icons"
import { Link } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons'
const MenuItems = props => {
  const {isLast, ...rest} = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      as="ins"
      fontWeight="bold"
      {...rest}
    >
      <Link to={"/"+props.route}>{props.name}</Link>
    </Text>
  )
}

const Header = props => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      bg={["white", "white"]}
      color={["teal.500", "teal.500", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        {/* <Logo
          w="100px"
          color={["white", "white", "primary.500", "primary.500"]}
        /> */}
      </Flex>
      
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {/* {show ? <CloseIcon /> : <MenuIcon />} */}
         |
        \/
      </Box>
      
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
        <ColorModeSwitcher mr="6"/>
          <MenuItems name="Home" route=""></MenuItems>
          <MenuItems name="Dashboard" route="algorithms"></MenuItems>
          <MenuItems name="Plans" route="tutorials"></MenuItems>
          <MenuItems name="About" route="about" isLast></MenuItems>
          
          <Button ml={5} rightIcon={<ArrowForwardIcon />} colorScheme="teal" size="sm" variant="solid">
            <ButtonLink isExternal={false}>SIGN IN</ButtonLink>
          </Button>

        </Flex>
      </Box>
    </Flex>
  )
}

export default Header;

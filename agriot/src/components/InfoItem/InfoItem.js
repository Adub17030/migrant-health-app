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
  Progress,
  Flex,
  Button,
  MdBuild,
  useDisclosure,
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

import { InfoIcon } from '@chakra-ui/icons';


function InfoItem(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (  
    
    
    <Box maxW="sm" borderWidth="2px" borderRadius="lg" bg="gray.900" width="80" overflow="hidden">
    
    <Box d="flex" flexDirection="row" m="5" as="div" href="/blog-post-thing">
      <Heading pr="10" mt="1" mb="0" as="h4" size="md"><Badge size="lg" fontSize="1em">{props.sensorName}</Badge></Heading>
      <Box>
      <Button onClick={onOpen} ml={-7} mt={1} leftIcon={<InfoIcon/>} variant="ghost" size="xs" colorScheme="gray" variant="solid">
        Online
      </Button>
      </Box>

    </Box>
    <Box m="5" as="div">
    <Flex direction="column">
    <Badge size="xs" color="green.100">RUNNING</Badge>
    <Progress size="xs" isIndeterminate colorScheme="green" />
    </Flex>
    </Box>
  
</Box>
  );
}

export default InfoItem;
   
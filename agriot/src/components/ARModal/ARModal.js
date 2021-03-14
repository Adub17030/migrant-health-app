import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from "@chakra-ui/react"

import React from 'react';


function ARModal(props) {
  return (  
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="md" isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{props.modalTitle}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      {props.children}
      </ModalBody>
    </ModalContent>
  </Modal>
  );
}

export default ARModal;
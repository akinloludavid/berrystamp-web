import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { IModalProps } from "../../types";

const ModalContainer = ({ isOpen, onClose, children }: IModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxWidth={"52rem"} backgroundColor={"#fff"}>
        <ModalCloseButton mt="-45px" mr="-18px" color="white" />
        {children}
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;

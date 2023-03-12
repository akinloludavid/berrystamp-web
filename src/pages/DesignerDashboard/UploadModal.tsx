import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ModalContainer from "../../components/ModalContainer";

const UploadModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose?: any;
}) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} maxWidth="47rem">
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        bg={"white"}
        height={"21.8rem"}
        borderRadius={"10px"}
        px={"4.5rem"}
      >
        <Text textAlign={"center"} variant={"body4"} mb={"2rem"}>
          Ops!!... You have’nt added your payment details yet, add payment
          details to continue product upload
        </Text>
        <Button mb={"1rem"}>Add now</Button>
        <Button variant={"ghost"}>Do it later</Button>
      </Flex>
    </ModalContainer>
  );
};

export default UploadModal;

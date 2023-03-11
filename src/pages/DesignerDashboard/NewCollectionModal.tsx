import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ModalContainer from "../../components/ModalContainer";

const NewCollectionModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose?: any;
}) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} maxWidth="61rem">
      <Box bg={"white"} px={"10rem"} borderRadius={"10px"} py={"3.3rem"}>
        <Heading variant={"h2"} textAlign={"center"} fontWeight={"700"}>
          New Collection
        </Heading>
        <Text variant={"body3"} mt={"0.5rem"} textAlign={"center"}>
          Upload and launch new product collections, Inkprint watermark will be
          automatically added to every image upload to protect it. Learn more
        </Text>
        <Button>Create Collection</Button>
      </Box>
    </ModalContainer>
  );
};

export default NewCollectionModal;

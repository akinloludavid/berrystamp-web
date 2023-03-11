import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
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
        <Text
          variant={"body3"}
          mt={"0.5rem"}
          textAlign={"center"}
          mb={"2.5rem"}
        >
          Upload and launch new product collections, Inkprint watermark will be
          automatically added to every image upload to protect it. Learn more
        </Text>
        <form>
          <label htmlFor="">Enter collection name*</label>
          <Input mb={"20px"} mt={"0.5rem"} />
          <label htmlFor="">Add Description (optional)</label>
          <Textarea mt={"0.5rem"}></Textarea>
          <Flex mt={"2rem"} gap={".85rem"}>
            <Box
              width={"10rem"}
              height={"10rem"}
              borderRadius={"10px"}
              border={"1px solid #C9C9C9"}
            ></Box>
            <Box>
              Upload Collection Cover{" "}
              <Text variant={"body3"} color={"#FF0022"} mb={"1rem"}>
                {" "}
                (Upload Dimensions: 1200px by
                <br /> 1200px)
              </Text>
              <input type={"file"} />
            </Box>
          </Flex>
          <Button display={"block"} mx={"auto"} mt={"3rem"}>
            Create Collection
          </Button>
        </form>
      </Box>
    </ModalContainer>
  );
};

export default NewCollectionModal;

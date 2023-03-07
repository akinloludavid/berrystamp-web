import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router-dom";
import { trauncateString } from "../../utils/helper";
import ModalContainer from "../ModalContainer";

const CustomDesignCard = ({ name, img }: { name: string; img: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      width={"228px"}
      height={"228px"}
      bg={"#F2F2F2"}
      borderRadius={"8px"}
      px={"18px"}
      pt={"16px"}
      pb={"13px"}
      onClick={() => onOpen()}
    >
      <Flex alignItems={"center"} mb={"8px"} justifyContent={"space-between"}>
        <Text variant={"body4"} fontWeight={"500"}>
          {trauncateString(name, 13)}
        </Text>
        <FiMoreHorizontal />
      </Flex>
      <Image width={"100%"} src={`/assets/customorder/${img}`} />
      <ModalContainer isOpen={isOpen} onClose={onClose} maxWidth="77rem">
        <Flex bg={"white"} padding={"3.375rem"} gap={"4rem"}>
          <Image
            width={"600px"}
            height={"500px"}
            src={`/assets/customorder/cd20.png`}
          />
          <Box>
            <Text
              fontSize={"24px"}
              color={"#323232"}
              fontWeight={"700"}
              mb={"8px"}
            >
              Custom Anniversary Design
            </Text>
            <Text mb={"16px"} variant={"body4"}>
              Order ID: #WQ542698TH
            </Text>
            <Text mb={"10px"} variant={"body4"}>
              Design order for anniversary celebration
            </Text>
            <Text variant={"body3"} color="#757575" mb="12px">
              Art by
              <Text
                color="#0050BA"
                variant={"body3"}
                as={Link}
                to={`/author/Shemxy`}
              >
                Shemxy
              </Text>
            </Text>
            <Flex gap={"1rem"}>
              <Button width={"21rem"}>View Order</Button>
              <Button variant={"outline"}>
                <FiMoreHorizontal />
              </Button>
            </Flex>
          </Box>
        </Flex>
      </ModalContainer>
    </Box>
  );
};

export default CustomDesignCard;

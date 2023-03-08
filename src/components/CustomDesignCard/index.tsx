import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";
import { trauncateString } from "../../utils/helper";
import ModalContainer from "../ModalContainer";
import DetailModal from "./DetailModal";

const CustomDesignCard = ({ name, img }: { name: string; img: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showDropdown, setshowDropdown] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setshowDropdown(false);
  });
  return (
    <Box
      width={"228px"}
      height={"228px"}
      bg={"#F2F2F2"}
      borderRadius={"8px"}
      px={"18px"}
      pt={"16px"}
      pb={"13px"}
    >
      <Flex
        alignItems={"center"}
        mb={"8px"}
        justifyContent={"space-between"}
        position={"relative"}
      >
        <Text variant={"body4"} fontWeight={"500"}>
          {trauncateString(name, 13)}
        </Text>
        <span style={{ cursor: "pointer" }}>
          <FiMoreHorizontal onClick={() => setshowDropdown(!showDropdown)} />
        </span>
        {showDropdown && (
          <Flex
            position={"absolute"}
            right={"0"}
            top={"2rem"}
            width={"215px"}
            bg={"white"}
            flexDirection={"column"}
            gap={"18px"}
            py={"16px"}
            px={"16px"}
            borderRadius={"8px"}
            ref={ref}
          >
            <Text variant={"body4"}>Print on Item</Text>
            <Text variant={"body4"}>Print on mockups</Text>
            <Text variant={"body4"}>Upload to marketplace</Text>
            <Text variant={"body4"}>Delete design</Text>
          </Flex>
        )}
      </Flex>
      <Image
        cursor={"pointer"}
        onClick={() => onOpen()}
        width={"100%"}
        src={`/assets/customorder/${img}`}
      />
      <DetailModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default CustomDesignCard;

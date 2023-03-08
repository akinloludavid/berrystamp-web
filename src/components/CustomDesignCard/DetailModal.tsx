import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router-dom";
import ModalContainer from "../ModalContainer";

const DetailModal = ({ isOpen, onClose }: { isOpen: any; onClose: any }) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} maxWidth="77rem">
      <Flex
        bg={"white"}
        padding={"3.375rem"}
        gap={"4rem"}
        borderRadius={"12px"}
      >
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
          <Flex gap={"1rem"} position={"relative"}>
            <Button width={"21rem"}>View Order</Button>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FiMoreHorizontal />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>Print on Item</MenuItem>
                <MenuItem>Print on mockups</MenuItem>
                <MenuItem>Upload to marketplace</MenuItem>
                <MenuItem>Delete design</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Flex>
    </ModalContainer>
  );
};

export default DetailModal;

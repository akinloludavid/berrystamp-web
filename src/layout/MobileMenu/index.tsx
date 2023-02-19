import React from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  Box,
  Text,
} from "@chakra-ui/react";
import { IModalProps } from "../../types";
import { navLinks } from "../../utils/data";
import { nanoid } from "nanoid";
import { isNavActive } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({ isOpen, onClose }: IModalProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody
            display={"flex"}
            flexDirection="column"
            gap="20px"
            mt={"60px"}
          >
            {navLinks.map((item) => (
              <Box
                key={nanoid()}
                cursor="pointer"
                display="flex"
                width="fit-content"
                justifyContent={"center"}
                alignItems="center"
                onClick={() => {
                  navigate(item.route);
                  onClose();
                }}
                borderBottom={
                  isNavActive(item.route) ? "2px solid #3E2F8A" : ""
                }
                pb="4px"
              >
                <Text fontSize={"18px"} fontWeight="500" color="#323232">
                  {item.label}
                </Text>
              </Box>
            ))}
          </DrawerBody>

          <DrawerFooter display={"block"}>
            <Button variant="secondary" w="100%" mb={3} onClick={onClose}>
              Register
            </Button>
            <Button w="100%">Login</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;

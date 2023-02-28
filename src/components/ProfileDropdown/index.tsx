import React from "react";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Flex,
  Image,
  Text,
  Icon,
  Divider,
  Box,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";

const ProfileDropdown = () => {
  return (
    <Menu>
      <MenuButton cursor={"pointer"} as={Flex} rightIcon={<BsChevronDown />}>
        <Flex align={"center"} gap="4px">
          <Image src="/assets/user.png" />
          <Text fontSize={"body2"} color="#323232">
            My account
          </Text>
          <Icon as={BsChevronDown} />
        </Flex>
      </MenuButton>
      <MenuList gap={"8px"} display="flex" flexDir={"column"}>
        <MenuItem display={"flex"} gap="2">
          <Image w="10" h="10" src="/assets/user.png" />
          <Box>
            <Text variant={"body2"} fontSize="14px" color="textColor">
              Jenny Loren
            </Text>
            <Text variant={"body2"} fontSize="14px" color="#757575">
              @Jennylore
            </Text>
          </Box>
        </MenuItem>
        <Divider />

        <MenuItem display={"flex"} gap="2" fontSize={"14px"}>
          <Icon as={AiOutlineUser} />
          Accounts you follow
        </MenuItem>
        <MenuItem display={"flex"} gap="2" fontSize={"14px"}>
          <Icon as={AiOutlineUser} />
          Switch to designer
        </MenuItem>
        <MenuItem display={"flex"} gap="2" fontSize={"14px"}>
          <Icon as={AiOutlineUser} />
          Switch to printer
        </MenuItem>
        <Divider />
        <MenuItem display={"flex"} gap="2" fontSize={"14px"}>
          <Icon as={MdOutlineSettings} />
          Settings
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileDropdown;

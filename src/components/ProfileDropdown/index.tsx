import React, { useState } from "react";
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
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ModalContainer from "../ModalContainer";
import { nanoid } from "nanoid";

const followers = [
  {
    name: "Bola Ola",
    account_type: "Customer Account",
    image: "/assets/followers/img1.png",
  },
  {
    name: "Gina designs",
    account_type: "Designer account",
    image: "/assets/followers/img2.png",
  },
  {
    name: "May Arts",
    account_type: "Designer account",
    image: "/assets/followers/img1.png",
  },
  {
    name: "Falcon prints",
    account_type: "Printer account",
    image: "/assets/followers/img2.png",
  },
  {
    name: "Apex prints",
    account_type: "Printer account",
    image: "/assets/followers/img1.png",
  },
  {
    name: "Arts by shemxy",
    account_type: "Designer account",
    image: "/assets/followers/img2.png",
  },
];
const ProfileDropdown = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ModalContainer isOpen={isModalOpen} onClose={handleClose}>
        <Box px="64px" py="54px" maxH="592px" overflowY={"scroll"}>
          <Heading variant={"h5"} as="h5" color="textColor" mb="34px">
            Followers
          </Heading>
          <InputGroup mb="26px">
            <InputLeftElement>
              <AiOutlineSearch color="#757575" />
            </InputLeftElement>
            <Input />
          </InputGroup>

          <Flex flexDirection="column" gap="24px">
            {followers.map((el) => (
              <Flex key={nanoid()} justify={"space-between"} align="center">
                <Flex gap="22px" align="center">
                  <Image
                    src={el.image}
                    alt={el.name}
                    w="48px"
                    h="48px"
                    rounded={"full"}
                  />
                  <Box>
                    <Heading variant={"h5"} color="textColor">
                      {el.name}
                    </Heading>
                    <Text fontSize={"14px"} fontWeight="400">
                      {el.account_type}
                    </Text>
                  </Box>
                </Flex>
                <Button variant={"secondary"}>Unfollow</Button>
              </Flex>
            ))}
          </Flex>
        </Box>
      </ModalContainer>
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

          <MenuItem
            display={"flex"}
            gap="2"
            fontSize={"14px"}
            onClick={() => setIsModalOpen(true)}
          >
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
          <MenuItem
            display={"flex"}
            gap="2"
            fontSize={"14px"}
            onClick={() => navigate("/settings")}
          >
            <Icon as={MdOutlineSettings} />
            Settings
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default ProfileDropdown;

import {
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Heading,
  Button,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ModalContainer from "../../../components/ModalContainer";
import { followers } from "../../../components/ProfileDropdown/data";
import { IModalProps } from "../../../types";

const FollowersModal = ({
  isOpen,
  onClose,
  tab,
}: IModalProps & { tab?: number }) => {
  const [activeTab, setActiveTab] = useState<"followers" | "following">(
    tab === 0 ? "followers" : "following"
  );
  useEffect(() => {
    if (tab === 0) {
      setActiveTab("followers");
    } else {
      setActiveTab("following");
    }
  }, [tab]);
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <Flex
        pt="54px"
        px="64px"
        pb="10px"
        gap="32px"
        mb="24px"
        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.05"
      >
        <Box
          position={"relative"}
          cursor="pointer"
          onClick={() => setActiveTab("followers")}
        >
          <Heading fontSize={"16px"} fontWeight="500">
            Followers
          </Heading>
          {activeTab === "followers" && (
            <Box
              bottom="-10px"
              position={"absolute"}
              h="2px"
              w="48px"
              bgColor="pryColor"
              left="50%"
              transform={"translate(-50%)"}
            />
          )}
        </Box>
        <Box
          position={"relative"}
          cursor="pointer"
          onClick={() => setActiveTab("following")}
        >
          <Heading fontSize={"16px"} fontWeight="500">
            Following
          </Heading>
          {activeTab === "following" && (
            <Box
              position={"absolute"}
              mx="auto"
              bottom="-10px"
              h="2px"
              w="48px"
              bgColor="pryColor"
              left="50%"
              transform={"translate(-50%)"}
            />
          )}
        </Box>
      </Flex>

      <Flex
        flexDirection="column"
        gap="24px"
        px="64px"
        pb="40px"
        overflowY={"scroll"}
      >
        <InputGroup mb="26px" w="full">
          <InputLeftElement>
            <AiOutlineSearch color="#757575" />
          </InputLeftElement>
          <Input pl="60px" placeholder="Search account" />
        </InputGroup>
        {activeTab === "followers" &&
          followers.map((el) => (
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
        {activeTab === "following" &&
          followers.map((el) => (
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
              <Button variant={"secondary"}>Following</Button>
            </Flex>
          ))}
      </Flex>
    </ModalContainer>
  );
};

export default FollowersModal;

import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineShoppingCart, MdOutlineFavoriteBorder } from "react-icons/md";
import BadgeComp from "../../components/BadgeComp";
import Logo from "../../components/Logo";

const Topbar = () => {
  return (
    <>
      <Flex
        align={"center"}
        justify="center"
        h="30px"
        mb="15px"
        bgImage={
          "linear-gradient(90.07deg, #5614B0 0%, rgba(219, 214, 92, 0.8) 100%)"
        }
      >
        <Text fontWeight={"600"} fontSize="12px" color="#fff">
          10% percent discount on deliveries within lagos
        </Text>
      </Flex>
      <Flex justify={"space-between"} align="center" h="" px={["96px"]}>
        <Logo />
        <InputGroup maxW={"773px"}>
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="#757575" />}
          />
          <Input />
        </InputGroup>
        <Flex align={"center"} gap="16px">
          <BadgeComp count={0}>
            <Icon
              as={IoMdNotificationsOutline}
              fontSize={"32"}
              color="#808080"
            />
          </BadgeComp>
          <BadgeComp count={0}>
            <Icon as={MdOutlineShoppingCart} fontSize={"32"} color="#808080" />
          </BadgeComp>
          <BadgeComp count={0}>
            <Icon
              as={MdOutlineFavoriteBorder}
              fontSize={"32"}
              color="#808080"
            />
          </BadgeComp>
        </Flex>
        <Flex align={"center"}>
          <Button
            variant={"ghost"}
            _hover={{}}
            fontSize="16px"
            fontWeight={"400"}
          >
            Login
          </Button>

          <Box h="24px" w="2px" bg="#323232" />
          <Button
            variant={"ghost"}
            _hover={{}}
            fontSize="16px"
            fontWeight={"400"}
          >
            Register
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Topbar;

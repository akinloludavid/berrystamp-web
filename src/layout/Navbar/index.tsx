import { Box, Flex, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { designerNavlinks, navLinks } from "./data";
import {
  BERRY_STAMP_USERKEY,
  getLocalStorage,
  isNavActive,
} from "../../utils/helper";

const Navbar = () => {
  const navigate = useNavigate();
  const user = getLocalStorage(BERRY_STAMP_USERKEY);
  console.log(user);
  return (
    <Flex
      gap="50px"
      h="44px"
      borderBottom={"1px solid #FCFCFC"}
      px="96px"
      mt="18px"
      w="100%"
      sx={{
        "@media (max-width:991px)": {
          display: "none",
        },
      }}
    >
      {user?.role === "designer" &&
        designerNavlinks?.map((item) => (
          <Box
            key={nanoid()}
            cursor="pointer"
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            onClick={() => navigate(item.route)}
            _hover={{
              color: "red",
            }}
            borderBottom={isNavActive(item.route) ? "2px solid #3E2F8A" : ""}
          >
            <Text
              _hover={{
                color: "red",
              }}
              fontSize={"16px"}
              fontWeight="400"
              color="#323232"
            >
              {item.label}
            </Text>
          </Box>
        ))}
      {(!user?.role || user?.role === "buyer") &&
        navLinks.map((item) => (
          <Box
            key={nanoid()}
            cursor="pointer"
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            onClick={() => navigate(item.route)}
            _hover={{
              color: "red",
            }}
            borderBottom={isNavActive(item.route) ? "2px solid #3E2F8A" : ""}
          >
            <Text
              _hover={{
                color: "red",
              }}
              fontSize={"16px"}
              fontWeight="400"
              color="#323232"
            >
              {item.label}
            </Text>
          </Box>
        ))}
    </Flex>
  );
};

export default Navbar;

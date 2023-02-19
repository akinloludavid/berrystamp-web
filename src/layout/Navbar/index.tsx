import { Box, Flex, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../../utils/data";
import { isNavActive } from "../../utils/helper";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Flex
      gap="50px"
      h="44px"
      borderBottom={"1px solid #FCFCFC"}
      px="96px"
      mt="18px"
      w="100%"
      sx={{
        "@media (max-width:767px)": {
          display: "none",
        },
      }}
    >
      {navLinks.map((item) => (
        <Box
          key={nanoid()}
          cursor="pointer"
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          onClick={() => navigate(item.route)}
          borderBottom={isNavActive(item.route) ? "2px solid #3E2F8A" : ""}
        >
          <Text fontSize={"16px"} fontWeight="400" color="#323232">
            {item.label}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default Navbar;

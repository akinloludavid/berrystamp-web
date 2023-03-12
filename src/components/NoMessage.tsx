import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import ExploreCarousel from "./carousels/ExploreCarousel";
import LoginText from "./LoginText";
import RegisterText from "./RegisterText";

const NoMessage = () => {
  const navigate = useNavigate();

  return (
    <Box minHeight={"70vh"}>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        maxWidth={"max-content"}
        mx={"auto"}
        mt={"7rem"}
      >
        <Image src="/assets/gifs/chat.gif" />
        <Text variant={"body2"} fontWeight={"500"} mb={"13.1875rem"}>
          No messages found. <LoginText />
          or
          <RegisterText />
          an account to see all messages
        </Text>
      </Flex>

      <ExploreCarousel />
    </Box>
  );
};

export default NoMessage;

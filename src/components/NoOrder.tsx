import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ExploreCarousel from "./carousels/ExploreCarousel";
import { useNavigate } from "react-router-dom";
import LoginText from "./LoginText";
import RegisterText from "./RegisterText";

const NoOrder = ({ img }: { img: string }) => {
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
        <Image src={img} maxWidth={"150px"} />
        <Text variant={"body2"} fontWeight={"500"} mb={"13.1875rem"}>
          No orders found. <LoginText />
          or
          <RegisterText />
          an account to see all orders
        </Text>
      </Flex>

      <ExploreCarousel />
    </Box>
  );
};

export default NoOrder;

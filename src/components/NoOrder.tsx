import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import ExploreCarousel from "./carousels/ExploreCarousel";
import { useNavigate } from "react-router-dom";

const NoOrder = () => {
  const navigate = useNavigate();
  return (
    <Box minHeight={"70vh"}>
      <Box maxWidth={"max-content"} mx={"auto"} mt={"7rem"}>
        <Image src="/assets/gifs/" />
        <Text variant={"body2"} fontWeight={"500"} mb={"13.1875rem"}>
          No orders found.{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ color: "#0050BA", cursor: "pointer" }}
          >
            Login
          </span>{" "}
          or
          <span
            onClick={() => navigate("/register")}
            style={{ color: "#0050BA", cursor: "pointer" }}
          >
            {" "}
            create
          </span>{" "}
          an account to see all orders
        </Text>
      </Box>

      <ExploreCarousel />
    </Box>
  );
};

export default NoOrder;

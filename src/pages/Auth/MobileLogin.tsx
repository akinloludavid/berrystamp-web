import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const MobileLogin = () => {
  const navigate = useNavigate();
  return (
    <Flex
      flexDirection={"column"}
      width={"80%"}
      mx={"auto"}
      pt={"1.56rem"}
      pb={"3.65rem"}
      alignItems={"center"}
    >
      <Heading variant="h2" mb={"1rem"} fontWeight={"700"}>
        Login
      </Heading>
      <Text variant={"body4"} mt={"0.25rem"} mb={"2rem"}>
        Don’t have an account?
        <span
          style={{ color: "#3E2F8A", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Sign up
        </span>
      </Text>
      <form action="" style={{ width: "100%" }}>
        <FormControl>
          <Text mb="8px" variant={"body3"}>
            Email
          </Text>
          <Input variant="outline" placeholder="Enter email" type="email" />
        </FormControl>
        <FormControl mt={"1rem"}>
          <Text mb="8px" variant={"body3"}>
            Password
          </Text>
          <Input
            variant="outline"
            placeholder="Enter password"
            type="password"
          />
        </FormControl>
        <Checkbox mt={"1.5rem"}>Remember me</Checkbox>
        <Text flexGrow={"1"} />
        <Text variant={"body3"} mt={"1rem"} mb={"4rem"} textAlign={"right"}>
          Forgot password?
        </Text>
        <Button mx={"auto"} display={"block"}>
          Login
        </Button>
      </form>
    </Flex>
  );
};

export default MobileLogin;

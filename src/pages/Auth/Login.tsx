import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Heading,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import ModalContainer from "../../components/ModalContainer";

const Login = ({
  isOpen,
  onClose,
  signUp,
}: {
  isOpen: boolean;
  onClose: any;
  signUp: any;
}) => {
  const navigate = useNavigate();
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <Flex
        flexDirection={"column"}
        width={"60%"}
        mx={"auto"}
        pt={"3.56rem"}
        pb={"3.65rem"}
        alignItems={"center"}
      >
        <Logo />
        <Heading variant="h2" mt={"1.5rem"} fontWeight={"700"}>
          Login
        </Heading>
        <Text variant={"body4"} mt={"0.25rem"} mb={"2rem"}>
          Don’t have an account?
          <span
            style={{ color: "#3E2F8A", cursor: "pointer" }}
            onClick={signUp}
          >
            {" "}
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
          <Flex mb={"4.44rem"} mt={"1.03rem"}>
            <Checkbox>Remember me</Checkbox>
            <Text flexGrow={"1"} />
            <Text variant={"body3"}>Forgot password?</Text>
          </Flex>
          <Button mx={"auto"} display={"block"}>
            Login
          </Button>
        </form>
      </Flex>
    </ModalContainer>
  );
};

export default Login;

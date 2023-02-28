import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import ModalContainer from "../../components/ModalContainer";
import { useLogin } from "../../services/query/user";

const Login = ({
  isOpen,
  onClose,
  signUp,
}: {
  isOpen: boolean;
  onClose: any;
  signUp: any;
}) => {
  const { mutate: mutateLogin, isLoading: isLoginLoading } = useLogin();
  const navigate = useNavigate();
  const handleLogin = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateLogin({});
  };
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
          <Text
            as="span"
            color="pryColor"
            variant={"body4"}
            cursor={"pointer"}
            onClick={signUp}
          >
            {" "}
            Sign up
          </Text>
        </Text>
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <FormControl>
            <FormLabel mb="8px">Email</FormLabel>
            <Input variant="outline" placeholder="Enter email" type="email" />
          </FormControl>
          <FormControl mt={"1rem"}>
            <FormLabel mb="8px">Password</FormLabel>
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
          <Button
            type="submit"
            mx={"auto"}
            display={"block"}
            isLoading={isLoginLoading}
          >
            Login
          </Button>
        </form>
      </Flex>
    </ModalContainer>
  );
};

export default Login;

import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
const LoginText = () => {
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: OnLoginClose,
  } = useDisclosure();
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: OnRegisterClose,
  } = useDisclosure();
  return (
    <>
      <span
        onClick={onLoginOpen}
        style={{ color: "#0050BA", cursor: "pointer", paddingRight: "4px" }}
      >
        Login
      </span>
      <Login
        isOpen={isLoginOpen}
        onClose={OnLoginClose}
        signUp={() => {
          OnLoginClose();
          onRegisterOpen();
        }}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={OnRegisterClose}
        login={() => {
          OnRegisterClose();
          onLoginOpen();
        }}
      />
    </>
  );
};

export default LoginText;

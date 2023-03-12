import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
const RegisterText = () => {
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
        onClick={onRegisterOpen}
        style={{
          color: "#0050BA",
          cursor: "pointer",
          paddingLeft: "4px",
          paddingRight: "4px",
        }}
      >
        Create
      </span>
      <Register
        isOpen={isRegisterOpen}
        onClose={OnRegisterClose}
        login={() => {
          OnRegisterClose();
          onLoginOpen();
        }}
      />
      <Login
        isOpen={isLoginOpen}
        onClose={OnLoginClose}
        signUp={() => {
          OnLoginClose();
          onRegisterOpen();
        }}
      />
    </>
  );
};

export default RegisterText;

import {
  Box,
  Flex,
  Heading,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import Logo from "../../../components/Logo";

const Register = ({ isOpen, onClose }: { isOpen: boolean; onClose: any }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxWidth={"52rem"} backgroundColor={"#fff"}>
        <ModalCloseButton />
        <Box width={"70%"} mx={"auto"} pt={"3.56rem"} pb={"3.65rem"}>
          <Logo />
          <Heading
            variant="h2"
            mt={"1.5rem"}
            fontWeight={"700"}
            textAlign={"center"}
          >
            Sign up
          </Heading>
          <Text
            variant={"body4"}
            mt={"0.25rem"}
            mb={"2rem"}
            textAlign={"center"}
          >
            Create an account to access our services
          </Text>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default Register;

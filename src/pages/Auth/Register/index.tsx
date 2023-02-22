import { useState } from "react";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import Logo from "../../../components/Logo";
import ModalContainer from "../../../components/ModalContainer";
import { registerData } from "../../../utils/data";
import Form from "./Form";

const Register = ({
  isOpen,
  onClose,
  login,
}: {
  isOpen: boolean;
  onClose?: any;
  login?: any;
}) => {
  const [type, setType] = useState<null | number>(null);
  const [stage, setStage] = useState<"type" | "form">("type");
  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={() => {
        setStage("type");
        onClose();
      }}
    >
      <Flex
        flexDirection={"column"}
        width={"70%"}
        mx={"auto"}
        pt={"3.56rem"}
        pb={"3.65rem"}
        alignItems={"center"}
      >
        <Logo />
        <Heading variant="h2" mt={"1.5rem"} fontWeight={"700"}>
          Sign up
        </Heading>
        {stage == "type" ? (
          <>
            <Text
              variant={"body4"}
              mt={"0.25rem"}
              mb={"2rem"}
              textAlign={"center"}
            >
              Create an account to access our services
            </Text>
            <Flex gap={"0.5rem"}>
              {registerData.map((data, index: number) => (
                <Flex
                  key={nanoid()}
                  border={"1px solid"}
                  borderColor={index == type ? "red" : "transparent"}
                  onClick={() => setType(index)}
                  backgroundColor={"#F3F3F3"}
                  width={"11.625rem"}
                  height={"11.625rem"}
                  textAlign={"center"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  paddingX={"12px"}
                  paddingTop={"1.75rem"}
                  cursor={"pointer"}
                >
                  <Image src={data.image} />
                  <Text
                    variant={"body4"}
                    fontWeight={"700"}
                    pt={"0.5rem"}
                    pb={"0.25rem"}
                  >
                    {data.title}
                  </Text>
                  <Text variant={"body3"} color={"#757575"}>
                    {data.body}
                  </Text>
                </Flex>
              ))}
            </Flex>
            <Button
              mx={"auto"}
              display={"block"}
              my={"2rem"}
              onClick={() => setStage("form")}
            >
              Continue
            </Button>
            <Text variant={"body4"} mt={"0.25rem"}>
              Already have an account?
              <Text
                as="span"
                ml="5px"
                color="pryColor"
                cursor={"pointer"}
                onClick={login}
                variant="body4"
              >
                Login
              </Text>
            </Text>
          </>
        ) : (
          <>
            <Text variant={"body4"} mt={"0.25rem"} mb={"2rem"}>
              Already have an account?{" "}
              <Text
                as="span"
                ml="5px"
                color="pryColor"
                cursor={"pointer"}
                // sx={{ color: "#3E2F8A", cursor: "pointer", ml: "20px" }}
                onClick={() => {
                  setStage("type");
                  login();
                }}
              >
                Login
              </Text>
            </Text>
            <Form type={type} />
          </>
        )}
      </Flex>
    </ModalContainer>
  );
};

export default Register;

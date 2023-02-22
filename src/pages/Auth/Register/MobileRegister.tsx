import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import Logo from "../../../components/Logo";
import ModalContainer from "../../../components/ModalContainer";
import { registerData } from "../../../utils/data";
import Form from "./Form";
import { useNavigate, useSearchParams } from "react-router-dom";

const MobileRegister = () => {
  const [type, setType] = useState<null | number>(null);
  const [stage, setStage] = useState<"type" | "form">("type");
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const currentStep = searchParam.get("as") || null;

  useEffect(() => {
    if (currentStep == null) setStage("type");
  }, [currentStep]);
  return (
    <Flex
      flexDirection={"column"}
      width={"80%"}
      mx={"auto"}
      pt={"1.56rem"}
      pb={"3.65rem"}
      alignItems={"center"}
    >
      <Heading variant="h2" mb={"1.5rem"} fontWeight={"700"}>
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
          <Flex gap={"0.5rem"} flexDirection={"column"}>
            {registerData.map((data, index: number) => (
              <Flex
                key={nanoid()}
                border={"1px solid"}
                borderColor={index == type ? "red" : "transparent"}
                onClick={() => {
                  setType(index);
                  navigate(`?as=${data.role}`);
                }}
                backgroundColor={"#F3F3F3"}
                width={"100%"}
                height={"5.625rem"}
                textAlign={"center"}
                alignItems={"center"}
                paddingX={"12px"}
                paddingY={"1rem"}
                gap={".75rem"}
                cursor={"pointer"}
              >
                <Image src={data.image} />
                <Box>
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
                </Box>
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
              color="pryColor"
              cursor={"pointer"}
              onClick={() => navigate("/login")}
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
                navigate("/login");
              }}
            >
              Login
            </Text>
          </Text>
          <Form type={type} />
        </>
      )}
    </Flex>
  );
};

export default MobileRegister;

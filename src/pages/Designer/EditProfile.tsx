import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React from "react";
import ModalContainer from "../../components/ModalContainer";
import UploadFile from "../../components/UploadFile";

const EditProfile = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose?: any;
}) => {
  const items = [
    "Geometry art",
    "Abstract art",
    "Minimal art",
    "Illustration",
    "Contemporary art",
    "Texture art",
    "Line art",
    "Fractal art",
    "Animation",
    "Creative art",
    "Fantasy art",
    "Animal art",
    "Potrait art",
  ];
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} maxWidth="47rem">
      <Box
        height={"39.9rem"}
        borderRadius={"10px"}
        bg={"white"}
        py={"2rem"}
        overflowY={"auto"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mx="1.3rem"
          mb={"1rem"}
        >
          <Text variant={"body4"} fontWeight={"700"}>
            Edit Profile
          </Text>
          <Button width={"5rem"}>Save</Button>
        </Flex>
        <Flex
          height={"13rem"}
          mx={"0.25rem"}
          bg={"#C9C9C9"}
          alignItems={"center"}
          position={"relative"}
          justifyContent={"center"}
          mb={"5.125rem"}
        >
          <UploadFile>
            <Image src="/assets/vectors/camera.svg" />
          </UploadFile>
          <Flex
            position={"absolute"}
            width={"7rem"}
            height={"7rem"}
            borderRadius={"full"}
            bg={"#C9C9C9"}
            border="5px solid white"
            left={"21px"}
            bottom={"-3.5rem"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <UploadFile>
              <Image src="/assets/vectors/camera.svg" />
            </UploadFile>
          </Flex>
        </Flex>

        <Box px={"1.5rem"}>
          <Text variant={"body3"} fontWeight={"600"}>
            Shop Name
          </Text>
          <Select mb={"1rem"} mt={".5rem"}>
            <option>Select printing type</option>
          </Select>
          <Text variant={"body3"} fontWeight={"600"}>
            Bio
          </Text>
          <Textarea mt={"0.5rem"} mb={"1rem"}></Textarea>
          <Text variant={"body3"} fontWeight={"600"}>
            Add Specialization
          </Text>
          <CheckboxGroup>
            <Grid
              gridTemplateColumns={"repeat(5, 1fr)"}
              mt={"1rem"}
              rowGap={"1rem"}
            >
              {items.map((el) => (
                <Checkbox key={nanoid()} colorScheme="purple" value={el}>
                  <Text variant={"body3"}> {el}</Text>
                </Checkbox>
              ))}
            </Grid>
          </CheckboxGroup>
        </Box>
      </Box>
    </ModalContainer>
  );
};

export default EditProfile;

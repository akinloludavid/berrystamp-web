import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React from "react";
import ModalContainer from "../../components/ModalContainer";

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
      <Box height={"39.9rem"} borderRadius={"10px"} bg={"white"} pt={"2rem"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          mx="1.3rem"
        >
          <Text variant={"body4"} fontWeight={"700"}>
            Edit Profile
          </Text>
          <Button width={"5rem"}>Save</Button>
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
                  {el}
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

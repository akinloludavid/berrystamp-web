import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Grid,
  GridItem,
  Heading,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import React from "react";
import MainContainer from "../../layout/MainContainer";
import { designPurpose, designTheme, items } from "./data";

const NewCustomDesign = () => {
  return (
    <Box>
      <MainContainer mt={"35px"}>
        <Text color={"#323232"}>What are you designing for?</Text>
        <RadioGroup defaultValue="Birthday Ceremony">
          <Grid
            gridTemplateColumns={"repeat(4, 1fr)"}
            mt={"1rem"}
            rowGap={"1rem"}
          >
            {designPurpose.map((el) => (
              <Radio colorScheme="purple" value={el}>
                {el}
              </Radio>
            ))}
          </Grid>
        </RadioGroup>
      </MainContainer>
      <MainContainer mt={"3rem"}>
        <Text color={"#323232"}>What Item(s) would you like to print on?</Text>
        <CheckboxGroup>
          <Grid
            gridTemplateColumns={"repeat(4, 1fr)"}
            mt={"1rem"}
            rowGap={"1rem"}
          >
            {items.map((el) => (
              <Checkbox colorScheme="purple" value={el}>
                {el}
              </Checkbox>
            ))}
          </Grid>
        </CheckboxGroup>
      </MainContainer>
      <MainContainer mt={"3rem"}>
        <Text color={"#323232"}>Preferred design theme</Text>
        <RadioGroup defaultValue="Minimal">
          <Grid
            gridTemplateColumns={"repeat(4, 1fr)"}
            mt={"1rem"}
            rowGap={"1rem"}
          >
            {designTheme.map((el) => (
              <Radio colorScheme="purple" value={el}>
                {el}
              </Radio>
            ))}
          </Grid>
        </RadioGroup>
        <Button>Select designer</Button>
      </MainContainer>
    </Box>
  );
};

export default NewCustomDesign;

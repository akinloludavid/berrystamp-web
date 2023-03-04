import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import ModalContainer from "./ModalContainer";

const PersonalCustomizationCard = () => {
  const {
    isOpen: isDesignModalOpen,
    onOpen: onDesignModalOpen,
    onClose: OnDesignModalClose,
  } = useDisclosure();
  const {
    isOpen: isPrintingModalOpen,
    onOpen: onPrintingModalOpen,
    onClose: OnPrintingModalClose,
  } = useDisclosure();
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  const [value, setValue] = React.useState("1");

  return (
    <Box>
      <Text variant={"body2"} mt={"1.5rem"}>
        <Text color={"#000"} as="span" variant={"body2"}>
          Item Specifications
        </Text>
        (Colour, quantity and size)
      </Text>
      <Flex
        mt={"12px"}
        cursor={"pointer"}
        maxW={"max-content"}
        alignItems={"center"}
        gap={"6px"}
        onClick={onDesignModalOpen}
      >
        <Icon as={IoIosAddCircleOutline} color={"#3E2F8A"} />
        <Text color={"#3E2F8A"} variant={"body2"}>
          Add specification
        </Text>
      </Flex>
      <Text variant={"body2"} mt={"1.5rem"}>
        <Text color={"#000"} as="span" variant={"body2"}>
          Printing Specifications
        </Text>
        (Type, budget and time frame)
      </Text>
      <Flex
        mt={"12px"}
        cursor={"pointer"}
        maxW={"max-content"}
        alignItems={"center"}
        gap={"6px"}
        onClick={onPrintingModalOpen}
      >
        <Icon as={IoIosAddCircleOutline} color={"#3E2F8A"} />
        <Text color={"#3E2F8A"} variant={"body2"}>
          Add specification
        </Text>
      </Flex>
      <Flex gap={"1.5rem"} mt={"2rem"}>
        <Button
          width={"240px"}
          height={"52px"}
          color={"#3E2F8A"}
          variant="outline"
          border={"1px solid #3E2F8A"}
        >
          Request customization
        </Button>
        <Button width={"240px"} height={"52px"}>
          Add to Cart
        </Button>
      </Flex>
      <ModalContainer isOpen={isDesignModalOpen} onClose={OnDesignModalClose}>
        <Box py={"40px"} px={"44px"}>
          <Heading variant={"h3"} textAlign={"center"}>
            Material Specification
          </Heading>
          <Text variant={"body4"} pt={"4px"} textAlign={"center"}>
            Please select preferred specifications for the choosen item
          </Text>
          <Text mt={"2.5rem"} variant={"body4"} fontWeight={"700"} mb={"1rem"}>
            Choose Colour
          </Text>
          <Flex gap={"5rem"}>
            <Box>
              <Text variant={"body4"} fontWeight={"700"} mb={"1rem"}>
                Choose size
              </Text>
              <Flex gap={"12px"}>
                <Text as="span" variant={"body2"}>
                  Sizes:
                </Text>
                {sizes.map((el, index) => (
                  <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    width={"45.3px"}
                    height={"30.2px"}
                    bg={"#F7F7F7"}
                    borderRadius={"4px"}
                    border={"1.5px solid #C9C9C9"}
                    // borderColor={activesize == index ? "red" : "#C9C9C9"}
                    cursor={"pointer"}
                    // onClick={() => setactivesize(index)}
                  >
                    {el}
                  </Flex>
                ))}
              </Flex>
            </Box>
            <Box>
              <Text variant={"body4"} fontWeight={"700"} mb={"1rem"}>
                Choose Quantity
              </Text>
              <Flex gap={"7px"}>
                <Text as="span" variant={"body2"}>
                  Quantity:
                </Text>
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"30px"}
                  height={"30px"}
                  bg={"#F7F7F7"}
                  borderRadius={"4px"}
                  border={"1px solid #C9C9C9"}
                  cursor={"pointer"}
                >
                  -
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"30px"}
                  height={"30px"}
                  bg={"#F7F7F7"}
                  borderRadius={"4px"}
                  border={"1px solid #C9C9C9"}
                >
                  1
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={"30px"}
                  height={"30px"}
                  bg={"#F7F7F7"}
                  borderRadius={"4px"}
                  border={"1px solid #C9C9C9"}
                  cursor={"pointer"}
                >
                  +
                </Flex>
              </Flex>
            </Box>
          </Flex>
          <Button display={"block"} mt={"4rem"} mx={"auto"}>
            Continue
          </Button>
        </Box>
      </ModalContainer>
      <ModalContainer
        isOpen={isPrintingModalOpen}
        onClose={OnPrintingModalClose}
      >
        <Box py={"40px"} px={"44px"}>
          <Heading variant={"h3"} textAlign={"center"}>
            Printing Preferences
          </Heading>
          <Text variant={"body4"} pt={"4px"} textAlign={"center"}>
            Please select preferred specifications for the choosen item
          </Text>
          <Box mt={"2.5rem"}>
            <Text variant={"body3"} fontWeight={"600"} mb={"0.5rem"}>
              Preferred printing type:
            </Text>
            <Select placeholder="Select printing type" mb={"1.5rem"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Text variant={"body3"} fontWeight={"600"} mb={"0.5rem"}>
              Budget range(₦)
            </Text>
            <Flex mb={"1.5rem"} gap={"0.5rem"} alignItems={"center"}>
              <Input type={"number"} /> <span>-</span>
              <Input type={"number"} />
            </Flex>
            <Text variant={"body3"} fontWeight={"600"} mb={"0.5rem"}>
              Preferred delivery date
            </Text>
            <Input type={"date"} mb={"2.5rem"} />
            <Text variant={"body4"} fontWeight={"700"} mb={"0.5rem"}>
              Do you have you own item?
            </Text>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="column">
                <Radio value="1">
                  Yes, I have my items and I would like a pickup and delivery
                  service
                </Radio>
                <Radio value="2">
                  No, Get Item from the printer’s inventory with delivery
                  service
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
      </ModalContainer>
    </Box>
  );
};

export default PersonalCustomizationCard;

import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React from "react";
import { IModalProps } from "../../types";
import ModalContainer from "../ModalContainer";
import Stars from "../Stars";
import { reviews } from "./data";

const CustomerReviews = ({ isOpen, onClose }: IModalProps) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <Box boxShadow={"0px 1px 2px rgba(0, 0, 0, 0.05)"}>
        <Heading
          mx="60px"
          mt="46px"
          variant={"h5"}
          as="h5"
          color="textColor"
          mb="18px"
        >
          Customer Reviews
        </Heading>
      </Box>
      <Box px="60px" h="592px" overflowY={"scroll"}>
        <Box pt="32px" px="60px" display={"flex"} flexDir="column" gap="32px">
          {reviews.map((el) => (
            <Flex gap="16px" key={nanoid()}>
              <Image src={el.image} w="48px" h="48px" borderRadius={"4px"} />
              <Box>
                <Stars size={el.rating} />
                <Heading variant={"h5"} as="h5" my="12px">
                  {el.title}
                </Heading>
                <Text
                  fontSize={"16px"}
                  fontWeight="400"
                  lineHeight={"24px"}
                  mb="12px"
                  color="textColor"
                >
                  {el.description}
                </Text>
                <Flex align={"center"} gap="12px">
                  <Text variant={"body4"} color="#757575">
                    {el.date}
                  </Text>
                  <Text variant={"body4"} color="#757575">
                    |
                  </Text>
                  <Text variant={"body4"} color="#757575">
                    {el.name}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </ModalContainer>
  );
};

export default CustomerReviews;

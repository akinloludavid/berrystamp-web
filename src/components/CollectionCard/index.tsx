import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

interface ICollectionCard {
  image: string;
  title: string;
  design: string | number;
}
const CollectionCard = ({ image, title, design }: ICollectionCard) => {
  return (
    <Box width={"15rem"} height={"23.4rem"} bg={"#fff"} px={"0.5rem"}>
      <Image mb="1rem" src={image} borderRadius={"8px"} w="240px" h="295px" />
      <Heading fontSize={"16px"} fontWeight="600" color="black" mb="4px">
        {title}
      </Heading>
      <Text variant={"body2"} mb={"1.5rem"}>
        {design} designs
      </Text>
    </Box>
  );
};

export default CollectionCard;

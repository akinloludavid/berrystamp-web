import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

interface IRecentCard {
  image: string;
  title: string;
  author: string;
  price?: string;
}
const DesignCard = ({ image, title, author, price }: IRecentCard) => {
  return (
    <Box w={["100%", "239"]}>
      <Image
        w={["100%", "239px"]}
        h={["180px", "216px"]}
        src={image}
        borderRadius={"8px"}
        alt={title}
        mb="16px"
      />
      <Text variant={"body3"}>{title}</Text>
      <Text variant={"body3"} fontWeight="600" color="#3E2F8A">
        <Text as="span" variant={"body3"} color={"#757575"}>
          by{" "}
        </Text>
        {author}
      </Text>
      <Text mt="8px" fontSize={"14px"} fontWeight="700" color="textColor">
        {price}
      </Text>
    </Box>
  );
};

export default DesignCard;

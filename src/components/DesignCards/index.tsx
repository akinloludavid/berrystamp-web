import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

interface IDesignCard {
  image: string;
  title: string;
  author: string;
  price: string | number;
}
const DesignCard = ({ image, title, author, price }: IDesignCard) => {
  return (
    <Box>
      <Image
        src={image}
        borderRadius={"8px"}
        w={["100%", "240px"]}
        h={["auto", "240px"]}
      />
      <Box pt={["24px"]} pb="20px" px="16px">
        <Text fontSize={"16px"} fontWeight="600" color="black" mb="4px">
          {title}
        </Text>
        <Flex mb="8px">
          <Text color="#757575" fontWeight={"400"} fontSize="16px">
            by
          </Text>
          <Text
            fontSize={"16px"}
            fontWeight="600"
            as={Link}
            to={`/author/${author}`}
          >
            {author}
          </Text>
        </Flex>
        <Text>₦{price}</Text>
      </Box>
    </Box>
  );
};

export default DesignCard;

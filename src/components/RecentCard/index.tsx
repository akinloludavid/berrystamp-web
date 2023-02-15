import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

interface IRecentCard {
  image: string;
  title: string;
  author: string;
}
const RecentCard = ({ image, title, author }: IRecentCard) => {
  return (
    <Box w="100%">
      <Image h="300px" w="329px" src={image} alt={title} mb="16px" />
      <Text variant="body2" color="#000000">
        {title}
      </Text>
      <Text color="#3E2F8A" variant="body2" fontWeight={"600"}>
        <Text as="span" variant={"body2"} color="#757575">
          Art by:
        </Text>
        {author}
      </Text>
    </Box>
  );
};

export default RecentCard;

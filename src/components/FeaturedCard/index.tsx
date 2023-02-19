import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { MdOutlineFavoriteBorder } from "react-icons/md";

interface IFeaturedCard {
  image: string;
  title: string;
  author: string;
  price: string;
}
const FeaturedCard = ({ image, title, author, price }: IFeaturedCard) => {
  return (
    <>
      <Flex
        flexDir={"column"}
        bgColor={"#E8E8E8"}
        borderTopStartRadius="6px"
        p="16px"
        w={["100%", "224px"]}
        h={["180px", "216px"]}
        mb="16px"
      >
        <Box
          w="24px"
          h="24px"
          borderRadius={"50%"}
          bgColor="pryColor"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          ml="auto"
        >
          <MdOutlineFavoriteBorder color="#FFFFFF" />
        </Box>
        <Image mx={"auto"} my="auto" src={image} alt={title} />
      </Flex>
      <Text variant={"body3"}>{title}</Text>
      <Text variant={"body3"} fontWeight="600" color="#3E2F8A">
        <Text as="span" variant={"body3"}>
          by
        </Text>
        {author}
      </Text>
      <Text mt="8px" fontSize={"14px"} fontWeight="700" color="textColor">
        {price}
      </Text>
    </>
  );
};

export default FeaturedCard;

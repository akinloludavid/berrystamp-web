import React from "react";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  MdChevronRight,
  MdOutlineFavoriteBorder,
  MdShare,
} from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import MainContainer from "../../layout/MainContainer";
import GoBack from "../../components/GoBack";
import {
  itemsDesign,
  itemsMoreDesign,
  marketPlaceProducts,
} from "../../utils/data";
import { nanoid } from "nanoid";
import DesignCard from "../../components/DesignCards";

const DesignerDetails = () => {
  const { designName } = useParams();
  console.log(designName);
  const designerDetails = marketPlaceProducts.filter(
    (item) => item.title.toLowerCase() === designName?.toLowerCase()
  )[0];
  return (
    <MainContainer mt="44px">
      {/* <Flex align={"center"} gap="8px" mb="13px">
        <Text color="#757575" variant={"body3"}>
          Designers
        </Text>
        <MdChevronRight />
        <Text variant={"body3"} color="black">
          {designName}
        </Text>
      </Flex> */}
      <GoBack />
      <Flex mt="16px" gap="48px" flexDir={["column", "column", "row"]}>
        <Image
          w={["414px"]}
          src={designerDetails.image}
          alt={designerDetails.title}
        />
        <Box pt="20px">
          <Heading variant={"h1"} fontWeight="600">
            {designerDetails.title}
          </Heading>
          <Text color="#757575" variant={"body3"} mb="8px">
            {designerDetails.description}
          </Text>
          <Flex mb="16px">
            <Text>Art by</Text>
            <Text as={Link} to={`/author/shemzy`}>
              {designerDetails.author}
            </Text>
          </Flex>
          <Flex gap="12px">
            <Icon
              cursor={"pointer"}
              as={MdOutlineFavoriteBorder}
              fontSize="20px"
            />
            <Icon cursor={"pointer"} as={MdShare} fontSize="20px" />
          </Flex>
        </Box>
      </Flex>
      <Box mt="72px">
        <Text
          textAlign={"center"}
          fontWeight={"500"}
          fontSize="20px"
          lineHeight={"32px"}
          color="#323232"
        >
          Items you’d love this design on
        </Text>
        <Divider border="0.5px solid #757575" />
        <Grid
          mt="32px"
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
            "repeat(5,1fr)",
          ]}
          columnGap="13px"
          rowGap={"40px"}
          mb="54px"
        >
          {itemsDesign.map((el) => (
            <GridItem key={nanoid()}>
              <DesignCard {...el} />
            </GridItem>
          ))}
        </Grid>
        <Text
          color="pryColor"
          fontWeight={"500"}
          fontSize="20px"
          textAlign={"center"}
          mb="24px"
        >
          More like this
        </Text>
        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
            "repeat(5,1fr)",
          ]}
          columnGap="13px"
          rowGap={"40px"}
          mb="54px"
        >
          {itemsMoreDesign.map((el) => (
            <GridItem key={nanoid()}>
              <DesignCard {...el} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </MainContainer>
  );
};

export default DesignerDetails;

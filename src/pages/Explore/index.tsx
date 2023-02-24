import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import DesignCard from "../../components/DesignCard";
import FeaturedCard from "../../components/FeaturedCard";
import HeartIcon from "../../components/vectors/HeartIcon";
import MainContainer from "../../layout/MainContainer";
import {
  featuredDesigns,
  recentDesigns,
  recentDesigns2,
} from "../../utils/data";

const Explore = () => {
  return (
    <section>
      <MainContainer mx="auto" my="96px">
        <Flex gap={"3rem"} w="100%">
          <Image
            w={["100%", "414px"]}
            h={["180px", "339px"]}
            src={"/assets/grateful.png"}
            borderRadius={"8px"}
            alt=""
            mb="16px"
          />
          <Box maxWidth={"35rem"} pt={"2rem"}>
            <Heading fontSize={"40px"} color={"#000"} fontWeight={"600"}>
              Fun and peaceful emotions
            </Heading>
            <Text mt={"2px"} mb={"8px"} variant={"body2"}>
              This typography art design is simple, minimal yet fun. It takes
              its inspiration from the little things we are thankful for.
            </Text>
            <Text variant={"body3"} fontWeight="600" color="#3E2F8A">
              <Text as="span" variant={"body3"} color={"#757575"}>
                Art by{" "}
              </Text>
              Shemxy
            </Text>
            <Flex alignItems={"center"} mt={"1rem"} gap={"1rem"}>
              <HeartIcon />
              <Image src={"/assets/vectors/share.svg"} alt="share-icon" />
            </Flex>
          </Box>
        </Flex>
      </MainContainer>
      <MainContainer mx="auto" my="96px">
        <Text
          as="h2"
          variant={"body1"}
          textAlign="center"
          color={"#323232"}
          mb="2rem"
          pb={"0.5rem"}
          borderBottom={"0.5px solid"}
          borderColor={"#757575"}
        >
          Items you’d love this design on{" "}
        </Text>
        <Grid
          templateColumns={[
            "repeat(2,1fr)",
            "repeat(2,1fr)",

            "repeat(2,1fr)",
            "repeat(4,1fr)",
            "repeat(5,1fr)",
          ]}
          w="100%"
          mx="auto"
          px="0px"
          rowGap={"57px"}
          columnGap="24px"
        >
          {recentDesigns2.map((el) => (
            <GridItem key={nanoid()} mx={["auto", "auto", "0"]}>
              <DesignCard {...el} />
            </GridItem>
          ))}
        </Grid>
      </MainContainer>
      <MainContainer mx="auto" my="96px">
        <Text
          variant={"body1"}
          color={"#3E2F8A"}
          textAlign="center"
          mb="1.5rem"
        >
          More like this
        </Text>
        <Grid
          templateColumns={[
            "repeat(2,1fr)",
            "repeat(2,1fr)",

            "repeat(2,1fr)",
            "repeat(4,1fr)",
            "repeat(5,1fr)",
          ]}
          w="100%"
          mx="auto"
          px="0px"
          rowGap={"57px"}
          columnGap="24px"
        >
          {featuredDesigns.map((el) => (
            <GridItem key={nanoid()}>
              <FeaturedCard {...el} />
            </GridItem>
          ))}
        </Grid>
      </MainContainer>
    </section>
  );
};

export default Explore;

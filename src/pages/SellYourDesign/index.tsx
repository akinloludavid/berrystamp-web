import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import MainContainer from "../../layout/MainContainer";
import { howItWorks } from "../../utils/data";

const SellYourDesign = () => {
  const lists = [
    "You dictate your design price value, we get a percentage on every sale",
    "Anti-piracy measures to protect your design work",
    "You get a wider audience to buy your designs",
    "You can promote your personal shop on your socials",
  ];
  return (
    <Box>
      <MainContainer
        display={"flex"}
        alignItems={["", "", "", "flex-start", "center"]}
        flexDir={["column", "column", "column", "row"]}
        mt={["40px"]}
        gap={["40px"]}
      >
        <Box maxW={["34.25rem"]}>
          <Heading as="h1" variant="h1">
            Do Your Digital Athestics & Get The Bag
          </Heading>

          <Text mt="16px" variant={"body2"}>
            Earn good and stable money from your creative abilities in an easy,
            seamless process by selling you art. We give your creativity the
            platform to thrive
          </Text>
          <Button mt="2rem">Let’s go</Button>
          <Image src="/assets/vectors/arrow.svg" ml="1.75rem" mt="40px" />
        </Box>
        <Box>
          <Image src="/assets/webp/paint-pencil.webp" />
        </Box>
      </MainContainer>
      <MainContainer mt="108px" mb="96px">
        <Heading as="h2" variant={"h2"} textAlign={["center"]} mb="48px">
          How It Works
        </Heading>
        <Grid
          maxW={"1035px"}
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
          ]}
          mx="auto"
          gap={["60px"]}
        >
          {howItWorks.map((el, index) => (
            <GridItem key={nanoid()}>
              <Box
                display="flex"
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"start"}
              >
                <Image
                  w={"40px"}
                  h={"40px"}
                  src={el.image}
                  alt={el.title}
                  mb="29px"
                />
                <Text variant={"body2"} textAlign={"center"} color="#5E529D">
                  Step {index + 1}
                </Text>
                <Heading variant={"h3"} as="h3" mb="8px">
                  {el.title}
                </Heading>
                <Text variant={"body2"} textAlign={"center"}>
                  {el.body}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </MainContainer>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(5, 1fr)"]}
      >
        <GridItem colSpan={[1, 1, 2]} height={"100%"}>
          <Image src="/assets/girl.png" height={"100%"} />
        </GridItem>
        <GridItem
          colSpan={[1, 1, 3]}
          height={"100%"}
          background="rgba(255, 182, 182, 0.1)"
          px={["24px", "4.5rem"]}
          py="3rem"
        >
          <Heading variant="h2" pb={"1.5rem"} fontWeight={"700"}>
            Why You Should Get On Board
          </Heading>
          <UnorderedList>
            {lists.map((list, index) => (
              <ListItem key={index} pb="0.75rem">
                {list}
              </ListItem>
            ))}
          </UnorderedList>
          <Heading variant="h2" fontWeight={"700"} mt="3.5rem">
            How you get paid
          </Heading>
          <Text variant="h3" mt="0.75rem">
            We operate an escrow payment policy where our registered artist and
            every other parties within production get paid 48hrs after product
            delivery. The customer can return product and request refund.
          </Text>
        </GridItem>
      </Grid>
      <MainContainer background="rgba(62, 47, 138, 0.08)">
        <Grid
          py="4.3rem"
          alignItems={"center"}
          templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]}
          gap={"2rem"}
        >
          <GridItem>
            <Box>
              <Heading variant={"h2"} fontWeight={"700"}>
                Join thousands of others artist on the platform today and start
                earning
              </Heading>
              <Button mt="2rem">Get Started</Button>
            </Box>
          </GridItem>
          <GridItem>
            <Box width={["100%", "100%", "304px"]} height={["100%", "311px"]}>
              <Image src="/assets/people.png" width={"100%"} height={"100%"} />
            </Box>
          </GridItem>
        </Grid>
      </MainContainer>
    </Box>
  );
};

export default SellYourDesign;

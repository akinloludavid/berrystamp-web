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
import React from "react";
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
      <Flex align={"center"} gap={["7.375rem"]} mt={"2.1875rem"}>
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
      </Flex>
      <Box mt="108px" mb="96px">
        <Heading as="h2" variant={"h2"} textAlign="center" mb="48px">
          How It Works
        </Heading>
        <Flex
          maxW={"1035px"}
          justify={["space-between"]}
          mx="auto"
          gap={["60px"]}
        >
          {howItWorks.map((el, index) => (
            <Box
              key={index}
              display="flex"
              flexDir={"column"}
              alignItems={"center"}
            >
              <Image w={"40px"} src={el.image} alt={el.title} mb="29px" />
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
          ))}
        </Flex>
      </Box>
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={2} height={"100%"}>
          <Image src="/assets/girl.png" height={"100%"} />
        </GridItem>
        <GridItem
          colSpan={3}
          height={"100%"}
          background="rgba(255, 182, 182, 0.1)"
          px="4.5rem"
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
      <Flex
        background="rgba(62, 47, 138, 0.08)"
        py="4.3rem"
        px={"8rem"}
        align={"center"}
        gap={"5rem"}
      >
        <Box maxW={"45rem"}>
          <Heading variant={"h2"} fontWeight={"700"}>
            Join thousands of others artist on the platform today and start
            earning
          </Heading>
          <Button mt="2rem">Get Started</Button>
        </Box>
        <Box>
          <Image src="/assets/people.png" />
        </Box>
      </Flex>
    </Box>
  );
};

export default SellYourDesign;

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
import { painterProcess } from "../../utils/data";

const OnDemandPrinter = () => {
  const lists = [
    "You negotiate your design prining price, we get a percentage on every sale",
    "You get a wider audience to Print for ",
    "Secured and transparent payment on every design purchase",
    "You can promote your brand shop on your socials",
  ];
  return (
    <Box>
      <Flex align={"center"} gap={["7.375rem"]} mt={"2.1875rem"} px="96px">
        <Box maxW={["34.25rem"]}>
          <Heading as="h1" variant="h1">
            Bring To Life The Quality Of Design Asthetics
          </Heading>

          <Text mt="16px" variant={"body2"}>
            Earn good and stable money from your printing skills in an easy,
            seamless process by printing ordered designs.
          </Text>
          <Button mt="2rem">Let’s go</Button>
          <Image src="/assets/vectors/hero-arrow.svg" ml="1.75rem" mt="40px" />
        </Box>
        <Box>
          <Image src="/assets/webp/paint.webp" />
        </Box>
      </Flex>
      <Box mt="108px" mb="96px" px="96px">
        <Heading as="h2" variant={"h2"} textAlign="center" mb="48px">
          How It Works
        </Heading>
        <Flex
          maxW={"1035px"}
          justify={["space-between"]}
          mx="auto"
          gap={["60px"]}
        >
          {painterProcess.map((el, index) => (
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
          <Image src="/assets/webp/leaf.webp" height={"100%"} />
        </GridItem>
        <GridItem
          colSpan={3}
          height={"100%"}
          background="rgba(62, 47, 138, 0.08)"
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
      <Box pt={"7.25rem"} pb={"9.68rem"} position={"relative"}>
        <Heading
          variant={"h2"}
          fontWeight={"700"}
          maxW={"52.125rem"}
          mx={"auto"}
          textAlign={"center"}
        >
          Join thousands of others Printers on the platform today and start
          earning
        </Heading>
        <Button mt="2rem" display={"block"} mx={"auto"}>
          Get Started
        </Button>
        <Image
          src="/assets/avatar1.png"
          position={"absolute"}
          top={"7rem"}
          left={"5rem"}
        />
        <Image
          src="/assets/avatar3.png"
          position={"absolute"}
          top={"3.5rem"}
          right={"25rem"}
        />
        <Image
          src="/assets/avatar4.png"
          position={"absolute"}
          right={"7rem"}
          top={"12.5rem"}
        />
        <Image
          src="/assets/avatar5.png"
          position={"absolute"}
          right={"18rem"}
          bottom={"5rem"}
        />
        <Image
          src="/assets/avatar2.png"
          position={"absolute"}
          left={"14.4rem"}
          bottom={"8rem"}
        />
        <Image
          src="/assets/avatar6.png"
          position={"absolute"}
          left={"44%"}
          bottom={"3rem"}
        />
      </Box>
    </Box>
  );
};

export default OnDemandPrinter;

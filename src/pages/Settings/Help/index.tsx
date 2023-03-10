import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React from "react";
import { faqs } from "./data";
const LISTS = [
  {
    title: "Call us:",
    value: "08033746738",
  },
  {
    title: "Send us a mail:",
    value: "contact@inkstamp.com",
  },
  {
    title: "Reach out on twitter",
    value: "Inkstamp_Print on-demand",
  },
  {
    title: "Reach out on facebook",
    value: "Inkstamp_Print on-demand",
  },
  {
    title: "Reach out on Instagram",
    value: "Inkstamp_Print on-demand",
  },
  {
    title: "Reach out on Linkedin",
    value: "Inkstamp",
  },
];
const Help = () => {
  return (
    <Box w="full" pt="32px">
      <Box px="62px">
        <Heading variant="h5" as="h2" mb="32px">
          Contact Us
        </Heading>
        <Flex flexDir={"column"} gap="24px" mb="72px">
          {LISTS.map((el) => (
            <Flex key={nanoid()} justify="space-between" align={"center"}>
              <Text variant={"body2"} color="textColor">
                {el.title}
              </Text>
              <Text textAlign={"right"} variant="body2">
                {el.value}
              </Text>
            </Flex>
          ))}
        </Flex>

        <Heading mb="32px" variant={"h5"} as="h5">
          Frequently Asked Question
        </Heading>
        <Accordion allowToggle gap="24px" display={"flex"} flexDir="column">
          {faqs.map((el) => (
            <AccordionItem border={"none"} key={nanoid()}>
              <h2>
                <AccordionButton
                  fontSize={"16px"}
                  fontWeight="400"
                  _expanded={{ fontWeight: "700", fontSize: "16px" }}
                  _hover={{}}
                >
                  <AccordionIcon mr="8px" />
                  <Box as="span" flex="1" textAlign="left">
                    {el.question}
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel
                pl="44px"
                fontSize={"16px"}
                fontWeight="400"
                color="#757575"
              >
                {el.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default Help;

import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  Link as Clink,
} from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
const Footer = () => {
  return (
    <Grid
      templateColumns={"repeat(5,1fr)"}
      w="full"
      bgColor={"#291F5C"}
      px="187px"
      pt="32px"
      gap={["106px"]}
    >
      <GridItem>
        <Heading
          fontSize={"16px"}
          fontWeight="700"
          lineHeight={"24px"}
          color="white"
          mb="16px"
        >
          Services
        </Heading>
        <Flex flexDir={"column"} gap="12px">
          <Clink as={Link} to="" color="white">
            Sell designs
          </Clink>
          <Clink as={Link} to="" color="white">
            Affiliate Printer
          </Clink>
        </Flex>
      </GridItem>
      <GridItem>
        <Heading
          fontSize={"16px"}
          fontWeight="700"
          lineHeight={"24px"}
          color="white"
          mb="16px"
        >
          Customer
        </Heading>
        <Flex flexDir={"column"} gap="12px">
          <Clink as={Link} to="" color="white">
            About us
          </Clink>
          <Clink as={Link} to="" color="white">
            FAQ
          </Clink>
          <Clink as={Link} to="" color="white">
            Terms of service
          </Clink>
          <Clink as={Link} to="" color="white">
            Privacy Policy
          </Clink>
        </Flex>
      </GridItem>
      <GridItem>
        <Heading
          fontSize={"16px"}
          fontWeight="700"
          lineHeight={"24px"}
          color="white"
          mb="16px"
        >
          Account
        </Heading>
        <Flex flexDir={"column"} gap="12px">
          <Clink as={Link} to="" color="white">
            My Account
          </Clink>
          <Clink as={Link} to="" color="white">
            Track Order
          </Clink>
          <Clink as={Link} to="" color="white">
            Warranty
          </Clink>
        </Flex>
      </GridItem>
      <GridItem>
        <Heading
          fontSize={"16px"}
          fontWeight="700"
          lineHeight={"24px"}
          color="white"
          mb="16px"
        >
          Contact
        </Heading>
        <Flex flexDir={"column"} gap="12px">
          <Clink as={Link} to="" color="white">
            contact@Inkstamp.com
          </Clink>
          <Clink as={Link} to="" color="white">
            +234 712 344 5635
          </Clink>
        </Flex>
      </GridItem>
      <GridItem>
        <Heading
          fontSize={"16px"}
          fontWeight="700"
          lineHeight={"24px"}
          color="white"
          mb="16px"
        >
          Sign up for newsletter
        </Heading>
        <Flex flexDir={"column"} gap="12px">
          <InputGroup>
            <Input
              outline="none"
              border="none"
              borderRadius={"0px"}
              w="181px"
              placeholder="Email address"
              backgroundColor={"#FFFFFF"}
              _placeholder={{
                fontSize: "14px",
                fontWeight: "400",
              }}
            />
            <InputRightAddon
              h="44px"
              bgColor={"#3E2F8A"}
              children={<FiChevronRight color="white" />}
            />
          </InputGroup>
          <Flex mt="16px" gap="16px">
            <Icon
              as={AiFillInstagram}
              cursor="pointer"
              color="white"
              fontSize={"22px"}
            />
            <Icon
              as={AiFillFacebook}
              cursor="pointer"
              color="white"
              fontSize={"22px"}
            />
            <Icon
              as={RiWhatsappFill}
              cursor="pointer"
              color="white"
              fontSize={"22px"}
            />
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Footer;

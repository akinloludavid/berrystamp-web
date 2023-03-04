import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";

import { Link, useParams } from "react-router-dom";
import MainContainer from "../../layout/MainContainer";
import { marketPlaceProducts } from "../../utils/data";
import { nanoid } from "nanoid";
import { BiChevronRight } from "react-icons/bi";
import MoreFromDesignerCarousel from "../../components/carousels/MoreFromDesignerCarousel";
import PeopleAlsoLikeCarousel from "../../components/carousels/PeopleAlsoLikeCarousel";
import ProductVariantCarousel from "../../components/carousels/ProductVariantCarousel";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const DesignerDetails = () => {
  const { designName } = useParams();
  const designerDetails = marketPlaceProducts.filter(
    (item) => item.title.toLowerCase() === designName?.toLowerCase()
  )[0];
  const products = ["riri1.png", "riri2.png", "riri3.png", "riri4.png"];
  const colors = ["#000", "#fff", "#F4F3DF"];
  const [activeColor, setactiveColor] = useState(1);
  const sizes = ["S", "M", "L", "XL"];
  const [activesize, setactivesize] = useState(2);

  return (
    <MainContainer mt="44px">
      <Flex alignItems={"center"} fontSize={"14px"} pb={"1rem"}>
        Home <BiChevronRight /> {designName}
      </Flex>
      <Flex mt="16px" gap="47px" flexDir={["column", "column", "row"]}>
        <Box width={"529px"}>
          <Image
            w={["529px"]}
            height={"525.22px"}
            src={"/assets/riri.png"}
            alt={designerDetails.title}
          />
          <ProductVariantCarousel />
        </Box>
        <Box>
          <Heading variant={"h2"} fontWeight="600" color={"#000000"}>
            {designerDetails.title}
          </Heading>
          <Text color="#000000" variant={"body3"} my="8px">
            Official merch for the Rihanna brand. This art is inspired by the
            vibrant, beautiful & energetic aura of this legendary performer for
            her 2023 tour.
          </Text>
          <Flex mb="8px">
            <Text variant={"body2"} color={"#000000"}>
              Designed by
            </Text>
            <Text
              variant={"body2"}
              color={"#0050BA"}
              as={Link}
              pl={"3px"}
              to={`/author/shemzy`}
            >
              Art by {designerDetails.author}
            </Text>
          </Flex>
          <Flex mb="8px">
            <Text variant={"body2"} color={"#000000"}>
              This design can only be printed by{" "}
            </Text>
            <Text
              pl={"3px"}
              variant={"body2"}
              color={"#0050BA"}
              as={Link}
              to={`/author/shemzy`}
            >
              Falcon Prints
            </Text>
          </Flex>
          <Text color={"#000"} fontSize={"24px"} mb={"1.5rem"}>
            ₦15,800
          </Text>
          <Text color={"#000"} variant={"body2"} mb={"8px"} fontWeight={"600"}>
            Select Product Item
          </Text>
          <Flex gap="12px">
            {products.map((img) => (
              <Image
                w={["63.39px"]}
                height={"63.39px"}
                src={`/assets/riri/${img}`}
                alt={img}
              />
            ))}
          </Flex>
          <Text variant={"body2"} mt={"1.5rem"}>
            <Text color={"#000"} as="span" variant={"body2"}>
              Available quantity:{" "}
            </Text>
            475 piece available{" "}
          </Text>
          <Text
            color={"#000"}
            variant={"body2"}
            mt={"1rem"}
            mb={"12px"}
            fontWeight={"600"}
          >
            Select Colour
          </Text>
          <Flex gap={"12px"}>
            <Text as="span" variant={"body2"}>
              Available colours:
            </Text>
            {colors.map((el, index) => (
              <Box
                borderRadius={activeColor == index ? "4px" : "0"}
                width={"2rem"}
                height={"2rem"}
                bg={el}
                border={"1.5px solid"}
                borderColor={activeColor == index ? "red" : "transparent"}
                cursor={"pointer"}
                onClick={() => setactiveColor(index)}
              ></Box>
            ))}
          </Flex>
          <Text
            color={"#000"}
            variant={"body2"}
            mt={"1rem"}
            mb={"12px"}
            fontWeight={"600"}
          >
            Select Size
          </Text>
          <Flex gap={"12px"}>
            <Text as="span" variant={"body2"}>
              Available sizes:
            </Text>
            {sizes.map((el, index) => (
              <Flex
                alignItems={"center"}
                justifyContent={"center"}
                width={"45.3px"}
                height={"30.2px"}
                bg={"#F7F7F7"}
                borderRadius={"4px"}
                border={"1.5px solid"}
                borderColor={activesize == index ? "red" : "#C9C9C9"}
                cursor={"pointer"}
                onClick={() => setactivesize(index)}
              >
                {el}
              </Flex>
            ))}
          </Flex>
          <Text
            color={"#000"}
            variant={"body2"}
            mt={"1rem"}
            mb={"12px"}
            fontWeight={"600"}
          >
            Select Quantity
          </Text>
          <Flex gap={"7px"}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              width={"30px"}
              height={"30px"}
              bg={"#F7F7F7"}
              borderRadius={"4px"}
              border={"1px solid #C9C9C9"}
              cursor={"pointer"}
            >
              -
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              width={"30px"}
              height={"30px"}
              bg={"#F7F7F7"}
              borderRadius={"4px"}
              border={"1px solid #C9C9C9"}
            >
              1
            </Flex>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              width={"30px"}
              height={"30px"}
              bg={"#F7F7F7"}
              borderRadius={"4px"}
              border={"1px solid #C9C9C9"}
              cursor={"pointer"}
            >
              +
            </Flex>
          </Flex>
          <Text variant={"body2"} mt={"0.75rem"}>
            Your item order will be delivered within 5 days of payment
          </Text>
          <Flex gap={"1.5rem"} mt={"2rem"}>
            <Button
              width={"240px"}
              height={"52px"}
              color={"#3E2F8A"}
              variant="outline"
              border={"1px solid #3E2F8A"}
            >
              Add to cart
            </Button>
            <Button width={"240px"} height={"52px"}>
              Print now
            </Button>
          </Flex>
          <Flex mt={"1rem"} alignItems={"center"} gap={"8px"}>
            <Text variant={"body2"}>Share this product:</Text>
            <Icon
              borderRadius={"50%"}
              border={"1px solid"}
              p={"4px"}
              boxSizing="content-box"
              as={IoLogoWhatsapp}
              color="#1FAF38"
              size={"12"}
            />
            <Icon
              borderRadius={"50%"}
              border={"1px solid"}
              p={"4px"}
              color={"#1877F2"}
              boxSizing="content-box"
              as={BsFacebook}
              size={"12"}
            />
            <Icon
              borderRadius={"50%"}
              border={"1px solid"}
              p={"4px"}
              color={"#FFDD55"}
              boxSizing="content-box"
              as={FaInstagramSquare}
              size={"12"}
            />
            <Icon
              borderRadius={"50%"}
              border={"1px solid"}
              p={"4px"}
              boxSizing="content-box"
              as={IoLogoTwitter}
              color="#55ACEE"
              size={"12"}
            />
          </Flex>
        </Box>
      </Flex>
      <Box mt="72px">
        <MoreFromDesignerCarousel />
        <PeopleAlsoLikeCarousel />
      </Box>
    </MainContainer>
  );
};

export default DesignerDetails;

import React from "react";
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { marketPlaceProducts } from "../utils/data";

const ArtistDesign = () => {
  const navigate = useNavigate();

  return (
    <Flex flexWrap={"wrap"} gap={[6]}>
      {marketPlaceProducts.map((el) => (
        <Box key={nanoid()} bg={"white"} cursor="pointer">
          <Box w={["240px"]}>
            <Image
              src={el.image}
              alt={el.description}
              w={["100%"]}
              h={["240px"]}
            />
            <Box px={["16px"]} py={["22.5px"]}>
              <Text variant={"body3"}>{el.description}</Text>
              <Text variant={"body3"} color="#757575" mb="12px">
                by{" "}
                <Text color="#0050BA" variant={"body3"} as="span">
                  {el.author}
                </Text>
              </Text>
              <Text variant={"body3"} fontWeight="700">
                ₦{el.price}
              </Text>
            </Box>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default ArtistDesign;

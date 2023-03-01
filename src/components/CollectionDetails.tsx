import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";

const CollectionDetails = () => {
  const { collectionName } = useParams();

  return (
    <Box>
      <Flex flexWrap={"wrap"} alignItems={"flex-end"} gap={[3]} pb={"2.5rem"}>
        <Image
          mb="1rem"
          src={"/assets/artistcollection/mother.png"}
          borderRadius={"8px"}
          w="240px"
          border={"1px solid black"}
          h="295px"
        />

        <Box mb={"3rem"}>
          <Heading variant={"h3"} fontWeight={"400"}>
            {collectionName}
          </Heading>
          <Text my={"4px"} variant={"body4"}>
            This collection is imspired by the strength of a woman
          </Text>
          <Text>5 designs found in this collection</Text>
        </Box>
      </Flex>

      <Flex flexWrap={"wrap"} gap={[5]} pb={"14.9rem"}>
        {Array(5)
          .fill("")
          .map(() => (
            <Box bg={"#FDFDFD"}>
              <Image
                mb="1rem"
                src={"/assets/artistcollection/africanpride.png"}
                borderRadius={"8px"}
                w="240px"
                h="295px"
              />
              <Box pt={["24px"]} pb="20px" px="16px">
                <Text fontSize={"16px"} fontWeight="600" color="black" mb="4px">
                  African Pride Design
                </Text>
                <Flex mb="8px">
                  <Text color="#757575" fontWeight={"400"} fontSize="16px">
                    by
                  </Text>
                  <Text
                    fontSize={"16px"}
                    fontWeight="600"
                    as={Link}
                    color={"#0050BA"}
                    to={`/author/Altanta`}
                  >
                    Altanta
                  </Text>
                </Flex>
                <Text variant={"body2"} color={"#323232"}>
                  ₦3000
                </Text>
              </Box>
              <Button>Add to cart</Button>
            </Box>
          ))}
      </Flex>
    </Box>
  );
};

export default CollectionDetails;

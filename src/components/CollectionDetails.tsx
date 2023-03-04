import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import GoBack from "./GoBack";

const CollectionDetails = () => {
  const { collectionName } = useParams();
  const navigate = useNavigate();
  return (
    <Box>
      <Flex
        flexWrap={"wrap"}
        alignItems={"flex-end"}
        gap={[3]}
        pb={"2.5rem"}
        position={"relative"}
      >
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
          <Text variant={"body2"}>5 designs found in this collection</Text>
        </Box>
        <p
          style={{
            position: "absolute",
            top: "0",
            right: "0",
          }}
        >
          <GoBack />
        </p>
      </Flex>

      <Flex flexWrap={"wrap"} gap={[5]} pb={"14.9rem"}>
        {Array(5)
          .fill("")
          .map(() => (
            <Box
              bg={"#FDFDFD"}
              pb={"1.1875rem"}
              filter={"drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))"}
            >
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
              <Button mx="16px">Add to cart</Button>
            </Box>
          ))}
      </Flex>
    </Box>
  );
};

export default CollectionDetails;

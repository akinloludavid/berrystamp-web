import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { collections } from "../../../utils/data";
import CollectionDetails from "../../../components/CollectionDetails";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import CollectionCard from "../../../components/CollectionCard";

const Collection = () => {
  const navigate = useNavigate();

  const [searchParam] = useSearchParams();
  const collectionName = searchParam.get("collectionName") || null;
  console.log(collectionName);
  return (
    <>
      {collectionName ? (
        <>
          <CollectionDetails />
        </>
      ) : (
        <Flex flexWrap={"wrap"} gap={[3]} pb={"14.9rem"}>
          {collections.map((el) => (
            <Box cursor={"pointer"} position={"relative"} key={nanoid()}>
              <Box
                width={"max-content"}
                position={"absolute"}
                right={"0.5rem"}
                zIndex={10}
              >
                <Menu>
                  <MenuButton
                    as={IconButton}
                    border="none"
                    aria-label="Options"
                    icon={<FiMoreHorizontal />}
                    variant="outline"
                  />
                  <MenuList>
                    <MenuItem>Update collection</MenuItem>
                    <MenuItem>Delete collection</MenuItem>
                    <MenuItem>View collection</MenuItem>
                    <MenuItem>Share collection</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box
                width={"15rem"}
                height={"23.4rem"}
                bg={"#fff"}
                px={"0.5rem"}
                onClick={() => {
                  navigate(`?collectionName=${el.title}`);
                }}
              >
                <Image
                  mb="1rem"
                  src={el.image}
                  borderRadius={"8px"}
                  w="240px"
                  h="295px"
                />
                <Heading
                  fontSize={"16px"}
                  fontWeight="600"
                  color="black"
                  mb="4px"
                >
                  {el.title}
                </Heading>
                <Text variant={"body2"} mb={"1.5rem"}>
                  {el.design} designs
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      )}
    </>
  );
};

export default Collection;

import { Box, Flex } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collections } from "../utils/data";
import CollectionCard from "./CollectionCard";

const ArtistCollection = () => {
  const { authorName } = useParams();

  const navigate = useNavigate();
  return (
    <Flex flexWrap={"wrap"} gap={[3]} pb={"14.9rem"}>
      {collections.map((el) => (
        <Box
          onClick={() => navigate(`/${authorName}/${el.title}`)}
          cursor={"pointer"}
        >
          <CollectionCard {...el} />
        </Box>
      ))}
    </Flex>
  );
};

export default ArtistCollection;

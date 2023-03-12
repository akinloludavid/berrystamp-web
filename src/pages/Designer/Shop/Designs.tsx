import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import { designerProducts } from "../data";

const Designs = () => {
  const navigate = useNavigate();

  return (
    <Grid templateColumns={["repeat(5,1fr)"]} flexWrap={"wrap"} gap={[6]}>
      {designerProducts.map((el) => (
        <GridItem key={nanoid()}>
          <Box bg={"white"} cursor="pointer" position={"relative"}>
            <Box width={"max-content"} position={"absolute"} right={"0.5rem"}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  border="none"
                  aria-label="Options"
                  icon={<FiMoreHorizontal />}
                  variant="outline"
                />
                <MenuList>
                  <MenuItem>Update design</MenuItem>
                  <MenuItem>Delete design</MenuItem>
                  <MenuItem>View insights</MenuItem>
                  <MenuItem>Share design</MenuItem>
                </MenuList>
              </Menu>
            </Box>

            <Box w={["240px"]}>
              <Image
                src={el.image}
                alt={el.description}
                w={["240px"]}
                h={["240px"]}
              />
              <Box px={["16px"]} py={["22.5px"]}>
                <Text variant={"body3"}>{el.description}</Text>
                <Text variant={"body3"} color="#757575" mb="12px">
                  by
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
        </GridItem>
      ))}
    </Grid>
  );
};

export default Designs;

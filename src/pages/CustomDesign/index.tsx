import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomDesignCard from "../../components/CustomDesignCard";
import NoOrder from "../../components/NoOrder";
import { BERRY_STAMP_USERKEY, getLocalStorage } from "../../utils/helper";
import { customdesigns } from "./data";

const CustomDesign = () => {
  const user = getLocalStorage(BERRY_STAMP_USERKEY);
  const navigate = useNavigate();
  return (
    <Box px={"5.75rem"}>
      {user ? (
        <Box pb={"120px"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            my={"2.375rem"}
          >
            <Heading variant={"h2"} fontWeight={"700"}>
              Custom Designs
            </Heading>
            <Button onClick={() => navigate("/new-custom-design")}>
              New custom design
            </Button>
          </Flex>
          <Flex
            alignItems={"center"}
            flexWrap={"wrap"}
            rowGap={"2rem"}
            columnGap={"1.8125rem"}
          >
            {customdesigns.map((el) => (
              <CustomDesignCard {...el} />
            ))}
          </Flex>
        </Box>
      ) : (
        <NoOrder img="/assets/gifs/order.gif" />
      )}
    </Box>
  );
};

export default CustomDesign;

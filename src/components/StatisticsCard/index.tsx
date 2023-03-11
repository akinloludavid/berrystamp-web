import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const StatisticsCard = ({
  title,
  value,
  color,
  icon,
  bgcolor,
}: {
  title: string;
  value: string;
  color: string;
  icon: string;
  bgcolor: string;
}) => {
  return (
    <Flex
      borderRadius={"8px"}
      width={"15rem"}
      height={"8.25rem"}
      bg={bgcolor}
      alignItems={"center"}
      justifyContent={"space-between"}
      pl={"1.25rem"}
      pr={"1.75rem"}
    >
      <Box>
        <Text color={color} variant={"body2"} mb={"0.25rem"}>
          {title}
        </Text>
        <Text fontSize={"1.5rem"} color={color} fontWeight={"700"}>
          {value}
        </Text>
      </Box>
      <Image src={`/assets/vectors/${icon}`} alt={title} />
    </Flex>
  );
};

export default StatisticsCard;

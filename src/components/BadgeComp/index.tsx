import React from "react";
import { Box } from "@chakra-ui/react";

interface IBadgeComp {
  count: number;
  children: React.ReactNode;
  onClick?: (e: any) => void;
}
const BadgeComp = ({ count = 0, children, onClick }: IBadgeComp) => {
  return (
    <Box position={"relative"} cursor="pointer" onClick={onClick}>
      <Box
        position={"absolute"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        bgColor={"pryColor"}
        color="white"
        w="16px"
        h="16px"
        right="0"
        fontWeight={"400"}
        fontSize={"11px"}
        borderRadius={"50%"}
      >
        {count}
      </Box>
      {children}
    </Box>
  );
};

export default BadgeComp;

import { Box, Input, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const UploadFile = ({ children }: { children: ReactNode }) => {
  return (
    <Box position={"relative"} cursor={"pointer"}>
      <Input
        type="file"
        name=""
        id=""
        opacity={0}
        cursor={"pointer"}
        position={"absolute"}
        inset={"0"}
        zIndex={10}
      />
      <Text as="span">{children}</Text>
    </Box>
  );
};

export default UploadFile;

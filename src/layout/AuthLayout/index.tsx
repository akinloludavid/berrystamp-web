import { Grid, GridItem, Image } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)">
      <GridItem colSpan={2} height={"100%"}>
        <Image src="/assets/webp/leaf.webp" height={"100%"} />
      </GridItem>
    </Grid>
  );
};

export default AuthLayout;

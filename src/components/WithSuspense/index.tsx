import { Box, Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

const LazyLoader = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Spinner color="pryColor" size="xl" />
    </Box>
  );
};
const WithSuspense = (Component: React.FC) => (props: any) => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default WithSuspense;

import { Box, Flex } from "@chakra-ui/react";
import { IChildren } from "../../types";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Topbar from "../TopBar";

const PageLayout = ({ children }: IChildren) => {
  return (
    <Flex minH="100vh" flexDirection={"column"}>
      <Topbar />
      <Navbar />
      <Box maxW={"1440px"} px="96px">
        {children}
      </Box>
      <Box mt="auto">
        <Footer />
      </Box>
    </Flex>
  );
};

export default PageLayout;

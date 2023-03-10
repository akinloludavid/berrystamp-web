import { Box, Flex } from "@chakra-ui/react";
import { IChildren } from "../../types";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Topbar from "../TopBar";

const PageLayout = ({ children }: IChildren) => {
  return (
    <Flex minH="100vh" w="100vw" flexDirection={"column"} bg="#FAFAFA">
      <Topbar />
      <Navbar />
      <Box w="100vw" maxW={"1440px"} mx="auto">
        {children}
      </Box>
      <Box mt="auto">
        <Footer />
      </Box>
    </Flex>
  );
};

export default PageLayout;

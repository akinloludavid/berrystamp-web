import { Box } from "@chakra-ui/react";
import { IChildren } from "../../types";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Topbar from "../TopBar";

const PageLayout = ({ children }: IChildren) => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Box maxW={"1440px"} px="96px">
        {children}
      </Box>

      <Footer />
    </>
  );
};

export default PageLayout;

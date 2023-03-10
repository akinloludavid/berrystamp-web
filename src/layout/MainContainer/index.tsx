import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IMainContainer extends BoxProps {
  children: ReactNode;
}
const MainContainer = ({ children, ...rest }: IMainContainer) => {
  return (
    <Box px={["24px", "24px", "24px", "48px", "96px"]} w="100%" {...rest}>
      {children}
    </Box>
  );
};

export default MainContainer;

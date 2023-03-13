import { Flex, Icon } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { AiFillStar } from "react-icons/ai";

const Stars = ({ size }: { size: number }) => {
  return (
    <Flex align={"center"} gap="6px">
      {new Array(5).fill(0).map((el, idx) => (
        <Icon
          key={nanoid()}
          as={AiFillStar}
          color={idx < size ? "#FBC96D" : "#C9C9C9"}
          fontSize="18px"
        />
      ))}
    </Flex>
  );
};

export default Stars;

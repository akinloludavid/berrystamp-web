import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router-dom";
import { trauncateString } from "../../utils/helper";
import ModalContainer from "../ModalContainer";
import DetailModal from "./DetailModal";

const CustomDesignCard = ({ name, img }: { name: string; img: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      width={"228px"}
      height={"228px"}
      bg={"#F2F2F2"}
      borderRadius={"8px"}
      px={"18px"}
      pt={"16px"}
      pb={"13px"}
    >
      <Flex
        alignItems={"center"}
        mb={"8px"}
        justifyContent={"space-between"}
        position={"relative"}
      >
        <Text variant={"body4"} fontWeight={"500"}>
          {trauncateString(name, 13)}
        </Text>
        <Menu>
          <MenuButton
            border={"none"}
            height={"o.75rem"}
            as={IconButton}
            aria-label="Options"
            icon={<FiMoreHorizontal />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>Print on Item</MenuItem>
            <MenuItem>Print on mockups</MenuItem>
            <MenuItem>Upload to marketplace</MenuItem>
            <MenuItem>Delete design</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Image
        cursor={"pointer"}
        onClick={() => onOpen()}
        width={"100%"}
        src={`/assets/customorder/${img}`}
      />
      <DetailModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default CustomDesignCard;

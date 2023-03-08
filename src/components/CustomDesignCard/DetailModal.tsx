import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";
import ModalContainer from "../ModalContainer";

const DetailModal = ({ isOpen, onClose }: { isOpen: any; onClose: any }) => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    setshowDropdown(false);
  });
  const [showDropdown, setshowDropdown] = useState(false);

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} maxWidth="77rem">
      <Flex
        bg={"white"}
        padding={"3.375rem"}
        gap={"4rem"}
        borderRadius={"12px"}
      >
        <Image
          width={"600px"}
          height={"500px"}
          src={`/assets/customorder/cd20.png`}
        />
        <Box>
          <Text
            fontSize={"24px"}
            color={"#323232"}
            fontWeight={"700"}
            mb={"8px"}
          >
            Custom Anniversary Design
          </Text>
          <Text mb={"16px"} variant={"body4"}>
            Order ID: #WQ542698TH
          </Text>
          <Text mb={"10px"} variant={"body4"}>
            Design order for anniversary celebration
          </Text>
          <Text variant={"body3"} color="#757575" mb="12px">
            Art by
            <Text
              color="#0050BA"
              variant={"body3"}
              as={Link}
              to={`/author/Shemxy`}
            >
              Shemxy
            </Text>
          </Text>
          <Flex gap={"1rem"} position={"relative"}>
            <Button width={"21rem"}>View Order</Button>
            <Button
              variant={"outline"}
              onClick={() => setshowDropdown(!showDropdown)}
            >
              <FiMoreHorizontal />
            </Button>
            {showDropdown && (
              <Flex
                position={"absolute"}
                right={"0"}
                top={"2rem"}
                width={"215px"}
                bg={"white"}
                flexDirection={"column"}
                gap={"18px"}
                py={"16px"}
                px={"16px"}
                borderRadius={"8px"}
                ref={ref}
              >
                <Text variant={"body4"}>Print on Item</Text>
                <Text variant={"body4"}>Print on mockups</Text>
                <Text variant={"body4"}>Upload to marketplace</Text>
                <Text variant={"body4"}>Delete design</Text>
              </Flex>
            )}
          </Flex>
        </Box>
      </Flex>
    </ModalContainer>
  );
};

export default DetailModal;

import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { BiCheckCircle, BiChevronRight } from "react-icons/bi";
import { BsCheck2, BsFillCheckCircleFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import MainContainer from "../../layout/MainContainer";

const trackingHistory = [
  {
    time: "2022-12-10    13:52:12",
    state: "Order on its way to customer",
  },
  {
    time: "2022-12-10    13:52:12",
    state: "Printer indicated job completion of item",
  },
  {
    time: "2022-12-10    13:52:12",
    state:
      "Item delivered by dispatcher rider to printer’s {Falcon Prints} office ",
  },
  {
    time: "2022-12-10    13:52:12",
    state: "Item pickup via dispatcher rider {Bola Adeshina} from customer",
  },
];
const TrackingDetails = () => {
  const { trackingId } = useParams();
  return (
    <MainContainer mt="24px">
      <Flex align={"center"}>
        <Text variant="body3" color="#757575">
          Tracking
        </Text>
        <BiChevronRight color="#757575" />
        <Text variant="body3" color="#000000">
          {trackingId}
        </Text>
      </Flex>
      <Flex justify={"center"} align="center" flexDirection="column" mt="13px">
        <Heading variant={"h3"} as="h3" mb="12px">
          Order {trackingId}
        </Heading>
        <Text variant={"body2"} mb="54px">
          You item has been completed and currently on its way to you
        </Text>
        <Box
          h="22px"
          w={["90%", "90%", "90%", "90%", "930px"]}
          bg="#D8D5E8"
          borderRadius={"11px"}
          mb="57px"
        >
          <Box w="80%" h="100%" bg="pryColor" rounded={"full"} />
          <Flex justify={"space-between"} mt="-22px">
            <Flex justify={"center"} flexDir="column" align={"center"}>
              <Circle
                size="22px"
                bgColor={"#5E529D"}
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                mb="8px"
              >
                <Icon as={BsCheck2} color="white" />
              </Circle>
              <Text variant={"body3"} color="black">
                Item pickup
              </Text>
            </Flex>
            <Flex justify={"center"} flexDir="column" align={"center"}>
              <Circle
                size="22px"
                bgColor={"#5E529D"}
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                mb="8px"
              >
                <Icon as={BsCheck2} color="white" />
              </Circle>
              <Text variant={"body3"} color="black">
                Printer’s shop
              </Text>
            </Flex>{" "}
            <Flex justify={"center"} flexDir="column" align={"center"}>
              <Circle
                size="22px"
                bgColor={"#5E529D"}
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                mb="8px"
              >
                <Icon as={BsCheck2} color="white" />
              </Circle>
              <Text variant={"body3"} color="black">
                Completed
              </Text>
            </Flex>{" "}
            <Flex justify={"center"} flexDir="column" align={"center"}>
              <Circle
                size="22px"
                bgColor={"#5E529D"}
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                mb="8px"
              >
                <Icon as={BsCheck2} color="white" />
              </Circle>
              <Text variant={"body3"} color="black">
                Delivery
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box
          border="1px solid #C9C9C9"
          borderRadius={"4px"}
          w={["100%", "100%", "100%", "100%", "848px"]}
          mb="160px"
        >
          <Box p="20px" borderBottom={"0.5px solid #D9D9D9"}>
            <Text variant="body4">
              Tracking number{" "}
              <Text as="span" fontWeight={"700"}>
                {trackingId}
              </Text>
            </Text>
          </Box>
          <Flex
            px={["24px", "35px"]}
            py={["50px"]}
            flexDirection={["column", "column", "row"]}
            justify="space-between"
          >
            <Flex flexDirection={["column"]} gap="40px">
              {trackingHistory.map((el, index) => (
                <Flex gap="25px" key={nanoid()}>
                  <Circle size="21px" bg="#D8D5E8" position={"relative"}>
                    <Circle size="15px" bg="pryColor" />
                    {index !== trackingHistory.length - 1 && (
                      <Box
                        h={["130px", "120px", "120px", "90px"]}
                        w="1px"
                        top="10px"
                        bg="#000000"
                        position={"absolute"}
                      />
                    )}
                  </Circle>
                  <Box>
                    <Text variant={"body2"} mb="8px">
                      {el.time}
                    </Text>
                    <Text variant={"body2"}>{el.state}</Text>
                  </Box>
                </Flex>
              ))}
            </Flex>
            <Button>View Map</Button>
          </Flex>
        </Box>
      </Flex>
    </MainContainer>
  );
};

export default TrackingDetails;

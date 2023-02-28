import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Tracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/tracking/${trackingId}`);
  };
  return (
    <Flex justify={"center"} align="center" h="100%" my="117px" w={["576px"]}>
      <Box w="100%" display={"flex"} flexDir="column">
        <FormControl mb="32px">
          <FormLabel fontSize={"16px"} fontWeight="600" mb="16px">
            Enter order tracking number
          </FormLabel>
          <Input
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
        </FormControl>

        <Button w="172px" mx="auto" onClick={handleSubmit}>
          Track Order
        </Button>
      </Box>
    </Flex>
  );
};

export default Tracking;

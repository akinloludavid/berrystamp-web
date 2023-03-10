import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Select,
  Text,
} from "@chakra-ui/react";
import { HiOutlinePencil } from "react-icons/hi";
const Account = () => {
  return (
    <Box w="full" pt="32px">
      <Box pl="62px" pr="128px">
        <Flex gap="12px" align={"center"} mb="37px">
          <Text color="textColor" fontSize={"16px"} fontWeight="700">
            User's Profile
          </Text>
          <Box
            bgColor="#D8D5E8"
            h="34px"
            w="34px"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            borderRadius="50%"
          >
            <Icon as={HiOutlinePencil} fontSize={"18px"} borderRadius={"50%"} />
          </Box>
        </Flex>
        <Flex justify={"space-between"} mb="48px">
          <Text color="textColor" fontSize={"16px"} fontWeight="400">
            Username
          </Text>
          <Text fontSize={"16px"} fontWeight="400">
            Jenny Demi
          </Text>
        </Flex>
      </Box>
      <Divider border="0.5px solid #D9D9D9" />
      <Box py="48px" px="62px">
        <Box mb="48px">
          <Heading mb="10px" fontSize={"16px"} fontWeight="700">
            Add Account
          </Heading>
          <Text variant={"body2"}>
            Adding more accounts allows you to maximize all three Inkstamp
            account profiles, while still having a single login
          </Text>
        </Box>
        <Box mb="24px">
          <Heading
            color="pryColor"
            mb="10px"
            fontSize={"16px"}
            fontWeight="600"
          >
            Add designer’s account to profile
          </Heading>
          <Text variant={"body2"} mb="24px">
            Buy, customize and print designs on demand effortlessly. Also follow
            your favourite designers and get updates every time they upload a
            new design.
          </Text>
          <Button>Add Account</Button>
        </Box>
        <Box>
          <Heading
            color="pryColor"
            mb="10px"
            fontSize={"16px"}
            fontWeight="600"
          >
            Add printer’s account to profile
          </Heading>
          <Text variant={"body2"} mb="24px">
            Print designs on demand and earn on every completed order.
          </Text>
          <Button>Add Account</Button>
        </Box>
      </Box>
      <Divider border="0.5px solid #D9D9D9" />
      <Box px="62px" py="48px">
        <Heading mb="10px" fontSize={"16px"} fontWeight="700">
          Account Deactivation
        </Heading>
        <Text variant={"body2"} mb="48px">
          Upon deactivation, your accounts data will be permanently deleted and
          all active orders will be cancelled
        </Text>

        <FormControl pl="0px">
          <FormLabel>Why are deactivating your account</FormLabel>
          <Select
            py="10px"
            mb="24px"
            placeholder="Choose a reason"
            _placeholder={{
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "24px",
              color: "#757575",
            }}
          >
            <option value=""></option>
          </Select>
        </FormControl>
        <Button>Deactivate Account</Button>
      </Box>
    </Box>
  );
};

export default Account;

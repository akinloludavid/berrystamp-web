import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React from "react";
const settings = [
  {
    label: "Edit profile",
    value: "edit",
  },
  {
    label: "My account",
    value: "my_account",
  },
  {
    label: "Billing and payment",
    value: "billing",
  },
  {
    label: "Change password",
    value: "change-password",
  },
  {
    label: "Email",
    value: "email",
  },
  {
    label: "Help",
    value: "help",
  },
];
const Settings = () => {
  return (
    <Flex
      mt="44px"
      maxW={["998px"]}
      borderRadius="8px"
      border="1px solid #DBDBDB"
      mx="auto"
    >
      <Box>
        <Box pt="6" mb="6" pl="18px" borderBottom={"1px solid #DBDBDB"}>
          <Heading fontSize="24px" fontWeight={"500"} lineHeight="32px">
            Settings
          </Heading>
        </Box>
        <Flex flexDirection={["column"]}>
          {settings.map((el) => (
            <Box key={nanoid()}>
              <Text variant="body2">{el.label}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Settings;

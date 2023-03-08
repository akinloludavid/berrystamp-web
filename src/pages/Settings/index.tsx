import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import Account from "./Account";
import Billing from "./Billing";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";
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
    value: "change_password",
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
  const [activeTab, setActiveTab] = useState("edit");
  const CurrentComp: any = {
    edit: <EditProfile />,
    my_account: <Account />,
    billing: <Billing />,
    change_password: <ChangePassword />,
  };
  return (
    <Flex
      mt="44px"
      maxW={["998px"]}
      borderRadius="8px"
      border="1px solid #DBDBDB"
      mx="auto"
      mb="102px"
    >
      <Box w={["240px"]} borderRight="1px solid #DBDBDB">
        <Box
          pt="6"
          mb="6"
          pl="18px"
          pb="8px"
          borderBottom={"1px solid #DBDBDB"}
        >
          <Heading fontSize="24px" fontWeight={"500"} lineHeight="32px">
            Settings
          </Heading>
        </Box>
        <Flex flexDirection={["column"]} w="full">
          {settings.map((el) => (
            <Box
              key={nanoid()}
              pl="17px"
              py="12px"
              cursor={"pointer"}
              onClick={() => setActiveTab(el.value)}
              bgColor={activeTab === el.value ? "#F2F2F2" : ""}
            >
              <Text variant="body2" color="textColor">
                {el.label}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
      <Box w="100%" pb="77px">
        {CurrentComp[activeTab]}
      </Box>
    </Flex>
  );
};

export default Settings;

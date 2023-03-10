import {
  Box,
  Button,
  Divider,
  Heading,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Email = () => {
  return (
    <Box w="full" pt="32px">
      <Box px="62px">
        <Heading variant="h5" mb="8px">
          Order Emails{" "}
        </Heading>
        <Text variant={"body3"} mb="24px">
          Recieve emails for orders and delivery information
        </Text>
        <RadioGroup display={"flex"} gap="24px" colorScheme={"purple"}>
          <Radio value="on">On</Radio>
          <Radio value="off">Off</Radio>
        </RadioGroup>
      </Box>
      <Divider my="32px" border="0.5px solid #D9D9D9" />
      <Box px="62px">
        <Heading variant="h5" mb="8px">
          Promotional Emails{" "}
        </Heading>
        <Text variant={"body3"} mb="24px">
          Recieve emails for promotions and offers{" "}
        </Text>
        <RadioGroup display={"flex"} gap="24px" colorScheme={"purple"}>
          <Radio value="on">On</Radio>
          <Radio value="off">Off</Radio>
        </RadioGroup>
      </Box>
      <Divider my="32px" border="0.5px solid #D9D9D9" />
      <Box px="62px">
        <Heading variant="h5" mb="8px">
          News Emails{" "}
        </Heading>
        <Text variant={"body3"} mb="24px">
          Recieve emails for new features and updates.{" "}
        </Text>
        <RadioGroup display={"flex"} gap="24px" colorScheme={"purple"}>
          <Radio value="on">On</Radio>
          <Radio value="off">Off</Radio>
        </RadioGroup>
      </Box>
      <Divider my="32px" border="0.5px solid #D9D9D9" />
      <Box px="62px">
        <Heading variant="h5" mb="8px">
          Support Emails{" "}
        </Heading>
        <Text variant={"body3"} mb="24px">
          Recieve emails for customer support{" "}
        </Text>
        <RadioGroup display={"flex"} gap="24px" colorScheme={"purple"}>
          <Radio value="on">On</Radio>
          <Radio value="off">Off</Radio>
        </RadioGroup>
      </Box>
      <Divider my="32px" border="0.5px solid #D9D9D9" />
      <Box px="62px">
        <Heading variant="h5" mb="8px">
          Other Emails{" "}
        </Heading>
        <Text variant={"body3"} mb="24px">
          Recieve emails for updates on any other account you follow{" "}
        </Text>
        <RadioGroup display={"flex"} gap="24px" colorScheme={"purple"}>
          <Radio value="on">On</Radio>
          <Radio value="off">Off</Radio>
        </RadioGroup>
        <Button mt="60px">Save & Update</Button>
      </Box>
    </Box>
  );
};

export default Email;

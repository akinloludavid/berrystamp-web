import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Form = ({ type }: { type: number | null }) => {
  return (
    <form
      action=""
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        columnGap: "1.25rem",
        rowGap: "1rem",
      }}
    >
      <FormControl>
        <Text mb="8px" variant={"body3"}>
          Full Name
        </Text>
        <Input variant="outline" placeholder="Enter full name" type="email" />
      </FormControl>
      {type == 0 ? (
        <FormControl>
          <Text mb="8px" variant={"body3"}>
            Username
          </Text>
          <Input variant="outline" placeholder="Enter Username" type="text" />
        </FormControl>
      ) : type == 1 ? (
        <FormControl>
          <Text mb="8px" variant={"body3"}>
            Shop name*
          </Text>
          <Input variant="outline" placeholder="Enter Shop name*" type="text" />
        </FormControl>
      ) : (
        <FormControl>
          <Text mb="8px" variant={"body3"}>
            Bussiness name
          </Text>
          <Input
            variant="outline"
            placeholder="Enter Bussiness name*"
            type="text"
          />
        </FormControl>
      )}
      <FormControl>
        <Text mb="8px" variant={"body3"}>
          Email
        </Text>
        <Input variant="outline" placeholder="Enter password" type="email" />
      </FormControl>
      <FormControl>
        <Text mb="8px" variant={"body3"}>
          Password
        </Text>
        <Input variant="outline" placeholder="Enter password" type="password" />
      </FormControl>
      <Box style={{ gridColumn: "span 2" }}>
        <Checkbox>Send updates and promtions to my email</Checkbox>

        <Button mx={"auto"} display={"block"} mt={"2.5rem"}>
          Continue
        </Button>
        <Text
          variant={"body3"}
          maxWidth={"27.5rem"}
          mx={"auto"}
          mt={"1rem"}
          textAlign={"center"}
        >
          By signing up, you agree to our{" "}
          <span style={{ color: "#0050BA", cursor: "pointer" }}>
            terms of services
          </span>{" "}
          and that you have read our{" "}
          <span style={{ color: "#0050BA", cursor: "pointer" }}>
            privacy policy
          </span>
        </Text>
      </Box>
    </form>
  );
};

export default Form;

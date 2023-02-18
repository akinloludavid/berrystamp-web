import { Button, FormControl, Input, Text } from "@chakra-ui/react";
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
      <Button mx={"auto"} display={"block"}>
        Continue
      </Button>
    </form>
  );
};

export default Form;

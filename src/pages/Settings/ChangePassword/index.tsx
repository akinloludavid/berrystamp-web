import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const ChangePassword = () => {
  const initialValues = {
    confirm_password: "",
    new_password: "",
  };
  const validationSchema = Yup.object().shape({});
  const handleSubmit = (values: any) => {};
  return (
    <Box w="full" pt="32px">
      <Box px="62px">
        <Heading mb="40px" fontSize={"16px"} fontWeight="700">
          Add New Card
        </Heading>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleBlur, handleChange, handleSubmit }) => (
            <form>
              <FormControl mb="32px">
                <FormLabel>New Password</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input />
              </FormControl>
              <Button mt="40px">Change Password</Button>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default ChangePassword;

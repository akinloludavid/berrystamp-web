import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
const EditProfile = () => {
  const initialValues = {
    fullname: "Bode Tom",
    email: "bodetommy21@gmail.com",
    address: "10, Shola Bello avenue",
    phone: "+234 8147238429",
    city: "Maryland",
    state: "Lagos",
    country: "Nigeria",
    zipcode: "220031",
    gender: "femaile",
  };
  const validationSchema = Yup.object().shape({});
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <Box w="100%" pt="32px" pl="62px" pr="128px">
      <Box mb="40px">
        <Image />
        <Link to="#">Change Profile Picture</Link>
      </Box>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values, errors, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <FormControl mb="32px">
              <FormLabel mb="12px">Full Name</FormLabel>
              <Input
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>
            <FormControl mb="32px">
              <FormLabel mb="12px">Email Address</FormLabel>
              <Input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>
            <FormControl mb="32px">
              <FormLabel mb="12px">Mobile Number</FormLabel>
              <Input
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>
            <FormControl mb="32px">
              <FormLabel mb="12px">Delivery Address</FormLabel>
              <Input
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>
            <FormControl mb="32px">
              <FormLabel mb="12px">City</FormLabel>
              <Input
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>
            <FormControl mb="32px">
              <FormLabel mb="12px">State</FormLabel>
              <Input
                name="state"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>
            <FormControl mb="32px">
              <FormLabel mb="12px">Country</FormLabel>
              <Input
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>
            <FormControl mb="32px">
              <FormLabel mb="12px">Zip code</FormLabel>
              <Input
                name="zipcode"
                value={values.zipcode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormControl>{" "}
            <FormControl mb="32px">
              <FormLabel mb="12px">Gender</FormLabel>
              <Select
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value={"male"}>Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
            <Flex gap="4">
              <Button variant={"secondary"}>Cancel</Button>
              <Button type="submit">Update</Button>
            </Flex>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default EditProfile;

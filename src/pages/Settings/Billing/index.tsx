import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FiEdit2, FiPenTool, FiTrash } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
const Billing = () => {
  const initialValues = {
    fullname: "Bode Tom",
    cardNumber: "0001242100",
    expiryDate: "00/00",
    cvc: "",
  };
  const validationSchema = Yup.object().shape({});
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <Box w="full" pt="32px">
      <Box px="62px">
        <Heading mb="32px" fontSize={"16px"} fontWeight="700">
          Add New Card
        </Heading>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Grid
                rowGap={"32px"}
                columnGap="15px"
                templateColumns="repeat(2,1fr)"
              >
                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel mb="12px">Card Number</FormLabel>
                    <Input
                      name="cardNumber"
                      value={values.cardNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel mb="12px">Full Name</FormLabel>
                    <Input
                      name="fullName"
                      value={values.fullname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl>
                    <FormLabel mb="12px">Expiry Date</FormLabel>
                    <Input
                      name="expiryDate"
                      value={values.expiryDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                  <FormControl>
                    <FormLabel mb="12px">CVC</FormLabel>
                    <Input
                      name="cvc"
                      value={values.cvc}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </GridItem>
              </Grid>
              <Button w="148px" mt="40px">
                Add Card
              </Button>
            </form>
          )}
        </Formik>
      </Box>
      <Divider mt="40px" border="0.5px solid #D9D9D9" />
      <Box px="62px">
        <Heading mb="24px" mt="40px" fontSize={"16px"} fontWeight="700">
          Saved Cards
        </Heading>
        <Flex
          align="center"
          justify={"space-between"}
          bg="#F2F2F2"
          borderRadius={"4px"}
          h="64px"
          px="24px"
        >
          <Flex gap="12px">
            <Image src="/assets/icons/mastercard.svg" />
            <Text variant={"body2"} fontWeight="400">
              **** **** **** 1211
            </Text>
          </Flex>
          <Flex align={"center"} gap="8px">
            <Icon as={FiEdit2} />
            <Icon as={HiOutlineTrash} />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify={"space-between"}
          bg="#F2F2F2"
          borderRadius={"4px"}
          h="64px"
          px="24px"
          mt="12px"
        >
          <Flex gap="12px">
            <Image src="/assets/icons/visa.svg" />
            <Text variant={"body2"} fontWeight="400">
              **** **** **** 1211
            </Text>
          </Flex>
          <Flex align={"center"} gap="8px">
            <Icon as={FiEdit2} />
            <Icon as={HiOutlineTrash} />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Billing;

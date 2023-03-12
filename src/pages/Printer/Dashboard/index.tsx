import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import { FaCheck, FaStar, FaTimes } from "react-icons/fa";
import { MdAccountBalanceWallet, MdSpeed } from "react-icons/md";
import { IoMdBasket } from "react-icons/io";
import DonutChart from "../../../components/charts/DonutChart";
import BarChart from "../../../components/charts/BarChart";
import { useNavigate } from "react-router-dom";
import { PRINTER_PAYMENT } from "../../../routes/pathnames";
const PrinterDashboard = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDir={"column"} gap="24px" pt="40px" px="96px">
      <Grid templateColumns={["repeat(4,1fr)"]} gap="12px">
        <GridItem colSpan={1}>
          <Box
            borderRadius={"8px"}
            bg="#291F5C0F"
            py="26px"
            px="73px"
            h="214px"
          >
            <Text
              textAlign={"center"}
              fontWeight="600"
              fontSize="16px"
              color="textColor"
              mb="26px"
            >
              Printer’s statistics
            </Text>
            <Box
              bgColor="pryColor"
              rounded="full"
              w="40px"
              h="40px"
              display={"grid"}
              mx="auto"
              mb="12px"
              placeItems="center"
            >
              <Icon as={MdSpeed} color="white" fontSize={"24px"} />
            </Box>
            <Text
              textAlign={"center"}
              fontWeight="500"
              fontSize="14px"
              color="#474747"
              mb="8px"
            >
              Business Performance{" "}
            </Text>
            <Text
              textAlign={"center"}
              color="pryColor"
              fontSize={"24px"}
              fontWeight="700"
            >
              99.3%
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box
            borderRadius={"8px"}
            bg="#291F5C0F"
            py="26px"
            px="20px"
            h="214px"
          >
            <Text fontWeight="600" fontSize="16px" color="textColor" mb="40px">
              Insights and analytics{" "}
            </Text>
            <Flex align={"center"} gap="40px" justifyContent={"space-between"}>
              <Box
                display={"flex"}
                alignItems="center"
                flexDirection={"column"}
              >
                <Text
                  color="pryColor"
                  fontSize={"24px"}
                  fontWeight="700"
                  mb="12px"
                >
                  20%
                </Text>
                <Text color="#474747" variant={"body3"} fontWeight="500">
                  Customer retention
                </Text>
              </Box>
              <Divider
                h="62px"
                orientation="vertical"
                border="1px solid #3E2F8A"
              />
              <Box
                display={"flex"}
                alignItems="center"
                flexDirection={"column"}
              >
                <Text
                  color="pryColor"
                  fontSize={"24px"}
                  fontWeight="700"
                  mb="12px"
                >
                  1{" "}
                </Text>
                <Text color="#474747" variant={"body3"} fontWeight="500">
                  Accounts following you{" "}
                </Text>
              </Box>
              <Divider
                h="62px"
                orientation="vertical"
                border="1px solid #3E2F8A"
              />
              <Box
                display={"flex"}
                alignItems="center"
                flexDirection={"column"}
              >
                <Text
                  color="pryColor"
                  fontSize={"24px"}
                  fontWeight="700"
                  mb="12px"
                >
                  300
                </Text>
                <Text color="#474747" variant={"body3"} fontWeight="500">
                  Accounts you follow{" "}
                </Text>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <GridItem>
          <Flex
            justify={"center"}
            align="center"
            h="214px"
            bgColor="pryColor"
            borderRadius={"8px"}
            flexDir="column"
          >
            <Heading color="white" variant={"h2"} fontWeight="700" mb="8">
              Falcon Prints
            </Heading>
            <Flex align={"center"} mb="24px" gap="4px">
              <Text color="#D8D5E8" variant={"body4"}>
                Verified account
              </Text>
              <Image src="/assets/verified.svg" />
            </Flex>
            <Flex w="full" justify={"space-between"} px="40px">
              <Box display={"flex"} alignItems="center" flexDir={"column"}>
                <Heading variant={"h3"} as="h3" color="white" mb="8px">
                  ₦200k
                </Heading>
                <Text color="#D8D5E8" variant={"h3"} as="h3">
                  Earnings
                </Text>
              </Box>
              <Box display={"flex"} alignItems="center" flexDir={"column"}>
                <Heading variant={"h3"} as="h3" color="white" mb="8px">
                  4.8
                </Heading>
                <Text color="#D8D5E8" variant={"h3"} as="h3">
                  Rating{" "}
                </Text>
              </Box>
              <Box display={"flex"} alignItems="center" flexDir={"column"}>
                <Heading variant={"h3"} as="h3" color="white" mb="8px">
                  500k
                </Heading>
                <Text color="#D8D5E8" variant={"h3"} as="h3">
                  Followers{" "}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
      <Grid templateColumns={"repeat(5,1fr)"} gap="12px">
        <GridItem>
          <Flex
            align={"center"}
            justify="space-between"
            pl="20px"
            pr="30px"
            h="132px"
            borderRadius={"8px"}
            bg="#7B8A2F14"
          >
            <Box>
              <Text
                color="#7B8A2F"
                opacity={""}
                fontSize="16px"
                fontWeight="400"
              >
                Completed order
              </Text>
              <Heading color="#7B8A2F" fontSize={"24px"} fontWeight="700">
                300
              </Heading>
            </Box>
            <Box
              w="40px"
              h="40px"
              bg="#7B8A2F"
              rounded="full"
              display={"flex"}
              justifyContent="center"
              alignItems="center"
            >
              <IoMdBasket color="white" />
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            align={"center"}
            justify="space-between"
            pl="20px"
            pr="30px"
            h="132px"
            borderRadius={"8px"}
            bg="#EDEDF1"
          >
            <Box>
              <Text
                color="#3E2F8A"
                opacity={""}
                fontSize="16px"
                fontWeight="400"
              >
                Overall Earning
              </Text>
              <Heading color="#3E2F8A" fontSize={"24px"} fontWeight="700">
                500k
              </Heading>
            </Box>
            <Box
              w="40px"
              h="40px"
              bg="#3E2F8A"
              rounded="full"
              display={"flex"}
              justifyContent="center"
              alignItems="center"
            >
              <MdAccountBalanceWallet color="white" />
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            align={"center"}
            justify="space-between"
            pl="20px"
            pr="30px"
            h="132px"
            borderRadius={"8px"}
            bg="#0050BA14"
          >
            <Box>
              <Text
                color="#0050BA"
                opacity={""}
                fontSize="16px"
                fontWeight="400"
              >
                Overall ratings
              </Text>
              <Heading color="#0050BA" fontSize={"24px"} fontWeight="700">
                4.9
              </Heading>
            </Box>
            <Box
              w="40px"
              h="40px"
              bg="#0050BA"
              rounded="full"
              display={"flex"}
              justifyContent="center"
              alignItems="center"
            >
              <FaStar color="white" />
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            align={"center"}
            justify="space-between"
            pl="20px"
            pr="30px"
            h="132px"
            borderRadius={"8px"}
            bg="#2F8A6C14"
          >
            <Box>
              <Text
                color="#2F8A6C"
                opacity={""}
                fontSize="16px"
                fontWeight="400"
              >
                Job success{" "}
              </Text>
              <Heading color="#2F8A6C" fontSize={"24px"} fontWeight="700">
                99%{" "}
              </Heading>
            </Box>
            <Box
              w="40px"
              h="40px"
              bg="#2F8A6C"
              rounded="full"
              display={"flex"}
              justifyContent="center"
              alignItems="center"
            >
              <FaCheck color="white" />
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            align={"center"}
            justify="space-between"
            pl="20px"
            pr="30px"
            h="132px"
            borderRadius={"8px"}
            bg="#8A2F4D14"
          >
            <Box>
              <Text
                color="#8A2F4D"
                opacity={""}
                fontSize="16px"
                fontWeight="400"
              >
                Cancelled order
              </Text>
              <Heading color="#8A2F4D" fontSize={"24px"} fontWeight="700">
                0
              </Heading>
            </Box>
            <Box
              w="40px"
              h="40px"
              bg="#8A2F4D"
              rounded="full"
              display={"flex"}
              justifyContent="center"
              alignItems="center"
            >
              <FaTimes color="white" />
            </Box>
          </Flex>
        </GridItem>
      </Grid>
      <Grid mb="133px" templateColumns="repeat(2,1fr)" gap="12px">
        <GridItem>
          <Box
            h="380px"
            py="26px"
            px="20px"
            bgColor={"#291F5C0F"}
            borderRadius="8px"
          >
            <Flex justify={"space-between"} align="center">
              <Text fontSize={"16px"} fontWeight="600" color="textColor">
                Overall Payment Status
              </Text>
              <Button onClick={() => navigate(PRINTER_PAYMENT)}>
                Payment History
              </Button>
            </Flex>
            <Grid
              gridTemplateColumns={"1fr 1fr"}
              gap={"0.5.625rem"}
              alignItems={"center"}
            >
              <DonutChart />
              <GridItem>
                {[
                  { label: "Pending payment status", color: "#FF0022" },
                  {
                    label: "Paid payment status",
                    color: "#3E2F8A",
                  },
                  { label: "Cancelled payment status", color: "#F9A70D" },
                ].map((el) => (
                  <Flex alignItems={"center"} gap={"0.75rem"} mb={"1.625rem"}>
                    <Box bg={el.color} width={"2.5rem"} height={"0.5rem"} />
                    <Text
                      variant={"body4"}
                      fontSize={"0.75rem"}
                      fontWeight={"500"}
                    >
                      {el.label}
                    </Text>
                  </Flex>
                ))}
              </GridItem>
            </Grid>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            h="380px"
            py="26px"
            px="20px"
            bgColor={"#291F5C0F"}
            borderRadius="8px"
          >
            <Flex justify={"space-between"} align="center">
              <Text fontSize={"16px"} fontWeight="600" color="textColor">
                Account Overview
              </Text>
              <Select
                width={"6.1rem"}
                borderRadius={"110px"}
                bg={" rgba(41, 31, 92, 0.15)"}
                fontSize={"12px"}
                px={0}
                outline={"none"}
              >
                <option value="monthly">Monthly</option>
                <option value="daily">Daily</option>
              </Select>
            </Flex>
            <BarChart />
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default PrinterDashboard;

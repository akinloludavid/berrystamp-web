import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React from "react";
import { useNavigate } from "react-router-dom";
import BarChart from "../../components/charts/BarChart";
import DonutChart from "../../components/charts/DonutChart";
import StatisticsCard from "../../components/StatisticsCard";
import MainContainer from "../../layout/MainContainer";
import { DESIGNER_PAYMENT } from "../../routes/pathnames";
import { stats } from "./data";

const DesignerDashboard = () => {
  const navigate = useNavigate();
  return (
    <MainContainer pb={"6rem"}>
      <Flex gap={"11px"} flexWrap={"wrap"} mb={"1.5rem"} mt={"2.5rem"}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          bg={"rgba(41, 31, 92, 0.06)"}
          width={"17rem"}
          height={"13.375rem"}
          borderRadius={"8px"}
        >
          <Text variant={"body4"} fontWeight={"600"} mb={"1.625rem"}>
            Designer’s statistics
          </Text>
          <Image
            src="/assets/vectors/dash-icon.svg"
            w={["40px"]}
            h={["40px"]}
          />
          <Text
            mt={"0.75rem"}
            mb={"0.5rem"}
            variant={"body3"}
            color={"#474747"}
          >
            Business Performance
          </Text>
          <Text color={"#342773"} fontSize={"1.5rem"} fontWeight={"700"}>
            99.3%
          </Text>
        </Flex>
        <Box
          pt={"1.625rem"}
          flexGrow={1}
          bg={"rgba(41, 31, 92, 0.06)"}
          height={"13.375rem"}
          borderRadius={"8px"}
        >
          <Text
            variant={"body4"}
            px={"1.25rem"}
            fontWeight={"600"}
            mb={"1.625rem"}
          >
            Insights and analytics
          </Text>
          <Grid gridTemplateColumns={"repeat(3, 1fr)"} mt={"2.5rem"}>
            {[
              { label: "Customer retention", value: "20%" },
              { label: "Accounts following you", value: "1k" },
              { label: "Accounts you follow", value: "200" },
            ].map((el, index) => (
              <Box
                key={nanoid()}
                px={"1.5rem"}
                borderRight={index !== 2 ? " 1px solid #3E2F8A" : ""}
              >
                <Text
                  textAlign={"center"}
                  variant={"body1"}
                  fontSize={"1.5rem"}
                  color={"#342773"}
                  fontWeight={"700"}
                  mb={"0.75rem"}
                >
                  {el.value}
                </Text>
                <Text textAlign={"center"} variant={"body4"} color={"#474747"}>
                  {el.label}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
        <Box
          bg={"#291F5C"}
          width={"20rem"}
          height={"13.375rem"}
          borderRadius={"8px"}
          px={"1.8rem"}
          py={"1.93rem"}
        >
          <Heading
            textAlign={"center"}
            variant={"h2"}
            color={"white"}
            fontWeight={"600"}
            mb={"0.75rem"}
          >
            Art by Shemxy
          </Heading>
          <Flex
            mt={"0.75rem"}
            mb={"0.5rem"}
            gap={"5px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text variant={"body3"} color={"#fff"}>
              Verified account
            </Text>
            <Image
              src="/assets/vectors/verify-white.svg"
              w={["16px"]}
              h={["16px"]}
            />
          </Flex>
          <Flex justifyContent={"space-between"} mt={"1.5rem"}>
            {[
              { label: "Earnings", value: "₦200k" },
              { label: "Rating", value: "4.8" },
              { label: "Followers", value: "500k" },
            ].map((el) => (
              <Box key={nanoid()}>
                <Text
                  variant={"body1"}
                  fontSize={"1.5rem"}
                  color={"#fff"}
                  fontWeight={"700"}
                  mb={"0.5rem"}
                >
                  {el.value}
                </Text>
                <Text variant={"body4"} color={"#fff"}>
                  {el.label}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
      <Flex gap={"11px"} flexWrap={"wrap"} mb={"1.5rem"}>
        {stats.map((stat) => (
          <StatisticsCard {...stat} key={nanoid()} />
        ))}
      </Flex>
      <Grid gridTemplateColumns={"1fr 1fr"} gap={".75rem"}>
        <GridItem
          bg={"rgba(41, 31, 92, 0.06)"}
          borderRadius={"8px"}
          height={"full"}
          px={"1.25rem"}
          py={"1.625rem"}
        >
          <Flex justifyContent={"space-between"} mb={"3rem"}>
            <Text variant={"body4"} fontWeight={"600"}>
              Overall Payment Status
            </Text>
            <Button onClick={() => navigate(DESIGNER_PAYMENT)}>
              Payment history
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
        </GridItem>
        <GridItem
          bg={"rgba(41, 31, 92, 0.06)"}
          borderRadius={"8px"}
          px={"1.25rem"}
          py={"1.625rem"}
        >
          <Flex justifyContent={"space-between"} mb={"3rem"}>
            <Text variant={"body4"} fontWeight={"600"}>
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
              <option value="option1">Monthly</option>
              <option value="option1">Daily</option>
            </Select>
          </Flex>
          <BarChart />
        </GridItem>
      </Grid>
    </MainContainer>
  );
};

export default DesignerDashboard;

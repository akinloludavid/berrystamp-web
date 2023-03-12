import {
  Box,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import MainContainer from "../../layout/MainContainer";

const Payment = () => {
  const tableHeaders = [
    "S.No",
    "Design Title",
    "Transaction ID",
    "Inkstamp Fee",
    "Charge",
  ];
  const tableData = Array(5)
    .fill("")
    .map(() => ({
      designTitle: "Beauty in Africa",
      transactionID: "QWef4234",
      inkstampFee: "₦600",
      charge: "₦3000",
    }));
  return (
    <MainContainer mt="12px" pb={"8rem"}>
      <Flex alignItems={"center"} fontSize={"14px"} mb={"1.2rem"}>
        Dashboard Overview <BiChevronRight /> Payment
      </Flex>
      <Heading variant={"h2"} fontWeight={"700"}>
        Payment
      </Heading>
      <Text variant={"body2"}>
        All your earnings and applicable fee in the last two(2) years will be
        shown here.
      </Text>
      <TableContainer mt="1rem">
        <Table
          border="1px solid #3E2F8A"
          borderRadius={"8px"}
          variant={"unstyled"}
        >
          <Thead h="60px">
            <Tr>
              {tableHeaders.map((item, idx, arr) => (
                <Th
                  pl={idx === 0 ? ["96px"] : 0}
                  pr={idx === arr.length - 1 ? ["96px"] : 0}
                  fontSize={["14px"]}
                  fontWeight="500"
                  color="black"
                  textTransform={"capitalize"}
                  key={nanoid()}
                >
                  {item}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((item, idx) => (
              <Tr cursor="pointer" key={nanoid()}>
                <Td pl={["96px"]}>{idx + 1}</Td>
                {Object.values(item)
                  .slice(0, Object.values(item).length)
                  .map((el) => (
                    <Td
                      key={nanoid()}
                      pl="0"
                      fontSize={"14px"}
                      fontWeight="400"
                    >
                      {el}
                    </Td>
                  ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justifyContent={"flex-end"}>
        {" "}
        <Flex
          flexDirection={"column"}
          width={"25.875rem"}
          py={".5rem"}
          border="1px solid #3E2F8A"
          borderRadius={"8px"}
          mt={"2rem"}
        >
          {[
            { label: "Total Charges", value: "253,700" },
            { label: "Inkstamp Fee", value: "93,280" },
            { label: "Total Earned", value: "160,420" },
          ].map((el, index) => (
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              key={nanoid()}
              py={"1rem"}
              px={"1.5rem"}
              borderBottom={index !== 2 ? " 1px solid #DBDBDB" : ""}
            >
              <Text
                textAlign={"center"}
                variant={"body4"}
                fontWeight={index !== 2 ? "400" : "700"}
              >
                {el.label}
              </Text>
              <Text
                textAlign={"center"}
                variant={"body4"}
                fontWeight={index !== 2 ? "400" : "700"}
              >
                {el.value}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </MainContainer>
  );
};

export default Payment;

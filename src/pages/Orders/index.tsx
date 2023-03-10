import {
  Box,
  Flex,
  Heading,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import NoOrder from "../../components/NoOrder";
import Pagination from "../../components/Pagination";
import MainContainer from "../../layout/MainContainer";
import {
  BERRY_STAMP_USERKEY,
  getFilteredObjects,
  getLocalStorage,
} from "../../utils/helper";
import { myOrders } from "./data";
import OrderDetails from "./OrderDetails";

const orderStatuses = [
  {
    label: "All Orders",
    value: "",
  },
  {
    label: "Active Orders",
    value: "active",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Cancelled",
    value: "cancelled",
  },
];
const tableHeaders = [
  "S/N",
  "Last Updated",
  "Designer/Printer",
  "Order Title",
  "Due On",
  "Payment status",
  "Amount",
  "Status",
];
const StatusChip = ({ status }: { status: string }) => {
  const style: any = {
    active: {
      color: "#3E2F8A",
      bgColor: "#3E2F8A0D",
    },
    cancelled: {
      bgColor: "#FF00220D",
      color: "#FF0022",
    },
    completed: {
      bgColor: "#129B7A0D",
      color: "#339900",
    },
  };
  return (
    <Box
      sx={style[status]}
      w="88px"
      borderRadius={"4px"}
      textTransform="capitalize"
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      h="33px"
      fontSize={"14px"}
      fontWeight="400"
    >
      {status}
    </Box>
  );
};
const Orders = () => {
  const user = getLocalStorage(BERRY_STAMP_USERKEY);
  const [orderStatus, setOrderStatus] = useState("");
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const filteredOrders = getFilteredObjects(myOrders, orderStatus);
  const handleOpenOrderDetails = (data: any) => {
    setIsDetailsOpen(true);
  };
  const handleCloseDetails = () => {
    setOrderDetails(null);
    setIsDetailsOpen(false);
  };

  return (
    <Box>
      <OrderDetails
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
        data={orderDetails}
      />
      {user ? (
        <Box>
          <MainContainer mt="32px">
            <Heading variant={"h2"} as="h2" fontWeight={"700"} mb="20px">
              Manage Orders
            </Heading>
            <Flex justify={"space-between"}>
              <Flex gap="8">
                {orderStatuses.map((el) => (
                  <Box
                    key={nanoid()}
                    position={"relative"}
                    cursor={"pointer"}
                    onClick={() => setOrderStatus(el.value)}
                  >
                    <Text variant={"body2"}>{el.label}</Text>
                    {orderStatus === el.value && (
                      <Box
                        position={"absolute"}
                        h="2px"
                        w="32px"
                        mx="auto"
                        left="50%"
                        top="30px"
                        transform={"translate(-50%)"}
                        rounded="full"
                        bgColor={"pryColor"}
                      />
                    )}
                  </Box>
                ))}
              </Flex>
              <Flex gap="12px" align={"center"}>
                <Input
                  h="40px"
                  bgColor="#F8F8F8"
                  rounded="4px"
                  fontSize={"14px"}
                  fontWeight="500"
                  type="date"
                />
                <Text>To</Text>
                <Input
                  h="40px"
                  bgColor="#F8F8F8"
                  rounded="4px"
                  fontSize={"14px"}
                  fontWeight="500"
                  type="date"
                />
              </Flex>
            </Flex>
          </MainContainer>
          <TableContainer mt="36px" mb="115px">
            <Table border="none" variant={"unstyled"}>
              <Thead bgColor="#D8D5E870" h="60px">
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
                {filteredOrders.map((item, idx) => (
                  <Tr
                    cursor="pointer"
                    key={nanoid()}
                    _hover={{ backgroundColor: "#f6f6f6" }}
                    onClick={() => handleOpenOrderDetails(item)}
                  >
                    <Td pl={["96px"]}>{idx + 1}</Td>
                    {Object.values(item)
                      .slice(0, Object.values(item).length - 1)
                      .map((el) => (
                        <Td
                          key={nanoid()}
                          pl="0"
                          fontSize={"14px"}
                          fontWeight="400"
                          color={
                            el === "Payment Verified" ? "#226600" : "#757575"
                          }
                        >
                          {el}
                        </Td>
                      ))}
                    <Td pl="0">
                      <StatusChip status={item.status} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <MainContainer mt="45px">
              <Pagination pageCount={4} handlePageClick={(e: any) => {}} />
            </MainContainer>
          </TableContainer>
        </Box>
      ) : (
        <NoOrder img="/assets/gifs/no-order-found.gif" />
      )}
    </Box>
  );
};

export default Orders;

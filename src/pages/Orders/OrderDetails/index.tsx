import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Heading,
  Text,
  Flex,
  Box,
  Button,
  Icon,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React from "react";
import { MdOutlineInfo } from "react-icons/md";
interface IOrderDetails {
  onClose: () => void;
  isOpen: boolean;
  data?: any;
  title?: string;
  children?: React.ReactNode;
}
const OrderDetails = ({ onClose, isOpen, children, title }: IOrderDetails) => {
  return (
    <Drawer placement={"right"} onClose={onClose} isOpen={isOpen} size="lg">
      <DrawerOverlay />
      <DrawerContent w="50vw">
        <DrawerHeader>{title}</DrawerHeader>
        <DrawerBody px="28px">
          <Flex gap="8">
            <Box>
              <Heading variant={"h3"} as="h3">
                Order WQ54249TH
              </Heading>
              <Text
                fontSize={"16px"}
                fontWeight="500"
                color="textColor"
                lineHeight={"24px"}
                mb="10px"
              >
                order for international women’s day celebration.
              </Text>
              <Text variant={"body2"} mb="4px">
                Designer: Art by shemxy
              </Text>
              <Text variant={"body2"} mb="4px">
                Date created: 13-12-2022
              </Text>
              <Text variant={"body2"} mb="4px">
                Amount: ₦8,000
              </Text>
              <Flex gap="6" mt="45px">
                <Button variant={"secondary"}>Review Order</Button>
                <Button>Approve Order </Button>
              </Flex>
              <Flex align={"center"} gap="4" mt={"4"}>
                <Icon color="danger" as={MdOutlineInfo} />
                <Text color="danger" fontSize={"12px"} fontWeight="400">
                  You have only a maximum of 5times to review this order.
                </Text>
              </Flex>
            </Box>
            <Flex gap="2">
              <Box>
                <Heading variant={"h3"} as="h3" color="danger">
                  06
                </Heading>
                <Text fontSize={"12px"} fontWeight="400">
                  Days
                </Text>
              </Box>

              <Text color="danger" mt="6px">
                :
              </Text>
              <Box>
                <Heading variant={"h3"} as="h3" color="danger">
                  08
                </Heading>
                <Text fontSize={"12px"} fontWeight="400">
                  Hours
                </Text>
              </Box>
              <Text color="danger" mt="6px">
                :
              </Text>
              <Box>
                <Heading variant={"h3"} as="h3" color="danger">
                  08
                </Heading>
                <Text fontSize={"12px"} fontWeight="400">
                  Minutes
                </Text>
              </Box>
              <Text color="danger" mt="6px">
                :
              </Text>
              <Box>
                <Heading variant={"h3"} as="h3" color="danger">
                  08
                </Heading>
                <Text fontSize={"12px"} fontWeight="400">
                  Seconds
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Flex
            borderRadius={"4px"}
            align="center"
            justify={"center"}
            h="44px"
            bgColor={"#F2F2F2"}
            mt="30px"
            mb="48px"
          >
            Design Work
          </Flex>
          <Image src="/assets/orders/img1.png" mx="auto" />
          <Flex
            borderRadius={"4px"}
            align="center"
            justify={"center"}
            h="44px"
            bgColor={"#F2F2F2"}
            mt="30px"
          >
            Mockups
          </Flex>
          <Flex justify={"space-between"}>
            {[1, 2, 3, 4, 5, 6].map((el) => (
              <Image
                key={nanoid()}
                w="90px"
                h="90px"
                src={`/assets/orders/img${el}.png`}
              />
            ))}
          </Flex>
          <Flex
            borderRadius={"4px"}
            align="center"
            justify={"center"}
            h="44px"
            bgColor={"#F2F2F2"}
            mt="30px"
            mb="48px"
          >
            Item Specifications
          </Flex>
          <Grid templateColumns={["repeat(2,1fr)"]} rowGap="48px">
            <GridItem display={"flex"} gap="14px">
              <Image src="/assets/orders/img1.png" w="72px" h="72px" />
              <Box>
                <Text
                  mb="16px"
                  variant={"body3"}
                  fontWeight="500"
                  color="black"
                >
                  Item Name: Invitation card
                </Text>
                <Text variant={"body3"} fontWeight="700" mb="12px">
                  Printing Preferences
                </Text>
                <Text variant={"body3"} color="black">
                  Preferred printing type{" "}
                </Text>
                <Text mb="16px" variant={"body3"} color="#757575">
                  Screen printing
                </Text>
                <Flex flexDirection={"column"} gap="12px">
                  <Text variant={"body3"} color="#000000">
                    Material specification
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    Size : Medium size
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    Quantity : 3 pieces
                  </Text>
                </Flex>
                <Flex flexDirection={"column"} gap="12px" mt="12px">
                  <Text variant={"body3"} color="#000000" fontWeight="700">
                    Item availability{" "}
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    From: The printer’s inventory{" "}
                  </Text>
                </Flex>
              </Box>
            </GridItem>
            <GridItem display={"flex"} gap="14px">
              <Image src="/assets/orders/img1.png" w="72px" h="72px" />
              <Box>
                <Text
                  mb="16px"
                  variant={"body3"}
                  fontWeight="500"
                  color="black"
                >
                  Item Name: Invitation card
                </Text>
                <Text variant={"body3"} fontWeight="700" mb="12px">
                  Printing Preferences
                </Text>
                <Text variant={"body3"} color="black">
                  Preferred printing type{" "}
                </Text>
                <Text mb="16px" variant={"body3"} color="#757575">
                  Screen printing
                </Text>
                <Flex flexDirection={"column"} gap="12px">
                  <Text variant={"body3"} color="#000000">
                    Material specification
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    Size : Medium size
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    Quantity : 3 pieces
                  </Text>
                </Flex>
                <Flex flexDirection={"column"} gap="12px" mt="12px">
                  <Text variant={"body3"} color="#000000" fontWeight="700">
                    Item availability{" "}
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    From: The printer’s inventory{" "}
                  </Text>
                </Flex>
              </Box>
            </GridItem>{" "}
            <GridItem display={"flex"} gap="14px">
              <Image src="/assets/orders/img1.png" w="72px" h="72px" />
              <Box>
                <Text
                  mb="16px"
                  variant={"body3"}
                  fontWeight="500"
                  color="black"
                >
                  Item Name: Invitation card
                </Text>
                <Text variant={"body3"} fontWeight="700" mb="12px">
                  Printing Preferences
                </Text>
                <Text variant={"body3"} color="black">
                  Preferred printing type{" "}
                </Text>
                <Text mb="16px" variant={"body3"} color="#757575">
                  Screen printing
                </Text>
                <Flex flexDirection={"column"} gap="12px">
                  <Text variant={"body3"} color="#000000">
                    Material specification
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    Size : Medium size
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    Quantity : 3 pieces
                  </Text>
                </Flex>
                <Flex flexDirection={"column"} gap="12px" mt="12px">
                  <Text variant={"body3"} color="#000000" fontWeight="700">
                    Item availability{" "}
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    From: The printer’s inventory{" "}
                  </Text>
                </Flex>
              </Box>
            </GridItem>
            <GridItem display={"flex"} gap="14px">
              <Image src="/assets/orders/img1.png" w="72px" h="72px" />
              <Box>
                <Text
                  mb="16px"
                  variant={"body3"}
                  fontWeight="500"
                  color="black"
                >
                  Item Name: Invitation card
                </Text>
                <Text variant={"body3"} fontWeight="700" mb="12px">
                  Printing Preferences
                </Text>
                <Text variant={"body3"} color="black">
                  Preferred printing type{" "}
                </Text>
                <Text mb="16px" variant={"body3"} color="#757575">
                  Screen printing
                </Text>
                <Flex flexDirection={"column"} gap="12px">
                  <Text variant={"body3"} color="#000000">
                    Material specification
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    Size : Medium size
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    Quantity : 3 pieces
                  </Text>
                </Flex>
                <Flex flexDirection={"column"} gap="12px" mt="12px">
                  <Text variant={"body3"} color="#000000" fontWeight="700">
                    Item availability{" "}
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    From: The printer’s inventory{" "}
                  </Text>
                </Flex>
              </Box>
            </GridItem>
            <GridItem display={"flex"} gap="14px">
              <Image src="/assets/orders/img1.png" w="72px" h="72px" />
              <Box>
                <Text
                  mb="16px"
                  variant={"body3"}
                  fontWeight="500"
                  color="black"
                >
                  Item Name: Invitation card
                </Text>
                <Text variant={"body3"} fontWeight="700" mb="12px">
                  Printing Preferences
                </Text>
                <Text variant={"body3"} color="black">
                  Preferred printing type{" "}
                </Text>
                <Text mb="16px" variant={"body3"} color="#757575">
                  Screen printing
                </Text>
                <Flex flexDirection={"column"} gap="12px">
                  <Text variant={"body3"} color="#000000">
                    Material specification
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    Size : Medium size
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    Quantity : 3 pieces
                  </Text>
                </Flex>
                <Flex flexDirection={"column"} gap="12px" mt="12px">
                  <Text variant={"body3"} color="#000000" fontWeight="700">
                    Item availability{" "}
                  </Text>
                  <Text variant={"body3"} color="#000000">
                    From: The printer’s inventory{" "}
                  </Text>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default OrderDetails;

import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MyShop = () => {
  return (
    <Box px="96px" pt="32px">
      <Image
        src="/assets/printer/cover.png"
        alt="printer info"
        w="full"
        h="164px"
        rounded="8px"
      />
      <Box pl="32px">
        <Image src="/assets/printer/logo.png" mt="-70px" mb="12px" />
        <Box>
          <Flex>
            <Heading variant={"h3"} as="h3" mb="12px">
              Falcon Prints
            </Heading>
          </Flex>
          <Flex align={"center"} gap="12px" mb="8px">
            <Text variant={"body2"} fontWeight="500" color="textColor">
              10 Designs
            </Text>
            <Divider
              h="20px"
              orientation="vertical"
              border="1px solid #323232"
            />
            <Text variant={"body2"} fontWeight="500" color="textColor">
              432 Reviews
            </Text>
            <Divider
              h="20px"
              orientation="vertical"
              border="1px solid #323232"
            />
            <Text variant={"body2"} fontWeight="500" color="textColor">
              0 Followers
            </Text>
            <Divider
              h="20px"
              orientation="vertical"
              border="1px solid #323232"
            />
            <Text variant={"body2"} fontWeight="500" color="textColor">
              0 Following
            </Text>
          </Flex>
          <Flex align={"center"} gap="12px" mb="8px">
            <Text variant={"body2"} fontWeight="500" color="textColor">
              Commecial Printer
            </Text>
            <Text>|</Text>
            <Text variant={"body2"} fontWeight="500" color="success">
              100% Job Success
            </Text>
          </Flex>
          <Text variant={"body2"} fontWeight="500" color="textColor">
            Maryland, Lagos state. Nigeria
          </Text>

          <Box
            mt="24px"
            mb="16px"
            display={"flex"}
            flexDirection="column"
            gap="3px"
          >
            <Flex gap="12px" align={"center"}>
              <Box bg="#FF0022" w="12px" h="12px" transform="rotateZ(45deg)" />
              <Text variant={"body2"} color="textColor" lineHeight={"32px"}>
                Specializing in all things printing.
              </Text>
            </Flex>
            <Flex gap="12px" align={"center"}>
              <Box bg="#FF0022" w="12px" h="12px" transform="rotateZ(45deg)" />
              <Text variant={"body2"} color="textColor" lineHeight={"32px"}>
                We print business cards, wedding cards, Tshirt, calendars,
                rollup banners, Merchandise brochures, stickers, etc.
              </Text>
            </Flex>
            <Flex gap="12px" align={"center"}>
              <Box bg="#FF0022" w="12px" h="12px" transform="rotateZ(45deg)" />
              <Text variant={"body2"} color="textColor" lineHeight={"32px"}>
                Our printing technology includes use of Digital printing and
                Offset printing.{" "}
              </Text>
            </Flex>
          </Box>
          <Link to="#">Edit Profile</Link>
        </Box>
      </Box>
      <Box pt="72px" w="100%" display={"flex"} flexDir="column">
        <Text variant={"body1"} color="textColor" textAlign={"center"}>
          Work Gallery
        </Text>
        <Divider border={"1px solid #fdfdfd"} mb="24px" />
        <Grid
          templateColumns={["repeat(5,1fr)"]}
          columnGap="16px"
          rowGap={"24px"}
          mb="40px"
        >
          {new Array(25).fill(0).map((el, idx) => (
            <GridItem>
              <Image src={`/assets/printer/img${(idx % 5) + 1}.png`} />
            </GridItem>
          ))}
        </Grid>
        <Button variant={"ghost"} mx="auto" mb="165px">
          See More
        </Button>
      </Box>
    </Box>
  );
};

export default MyShop;

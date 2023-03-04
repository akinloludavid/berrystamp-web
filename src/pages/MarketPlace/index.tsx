import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineChevronRight, MdOutlineList } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import MainContainer from "../../layout/MainContainer";
import {
  designCategories,
  marketPlaceProducts,
  productCategories,
  stockCategories,
} from "../../utils/data";

const MarketPlace = () => {
  const navigate = useNavigate();
  return (
    <Box mt="56px">
      <MainContainer px={["24px", "40px", "80px", "80px", "165px"]}>
        <Flex gap="40px" w="100%">
          <Box display={["none", "none", "none", "block"]}>
            <Heading variant={"h2"} as="h2" mb={"8px"}>
              Marketplace
            </Heading>
            <Box
              width="273px"
              borderRadius={"4px"}
              border="1px solid #E8E8E8"
              bgColor="#ffffff"
              px="16px"
              pt="24.5px"
              pb="37px"
            >
              <Flex justify={"space-between"} align="center" mb="16.5px">
                <Heading as="h5" fontSize={"14px"} fontWeight="700">
                  Product Category
                </Heading>
                <Icon as={MdOutlineChevronRight} fontSize="24px" />
              </Flex>
              <CheckboxGroup>
                <Stack direction={"column"} spacing="12px">
                  {productCategories.map((el) => (
                    <Checkbox
                      fontSize={"14px"}
                      fontWeight="400"
                      colorScheme="purple"
                      key={nanoid()}
                    >
                      {el.label}
                    </Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>

              <Divider border="0.5px solid #C9C9C9" mt="34px" mb="22.5px" />
              <Flex justify={"space-between"} align="center" mb="16.5px">
                <Heading as="h5" fontSize={"14px"} fontWeight="700">
                  Design Category
                </Heading>
                <Icon as={MdOutlineChevronRight} fontSize="24px" />
              </Flex>
              <CheckboxGroup>
                <Stack direction={"column"} spacing="12px">
                  {designCategories.map((el) => (
                    <Checkbox
                      fontSize={"14px"}
                      fontWeight="400"
                      colorScheme="purple"
                      key={nanoid()}
                    >
                      {el.label}
                    </Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>
              <Divider border="0.5px solid #C9C9C9" mt="34px" mb="22.5px" />
              <Flex justify={"space-between"} align="center" mb="16.5px">
                <Heading as="h5" fontSize={"14px"} fontWeight="700">
                  Filter by Product Stock/Rate
                </Heading>
                <Icon as={MdOutlineChevronRight} fontSize="24px" />
              </Flex>
              <CheckboxGroup>
                <Stack direction={"column"} spacing="12px">
                  {stockCategories.map((el) => (
                    <Checkbox
                      fontSize={"14px"}
                      fontWeight="400"
                      colorScheme="purple"
                      key={nanoid()}
                    >
                      {el.label}
                    </Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>
              <Divider border="1px solid #C9C9C9" mt="34px" mb="22.5px" />

              <Flex justify={"space-between"} align="center" mb="16.5px">
                <Heading as="h5" fontSize={"14px"} fontWeight="700">
                  Filter By Price(₦)
                </Heading>
                <Button
                  variant={"ghost"}
                  color="pryColor"
                  fontSize={"14px"}
                  fontWeight="400"
                >
                  Apply
                </Button>
              </Flex>
              <RangeSlider
                aria-label={["min", "max"]}
                colorScheme="purple"
                defaultValue={[10, 30]}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} bgColor="pryColor" />
                <RangeSliderThumb index={1} bgColor="pryColor" />
              </RangeSlider>

              <Flex align={"center"} gap="8px">
                <Text variant={"body3"} border="1px solid #030303" w="full">
                  100
                </Text>
                <Box>-</Box>
                <Text variant={"body3"} border="1px solid #030303" w="full">
                  20000
                </Text>
              </Flex>

              <Divider border="0.5px solid #C9C9C9" mt="34px" mb="22.5px" />

              <Flex justify={"space-between"} align="center" mb="16.5px">
                <Heading as="h5" fontSize={"14px"} fontWeight="700">
                  Filter By Discount Percent
                </Heading>
                <Icon as={MdOutlineChevronRight} fontSize="24px" />
              </Flex>
              <CheckboxGroup>
                <Stack direction={"column"} spacing="12px">
                  {stockCategories.map((el) => (
                    <Checkbox
                      fontSize={"14px"}
                      fontWeight="400"
                      colorScheme="purple"
                      key={nanoid()}
                    >
                      {el.label}
                    </Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>
            </Box>
          </Box>
          <Box w="full">
            <Flex justify={"space-between"} align="center" mb={["12px"]}>
              <Text variant={"body2"}>1032 products found</Text>
              <Flex align={"center"} gap="10px">
                <Icon
                  cursor={"pointer"}
                  fontSize="24px"
                  as={CgMenuGridR}
                  color="pryColor"
                />
                <Icon cursor={"pointer"} fontSize="24px" as={MdOutlineList} />
                <Select bgColor={"transparent"} border="none" outline={"none"}>
                  <option value="">Sort by: Newest - Oldest</option>
                  <option value="">Sort by: Oldest - Newest</option>
                </Select>
              </Flex>
            </Flex>
            <Grid
              gap={[6]}
              templateColumns={[
                "repeat(2,1fr)",
                "repeat(2,1fr)",
                "repeat(3,1fr)",
                "repeat(3,1fr)",

                "repeat(4,1fr)",
              ]}
            >
              {marketPlaceProducts.map((el) => (
                <GridItem
                  key={nanoid()}
                  cursor="pointer"
                  onClick={() => navigate(`/design/${el.title}`)}
                >
                  <Box w={["100%", "100%", "100%", "100%", "181px"]}>
                    <Image
                      src={el.image}
                      alt={el.description}
                      w={["100%"]}
                      h={["auto", "240px"]}
                    />
                    <Box px={["16px"]} py={["22.5px"]}>
                      <Text variant={"body3"}>{el.description}</Text>
                      <Text variant={"body3"} color="#757575" mb="12px">
                        by{" "}
                        <Text
                          color="#0050BA"
                          variant={"body3"}
                          as={Link}
                          to={`/author/${el.author}`}
                        >
                          {el.author}
                        </Text>
                      </Text>
                      <Text variant={"body3"} fontWeight="700">
                        ₦{el.price}
                      </Text>
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Flex>
      </MainContainer>
    </Box>
  );
};

export default MarketPlace;

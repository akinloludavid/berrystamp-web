import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsCheck2Circle } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { nanoid } from "nanoid";
import FeaturedCard from "../../components/FeaturedCard";
import RecentCard from "../../components/RecentCard";
import {
  featuredDesigns,
  recentDesigns,
  userCoreFeatures,
} from "../../utils/data";
import { FiAward } from "react-icons/fi";

import TestimonialCarousel from "../../components/carousels/TestimonialCarousel";

const HomePage = () => {
  const animatedTexts = ["Buy Designs", "Customize Designs", "& Print Designs"];
  const [textIndex, setTextIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTextIndex((prev) => {
        let newIndex = prev + 1;
        if (newIndex > animatedTexts.length - 1) {
          newIndex = 0;
        }
        return newIndex;
      });
    }, 1000);
  }, [textIndex]);
  return (
    <Box>
      <Flex align={"center"}>
        <Box maxW={["516px"]}>
          <Heading as="h1" variant="h1">
            Nigeria’s No 1 Print On-demand site to
          </Heading>
          <Heading
            as={motion.h1}
            variant="h1"
            backgroundImage={
              "linear-gradient(180deg, #50139F 26.04%, #DB260E 90.1%)"
            }
            sx={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{
              y: 40,
            }}
            animate={{
              y: 0,
            }}
          >
            {animatedTexts[textIndex]}
          </Heading>
          <Text variant={"body1"} mt="16px">
            Buy and customize stunning designs with premium printing services on
            any desired item nation wide
          </Text>
          <Button mt="32px">Start Shopping</Button>
          <Image src="/assets/hero-vector.png" ml="120px" mt="40px" />
        </Box>
        <Box>
          <Image src="/assets/hero-img.png" />
        </Box>
      </Flex>

      <Box mt="108px" mb="96px">
        <Heading as="h2" variant={"h2"} textAlign="center" mb="48px">
          How we operate
        </Heading>
        <Flex
          maxW={"1035px"}
          justify={["space-between"]}
          mx="auto"
          gap={["60px"]}
        >
          {userCoreFeatures.map((el) => (
            <Box display="flex" flexDir={"column"} alignItems={"center"}>
              <Image w={"40px"} src={el.image} alt={el.title} mb="29px" />
              <Heading variant={"h3"} as="h3" mb="8px">
                {el.title}
              </Heading>
              <Text variant={"body2"} textAlign={"center"}>
                {el.body}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
      <Box maxW={"1035px"} mx="auto">
        <Heading as="h2" variant={"h2"} textAlign="center" mb="24px">
          Explore recent designs
        </Heading>
        <Grid
          templateColumns={["repeat(3,1fr)"]}
          w="100%"
          mx="auto"
          rowGap={"57px"}
          columnGap="24px"
        >
          {recentDesigns.map((el) => (
            <GridItem key={nanoid()}>
              <RecentCard {...el} />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box mx="auto" mt="96px">
        <Heading as="h2" variant={"h2"} textAlign="center" mb="32px">
          Featured designs
        </Heading>
        <Grid
          templateColumns={["repeat(5,1fr)"]}
          w="100%"
          mx="auto"
          rowGap={"57px"}
          columnGap="24px"
        >
          {featuredDesigns.map((el) => (
            <GridItem key={nanoid()}>
              <FeaturedCard {...el} />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box mx="auto" mt="96px">
        <Heading as="h2" variant={"h2"} textAlign="center" mb="32px">
          Shop via collection
        </Heading>
        <Flex>
          <Flex h={"100%"}>
            <Flex gap="40px" h="100%">
              <Flex flexDir={"column"} gap="16px">
                <Image cursor={"pointer"} src="/assets/collection/icon1.png" />
                <Image cursor={"pointer"} src="/assets/collection/icon2.png" />
                <Image cursor={"pointer"} src="/assets/collection/icon3.png" />
                <Image cursor={"pointer"} src="/assets/collection/icon4.png" />
              </Flex>
              <Box>
                <Image src="/assets/collection/collection1.png" />
              </Box>
            </Flex>
          </Flex>
          <Flex
            flexDir={"column"}
            justify={"center"}
            align="center"
            bgColor={"#F9F6EC"}
            px={["94px"]}
          >
            <Heading variant="h2" as="h2" textAlign={"center"}>
              SHOP OUR COLLECTION DESIGN{" "}
            </Heading>
            <Text
              variant={"body2"}
              color="#757575"
              my="12px"
              textAlign={"center"}
            >
              Buy or customize any of our highly demanded collection design
              Suitable on various items of your choice.
            </Text>
            <Text variant={"body2"} color="#323232" mb="24px">
              Art by Namination
            </Text>
            <Button>Shop Design</Button>
          </Flex>
        </Flex>
      </Box>
      <Box maxW={"1035px"} mx="auto" mt="96px">
        <Heading as="h2" variant={"h2"} textAlign="center" mb="32px">
          Our promise to you
        </Heading>
        <Grid templateColumns={"repeat(3,1fr)"} gap="16px">
          <GridItem>
            <Box
              py="57px"
              px="24px"
              border="1px solid #e8e8e8"
              borderRadius={"12px"}
              display="flex"
              flexDir={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Icon mb="24px" as={BsCheck2Circle} fontSize="32px" />
              <Heading variant={"h3"} mb="8px">
                100% Safe payment
              </Heading>
              <Text variant={"body2"}>
                Browse through thousands of designs of lovely designs on our
                market place
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              py="57px"
              px="24px"
              border="1px solid #e8e8e8"
              borderRadius={"12px"}
              display="flex"
              flexDir={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Icon mb="24px" as={AiOutlineLike} fontSize="32px" />
              <Heading variant={"h3"} mb="8px">
                Escrow Policy{" "}
              </Heading>
              <Text variant={"body2"} textAlign="center">
                Buy or request design customization to suit your prefrence
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              py="57px"
              px="24px"
              border="1px solid #e8e8e8"
              borderRadius={"12px"}
              display="flex"
              flexDir={"column"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Icon mb="24px" as={FiAward} fontSize="32px" />
              <Heading variant={"h3"} mb="8px">
                Reliability
              </Heading>
              <Text variant={"body2"} textAlign="center">
                We match your with our printers best suitable for the design
                type.{" "}
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box
        mt="120px"
        mb="120px"
        mx="auto"
        maxW={"783px"}
        px="94.5px"
        borderRadius={"18px"}
        py="54px"
        bgColor={"#5E529E"}
      >
        <Heading
          variant={"h1"}
          fontSize="36px"
          textAlign={"center"}
          fontWeight={"700"}
          mb="14px"
          color="white"
        >
          Get the app
        </Heading>
        <Text
          color={"#FFFFFF"}
          fontWeight="400"
          fontSize={"21px"}
          mb="32px"
          textAlign={"center"}
        >
          Join other users in the no 1 seamless and most reliable print on
          demand platform today
        </Text>
        <Flex>
          <Flex mx="auto" gap="10px">
            <Image cursor={"pointer"} src="/assets/google-play.png" />
            <Image cursor={"pointer"} src="/assets/apple-store.png" />
          </Flex>
        </Flex>
      </Box>
      <Box mb="100px">
        <Heading as="h2" variant={"h2"} textAlign="center" mb="32px">
          What our customers have to say{" "}
        </Heading>
        <TestimonialCarousel />
      </Box>
    </Box>
  );
};

export default HomePage;

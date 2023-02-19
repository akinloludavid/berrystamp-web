import {
  Box,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { testimonials } from "../../utils/data";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import MainContainer from "../../layout/MainContainer";

const TestimonialCarousel = () => {
  const [slider, setSlider] = useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "-20px" });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          infinite: true,
          autoplay: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <Box position={"relative"} maxW={"1035px"} mx="auto">
      <Box
        aria-label="left-arrow"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        p="8px"
        bgColor={"pryColor"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        cursor="pointer"
      >
        <BiLeftArrowAlt color="white" size="24px" />
      </Box>
      {/* Right Icon */}
      <Box
        aria-label="right-arrow"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        p="8px"
        bgColor={"pryColor"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        cursor="pointer"
      >
        <BiRightArrowAlt color="white" size="24px" />
      </Box>
      <Box
        px={["24px", "24px", "0px"]}
        mx="auto"
        as={Slider}
        {...settings}
        ref={(slider: any) => setSlider(slider)}
      >
        {testimonials.map((el) => (
          <Box
            key={nanoid()}
            bgColor="#F3F3F3"
            borderRadius={"8px"}
            py="32px"
            px="28px"
            height={"258px"}
            maxW={["auto", "auto", "334px"]}
            w={["90%", "90%", "334px"]}
            mx="auto"
            position="relative"
          >
            <Image src={el.image} mx="auto" />
            <Text
              textAlign={"center"}
              mt="24px"
              mb="6px"
              fontWeight={"700"}
              fontSize="24px"
              color="textColor"
            >
              {el.title}
            </Text>
            <Text textAlign={"center"} mb="8px">
              {el.review}
            </Text>
            <Text textAlign={"center"}>{el.author}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;

//  <Box
//    key={nanoid()}
//    bgColor="#F3F3F3"
//    borderRadius={"8px"}
//    py="32px"
//    px="28px"
//    height={"258px"}
//    maxW="334px"
//    position="relative"
//  >
//    <Image src={url.image} mx="auto" />
//    <Text
//      textAlign={"center"}
//      mt="24px"
//      mb="6px"
//      fontWeight={"700"}
//      fontSize="24px"
//      color="textColor"
//    >
//      {url.title}
//    </Text>
//    <Text textAlign={"center"} mb="8px">
//      {url.review}
//    </Text>
//    <Text textAlign={"center"}>{url.author}</Text>
//  </Box>;

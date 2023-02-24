import {
  Box,
  Heading,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { featuredDesigns, testimonials } from "../../utils/data";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useState } from "react";
import MainContainer from "../../layout/MainContainer";
import FeaturedCard from "../FeaturedCard";
import { useNavigate } from "react-router-dom";

const ExploreCarousel = () => {
  const navigate = useNavigate();
  const [slider, setSlider] = useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "-20px" });
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
    <Box position={"relative"}>
      <Heading variant={"h3"} color={"#000"} textAlign={"center"}>
        Explore recent designs
      </Heading>
      <Box
        px={["24px", "24px", "0px"]}
        mx="auto"
        as={Slider}
        {...settings}
        ref={(slider: any) => setSlider(slider)}
      >
        {featuredDesigns.map((el) => (
          <Box
            key={nanoid()}
            borderRadius={"8px"}
            py="32px"
            px="28px"
            height={"258px"}
            maxW={["auto", "auto", "334px"]}
            w={["90%", "90%", "334px"]}
            mx="auto"
            position="relative"
            cursor={"pointer"}
            onClick={() => navigate("/explore")}
          >
            <FeaturedCard {...el} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ExploreCarousel;

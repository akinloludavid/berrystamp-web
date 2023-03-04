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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductVariantCarousel = () => {
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
  const products = [
    "riri1.png",
    "riri2.png",
    "riri3.png",
    "riri4.png",
    "riri2.png",
    "riri1.png",
    "riri4.png",
  ];

  return (
    <Box position={"relative"} my={"30px"}>
      <Box
        mx="auto"
        as={Slider}
        {...settings}
        ref={(slider: any) => setSlider(slider)}
      >
        {products.map((el) => (
          <Box
            key={nanoid()}
            borderRadius={"8px"}
            height={"120px"}
            maxW={["auto", "auto", "334px"]}
            w={"120px"}
            p={"8px"}
            boxSizing="border-box"
            position="relative"
            cursor={"pointer"}
            onClick={() => navigate("/")}
          >
            <Image
              w={["100px"]}
              height={"100px"}
              src={`/assets/riri/${el}`}
              alt={el}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductVariantCarousel;

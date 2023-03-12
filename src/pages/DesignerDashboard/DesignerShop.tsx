import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { RiAtLine } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArtistCollection from "../../components/ArtistCollection";
import ArtistDesign from "../../components/ArtistDesign";
import CollectionCard from "../../components/CollectionCard";
import MainContainer from "../../layout/MainContainer";
import { collections } from "../../utils/data";
import CollectionDetails from "./../../components/CollectionDetails";
import EditProfile from "./EditProfile";
import NewCollectionModal from "./NewCollectionModal";
import UploadModal from "./UploadModal";

const DesignerShop = () => {
  const [activetab, setActiveTab] = useState(0);
  const { collectionName } = useParams();
  const navigate = useNavigate();
  const {
    isOpen: isUploadOpen,
    onOpen: onOpenUpload,
    onClose: onCloseUpload,
  } = useDisclosure();
  const {
    isOpen: isNewColOpen,
    onOpen: onOpenNewCol,
    onClose: onCloseNewCol,
  } = useDisclosure();
  const {
    isOpen: isEditProfileOpen,
    onOpen: onOpenEditProfile,
    onClose: onCloseEditProfile,
  } = useDisclosure();
  return (
    <MainContainer backgroundColor={"#FAFAFA"} mt={"2rem"}>
      <NewCollectionModal isOpen={isNewColOpen} onClose={onCloseNewCol} />
      <UploadModal isOpen={isUploadOpen} onClose={onCloseUpload} />
      <EditProfile isOpen={isEditProfileOpen} onClose={onCloseEditProfile} />

      <Box position={"relative"}>
        <Image src="/assets/header-img.png" w={["100%"]} h={["164.2px"]} />
        <Image
          src="/assets/shemxy.png"
          w={["140px"]}
          h={["140px"]}
          position={"absolute"}
          top={"100px"}
          left={"4.9rem"}
        />

        <Flex mt={"5.5rem"}>
          <Box ml={"4.9rem"} width={"50%"}>
            <Heading variant={"h3"} mb={"11px"}>
              Art by Shemzy
            </Heading>
            <Flex>
              <RiAtLine />
            </Flex>
            <Flex mb="0.5rem">
              <Text variant={"body2"} pr="12px" color="#323232">
                10 Designs
              </Text>
              |
              <Text
                variant={"body2"}
                px="12px"
                as={Link}
                to={`/author`}
                color="#0050BA"
              >
                432 Reviews
              </Text>
              |
              <Text
                variant={"body2"}
                px="12px"
                as={Link}
                to={`/author`}
                color="#0050BA"
              >
                0 Followers
              </Text>
              |
              <Text
                variant={"body2"}
                px="12px"
                as={Link}
                to={`/author`}
                color="#0050BA"
              >
                0 Following
              </Text>
            </Flex>
            <Text
              maxWidth={"32.9rem"}
              variant={"body2"}
              mb={"0.5rem"}
              lineHeight={"32px"}
            >
              Geometry art, Abstract art, Minimalist art, Contemporary art,
              Illustration art Animation, Texture art, Line art, Fantasy art,
              Fractal art, Creative art, Animal art, creative art, Portrait art.
            </Text>
            <Text
              onClick={onOpenEditProfile}
              borderBottom={"1px solid #3E2F8A"}
              cursor={"pointer"}
              variant={"body2"}
              width="max-content"
              color={"#3E2F8A"}
            >
              Edit Shop Profile
            </Text>
          </Box>
          <Flex
            width={"50%"}
            justifyContent={"end"}
            alignItems={"center"}
            gap={2}
          >
            <Button
              variant="outline"
              color={"#3E2F8A"}
              width={"10.75rem"}
              border={"1px solid #3E2F8A"}
              onClick={onOpenNewCol}
            >
              Create Collection
            </Button>
            <Button width={"10.75rem"} onClick={onOpenUpload}>
              Upload Design
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Flex
        my={"2.5rem"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"4rem"}
        w={"100%"}
        borderBottom={"0.5px solid #757575 "}
      >
        {["Design", "Collection"].map((tab, index) => (
          <Text
            key={tab}
            color={index == activetab ? "#3E2F8A" : "gray"}
            pb={"0.5rem"}
            cursor={"pointer"}
            borderBottom={"2px solid"}
            borderBottomColor={index == activetab ? "#3E2F8A" : "transparent"}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </Text>
        ))}
      </Flex>
      {activetab == 0 ? (
        <ArtistDesign />
      ) : (
        <>
          {collectionName ? (
            <>
              <CollectionDetails />
            </>
          ) : (
            <Flex flexWrap={"wrap"} gap={[3]} pb={"14.9rem"}>
              {collections.map((el) => (
                <Box
                  onClick={() => {
                    navigate(`/author/shemzy/${el.title}`);
                  }}
                  cursor={"pointer"}
                  key={nanoid()}
                >
                  <CollectionCard {...el} />
                </Box>
              ))}
            </Flex>
          )}
        </>
      )}
    </MainContainer>
  );
};

export default DesignerShop;

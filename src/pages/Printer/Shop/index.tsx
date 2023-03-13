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
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";
import CustomerReviews from "../../../components/CustomerReviews";
import EditProfile from "../../Designer/EditProfile";
import UploadModal from "../../Designer/UploadModal";
import FollowersModal from "./FollowersModal";

const MyShop = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const handleOpenReview = () => {
    setIsReviewOpen(true);
  };

  const handleCloseReview = () => {
    setIsReviewOpen(false);
  };

  const {
    isOpen: isEditProfileOpen,
    onOpen: onOpenEditProfile,
    onClose: onCloseEditProfile,
  } = useDisclosure();
  const {
    isOpen: isUploadOpen,
    onOpen: onOpenUpload,
    onClose: onCloseUpload,
  } = useDisclosure();
  const [isFollowModalOpen, setIsFollowModalOpen] = useState(false);
  const [followerTab, setFollowerTab] = useState(0);

  const handleCloseFollowerModal = () => {
    setIsFollowModalOpen(false);
  };
  const handleOpenFollowerModal = () => {
    setIsFollowModalOpen(true);
    setFollowerTab(0);
  };
  const handleOpenFollowingModal = () => {
    setIsFollowModalOpen(true);
    setFollowerTab(1);
  };
  return (
    <>
      <EditProfile isOpen={isEditProfileOpen} onClose={onCloseEditProfile} />
      <UploadModal isOpen={isUploadOpen} onClose={onCloseUpload} />
      <CustomerReviews isOpen={isReviewOpen} onClose={handleCloseReview} />
      <FollowersModal
        isOpen={isFollowModalOpen}
        onClose={handleCloseFollowerModal}
        tab={followerTab}
      />
      <Box px="96px" pt="32px">
        <Image
          src="/assets/printer/cover.png"
          alt="printer info"
          w="full"
          h="164px"
          rounded="8px"
        />
        <Box pl="32px" display={"flex"}>
          <Box>
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
                <Text
                  cursor={"pointer"}
                  onClick={handleOpenReview}
                  variant={"body2"}
                  fontWeight="500"
                  as="a"
                  color="pryColor"
                >
                  432 Reviews
                </Text>
                <Divider
                  h="20px"
                  orientation="vertical"
                  border="1px solid #323232"
                />
                <Text
                  variant={"body2"}
                  fontWeight="500"
                  as="a"
                  color="pryColor"
                  onClick={handleOpenFollowerModal}
                  cursor="pointer"
                >
                  0 Followers
                </Text>
                <Divider
                  h="20px"
                  orientation="vertical"
                  border="1px solid #323232"
                />
                <Text
                  variant={"body2"}
                  fontWeight="500"
                  as="a"
                  color="pryColor"
                  cursor={"pointer"}
                  onClick={handleOpenFollowingModal}
                >
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
                  <Box
                    bg="#FF0022"
                    w="12px"
                    h="12px"
                    transform="rotateZ(45deg)"
                  />
                  <Text variant={"body2"} color="textColor" lineHeight={"32px"}>
                    Specializing in all things printing.
                  </Text>
                </Flex>
                <Flex gap="12px" align={"center"}>
                  <Box
                    bg="#FF0022"
                    w="12px"
                    h="12px"
                    transform="rotateZ(45deg)"
                  />
                  <Text variant={"body2"} color="textColor" lineHeight={"32px"}>
                    We print business cards, wedding cards, Tshirt, calendars,
                    rollup banners, Merchandise brochures, stickers, etc.
                  </Text>
                </Flex>
                <Flex gap="12px" align={"center"}>
                  <Box
                    bg="#FF0022"
                    w="12px"
                    h="12px"
                    transform="rotateZ(45deg)"
                  />
                  <Text variant={"body2"} color="textColor" lineHeight={"32px"}>
                    Our printing technology includes use of Digital printing and
                    Offset printing.{" "}
                  </Text>
                </Flex>
              </Box>
              <Text
                onClick={onOpenEditProfile}
                borderBottom={"1px solid #3E2F8A"}
                cursor={"pointer"}
                variant={"body2"}
                width="max-content"
                color={"#3E2F8A"}
              >
                Edit Profile
              </Text>
            </Box>
          </Box>
          <Button mt="88px" ml="auto" onClick={onOpenUpload}>
            Upload work
          </Button>
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
              <GridItem key={nanoid()}>
                <Image src={`/assets/printer/img${(idx % 5) + 1}.png`} />
              </GridItem>
            ))}
          </Grid>
          <Button variant={"ghost"} mx="auto" mb="165px">
            See More
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MyShop;

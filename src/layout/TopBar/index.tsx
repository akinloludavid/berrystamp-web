import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  MdOutlineShoppingCart,
  MdOutlineFavoriteBorder,
  MdMenu,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BadgeComp from "../../components/BadgeComp";
import Logo from "../../components/Logo";
import ProfileDropdown from "../../components/ProfileDropdown";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import {
  BERRY_STAMP_USERKEY,
  getLocalStorage,
  handleLogout,
} from "../../utils/helper";
import MainContainer from "../MainContainer";
import MobileMenu from "../MobileMenu";

const Topbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const user = getLocalStorage(BERRY_STAMP_USERKEY);
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: OnLoginClose,
  } = useDisclosure();
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: OnRegisterClose,
  } = useDisclosure();
  const handleSideMenu = () => {
    setMenuOpen(true);
  };
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
      <Flex
        align={"center"}
        justify="center"
        h="30px"
        mb="15px"
        bgImage={
          "linear-gradient(90.07deg, #5614B0 0%, rgba(219, 214, 92, 0.8) 100%)"
        }
        w="100vw"
      >
        <Text fontWeight={"600"} fontSize="12px" color="#fff">
          10% percent discount on deliveries within lagos
        </Text>
      </Flex>
      <MainContainer
        display={"flex"}
        justifyContent={"space-between"}
        alignItems="center"
        h=""
      >
        <Logo />
        <InputGroup
          w={["100%", "100%", "50%"]}
          sx={{
            "@media (max-width:991px)": {
              display: "none",
            },
          }}
        >
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="#757575" />}
          />
          <Input />
        </InputGroup>
        <Flex align={"center"} gap="16px">
          <BadgeComp count={0}>
            <Icon
              as={IoMdNotificationsOutline}
              fontSize={["24", "32"]}
              color="#808080"
            />
          </BadgeComp>
          <BadgeComp count={0}>
            <Icon
              as={MdOutlineShoppingCart}
              fontSize={["24", "32"]}
              color="#808080"
            />
          </BadgeComp>
          <BadgeComp count={0}>
            <Icon
              as={MdOutlineFavoriteBorder}
              fontSize={["24", "32"]}
              color="#808080"
            />
          </BadgeComp>
        </Flex>
        {user ? (
          <Flex align={"center"} gap={2}>
            <ProfileDropdown />
            <Button
              variant={"ghost"}
              _hover={{}}
              fontSize="16px"
              fontWeight={"400"}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Flex>
        ) : (
          <Flex
            align={"center"}
            sx={{
              "@media (max-width:991px)": {
                display: "none",
              },
            }}
          >
            <Button
              variant={"ghost"}
              _hover={{}}
              fontSize="16px"
              fontWeight={"400"}
              onClick={onLoginOpen}
            >
              Login
            </Button>

            <Box h="24px" w="2px" bg="#323232" />
            <Button
              variant={"ghost"}
              _hover={{}}
              fontSize="16px"
              fontWeight={"400"}
              onClick={onRegisterOpen}
            >
              Register
            </Button>
          </Flex>
        )}
        <Icon
          display={"block"}
          sx={{
            "@media (min-width:991px)": {
              display: "none",
            },
          }}
          as={MdMenu}
          fontSize="36px"
          onClick={handleSideMenu}
        />
      </MainContainer>
      <MainContainer mt="20px" display={["block", "block", "none", "none"]}>
        <InputGroup w={["100%", "100%", "773px"]}>
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="#757575" />}
          />
          <Input />
        </InputGroup>
      </MainContainer>
      <Login
        isOpen={isLoginOpen}
        onClose={OnLoginClose}
        signUp={() => {
          OnLoginClose();
          onRegisterOpen();
        }}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={OnRegisterClose}
        login={() => {
          OnRegisterClose();
          onLoginOpen();
        }}
      />
    </>
  );
};

export default Topbar;

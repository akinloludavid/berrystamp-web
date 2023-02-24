import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Button
      onClick={goBack}
      variant="ghost"
      color="#0050BA"
      h="fit-content"
      w="fit-content"
      px="0"
      _active={{}}
      _hover={{}}
    >
      Go Back
    </Button>
  );
};

export default GoBack;

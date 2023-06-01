import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navi = useNavigate();
  const handleLogout = () => {
    navi("/");
  };
  return (
    <Box
      bg={"blue.400"}
      color={"white"}
      p={"10px"}
      _hover={{
        bg: "blue.500",
      }}
    >
      <Flex justifyContent={"flex-end"} paddingEnd={"315px"}>
        <Button cursor={"pointer"} onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;

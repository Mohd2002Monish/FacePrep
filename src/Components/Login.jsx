import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SimpleCard() {
  const [pass, setPass] = useState();
  const navi = useNavigate();
  const [error, setError] = useState("");
  const [userName, setUserName] = useState();
  const handleSubmit = () => {
    console.log(pass, userName);
    if (pass === "bar" && userName === "foo") {
      navi("/home");
    } else if (pass !== "bar" && userName !== "foo") {
      setError("Username and Password is wrong");
    } else if (pass !== "bar") {
      setError("Password is Incorrect");
    } else {
      setError("User Not Found");
    }
  };
  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="userName">
              <FormLabel>UserName</FormLabel>
              <Input
                placeholder="foo"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="bar"
                onChange={(e) => setPass(e.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button
                onClick={handleSubmit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Center>
              <Text>{error}</Text>
            </Center>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

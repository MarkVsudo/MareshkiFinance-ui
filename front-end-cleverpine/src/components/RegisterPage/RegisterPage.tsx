import React from "react";
import "../../styles/auth.css";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box
        w="40rem"
        h="100%"
        bg="white"
        p="3rem"
        display="flex"
        flexDirection="column"
        gap="1.5rem"
      >
        <Flex flexDirection="column">
          <Text fontSize="3xl" textAlign="center">
            Get started
          </Text>
          <Text textAlign="center">
            Start creating the best possible user experience for your customers
          </Text>
        </Flex>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input type="text" placeholder="Enter first name" />
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter email" />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter confirmation password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button colorScheme="messenger" width="100%">
          Sign up
        </Button>
      </Box>
    </>
  );
};

export default LoginPage;

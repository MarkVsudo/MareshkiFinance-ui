import React from "react";
import "../../styles/login.css";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Checkbox,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";

const LoginPage = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box w="40rem" h="100%" bg='white' p='3rem' display='flex' flexDirection='column' gap='3rem'>
        <Text fontSize="3xl" textAlign='center'>Sign in to your account to continue</Text>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter email"/>
          <FormLabel pt='1rem'>Password</FormLabel>
          <InputGroup size="md" >
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
          <Checkbox defaultChecked my='1rem'>Remember me</Checkbox>
          <Stack direction="column" spacing={4} align="center">
            <Button colorScheme="messenger" width="100%">
              Sign in
            </Button>
            <Button colorScheme="messenger" width="100%" variant="outline">
              Forgot password
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </>
  );
};

export default LoginPage;

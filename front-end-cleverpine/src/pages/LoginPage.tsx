import React from "react";
import "../styles/auth.css";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Checkbox,
  Stack,
  Box,
} from "@chakra-ui/react";
import { AuthTitle } from "../components/AuthPages/AuthTitle";
import { BigButton } from "../components/AuthPages/BigButton";

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
        <AuthTitle
          text="Sign in to your account to continue
"
        />

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
        <Checkbox defaultChecked>Remember me</Checkbox>
        <Stack direction="column" spacing={4} align="center">
          <BigButton onHandleSubmit={()=>console.log('Sign in')} title="Sign in" bgcolor="messenger" variant="solid"></BigButton>
          <BigButton onHandleSubmit={()=>console.log('Forgot password')} title="Forgot password" bgcolor="messenger" variant="outline"></BigButton>
        </Stack>
      </Box>
    </>
  );
};

export default LoginPage;

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
import { useForm, SubmitHandler } from "react-hook-form";
import StatusMessage from "../components/AuthPages/StatusMessage";

const LoginPage = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  interface IFormInput {
    email: string;
    password: string;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb="1.5rem" mt=".5rem">
            <FormLabel>Email address</FormLabel>
            <Input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter email"
              aria-invalid={errors.email ? "true" : "false"}
            />
          </FormControl>

          <FormControl my="1.5rem">
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                {...register("password", { required: true })}
                aria-invalid={errors.password ? "true" : "false"}
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
            {(errors.email || errors.password) && (
              <StatusMessage
                text="                Please, enter your credentials

                    "
              />
            )}
          </FormControl>
          <Checkbox defaultChecked mb="1.5rem">
            Remember me
          </Checkbox>
          <Stack direction="column" spacing={4} align="center">
            <BigButton
              onHandleSubmit={() => console.log("Sign in")}
              title="Sign in"
              bgcolor="messenger"
              variant="solid"
            ></BigButton>
            <BigButton
              onHandleSubmit={() => console.log("Forgot password")}
              title="Forgot password"
              bgcolor="messenger"
              variant="outline"
            ></BigButton>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default LoginPage;

import React from "react";
import "../styles/auth.css";
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
import { AuthTitle } from "../components/AuthPages/AuthTitle";
import { BigButton } from "../components/AuthPages/BigButton";
import { SubmitHandler, useForm } from "react-hook-form";
import StatusMessage from "../components/AuthPages/StatusMessage";

const LoginPage = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  interface IFormInput {
    firstName: string;
    email: string;
    password: string;
    confirmationPassword: string;
  }

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const password = watch("password");
  const confirmationPassword = watch("confirmationPassword");

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
          <AuthTitle
            text="Get started
"
          />
          <Text textAlign="center">
            Start creating the best possible user experience for your customers
          </Text>
        </Flex>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb="1.5rem" mt=".5rem">
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter first name"
              {...register("firstName", { required: true })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
          </FormControl>
          <FormControl my="1.5rem">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
          </FormControl>

          <FormControl my="1.5rem">
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                {...register("password", {
                  required: true,
                  pattern: {
                    value: passwordRegex,
                    message:
                      "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.",
                  },
                })}                aria-invalid={errors.password ? "true" : "false"}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl mb="1.5rem">
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter confirmation password"
                {...register("confirmationPassword", { required: true })}
                aria-invalid={errors.confirmationPassword ? "true" : "false"}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {password !== confirmationPassword && (
              <StatusMessage
                text="Passwords must match

                    "
              />
            )}
               {errors.password && password && (
              <StatusMessage text={errors.password.message || ""} />
            )}
          </FormControl>
          <BigButton
            onHandleSubmit={() => console.log("Sign up")}
            title="Sign up"
            bgcolor="messenger"
            variant="solid"
          ></BigButton>
        </form>
      </Box>
    </>
  );
};

export default LoginPage;

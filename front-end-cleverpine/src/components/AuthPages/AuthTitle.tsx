import {
    Text,
  } from "@chakra-ui/react";

  interface AuthTitleProps {
    text: string
  }

export const AuthTitle = ({ text}: AuthTitleProps) => {
    return (
        <Text fontSize="3xl" textAlign="center">{text}</Text>
    )
}

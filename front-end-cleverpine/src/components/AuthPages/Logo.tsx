import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { CiCreditCard1 } from "react-icons/ci";
import { Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Text
      display="flex"
      alignItems="center"
      textAlign="center"
      gap="1rem"
      fontSize="xl"
      fontWeight="700"
      position='absolute'
      top='1rem'
      left='50%'
      transform='translateX(-50%)'
    >
      <CiCreditCard1 fontSize="3rem" />
      <ChakraLink as={ReactRouterLink} to="/" textDecoration="none !important">
        MARESHKI FINANCE
      </ChakraLink>
    </Text>
  );
};

export default Logo;

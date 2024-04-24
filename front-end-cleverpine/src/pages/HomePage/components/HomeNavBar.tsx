import { Flex, Text } from "@chakra-ui/react";
import { CiCreditCard1 } from "react-icons/ci";
import "../../../styles/HomePage/HomePage.css";
import "../../../styles/HomePage/HomeNavBar.css";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const HomeNavBar = () => {
  return (
      <Flex
        w="100%"
        h="max-content"
        p="2rem 5rem"
        position="absolute"
        alignItems="center"
        top="0"
        left="0"
        justifyContent="space-between"
      >
        <Flex gap='22rem' alignItems='center'>
          <Text
            display="flex"
            alignItems="center"
            textAlign='center'
            gap="1rem"
            fontSize="xl"
            fontWeight="700"
          >
            <CiCreditCard1 fontSize="3rem" />
            <ChakraLink as={ReactRouterLink} to="/" textDecoration='none !important'>
            MARESHKI FINANCE
            </ChakraLink>
          </Text>

          <Flex fontSize="1.25rem" gap="5rem">
            <ChakraLink as={ReactRouterLink} to="/" className="home-nav-links">
              Features
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/" className="home-nav-links">
              How It Works
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/" className="home-nav-links">
              About
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/" className="home-nav-links">
              FAQ
            </ChakraLink>
          </Flex>
        </Flex>

        <ChakraLink
          as={ReactRouterLink}
          to="/login"
          className="signIn-link"
          fontSize="1.25rem"
        >
          Sign in
        </ChakraLink>
      </Flex>

  );
};

export default HomeNavBar;

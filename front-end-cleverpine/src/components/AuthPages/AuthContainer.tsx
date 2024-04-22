import { Box } from "@chakra-ui/react";

interface AuthContainerProps {
  children: React.ReactNode;
}

export const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <Box
      w="40rem"
      h="100%"
      bg="white"
      p="3rem"
      display="flex"
      flexDirection="column"
      gap="1.5rem"
    >

      {children}
    </Box>
  );
};

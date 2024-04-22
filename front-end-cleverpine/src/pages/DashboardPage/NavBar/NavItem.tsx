import { Box, Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import React from "react";
import { GrTransaction } from "react-icons/gr";
import { AiOutlineHistory, AiOutlineUser } from "react-icons/ai";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}

export const LinkItems: Array<LinkItemProps> = [
  {
    name: "Profile",
    icon: AiOutlineUser,
    path: "/profile",
  },
  {
    name: "Transfers",
    icon: GrTransaction,
    path: "/transfers",
  },
  {
    name: "History",
    icon: AiOutlineHistory,
    path: "/history",
  },
];



interface NavItemProps {
  icon: IconType;
  children: React.ReactNode;
  onClick: () => void;
  className: string;
}

export const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

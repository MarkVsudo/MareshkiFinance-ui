// SidebarContent.tsx
import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LinkItems, NavItem } from "./NavItem";

interface SidebarProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const [activeLink, setActiveLink] = useState<string>(LinkItems[0].name);

  const handleLinkClick = (itemName: string) => {
    setActiveLink(itemName);
  };

  return (
    <Box
      transition="3s ease"
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: "full", md: 60 }}
      left="0"
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          MARESHKI BANK
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Link to={link.path} key={link.name}>
          <NavItem
            icon={link.icon}
            onClick={() => handleLinkClick(link.name)}
            className={activeLink === link.name ? "active-link" : ""}
          >
            {link.name}
          </NavItem>
        </Link>
      ))}
    </Box>
  );
};

export default SidebarContent;

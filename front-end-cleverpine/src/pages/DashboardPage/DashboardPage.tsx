import "../../styles/profile.css";
import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import SidebarContent from "./components/SidebarContent";
import MobileNav from "./components/MobileNav";
import DashboardProfile from "./components/DashboardProfile";
import DashboardTeansfer from "./components/DashboardTransfer";
import DashboardHistory from "./components/DashboardHistory";

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedNavItem, setSelectedNavItem] = useState("Profile");

  const handleNavItemClick = (itemName: string) => {
    setSelectedNavItem(itemName);
  };

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        // display={{ base: "none", md: "block" }}
        handleNavItemClick={handleNavItemClick}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent
            onClose={onClose}
            handleNavItemClick={handleNavItemClick}
          />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box
        ml={{ base: 0, md: 60 }}
        p="4"
      >
        {/* Content */}
        {selectedNavItem === "Profile" && <DashboardProfile />}
        {selectedNavItem === "Transfer" && <DashboardTeansfer />}
        {selectedNavItem === "History" && <DashboardHistory />}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
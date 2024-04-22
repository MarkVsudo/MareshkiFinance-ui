import "../../styles/profile.css";
import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import SidebarContent from "./components/SidebarContent";
import MobileNav from "./components/MobileNav";
interface DashboardPageProps {
  children: React.ReactNode;
}


const SidebarWithHeader = ({ children }: DashboardPageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
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
          />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box  ml={{ base: 0, md: 60 }}
        p="4">
        {children}
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
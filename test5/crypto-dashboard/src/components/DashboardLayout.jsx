import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import SideDrawer from "./SideDrawer";

function DashboardLayout({ title, children }) {

    const {isOpen, onClose, onOpen} = useDisclosure(); //`useDisclosure()` => it is a hook where you get 3 properties

    return(
        <Flex>
            <SideNav />
            <SideDrawer isOpen={isOpen} onClose={onClose} />
            <Box flexGrow={1}>
                <TopNav title={title} />
                <Container maxW={"1120px"} px={"50px"}>{children}</Container>
            </Box>
        </Flex>
    );
}

export default DashboardLayout;
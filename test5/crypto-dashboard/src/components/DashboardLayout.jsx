import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import SideDrawer from "./SideDrawer";

function DashboardLayout({ title, children }) {

    const {isOpen, onClose, onOpen} = useDisclosure(); //`useDisclosure()` => it is a hook where you get 3 properties

    return(
        <Flex>
            <Box 
                display={
                    {
                        base: "none",
                        lg: "flex",
                    }
                }
            >
                <SideNav />
            </Box>
            <SideDrawer isOpen={isOpen} onClose={onClose} />
            <Box flexGrow={1}>
                <TopNav title={title} onOpen={onOpen} />
                <Container px={"66px"} maxW={"1120px"} mt={"16px"} overflowX={"hidden"} overflowY={"auto"} 
                    h={"calc(100vh - 88px)"}
                >
                    {children}
                </Container>
            </Box>
        </Flex>
    );
}

export default DashboardLayout;
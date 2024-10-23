import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import SideNav from "./SideNav";

function SideDrawer({ isOpen, onClose }) {

    return (
        <>
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />

                <DrawerBody>
                    <SideNav />
                    
                </DrawerBody>

            </DrawerContent>
        </Drawer>
        </>
    )
}

export default SideDrawer;
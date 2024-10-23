import { Box, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

function TopNav({ title, onOpen }) {

    //`h` => to convert it to px multiply it by 4 i.e (16 * 4 = 64px)

    return(
        <Box px={"16px"} bg={"white"}>
            <HStack h={16} justify={"space-between"} maxW={"1120px"} mx={"auto"} px={"50px"}>
                <Icon as={FaBars} onClick={onOpen} 
                    display={
                        {
                            base: "block",
                            lg: "none",
                        }
                    }
                /> 
                <Heading fontSize={"28px"} fontWeight={"medium"}>
                    {title}
                </Heading>
                <Menu>
                    <MenuButton >
                        <Icon as={FaCircleUser } fontSize={"28px"} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    );
}

export default TopNav;
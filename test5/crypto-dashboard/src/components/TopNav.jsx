import { Button, Container, Flex, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaCircleUser } from "react-icons/fa6";


function TopNav({ title }) {

    //`h` => to convert it to px multiply it by 4 i.e (16 * 4 = 64px)

    return(
        
        <HStack boxShadow="xl" h={16} justify={"space-between"} maxW={"1120px"} mx={"auto"} px={"50px"} > 
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
    );
}

export default TopNav;
import {Box, Heading, HStack, Icon, Stack, Text} from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

function SideNav() {

    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/",
        },
        {
            icon: BsArrowDownUp,
            text: "Transactions",
            link: "/transactions",
        },
    ];
    console.log(navLinks);
    

    //`Stack` => display: flex and flex-direction: column is set by default
    //`HStack` => display: flex and cross-axis(i.e align-items) is centered
    //`Text` => acts as a <p> tag
    //`Heading` => is by default <h3>

    return(     
        <Stack boxShadow="lg" h="100vh" justifyContent="space-between" w={"256px"} maxW="256px" textAlign="center"
            display={
                {
                    base: "none",
                    lg: "flex",
                }
            }
        >  
            <Box>
                <Heading as="h1" fontSize="30px" pt="46px" >Learn React</Heading>
                <Box mt="24px" mx="12px">
                    {
                        navLinks.map((nav) => (
                            <HStack key={nav.text} 
                                borderRadius="10px"
                                color="#797E82" cursor="pointer"
                                py="12px" px="16px" 
                                _hover={{
                                    color: "#171717",
                                    bg: "#F3F3F7"    
                                }}
                            >
                                <Icon as={nav.icon}/>
                                <Text 
                                    fontSize="14px" fontWeight="semibold" 
                                    
                                >
                                    {nav.text}
                                </Text>
                            </HStack>
                        ))
                    }
                </Box>
            </Box>

            <Box mt="24px" mx="12px" mb="24px">
                <HStack 
                    borderRadius="10px"
                    color="#797E82" cursor="pointer"
                    py="12px" px="16px" 
                        _hover={{
                            color: "#171717",
                            bg: "#F3F3F7"    
                        }}
                >
                    <Icon as={BiSupport}/>
                    <Text 
                        fontSize="14px" fontWeight="semibold" 
                        
                    >
                        Support
                    </Text>
                </HStack>
            </Box>
        </Stack>
    );
}

export default SideNav;
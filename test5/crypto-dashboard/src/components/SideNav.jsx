import {Box, Heading, HStack, Icon, Stack, Text} from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

function SideNav() {

    const location = useLocation();

    const isLinkActive = (link) => {
        return link === location.pathname;
    }

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
        <Stack bg={"white"}
            boxShadow={
                {
                    base: "none",   //compact or mobile view
                    lg: "lg",      //desktop view
                }
            } 
            justifyContent="space-between" 
            w={
                {
                    base: "full",
                    lg: "256px"
                }
            } 
            h={
                {
                    base: "calc(100vh - 66px)",   
                    lg: "100vh",
                }
            }
            textAlign="center"
        
        >  
            <Box>
                <Heading as="h1" fontSize="30px" pt="66px" >Crypto Board</Heading>
                <Box mt="24px" mx="12px">
                    {
                        navLinks.map((nav) => (
                            <Link to={nav.link} key={nav.text}>
                                <HStack  
                                    borderRadius="10px"
                                    cursor="pointer"
                                    py="12px" px="16px" 
                                    color={isLinkActive(nav.link) ? "#171717" : "#797E82"}
                                    bg={isLinkActive(nav.link) ? "#F3F3F7" : "transparent"}
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
                            </Link>
                        ))
                    }
                </Box>
            </Box>

            <Box mt="24px" mx="12px" mb="24px">
                <Link to={"/support"}>
                    <HStack 
                        borderRadius="10px"
                        color={isLinkActive("/support") ? "#171717" : "#797E82"}
                        cursor="pointer"
                        py="12px" px="16px" 
                        bg={isLinkActive("/support") ? "#F3F3F7" : "transparent"}
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
                </Link>
            </Box>
        </Stack>
    );
}

export default SideNav;
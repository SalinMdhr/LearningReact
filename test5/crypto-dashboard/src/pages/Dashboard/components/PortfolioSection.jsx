import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdDownload } from "react-icons/md";
import { MdFileUpload } from "react-icons/md";

function PortfolioSection() { //REPLACE ICON WITH POPOVER (LATER) FROM CHAKRA UI
    return(
        <HStack bg={"white"} borderRadius={"xl"} justify={"space-between"} p={"16px"} 
            align={
                {
                    base: "flex-start",
                    xl: "center"
                }
            }
            flexDirection={
                {
                    base: "column",
                    xl: "row"
                }
            }
            spacing={
                {
                    base: "24px",
                    xl: "0"
                }
            }
        >
            <HStack 
                spacing={
                    {
                        base: "20px",
                        xl: "64px"
                    }
                } 
                align={
                    {
                        base: "flex-start",
                        xl: "center"
                    }
                }
                flexDirection={
                    {
                        base: "column",
                        xl: "row"
                    }
                }
            >
                <Stack>
                    <HStack color={"black.80"}>
                        <Text fontSize={"sm"}>
                            Total Portfolio Value
                        </Text>
                        <Icon as={AiOutlineInfoCircle} /> 
                    </HStack>
                    <Text textStyle={"h2"} fontWeight={"medium"}>$ 80,763.49</Text>
                </Stack>
                <Stack>
                    <HStack color={"black.80"}>
                        <Text fontSize={"sm"}>
                            Wallet Balance
                        </Text>
                    </HStack>
                    <HStack 
                        spacing={
                            {
                                base: "20px",
                                xl: "32px"
                            }
                        }
                        align={
                            {
                                base: "flex-start",
                                xl: "center"
                            }
                        }
                        flexDirection={
                            {
                                base: "column",
                                xl: "row"
                            }
                        }
                    >
                        <HStack>
                            <Text textStyle={"h2"} fontWeight={"medium"}>1.2003</Text> 
                            <Tag>BTC</Tag>
                        </HStack>
                        <HStack>
                            <Text textStyle={"h2"} fontWeight={"medium"}>$ 80,763.49</Text> 
                            <Tag>USD</Tag>
                        </HStack>

                    </HStack>
                </Stack>
            </HStack>
            <HStack>
                <Button leftIcon={<Icon as={MdDownload} />}>Deposit</Button>
                <Button leftIcon={<Icon as={MdFileUpload} />}>Withdraw</Button>
            </HStack>
        </HStack>
    );
}

export default PortfolioSection;
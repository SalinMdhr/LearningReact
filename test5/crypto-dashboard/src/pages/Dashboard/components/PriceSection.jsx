import { CustomCard } from "../../../chakra/CustomCard";
import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle  } from "react-icons/ai";

function PriceSection() {

    const timeStamp = ["7:15 PM", "9:25 PM", "11:30 PM", "12:40 AM", "4:65 PM",]    //Array

    return(
        <CustomCard>
            <Flex justify={"space-between"} align={"flex-start"}>
                <Stack>
                    <HStack color={"black.80"}>
                        <Text fontSize={"sm"}>
                            Current Price
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
                            <HStack fontWeight={"medium"} color={"green.500"}>
                                <Icon as={BsArrowUpRight}/>
                                <Text fontSize={"sm"} fontWeight={"medium"}>22%</Text> 
                            </HStack>
                        </HStack>

                    </HStack>
                </Stack>
                <HStack>
                    <HStack>
                        <Button leftIcon={<Icon as={AiFillPlusCircle } />}>Buy</Button>
                        <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
                    </HStack>
                </HStack>
            </Flex>

            <Tabs variant='soft-rounded'>
                <Flex justify={"flex-end"} >
                    <TabList bg={"black.5"} p={"3px"}>
                        {
                            ["1H", "1D", "1w", "1M"].map((timetab) => (
                                <Tab _selected={{bg: "white"}} key={timetab} fontSize={"sm"} p={"6px"} borderRadius={"16px"}>
                                    {timetab}
                                </Tab>
                            ))
                        }
                    </TabList>
                </Flex>
                <TabPanels>
                    <TabPanel>
                        <Image src="/images/graph.png" w={"100%"} mt={"48px"}/>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <HStack justify={"space-between"}>
                {
                    timeStamp.map((timestamp) => (
                        <Text key={timestamp} fontSize={"sm"} color={"black.80"}>
                            {timestamp}
                        </Text>
                    ))
                }
            </HStack>
        </CustomCard>
    );
}

export default PriceSection;
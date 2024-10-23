import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { MdDownload } from "react-icons/md";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionsTable from "./components/TransactionsTable";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

function Transactions() {

    const [searchValue, setSearchValue] = useState("");

    const tabs = [
        {
            name: "All",
            count: 349,
        },
        {
            name: "Deposit",
            count: 114,
        },
        {
            name: "Withdraw",
            count: 213,
        },
        {
            name: "Trade",
            count: 22,
        },
    ];

    return(
        <DashboardLayout title={"Transactions"} >

            <Flex 
                justify={
                    {
                        base: "center",
                        md: "flex-end"
                    }
                } 
                mt={"12px"} mb={"12px"}
            
            >
                <Button leftIcon={<Icon as={MdDownload} />}>Export CSV</Button>
            </Flex>

            <Card borderRadius={"16px"} maxH={"calc(100vh - 35%)"} overflowX={"hidden"} overflowY={"auto"}>
                <Tabs >
                    <TabList pt={"16px"} 
                        display={"flex"} 
                        flexDirection={
                            {
                                base: "column-reverse",
                                md: "row"
                            }
                        }
                        justifyContent={"space-between"} 
                        position="sticky"
                        top={0} // Stick at the top of the card
                        zIndex={10} // Ensure it stays on top when scrolling
                        bg="white" // Background to avoid overlapping content
                    >
                        <HStack
                            display={
                                {
                                    base: "grid",
                                    md: "flex",
                                }
                            }
                            gridTemplateColumns={
                                {
                                    base: "repeat(2, 1fr)",
                                }
                            }
                        >
                            {
                                tabs.map((mappedTabs) => (
                                    <Tab key={mappedTabs.name} display={"flex"} gap={"8px"} pb={"16px"}>
                                        {mappedTabs.name}
                                        <Tag colorScheme="gray" borderRadius={"full"}>{mappedTabs.count}</Tag>
                                    </Tab>
                                ))
                            }
                        </HStack>

                        <InputGroup 
                            maxW={
                                {
                                    base: "1fr",
                                    md: "200px"
                                }
                            } 
                            pr={"24px"}

                            ml={
                                {
                                    base: "20px",
                                    md: "none"
                                }
                            }
                        
                        >
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={BsSearch} />
                            </InputLeftElement>
                            <Input type='text' placeholder='Search...' 
                                onChange={(e) => setSearchValue(e.target.value)} 
                            />
                        </InputGroup>
                    </TabList>

                    <TabPanels>
                        {
                            tabs.map((mappedTabs) => (
                                <TabPanel key={mappedTabs.name}>
                                    <TransactionsTable tabCheck={mappedTabs.name} searchValue={searchValue} />
                                </TabPanel>
                            ))
                        }
                    </TabPanels>
                </Tabs>
            </Card>
        </DashboardLayout>
    );
}

export default Transactions;
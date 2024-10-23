import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Stack,
    Text,
    Tag,
    HStack,
    Box,
    Divider,
  } from '@chakra-ui/react';
import { CustomStack } from '../../../chakra/CustomStack';

function TransactionsTable({tabCheck, searchValue}) {

    const tableData = [
        {
            id: "1",
            date: "2022-06-09",
            time: "07:06 PM",
            type: {
                name: "USD Deposit",
                tag: "E-Transfer",
                tab: "Deposit",
              },
            amount: "+$5,000",
            status: "pending",
        },
        {
            id: "2",
            date: "2023-07-19",
            time: "02:48 PM",
            type: {
                name: "USD Withdraw",
                tag: "Wire Transfer",
                tab: "Withdraw",
              },
            amount: "-$11,123",
            status: "processing",
        },
        {
            id: "3",
            date: "2023-11-22",
            time: "09:21 AM",
            type: {
                name: "Buy",
                tab: "Trade",
              },
            amount: "+12.05576 BTC",
            status: "cancelled",
        },
        {
            id: "4",
            date: "2024-02-05",
            time: "01:36 PM",
            type: {
                name: "Sell",
                tab: "Trade",
              },
            amount: "-2.45544 BTC",
            status: "completed",
        },
        {
            id: "5",
            date: "2024-05-19",
            time: "09:16 AM",
            type: {
                name: "BTC Deposit",
                tab: "Deposit",
              },
            amount: "+15.50000",
            status: "completed",
        },
        {
            id: "6",
            date: "2024-06-29",
            time: "01:56 PM",
            type: {
                name: "BTC Withdraw",
                tab: "Withdraw",
              },
            amount: "-5.05544 BTC",
            status: "completed",
        },
        
    ];

    const statusColor = {
        cancelled: "#DC2626",
        completed: "#059669",
        pending: "#797E82",
        processing: "#F5A50B",
    }

    const filteredData = tableData.filter(
        (data) => (tabCheck === "All" || tabCheck === data.type.tab) && (
            (data.type.name.toLowerCase().includes(searchValue.toLowerCase())) ||
            (data.amount.toLowerCase().includes(searchValue.toLowerCase())) ||
            (data.id.toLowerCase().includes(searchValue.toLowerCase())) ||
            (data.type.tag?.toLowerCase().includes(searchValue.toLowerCase())) ||
            (data.status.toLowerCase().includes(searchValue.toLowerCase())) )
    );

    return(
        <TableContainer>
            <Table variant='simple' display={{base: "none", md: "table"}}>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Date & Time</Th>
                        <Th>Type</Th>
                        <Th>Amount</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>

                <Tbody color={"p.black"} >
                   {
                    filteredData.map((mappedData) => (
                        <Tr key={mappedData.id} >
                            <Td fontSize={"sm"} fontWeight={"medium"}>{mappedData.id}</Td>
                            <Td>
                                <Stack spacing={"0"}>
                                    <Text fontSize={"sm"} fontWeight={"medium"}>{mappedData.date}</Text>
                                    <Text fontSize={"sx"} color={"black.60"}>{mappedData.time}</Text>
                                </Stack>
                            </Td>
                            <Td>
                                <Stack spacing={"0"}>
                                    <Text fontSize={"sm"} fontWeight={"medium"}>{mappedData.type.name}</Text>
                                    <Text fontSize={"sx"} color={"black.60"}>{mappedData.type?.tag}</Text>
                                </Stack>
                            </Td>
                            <Td fontSize={"sm"} fontWeight={"medium"}>{mappedData.amount}</Td>
                            <Td fontSize={"sm"} fontWeight={"medium"}>
                                <Tag bg={statusColor[mappedData.status]} borderRadius={"full"} 
                                    color={"white"} cursor={"default"}
                                    justifyContent={"center"} 
                                    w={
                                        {
                                            xl: "60%",
                                            md: "90px"
                                        }
                                    } 
                                >
                                    {mappedData.status}
                                </Tag>
                            </Td>
                        </Tr>
                    ))
                   }
                </Tbody>
            </Table>

            <Stack display={{md: "none", base: "flex"}} >
                {
                    filteredData.map((data, i) => (
                        <Box key={data.id} 
                            borderBottom={"2px solid #BABAC4"} bg={"#f5f5e8"} borderRadius={"25px"}
                            mb={"12px"} pb={"16px"}
                        
                        >
                            <CustomStack  >
                                <Stack w="50%"><Text>ID</Text></Stack>
                                <Stack w="50%"><Text>{data.id}</Text></Stack>
                            </CustomStack>
                            <CustomStack  >
                                <Stack w="50%"><Text>Date & time</Text></Stack>
                                <Stack w="50%" spacing={0}>
                                    <Text >{data.date}</Text>
                                    <Text>{data.time}</Text>
                                </Stack>
                            </CustomStack>
                            <CustomStack  >
                                <Stack w="50%"><Text>Type</Text></Stack>
                                <Stack w="50%" spacing={0}>
                                    <Text>{data.type.name}</Text>
                                    <Text>{data.type?.tag}</Text>
                                </Stack>
                            </CustomStack>
                            <CustomStack  >
                                <Stack w="50%"><Text>Amount</Text></Stack>
                                <Stack w="50%"><Text>{data.amount}</Text></Stack>
                            </CustomStack>
                            <CustomStack  >
                                <Stack w="50%"><Text>Status</Text></Stack>
                                <Stack width={"50%"} px={"10%"}>
                                    <Tag bg={statusColor[data.status]} borderRadius={"full"} 
                                        color={"white"} cursor={"default"}
                                        justifyContent={"center"} w={"full"} 
                                    >
                                        {data.status}
                                    </Tag>
                                </Stack>
                            </CustomStack>
                        </Box>
                    ))
                }
            </Stack>

        </TableContainer>   
    );
}

export default TransactionsTable;
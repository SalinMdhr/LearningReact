import { Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { AiFillDollarCircle } from "react-icons/ai";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { Fragment } from "react";

function TransactionSection() {

    const transactions = [
        {
            id: "1",
            icons: AiFillDollarCircle,
            text: "USD Deposit",
            amount: "+ $5,000",
            timestamp: "2022-06-09 7:06 PM" ,
        },
        {
            id: "2",
            icons: PiCurrencyBtcFill,
            text: "BTC Sell",
            amount: "- 12.78654 BTC",
            timestamp: "2022-06-09 7:06 PM" ,
        },
        {
            id: "3",
            icons: AiFillDollarCircle,
            text: "USD Deposit",
            amount: "+ $5,000",
            timestamp: "2022-06-09 7:06 PM" ,
        },
    ];

    return(
        <CustomCard h={"full"}>
            <Text fontSize={"sm"} color={"black.80"} mb={"24px"}>Recent Transactions</Text>
            <Stack spacing={"16px"}>
                {
                    transactions.map((mappedtransactions, i) => (
                        <Fragment key={mappedtransactions.id}>
                            { i !== 0 && <Divider /> }
                            <Flex gap={"16px"}> 
                                <Grid bg={"black.5"} boxSize={"40px"} borderRadius={"full"} placeItems={"center"}>
                                    <Icon as={mappedtransactions.icons} />
                                </Grid>
                                <Flex justify={"space-between"} w={"full"} >
                                    <Stack spacing={0}>
                                        <Text textStyle={"h6"}>{mappedtransactions.text}</Text>
                                        <Text fontSize={"sm"}>{mappedtransactions.timestamp}</Text>
                                    </Stack>
                                    <Text textStyle={"h6"}>{mappedtransactions.amount}</Text>
                                </Flex>
                            </Flex>
                        </Fragment>
                    ))
                }
            </Stack>
            <Button w={"full"} colorScheme="gray" mt={"24px"}>View All</Button>
        </CustomCard>
    );
}

export default TransactionSection;
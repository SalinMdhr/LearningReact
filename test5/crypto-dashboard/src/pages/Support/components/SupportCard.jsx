import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";

function SupportCard({ icon, heading, text , rightcomponent }) {
    return(
        <Flex 
            flexDir={
                {
                    base: "column",
                    xl: "row", 
                }
            }
            gap={"24px"}
        
        >
            <Stack maxW={"380px"} w={"full"}>
                <Icon as={icon} textColor={"p.purple"} boxSize={"24px"}/>
                <Text as={"h1"} textStyle={"h1"}>{heading}</Text>
                <Text fontSize={"sm"} color={"black.60"}>
                    {text}
                </Text>
            </Stack>

            <Box w={"full"} maxW={"550px"}>
                {rightcomponent}
            </Box>
        </Flex>
    );
}

export default SupportCard;
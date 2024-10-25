import { Box, Button, Card, Flex, HStack, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
  } from '@chakra-ui/react'
  import { Checkbox} from '@chakra-ui/react'


function FormCard() {
    return(
        <Flex>
            <Card p={"24px"} borderRadius={"16px"} flexGrow={1}>
                
                <Stack spacing={"24px"}>
                    
                    <Text fontSize={"sm"} fontWeight={"medium"}>
                        You will receive response within 24 hours of time of submit.
                    </Text>

                    <HStack
                        flexDirection={
                            {
                                base: "column",
                                md: "row"
                            }
                        }
                    >
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="Enter your name" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Surname</FormLabel>
                            <Input placeholder="Enter your Surname" />
                        </FormControl>
                    </HStack>

                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder="Enter your email" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Message</FormLabel>
                        <Textarea placeholder="Your Message" />
                    </FormControl>

                    <Checkbox >
                        <Text fontSize={"xs"}>
                            I agree with 
                            <Box as={"span"} color={"p.purple"}>
                                {" "} Terms & Conditions
                            </Box>
                        </Text>
                    </Checkbox>
                    
                    <Stack>
                        <Button fontSize={"sm"}>
                            Send a Message
                        </Button>
                        <Button colorScheme="gray" fontSize={"sm"}>
                            Book a Meeting
                        </Button>
                    </Stack>

                </Stack>

            </Card>
        </Flex>
    );
}

export default FormCard;
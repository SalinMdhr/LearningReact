import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../chakra/CustomCard";

function InfoCard({ imgUrl, text, longText, inverted }) {
    return(
        <CustomCard 
            bgColor={inverted ? "p.purple" : "white"}
            bgImage={imgUrl} bgSize={"cover"} bgRepeat={"no-repeat"} 
        >
            <Tag 
                bg={inverted ? "white" : "p.purple"} borderRadius={"full"} 
                color={inverted ? "p.purple" : "white"}
            >
                {text}
            </Tag>
            <Text 
                color={inverted ? "white" : "black"}
                fontWeight={"medium"} mt={"16px"} textStyle={"h6"}
            
            >
                {longText}
            </Text>
        </CustomCard>
    );
}

export default InfoCard;
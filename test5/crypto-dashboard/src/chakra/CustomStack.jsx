import {chakra} from "@chakra-ui/react";

export const CustomStack = chakra(
    "div", {
        baseStyle: {
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center", 
            textAlign: "center",  
            py: "14px",
            _hover: {
                backgroundColor: "#FAF9F6",
                borderRadius: "25px",
            }
        }
    }
);
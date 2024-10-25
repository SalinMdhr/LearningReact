import { Stack } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import InfoCard from "../../components/InfoCard";
import FormCard from "./components/FormCard";
import SupportCard from "./components/SupportCard";
import { IoMdMail } from "react-icons/io";
import { TbMessageCircleFilled } from "react-icons/tb";

function Support() {
    return(
        <DashboardLayout title={"Support"}>
            <Stack gap={"80px"}
                align={"center"}
            >

                <SupportCard icon={IoMdMail} heading={"Contact Us"} rightcomponent={<FormCard />}
                    text={
                        "Have a question or just want to know more? Feel free to reach out to us."
                    }
                />

                <SupportCard icon={TbMessageCircleFilled} heading={"Live Chat"} 
                    rightcomponent={
                        <InfoCard 
                            inverted imgUrl="/images/grid_bg.svg" 
                            text="Contact" 
                            longText={
                                "Learn more about our real estate, mortgage, and  corporate account services"
                            } 
                        
                        />
                    }
                    text={
                        "Don’t have time to wait for the answer? Chat with us now."
                    }
                />

            </Stack>

        </DashboardLayout>
    );
}

export default Support;
import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import TransactionSection from "./components/TransactionSection";
import InfoCard from "../../components/InfoCard";

function Dashboard() {
    return(
        <div>
            <DashboardLayout title={"Dashboard"}>
                <Grid 
                    gap={"24px"}
                    gridTemplateColumns={
                        {
                            base: "repeat(1, 1fr)",
                            xl: "repeat(2, 1fr)"
                        }
                    }
                >

                    <GridItem colSpan={
                        {
                            base: "1",
                            xl: "2",
                        }
                    }>
                        <PortfolioSection />
                    </GridItem>

                    <GridItem colSpan={1}>
                        <PriceSection />
                    </GridItem>

                    <GridItem colSpan={1}>
                        <TransactionSection />
                    </GridItem>

                    <GridItem colSpan={1}>
                        <InfoCard imgUrl="/images/dot_bg.svg" text="Loan" longText={"Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"} />
                    </GridItem>

                    <GridItem colSpan={1}>
                        <InfoCard inverted imgUrl="/images/grid_bg.svg" text="Contact" longText={"Learn more about our real estate, mortgage, and  corporate account services"} />
                    </GridItem>

                </Grid>
            </DashboardLayout>
        </div>
    );
}

export default Dashboard;
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSummary";
import { LastCustomer } from "./components/LastCustomer";

import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react";
import { SalesDistributors } from "./components/SalesDistributors";
import { TotalSuscribers } from "./components/TotalSuscribers";
import { ListIntegrations } from "./components/ListIntegrations";

export const dataCardsSummary = [
  {
    icon: UsersRound,
    total: "12.450",
    average: 15,
    title: "Compania Creada",
    tooltipText: "Ver companias creadas",
  },
  {
    icon: Waypoints,
    total: "86.5%",
    average: 80,
    title: "Total Revenue",
    tooltipText: "Ver Summary",
  },
  {
    icon: BookOpenCheck,
    total: "13.450",
    average: 30,
    title: "Bounce Rate",
    tooltipText: "See all of the bounce rate",
  },
];
export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardsSummary.map(
          ({ icon, total, average, title, tooltipText }) => (
            <CardSummary
              key={title}
              icon={icon}
              total={total}
              average={average}
              title={title}
              tooltipText={tooltipText}
            />
          )
        )}

        {/* <CardSummary
          icon={Waypoints}
          total="86.5%"
          average={80}
          title="Total Revenue"
          tooltipText="Ver Summary"
        /> */}
      </div>
      <div className="grid grid-cols-1 mt-12 xl:grid-cols-2">
        <LastCustomer />
        <SalesDistributors />
      </div>
      <div className="flex-col md:gap-x-10 xl:flex xl:flex-row gap-y-4 md:gap-y-0 mt-12 md:mb-10 justify-center">
        <TotalSuscribers />
        <ListIntegrations />
      </div>
    </div>
  );
}

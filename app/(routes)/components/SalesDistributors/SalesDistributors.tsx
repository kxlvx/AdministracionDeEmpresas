import { CustomIcon } from "@/components/CustomIcon";
import { BarChart } from "lucide-react";
import { GraphicSuscribers } from "../GraphicSuscribers";
export function SalesDistributors() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
      <div className="flex gap-x-2 items-center">
        <CustomIcon icon={BarChart}></CustomIcon>
        <p className="text-xl">Sales Distributors</p>
      </div>
      <GraphicSuscribers />
    </div>
  );
}

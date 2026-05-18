import { DashboardWidgets } from "@/app/_components/_dashboard/DashboardWidgets";
import FirstComponent from "@/app/_components/_dashboard/FirstComponent";
import SecondComponent from "@/app/_components/_dashboard/SideMenu/SecondComponent";
import ThirdComponent from "@/app/_components/_dashboard/ThirdComponent";
import { individualStats } from "@/app/_lib/data1";

const IndividualDashboard = () => {
  return (
    <div className="w-full">
      <FirstComponent role="individual" />
      <SecondComponent stats={individualStats} />
      <DashboardWidgets />
      <ThirdComponent />
    </div>
  );
};

export default IndividualDashboard;

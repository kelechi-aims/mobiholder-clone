import OrgFourthComponent from "@/app/_components/_dashboard/OrgFourthComponent";
import OrgThirdComponent from "@/app/_components/_dashboard/OrgThirdComponent";
import FirstComponent from "@/app/_components/_dashboard/FirstComponent";
import SecondComponent from "@/app/_components/_dashboard/SideMenu/SecondComponent";
import { OrganizationStats } from "@/app/_lib/data1";

const OrganizationDashboard = () => {
  return (
    <div className="w-full">
      <FirstComponent role="organization" />
      <SecondComponent stats={OrganizationStats} />
      <OrgThirdComponent />
      <OrgFourthComponent />
    </div>
  );
};

export default OrganizationDashboard;

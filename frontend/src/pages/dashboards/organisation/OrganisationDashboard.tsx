import { OrganisationStats, orgMembers } from "../../../data1";
import { DashboardTable } from "../components/DashboardWidgets";
import FirstComponent from "../components/FirstComponent";
import OrgFourthComponent from "../components/OrgFourthComponent";
import OrgThirdComponent from "../components/OrgThirdComponent";
import SecondComponent from "../components/SecondComponent";

const OrganisationDashboard = () => {
  return (
    <div>
      <FirstComponent role="organization" />
      <SecondComponent stats={OrganisationStats} />
      <OrgThirdComponent />
      <OrgFourthComponent />
    </div>
  );
};

export default OrganisationDashboard;

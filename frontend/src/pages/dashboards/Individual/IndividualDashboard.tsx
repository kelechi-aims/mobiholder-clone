import { individualStats } from "../../../data1";
import { DashboardWidgets } from "../components/DashboardWidgets";
import FirstComponent from "../components/FirstComponent";
import SecondComponent from "../components/SecondComponent";
import ThirdComponent from "../components/ThirdComponent";

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

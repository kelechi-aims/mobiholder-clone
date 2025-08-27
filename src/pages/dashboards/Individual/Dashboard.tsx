import DashboardWidgets from "../components/DashboardWidgets";
import FirstComponent from "../components/FirstComponent";
import SecondComponent from "../components/SecondComponent";
import ThirdComponent from "../components/ThirdComponent";

const Dashboard = () => {
  return (
    <div className="w-full">
      <FirstComponent />
      <SecondComponent />
      <DashboardWidgets />
      <ThirdComponent />
    </div>
  );
};

export default Dashboard;

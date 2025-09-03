import { DashboardTable } from "./DashboardWidgets";
import { orgMembers } from "../../../data1";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Subscription from "./Subscription";

const data = [
  { month: "Jan", pv: 900, uv: 200 },
  { month: "Feb", pv: 1400, uv: 100 },
  { month: "Mar", pv: 600, uv: 100 },
  { month: "Apr", pv: 1400, uv: 100 },
  { month: "May", pv: 4600, uv: 200 },
  { month: "Jun", pv: 3900, uv: 2200 },
  { month: "Jul", pv: 2400, uv: 1200 },
  { month: "Aug", pv: 2900, uv: 1200 },
  { month: "Sep", pv: 1600, uv: 2200 },
  { month: "Oct", pv: 1400, uv: 200 },
  { month: "Nov", pv: 2300, uv: 1600 },
  { month: "Dec", pv: 3900, uv: 2200 },
];

const OrgMemberChart = () => {
  return (
    <div className="rounded-[17px] border border-[#aeb9e1] p-4">
      <h2 className="text-base font-medium font-mono text-[#aeb9e1]">
        Monthly
      </h2>
      <h3 className="text-lg font-semibold mb-4 text-white font-mono">
        Members Analysis
      </h3>
      <ResponsiveContainer width="100%" height={310}>
        <BarChart
          data={data}
          barSize={20}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#0b1739" />
          <XAxis dataKey="month" stroke="#aeb9e1" fontSize={10} />
          <YAxis
            fontSize={10}
            stroke="#aeb9e1"
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#a324f2" />
          <Bar dataKey="uv" fill="#242EF2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const OrgThirdComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
      <DashboardTable
        title="New Members"
        primaryButtonLabel="Add New User"
        onPrimaryClick={() => console.log("Add User clicked")}
        tableHeaders={[
          { label: "Individual", key: "individual" },
          { label: "Role", key: "role" },
          { label: "Email", key: "email" },
          { label: "Status", key: "status" },
        ]}
        tableData={orgMembers}
      />
      <OrgMemberChart />
    </div>
  );
};

export default OrgThirdComponent;

"use client";
import { FaArrowDown } from "react-icons/fa6";
import { DashboardTable } from "./DashboardWidgets";
import { adminMembers } from "@/app/_lib/data1";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Link from "next/link";
const data = [
  { name: "Organisation", value: 40, color: "#242EF2" },
  { name: "Individual", value: 60, color: "#CB3CFF" },
];

export function UserAnalysisChart() {
  return (
    <div className="w-full rounded-[22px] border border-[#1B2340] px-6 py-8 text-white">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold leading-none">User Analysis</h2>

        <button
          type="button"
          className="flex items-center gap-2 rounded-[14px] border border-[#0B1739] bg-[#0A0C30] px-4 py-3 text-sm font-medium text-[#C8D2FF]"
        >
          <span>Bi-Annual</span> <span>&or;</span>
        </button>
      </div>

      {/* Chart */}
      <div className="relative h-62.5 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={115}
              paddingAngle={4}
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Custom labels positioned over chart */}
        <div className="absolute left-[40%] top-[2%] text-center leading-tight">
          <p className="text-xl font-bold text-white">60%</p>
          <p className="text-sm font-semibold text-white">Individual</p>
        </div>

        <div className="absolute right-[30%] top-[74%] text-center leading-tight">
          <p className="text-xl font-bold text-white">40%</p>
          <p className="text-sm font-semibold text-white">Organisation</p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-10">
        <div className="flex items-center gap-2 text-[#C13CF3]">
          <span className="h-4 w-4 rounded-full bg-[#C13CF3]" />
          <span className="text-lg">Organisation</span>
        </div>

        <div className="flex items-center gap-2 text-[#2E36F6]">
          <span className="h-4 w-4 rounded-full bg-[#2E36F6]" />
          <span className="text-lg">Individual</span>
        </div>
      </div>
    </div>
  );
}

function AdminThirdComponent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
      <div className="lg:col-span-2 p-px rounded-xl border border-[#343b4f] w-full">
        <DashboardTable
          title="New Users"
          primaryButtonLabel="Newest First"
          primaryButtonIcon={<FaArrowDown className="h-3 w-3" />}
          onPrimaryClick={() => console.log("Sort clicked")}
          tableHeaders={[
            { label: "#", key: "serial" },
            { label: "Name", key: "name" },
            { label: "User Type", key: "user type" },
            { label: "Date", key: "date" },
          ]}
          tableData={adminMembers}
        />
        <div className="flex items-center justify-center mt-4">
          <Link href="/admin/users" className="text-[#9E9C9C] hover:underline">
            View All Users
          </Link>
        </div>
      </div>
      <UserAnalysisChart />
    </div>
  );
}

export default AdminThirdComponent;

"use client";

import { SlCalender } from "react-icons/sl";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { DashboardTable } from "./DashboardWidgets";
import { FaArrowDown } from "react-icons/fa6";
import { adminMembers, adminUpcomingEvents } from "@/app/_lib/data1";

const data = [
  { month: "Jan", organisation: 50, individual: 80 },
  { month: "Feb", organisation: 90, individual: 110 },
  { month: "Mar", organisation: 75, individual: 150 },
  { month: "Apr", organisation: 45, individual: 120 },
  { month: "May", organisation: 60, individual: 20 },
  { month: "Jun", organisation: 85, individual: 75 },
];

export function SubscriptionAnalysis() {
  return (
    <div className="w-full rounded-[22px] border border-[#343B4F] px-6 py-8 text-white">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-xl font-bold">Subscription Analysis</h2>

        <button className="flex items-center gap-3 rounded-[10px] border border-[#0B1739] bg-[#0A1330] px-4 py-3 text-[12px] text-[#C8D2FF]">
          <SlCalender />
          <span>Jan 2024 - Jul 2024</span>
          <span>&or;</span>
        </button>
      </div>

      {/* Chart */}
      <div className="h-60.5 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap={30}>
            {/* Grid */}
            <CartesianGrid
              stroke="#1B2340"
              strokeDasharray="3 3"
              vertical={false}
            />

            {/* X Axis */}
            <XAxis
              dataKey="month"
              tick={{ fill: "#AEB9E1", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y Axis */}
            <YAxis
              tick={{ fill: "#AEB9E1", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            {/* Bars */}
            <Bar
              dataKey="organisation"
              fill="#CB3CFF"
              radius={[6, 6, 0, 0]}
              barSize={12}
            />
            <Bar
              dataKey="individual"
              fill="#205DC8"
              radius={[6, 6, 0, 0]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-8 flex items-center justify-center gap-10">
        <div className="flex items-center gap-2 text-[#CB3CFF]">
          <span className="h-4 w-4 rounded-full bg-[#CB3CFF]" />
          <span className="text-lg">Organisation</span>
        </div>

        <div className="flex items-center gap-2 text-[#205DC8]">
          <span className="h-4 w-4 rounded-full bg-[#205DC8]" />
          <span className="text-lg">Individual</span>
        </div>
      </div>
    </div>
  );
}

function AdminFourthComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[50%_1fr] gap-6 pt-8">
      <SubscriptionAnalysis />
      <div className="p-px rounded-xl border border-[#343b4f]">
        <DashboardTable
          title="New Users"
          primaryButtonLabel="Newest First"
          primaryButtonIcon={<FaArrowDown className="h-3 w-3" />}
          onPrimaryClick={() => console.log("Sort clicked")}
          tableHeaders={[
            { label: "Event Name", key: "event name" },
            { label: "Type", key: "type" },
            { label: "Date", key: "date" },
          ]}
          tableData={adminUpcomingEvents}
        />
      </div>
    </div>
  );
}

export default AdminFourthComponent;

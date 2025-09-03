import { FC } from "react";
import { DashboardTable } from "./DashboardWidgets";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { orgUpcomingEvents } from "../../../data1";

const data = [
  {
    name: "Premium Plan",
    members: 700,
    color: "#a020f0", // Purple
  },
  {
    name: "Standard Plan",
    members: 300,
    color: "#00c853", // Green
  },
  {
    name: "Basic Plan",
    members: 400,
    color: "#2979ff", // Blue
  },
];

const OrgSubscription = () => {
  return (
    <div className="rounded-[17px] border border-[#aeb9e1] p-4">
      <h2 className="text-base font-medium font-mono text-[#aeb9e1]">
        Monthly
      </h2>
      <h3 className="text-lg font-semibold mb-4 text-white font-mono">
        Subscription Analysis
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="members"
            startAngle={360}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            stroke="none"
            cornerRadius={10}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 space-y-1">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-sm text-neutral-300"
          >
            <span
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: item.color }}
            />
            {item.name} : {item.members} Members
          </div>
        ))}
      </div>
    </div>
  );
};

const OrgFourthComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
      <OrgSubscription />
      <DashboardTable
        title="Upcoming Events"
        primaryButtonLabel="Add New Event"
        onPrimaryClick={() => console.log("Add Event Clicked")}
        tableHeaders={[
          { label: "Event Name", key: "title" },
          { label: "Event Image", key: "eventlogo" },
          { label: "Date", key: "date" },
          { label: "Attendees", key: "attendees" },
          { label: "Ticket Type", key: "tickettype" },
        ]}
        tableData={orgUpcomingEvents}
      />
    </div>
  );
};

export default OrgFourthComponent;

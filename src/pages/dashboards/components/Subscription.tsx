import { PiCalendarBlankFill } from "react-icons/pi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 20000 },
  { month: "Feb", value: 30000 },
  { month: "Mar", value: 35000 },
  { month: "Apr", value: 25000 },
  { month: "May", value: 50000 },
  { month: "Jun", value: 32000 },
  { month: "Jul", value: 45000 },
  { month: "Aug", value: 28000 },
  { month: "Sep", value: 37000 },
  { month: "Oct", value: 42000 },
  { month: "Nov", value: 33000 },
  { month: "Dec", value: 39000 },
];

const Subscription = () => {
  return (
    <div className="rounded-[17px] border border-[#aeb9e1]">
      <div className="p-4">
        <h2 className="text-base font-medium font-mono text-[#aeb9e1]">
          Today
        </h2>

        <div className="flex justify-between gap-2 items-center mb-4">
          <h3 className="text-lg font-semibold mb-4 text-white font-mono">
            Subscriptions
          </h3>
          <select className="bg-[#0a1330] px-3 py-1 text-xs text-[#aeb9e1] rounded-[6px] border border-[#0b1739] outline-none">
            <option value="">
              <PiCalendarBlankFill /> Jan 2024 - Dec 2024
            </option>
            <option value="">
              <PiCalendarBlankFill /> Jan 2023 - Dec 2023
            </option>
          </select>
        </div>
        <div className="h-64 p-4 rounded-[17px] border border-[#aeb9e1]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barSize={7}
              margin={{ top: 5, right: 10, left: 0, bottom: 1 }}
            >
              <XAxis dataKey="month" fontSize={8} stroke="#0b1739" />
              <YAxis fontSize={8} stroke="#0b1739" />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" stroke="#0b1739" />
              <Bar dataKey="value" fill="#a324f2" radius={[3, 3, 0, 0]}></Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

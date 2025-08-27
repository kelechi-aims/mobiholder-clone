import { SlCalender } from "react-icons/sl";
import { FaUsersLine } from "react-icons/fa6";
import { PiCheckSquare } from "react-icons/pi";
import { BsCreditCard } from "react-icons/bs";
import { FC } from "react";
import { StatCardProps, stats } from "../../../data1";

const StatCard: FC<StatCardProps> = ({
  count,
  label,
  icon,
  gradient,
  bgColor,
}) => {
  return (
    <div className={`p-[1px] rounded-[14px] bg-gradient-to-r ${gradient}`}>
      <div
        className={`flex justify-between items-center w-full h-24 p-4 rounded-[14px] bg-[#15171E]`}
      >
        <div className="font-inter">
          <p className="text-sm font-regular text-[#7F7F7F]">{count}</p>
          <p className="text-sm font-medium text-white">{label}</p>
        </div>
        <div className={`rounded-full p-3 ${bgColor}`}>{icon}</div>
      </div>
    </div>
  );
};

const SecondComponent: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
};

export default SecondComponent;

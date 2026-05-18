import { StatCardProps } from "@/app/_lib/data1";
import { FC } from "react";

interface SecondComponentProps {
  stats: StatCardProps[];
}

const StatCard: FC<StatCardProps> = ({
  count,
  label,
  icon,
  gradient,
  bgColor,
  change,
  topIcon,
}) => {
  return (
    <div className={`p-px rounded-[14px] bg-gradient-to-r ${gradient}`}>
      <div
        className={`flex justify-between items-center w-full h-24 p-4 rounded-[14px] bg-[#15171E]`}
      >
        <div className="font-inter">
          <div className="flex items-center gap-2 text-[#C7CBE2]">
            <span className="text-sm">{topIcon}</span>
            <p className="text-sm font-medium text-white">{label}</p>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <p className="text-lg font-regular text-[#7F7F7F]">{count}</p>
            {change && (
              <span className="rounded-md bg-[#0D3B2E] px-2 py-1 text-xs font-medium text-[#21C97A]">
                {change} ↗
              </span>
            )}
          </div>
        </div>
        <div className={`rounded-full p-3 ${bgColor}`}>{icon}</div>
      </div>
    </div>
  );
};

const SecondComponent: FC<SecondComponentProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
};

export default SecondComponent;

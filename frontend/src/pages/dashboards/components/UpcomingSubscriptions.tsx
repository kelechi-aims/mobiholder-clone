import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { GrUnorderedList } from "react-icons/gr";
import { MdFilterList } from "react-icons/md";
const upcomingData = [
  {
    org: "Greenmouse Tech",
    logo: "/images/greenmouse.png",
    renewal: "03-10-2024",
    status: "Active",
  },
  {
    org: "Afrima Lmt",
    logo: "/images/afrima.png",
    renewal: "03-10-2024",
    status: "Active",
  },
  {
    org: "Greenmouse Tech",
    logo: "/images/greenmouse.png",
    renewal: "03-10-2024",
    status: "Active",
  },
];

const StatusPill: FC<{ status: "Active" | "Pending" }> = ({ status }) => {
  const colors =
    status === "Active"
      ? "bg-[#0b311f] text-[#14ca74] border border-[#05c168]/20"
      : "bg-[#312e0b] text-[#bbc105] border border-[#bbc105]/20";
  return (
    <span className={`px-6 py-3 rounded-[9px] text-xs font-medium ${colors}`}>
      {status}
    </span>
  );
};

const UpcomingSubscriptions = () => {
  return (
    <div className="rounded-[17px] border border-[#aeb9e1]">
      <div className="p-4">
        <h2 className="text-base font-medium font-mono text-[#aeb9e1]">
          Today
        </h2>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold mb-4 text-white font-mono">
            Upcoming Subscriptions
          </h3>
          <div className="flex gap-2">
            <button className="p-1 rounded-[4px] bg-[#6c6d6e] text-white">
              <MdFilterList />
            </button>
            <button className="flex gap-1 justify-between items-center bg-[#0a1330] px-3 py-1 text-xs text-[#aeb9e1] rounded-[6px] border border-[#0b1739] outline-none">
              Export data <FaArrowDown />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto p-4 rounded-xl border border-[#343b4f]">
          <table className="w-full text-left text-xs text-gray-300 ">
            <thead className="text-[#aeb9e1] text-medium text-xs font-mono">
              <tr>
                <th className="py-2 px-3">Organisations</th>
                <th className="py-2 px-3 whitespace-nowrap">Renewal Date</th>
                <th className="py-2 px-3 whitespace-nowrap">Current Status</th>
                <th className="py-2 px-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {upcomingData.map((item, idx) => (
                <tr key={idx} className="text-[#aeb9e1] font-mono">
                  <td className="py-3 flex items-center gap-2">
                    <img
                      src={item.logo}
                      alt={item.org}
                      className="w-7 h-7 rounded-full"
                    />
                    {item.org}
                  </td>
                  <td className="pl-3">{item.renewal}</td>
                  <td className="pl-3">
                    <StatusPill status={item.status} />
                  </td>
                  <td>
                    <button className="p-4 hover:text-white">
                      <GrUnorderedList />{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSubscriptions;

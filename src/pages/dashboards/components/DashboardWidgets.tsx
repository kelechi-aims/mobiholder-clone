import { FC } from "react";
import { recentIds, upcomingEvents } from "../../../data1";
import { GrUnorderedList } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa6";
import { MdFilterList } from "react-icons/md";

interface DashboardTableProps {
  title: string;
  primaryButtonLabel: string;
  onPrimaryClick: () => void;
  tableHeaders: { label: string; key: string }[];
  tableData: {
    [key: string]: any;
    status?: string;
    tickettype?: string;
  }[];
}

export const StatusPill: FC<{ status?: string }> = ({ status }) => {
  if (!status) return null; // don’t render if empty

  const colors =
    status === "Active"
      ? "bg-[#0b311f] text-[#14ca74] border border-[#05c168]/20 px-6"
      : status === "Pending"
        ? "bg-[#312e0b] text-[#bbc105] border border-[#bbc105]/20 px-5"
        : status === "Inactive"
          ? "bg-[#2e2e2e] text-gray-400 border border-gray-600/20 px-4"
          : status === "Rejected"
            ? "bg-[#311010] text-red-400 border border-red-500/20 px-4"
            : status === "Suspended"
              ? "bg-[#2e0b31] text-purple-400 border border-purple-500/20 px-4"
              : "bg-[#0b2c31] text-cyan-400 border border-cyan-400/20 px-4";
  return (
    <span className={`py-3 rounded-[9px] text-xs font-medium ${colors}`}>
      {status}
    </span>
  );
};

export const TicketTypePill: FC<{ tickettype?: string }> = ({ tickettype }) => {
  if (!tickettype) return null; // don’t render if empty

  const colors = tickettype === "Paid" ? "text-[#14CA74]" : "text-[#CAA914]";
  return (
    <span className={`py-3 rounded-[9px] text-xs font-medium ${colors}`}>
      {tickettype}
    </span>
  );
};

export const DashboardTable: FC<DashboardTableProps> = ({
  title,
  primaryButtonLabel,
  onPrimaryClick,
  tableHeaders,
  tableData,
}) => {
  return (
    <div className="lg:col-span-2 p-[1px] rounded-xl border border-[#343b4f] w-full">
      <div className="rounded-xl p-4">
        <p className="font-mono font-medium text-[#aeb9e1]">Today</p>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white font-mono font-semibold">{title}</h3>
          <div className="flex gap-2">
            <button className="px-2 rounded-[4px] bg-[#6c6d6e] text-white">
              <MdFilterList />
            </button>
            <button className="flex items-center gap-2 text-white text-xs bg-indigo-950 px-3 py-2 rounded-[4px] hover:bg-gray-800">
              Export Data <FaArrowDown />
            </button>
            <button
              onClick={onPrimaryClick}
              className="flex items-center gap-2 text-white text-xs bg-[#a324f2] px-3 py-1 rounded-[4px] hover:bg-[#8a1fbf]"
            >
              {primaryButtonLabel}
            </button>
          </div>
        </div>

        <div className="overflow-x-auto p-4 rounded-xl border border-[#343b4f]">
          <table className="w-full text-left text-sm text-gray-300 ">
            <thead className="text-[#aeb9e1] text-medium text-sm font-mono ">
              <tr>
                {tableHeaders.map((header, idx) => (
                  <th key={idx} className="py-2 px-3">
                    {header.label}
                  </th>
                ))}

                <th className="py-2 px-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx}>
                  {tableHeaders.map((header, hIdx) => (
                    <td key={hIdx} className="px-3 py-3 whitespace-nowrap">
                      {/* Special case: render image nicely */}
                      {header.key === "eventlogo" ? (
                        <img
                          src={row[header.key]}
                          alt="event"
                          className="w-7 h-7 rounded"
                        />
                      ) : header.key === "status" ? (
                        <StatusPill status={row[header.key]} />
                      ) : header.key === "tickettype" ? (
                        <TicketTypePill tickettype={row[header.key]} />
                      ) : (
                        row[header.key]
                      )}
                    </td>
                  ))}

                  {/* <td className="px-3">
                    {row.status ? (
                      <StatusPill status={row.status} />
                    ) : row.tickettype ? (
                      <TicketTypePill tickettype={row.tickettype} />
                    ) : null}
                  </td> */}

                  <td className="px-3">
                    <button className="p-4 hover:text-white">
                      <GrUnorderedList />
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

export const DashboardWidgets: FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
      {/* Recent IDs */}
      <div className="lg:col-span-2 p-[1px] rounded-xl border border-[#343b4f] w-full">
        <div className="rounded-xl p-4">
          <p className="font-mono font-medium text-[#aeb9e1]">Today</p>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-mono font-semibold">Recent IDs</h3>
            <div className="flex gap-2">
              <button className="px-2 rounded-[4px] bg-[#6c6d6e] text-white">
                <MdFilterList />
              </button>
              <button className="flex items-center gap-2 text-white text-xs bg-indigo-950 px-3 py-2 rounded-[4px] hover:bg-gray-800">
                Export Data <FaArrowDown />
              </button>
              <button className="flex items-center gap-2 text-white text-xs bg-[#a324f2] px-3 py-1 rounded-[4px] hover:bg-[#8a1fbf]">
                Create New ID
              </button>
            </div>
          </div>

          <div className="overflow-x-auto p-4 rounded-xl border border-[#343b4f]">
            <table className="w-full text-left text-sm text-gray-300 ">
              <thead className="text-[#aeb9e1] text-medium text-sm font-mono ">
                <tr>
                  <th className="py-2 px-3">Organisations</th>
                  <th className="py-2 px-3">Role</th>
                  <th className="py-2 px-3">Date</th>
                  <th className="py-2 px-3">Status</th>
                  <th className="py-2 px-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentIds.map((item, idx) => (
                  <tr key={idx} className="text-[#aeb9e1] font-mono">
                    <td className="py-3 flex items-center px-3 gap-2">
                      <img
                        src={item.orgLogo}
                        alt={item.orgName}
                        className="w-7 h-7 rounded-full"
                      />
                      {item.orgName}
                    </td>
                    <td className="px-3">{item.role}</td>
                    <td className="px-3 whitespace-nowrap">{item.date}</td>
                    <td className="px-3">
                      <StatusPill status={item.status} />
                    </td>
                    <td className="px-3">
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

      {/* Upcoming Events */}
      <div className="p-[1px] rounded-[17px] border border-[#343b4f]">
        <div className=" rounded-xl p-4">
          <p className="font-mono font-medium text-[#aeb9e1] pb-2">
            This Month
          </p>
          <div className="flex gap-2 items-center mb-4">
            <h3 className="text-white font-mono font-semibold">
              Upcoming Events
            </h3>
            <span className="text-xs bg-[#05c168]/20 border border-[#05c168]/20 text-[#14ca74] px-1 py-0.5 rounded-[3px]">
              3 New
            </span>
          </div>

          <div className="overflow-x-auto border border-[#343b4f] rounded-xl p-4">
            <table className="w-full table-auto text-sm text-gray-300">
              <tbody>
                {upcomingEvents.map((event, idx) => (
                  <tr key={idx} className="">
                    {/* Logo + Title */}
                    <td className="py-4 px-3 flex items-center gap-2">
                      <img
                        src={event.logo}
                        alt={event.title}
                        className="w-6 h-6 rounded"
                      />
                      <span className="text-sm">{event.title}</span>
                    </td>

                    {/* Date */}
                    <td className="px-3 whitespace-nowrap text-xs text-gray-500">
                      {event.date}
                    </td>

                    {/* Action Icon */}
                    <td className="px-3 text-right">
                      <button className="p-2 hover:text-white">
                        <GrUnorderedList className="text-gray-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import { CgHome } from "react-icons/cg";
import { RiFileCheckLine } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import { FiCreditCard } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";

export const menu = [
    {
      name: "Dashboard",
      icon: <CgHome />,
    },
    {
      name: "Membership",
      icon: <RiFileCheckLine />,
    },
    {
      name: "Subscription",
      icon: <MdOutlineSubscriptions />,
    },
    {
      name: "ID Cards",
      icon: <GoClock />,
    },
    {
      name: "Event",
      icon: <FiCreditCard />,
    },
    {
      name: "Verify",
      icon: <LuBell />,
    },
    {
      name: "Notification",
      icon: <LuBell />,
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
]

export const MobileScreenSideMenu = () => {}
export const LargeScreenSideMenu = () => {
  const [active, setActive] = useState("Dashboard");

  ;
  return (
    <div className="rounded-[14px] bg-[#15171e] opacity-100">
      <div className="mx-4">
        <div className="py-7">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="mobiholder logo"
              className="w-[64%]"
            />
          </Link>
        </div>
        <hr className="border-t-1 border-[#212222]" />
        <ul className="py-4">
          {menu.map((item) => (
            <>
              {item.name === "Settings" && (
                <hr className="pt-10 border-t-1 border-[#212222]" />
              )}
              <li
                key={item.name}
                className={`py-4 flex content-center font-inter font-normal text-sm items-center gap-4 ${
                  item.name === "Settings"
                    ? "px-0 text-[#ffffff]"
                    : "px-2 text-[#7f7f7f]"
                } ${
                  active === item.name
                    ? "text-[#ffffff] bg-[#242ef21a] border-[#242ef2] border border-r-0 border-t-0 border-b-0 border-l-4"
                    : ""
                } `}
                onClick={() => setActive(item.name)}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </li>
            </>
          ))}
        </ul>

        <div className="pb-10 flex content-center font-inter font-normal text-sm items-center text-[#f54b64] gap-4 ">
          <AiOutlineLogout />
          <span>Logout</span>
        </div>

        <hr className="pb-14 border-t-1 border-[#212222]" />
        <div className="py-6">
          <img
            src="images/dashboard-img1.png"
            alt="dashboard-id"
            className="mb-4"
          />
          <div className="bg-[#000000] rounded-[8px] p-[5px] flex justify-between">
            <button className="bg-[#a324f2] rounded-[8px] w-1/2 text-white p-2 text-sm items-center flex justify-center">
              <FiSun />
            </button>
            <button className="w-1/2 text-white text-sm flex justify-center items-center">
              <IoMoonOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



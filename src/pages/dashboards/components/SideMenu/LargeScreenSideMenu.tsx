import { Link, useLocation } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { menuConfig } from "../../../../data1";

export const MobileScreenSideMenu = () => {};

export const LargeScreenSideMenu = ({
  role,
}: {
  role: "individual" | "organisation";
}) => {
  const location = useLocation();
  const menus = menuConfig[role] || [];

  const [active, setActive] = useState("");

  useEffect(() => {
    const currentMenu = menus.find((item) =>
      location.pathname.startsWith(item.path)
    );
    if (currentMenu) {
      setActive(currentMenu.name);
    }
  }, [location.pathname, menus]);

  return (
    <div className="rounded-[14px] bg-[#15171e] opacity-100">
      <div className="mx-4">
        {/* Logo */}
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

        {/* Menu Items */}
        <div className="h-[calc(100vh-350px)] overflow-y-auto scrollbar-thin scrollbar-track-[#0f111a] scrollbar-thumb-[#161a27] scrollbar-thumb-rounded-[28px] scrollbar-track-rounded-[28px]">
          <ul className="py-4">
            {menus.map((item) => (
              <li key={item.name}>
                {item.name === "Settings" && (
                  <hr className="pt-10 border-t-1 border-[#212222]" />
                )}
                <Link
                  to={item.path}
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
                </Link>
              </li>
            ))}
          </ul>

          {/* Logout */}
          <div className="pb-10 flex content-center font-inter font-normal text-sm items-center text-[#f54b64] gap-4 ">
            <AiOutlineLogout />
            <span>Logout</span>
          </div>
        </div>

        <hr className="pb-6 border-t-1 border-[#212222]" />

        {/* Theme toggle */}
        <div className="pt-6 pb-10">
          <img
            src="/images/dashboard-img1.png"
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

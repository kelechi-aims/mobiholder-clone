"use client";

import Link from "next/link";
import Image from "next/image";
import { AiOutlineLogout } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { menuConfig } from "@/app/_lib/data1";

export const MobileScreenSideMenu = () => {
  return null;
};

export const LargeScreenSideMenu = ({
  role,
}: {
  role: "individual" | "organization" | "admin";
}) => {
  const pathname = usePathname();
  const menus = menuConfig[role] || [];

  return (
    <div className="rounded-[14px] bg-[#15171e] opacity-100">
      <div className="mx-4">
        <div className="py-7">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="mobiholder logo"
              width={180}
              height={60}
              className="w-[64%] h-auto"
            />
          </Link>
        </div>

        <hr className="border-t border-[#212222]" />

        <div className="h-[calc(100vh-350px)] overflow-y-auto scrollbar-thin scrollbar-track-[#0f111a] scrollbar-thumb-[#161a27] scrollbar-thumb-rounded-[28px] scrollbar-track-rounded-[28px]">
          <ul className="py-4">
            {menus.map((item) => {
              const isActive = pathname.startsWith(item.path);

              return (
                <li key={item.name}>
                  {item.name === "Settings" && (
                    <hr className="pt-10 border-t border-[#212222]" />
                  )}

                  <Link
                    href={item.path}
                    className={`py-4 flex content-center font-inter font-normal text-sm items-center gap-4 ${
                      item.name === "Settings"
                        ? "px-0 text-[#ffffff]"
                        : "px-2 text-[#7f7f7f]"
                    } ${
                      isActive
                        ? "text-[#ffffff] bg-[#242ef21a] border-[#242ef2] border border-r-0 border-t-0 border-b-0 border-l-4"
                        : ""
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pb-10 flex content-center font-inter font-normal text-sm items-center text-[#f54b64] gap-4">
            <AiOutlineLogout />
            <span>Logout</span>
          </div>
        </div>

        <hr className="pb-6 border-t border-[#212222]" />

        <div className="pt-6 pb-10">
          <Image
            src="/images/dashboard-img1.png"
            alt="dashboard-id"
            width={400}
            height={220}
            className="mb-4 w-full h-auto"
          />

          <div className="bg-[#000000] rounded-ld p-1.25 flex justify-between">
            <button className="bg-purple rounded-lg w-1/2 text-white p-2 text-sm items-center flex justify-center">
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

import { FaCalendar } from "react-icons/fa6";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

import { BsCopy } from "react-icons/bs";

type FirstComponentProps = {
  role: "individual" | "organisation";
};

const FirstComponent = ({ role }: FirstComponentProps) => {
  // dynamic styles for the profile image
  const profileImageClass =
    role === "individual" ? "rounded-full" : "rounded-[14px]";

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-5 xl:justify-between items-center mb-5">
        <div className="w-full flex flex-col justify-between md:w-[58%] xl:w-[60%]">
          <div className="flex justify-end">
            <div className="flex gap-4 mb-4 lg:mb-8">
              <div className="bg-[#121413] p-2 md:p-4 rounded-[14px] text-[#718ebf]">
                <IoSettingsOutline />
              </div>
              <div className="bg-[#121413] p-2 md:p-4 rounded-[14px] text-[#a324f2]">
                <IoNotificationsOutline />
              </div>
            </div>
          </div>
          <div className="bg-[url('/images/dashboard_1.png')] rounded-xl p-6">
            <div className="">
              <div className="flex max-w-fit flex-row items-center gap-2 font-inter text-sm text-white top-4 left-5 border-[0.2px] rounded-xl py-3 px-4 bg-[#ffffff1a] border-white backdrop-blur-[25px]">
                <FaCalendar /> <span>Oct 3, 2024</span>
              </div>
              <div className="bottom-4 left-5">
                <p className="text-base text-white">Welcome, Chukka 👋</p>
                <p className="text-sm text-white">Have a great day!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 border border-[#343b4f] rounded-[14px] w-full md:w-[42%] xl:w-[40%]">
          <div className="border px-3 py-1 rounded-[14px] bg-[#121413] border-[#212222] flex justify-between items-center">
            <p className="font-inter font-normal text-sm text-white">
              My Profile
            </p>
            <img
              src="/images/dashboard_profile_pic.png"
              alt="user_profile_picture"
              className={`w-[34px] h-[34px] border-[3px] border-[#212121] ${profileImageClass}`}
            />
          </div>
          <div className="flex justify-start items-center gap-5">
            <div>
              <img
                src="/images/dashboard_profile_pic.png"
                alt="user profile picture"
                className={`w-[50px] xl:w-[83px] h-[50px] xl:h-[83px] border-[3px] border-[#f5f5f5] ${profileImageClass} mx-auto mt-5`}
              />
            </div>
            <div>
              <p className="flex gap-1 items-center font-inter font-regular text-[#ffffff] text-sm">
                Chukka Uzo{" "}
                <span className="text-[#4cd964] w-[17px] h-[17px]">
                  <HiMiniCheckBadge />
                </span>
              </p>
              <p className="font-inter font-regular text-xs text-[#7f7f7f]">
                {role === "individual"
                  ? "Individual Account"
                  : "Organisation Account"}
              </p>
              <p className="flex gap-1 items-center font-inter font-bold text-[13px] text-[#4950ca]">
                ID : 1213 1241 5523{" "}
                <span className="text-[#939292] w-[17px] h-[20px]">
                  <BsCopy />
                </span>
              </p>
            </div>
          </div>
          <div className="mt-2 flex justify-center items-center">
            <table>
              <tbody>
                <tr className="font-inter font-regular text-[10px] xl:text-xs text-[#7f7f7f]">
                  <th className="border-r px-3 md:px-5">Type</th>
                  <th className="border-r px-3 xl:px-5">Date Joined</th>
                  <th className="px-3 md:px-5">Status</th>
                </tr>
                <tr className="font-inter font-regular text-xs lg:text-sm text-[#ffffff]">
                  <td className="border-r px-3 md:px-5">Individual</td>
                  <td className="border-r px-3 xl:px-8">09-10-22</td>
                  <td className="px-3 md:px-5">Verified</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FirstComponent;

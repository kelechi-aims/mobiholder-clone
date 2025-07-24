import { FaCalendar } from "react-icons/fa6";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

import { BsCopy } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-5 justify-between items-center mb-5">
        <div className="w-[60%]">
          <div className="flex justify-end items-center">
            <div className="w-[30%] flex gap-4">

            <div className="bg-[#121413] p-4 rounded-[14px] text-[#718ebf]"><IoSettingsOutline /></div>
            <div className="bg-[#121413] p-4 rounded-[14px] text-[#a324f2]"><IoNotificationsOutline /></div></div>
            </div>
          <div className="relative">
            <img src="images/dashboard_1.png" alt="dashboard_1" className="" />
            <div className="flex flex-row gap-2 font-inter text-sm text-white absolute top-4 left-5 border-[0.2px] rounded-xl py-3 px-4 bg-[#ffffff1a] border-white backdrop-blur-[25px]">
              <FaCalendar /> <span>Oct 3, 2024</span>
            </div>
            <div className="absolute bottom-4 left-5">
              <p className="text-base text-white">Welcome, Chukka 👋</p>
              <p className="text-sm text-white">Have a great day!</p>
            </div>
          </div>
        </div>
        <div className="p-3 border border-[#343b4f] rounded-[14px] w-[40%]">
          <div className="border px-3 py-1 rounded-[14px] bg-[#121413] border-[#212222] flex justify-between items-center">
            <p className="font-inter font-normal text-sm text-white">
              My Profile
            </p>
            <img
              src="images/dashboard_profile_pic.png"
              alt="user_profile_picture"
              className="w-[34px] h-[34px] border-[3px] border-[##212121] rounded-full"
            />
          </div>
          <div className="flex justify-start items-center gap-5">
            <div>
              <img
              src="images/dashboard_profile_pic.png"
              alt="user profile picture"
              className="w-[83px] h-[83px] border-[3px] border-[#f5f5f5] rounded-full mx-auto mt-5"
              />
            </div>
            <div>
              <p className="flex gap-1 items-center font-inter font-regular text-[#ffffff] text-sm">Chukka Uzo <span className="text-[#4cd964] w-[17px] h-[17px]"><HiMiniCheckBadge /></span></p>
              <p className="font-inter font-regular text-xs text-[#7f7f7f]">Individual Account</p>
              <p className="flex gap-1 items-center font-inter font-bold text-[13px] text-[#4950ca]">ID : 1213 1241 5523 <span className="text-[#939292] w-[17px] h-[20px]"><BsCopy /></span></p>
            </div>
          </div>
          <div className="mt-2 flex justify-center items-center">
            <table>
              <tbody>
                <tr className="font-inter font-regular text-xs text-[#7f7f7f]">
                  <th className="border-r px-5">Type</th>
                  <th className="border-r px-5">Date Joined</th>
                  <th className="px-5">Status</th>
                </tr>
                <tr className="font-inter font-regular text-sm text-[#ffffff]">
                  <td className="border-r px-5">Individual</td>
                  <td className="border-r px-8">09-10-22</td>
                  <td className="px-5">Verified</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Dashboard;

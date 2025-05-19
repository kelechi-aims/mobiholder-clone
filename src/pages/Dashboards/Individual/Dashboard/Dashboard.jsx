import { FaCalendar } from "react-icons/fa6";
const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="flex">
        <div className="w-[60%]">
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
        <div className="p-5 border-1 border-[#343b4f] rounded-[14px] w-[40%]">
          <div className="border px-5 py-3 rounded-[14px] bg-[#121413] border-[#212222] flex justify-between items-center">
            <p className="font-inter font-normal text-sm text-white">
              My Profile
            </p>
            <img
              src="images/dashboard_profile_pic.png"
              alt="user_profile_picture"
              className="w-[34px] h-[34px] border-[3px] border-[##212121] rounded-full"
            />
          </div>
          <div>
            <img
              src="images/dashboard_profile_pic.png"
              alt="user profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

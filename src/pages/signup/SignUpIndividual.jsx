import { AiOutlineUser } from "react-icons/ai";
import SignUpSlider from "../../components/signupslider/SignUpSlider";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuPhone } from "react-icons/lu";
const SignUpIndividual = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside =
    ((event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    },
    []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="">
      <div className="flex justify-center items-center xl:justify-between bg-[#0d0d0d] h-screen w-full md:overflow-y-auto">
        <div className="hidden xl:block lg:w-[40%] xl:w-[33%] fixed overflow-hidden">
          <SignUpSlider />
        </div>
        <div className="w-full flex justify-center items-center xl:ml-[40%] lg:py-16 md:pt-[300px] lg:pt-[300px] ">
          <div className="flex flex-col">
            <div className="w-full xl:w-min">
              <div className="flex justify-between items-center pb-12">
                <Link to="/">
                  <img
                    src="/images/logo.png"
                    alt="mobiholder logo"
                    className="w-[70%]"
                  />
                </Link>
                <div className="relative" ref={modalRef}>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="font-inter font-light  text-sm 2xl:text-lg tracking-[-3%] text-[#242ef2]  flex gap-4 items-center border bg-[#15182d] border-[#242ef2] rounded-[7px] pr-2 pl-10"
                  >
                    Individual <IoMdArrowDropdown />
                  </button>
                  {isOpen && (
                    <div className="text-[#E5E5E5] bg-[#0d0d0d] border border-t-0 rounded-[3px] px-6 py-2 border- absolute right-0">
                      <Link to="/signup/organization">Organization</Link>
                    </div>
                  )}
                </div>
              </div>
              {/* <div>Organization</div> */}
              <div className="relative p-[1px] bg-signup-bdr rounded-[7px]">
                <form className="bg-[#0d0d0d] rounded-[7px] p-9">
                  <h3 className="font-montserrat font-medium text-lg lg:text-xl 2xl:text-2xl tracking-[-3%] text-[#ffffff] pb-4">
                    Sign Up as Individual
                  </h3>

                  <div className="flex pb-4 gap-10">
                    <div>
                      <label
                        htmlFor="fname"
                        className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                      >
                        First Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                          <AiOutlineUser />
                        </div>
                      </div>
                      <input
                        type="text"
                        id="fname"
                        required
                        className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-[250px] text-sm 2xl:text-lg"
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lname"
                        className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                      >
                        Last Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                          <AiOutlineUser />
                        </div>
                      </div>
                      <input
                        type="text"
                        id="lname"
                        required
                        className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-[250px] text-sm 2xl:text-lg"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="flex pb-4 gap-10">
                    <div>
                      <label
                        htmlFor="email"
                        className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                      >
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                          <HiOutlineEnvelope />
                        </div>
                      </div>
                      <input
                        type="email"
                        id="email"
                        required
                        className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-[250px] text-sm 2xl:text-lg"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                          <LuPhone />
                        </div>
                      </div>
                      <input
                        type="text"
                        id="phone"
                        required
                        className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-[250px] text-sm 2xl:text-lg"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="pb-4">
                    <label
                      htmlFor="username"
                      className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                       
                        2xl:text-lg`}
                    >
                      Username
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                        <AiOutlineUser />
                      </div>
                    </div>
                    <input
                      type="text"
                      id="username"
                      required
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                      placeholder="Enter your preferred username"
                    />
                  </div>

                  <div className="pb-4">
                    <label
                      htmlFor="password"
                      className={`pb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
                        
                        2xl:text-lg`}
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                        <AiOutlineUser />
                      </div>
                    </div>
                    <input
                      type="text"
                      id="password"
                      required
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                      placeholder="Enter your preferred password"
                    />
                  </div>

                  <div className="flex gap-3 pb-6">
                    <input type="checkbox" className="hidden peer" />
                    <div className="h-4 w-4 rounded-[3px] border border-[#999797]">
                      <svg
                        className="w-4 h-4 text-white hidden peer-checked:block"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p className="font-inter font-normal text-sm 2xl:text-lg tracking-[0%] text-[#c7c6c6]">
                      I agree to the{" "}
                      <Link className="underline">Terms & Conditions</Link> and{" "}
                      <Link className="underline">Privacy Policy.</Link>
                    </p>
                  </div>

                  <Link>
                    <button className="w-full rounded-full bg-[#a324f2] py-[17px] px-[128px]">
                      <span className="font-montserrat font-semibold text-sm 2xl:text-base text-[#ffffff]">
                        Sign Up
                      </span>
                    </button>
                  </Link>
                </form>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <p className="font-inter font-normal text-sm 2xl:text-lg tracking-[3%] text-[#ffffff]">
                Already have an account?{" "}
                <Link to="/login" className="underline text-[#242ef2]">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpIndividual;

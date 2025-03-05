import { AiOutlineUser } from "react-icons/ai";
import SignUpSlider from "../../components/signupslider/SignUpSlider";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const SignUpIndividual = () => {
  return (
    <div className="bg-[#0d0d0d] pt-[80.5px]">
      <div className="container mx-auto px-8 mt-[66px] md:mt-[76px] lg:mt-[100px] xll:px-8 2xl:px-0 xl:mt-[133px] flex justify-between">
        <div className="w-[40%]">
          <SignUpSlider />
        </div>
        <div className="py-32">
          <div>
            <div className="flex justify-between items-center mb-12">
              <img src="/images/logo.png" alt="mobiholder logo" />
              <button className="font-inter font-light text-[18px] leading-[27.45px] tracking-[-3%] text-[#242ef2] flex gap-4 items-center border bg-[#15182d] border-[#242ef2] rounded-[7px] pr-2 pl-10">
                Individual <IoMdArrowDropdown />
              </button>
            </div>
            <div className="relative p-[1px] bg-signup-bdr rounded-[7px]">
              <form className="bg-[#0d0d0d] rounded-[7px] p-9">
                <h3 className="font-montserrat font-medium text-[28px] leading-[42.7px] tracking-[-3%] text-[#ffffff] mb-7">
                  Sign Up as Individual
                </h3>

                <div className="flex mb-10 gap-10">
                  <div>
                    <label
                      htmlFor="fname"
                      className={`mb-2 block font-inter font-normal text-lg tracking-tight text-[#999797] focus:outline-none
                        xl:text-base
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
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-[300px]"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lname"
                      className={`mb-2 block font-inter font-normal text-lg tracking-tight text-[#999797] focus:outline-none
                        xl:text-base
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
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-[300px]"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="flex mb-10 gap-10">
                  <div>
                    <label
                      htmlFor="email"
                      className={`mb-2 block font-inter font-normal text-lg tracking-tight text-[#999797] focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
                    >
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                        <AiOutlineUser />
                      </div>
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-[300px]"
                      placeholder="Enter your first name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className={`mb-2 block font-inter font-normal text-lg tracking-tight text-[#999797] focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                        <AiOutlineUser />
                      </div>
                    </div>
                    <input
                      type="text"
                      id="phone"
                      required
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-[300px]"
                      placeholder="Enter your first name"
                    />
                  </div>
                </div>

                <div className="mb-10">
                  <label
                    htmlFor="username"
                    className={`mb-2 block font-inter font-normal text-lg tracking-tight text-[#999797] focus:outline-none
                        xl:text-base
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
                    className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full"
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="mb-10">
                  <label
                    htmlFor="password"
                    className={`mb-2 block font-inter font-normal text-lg tracking-tight text-[#999797] focus:outline-none
                        xl:text-base
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
                    className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full"
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="flex gap-3 mb-10">
                  <input type="checkbox" className="hidden peer" />
                  <div className="h-6 w-6 rounded-[3px] border border-[#999797]">
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
                  <p className="font-inter font-normal text-[18px] leading-[26.44px] tracking-[0%] text-[#c7c6c6]">
                    I agree to the{" "}
                    <Link className="underline">Terms & Conditions</Link> and{" "}
                    <Link className="underline">Privacy Policy.</Link>
                  </p>
                </div>

                <Link>
                  <button className="w-full rounded-full bg-[#a324f2] py-[17px] px-[128px]">
                    <span className="font-montserrat font-semibold text-[16px] leading-[19.5px] text-[#ffffff]">
                      Sign Up
                    </span>
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpIndividual;

import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoEyeOffOutline } from "react-icons/io5";
import SignUpSlider from "../../components/signupslider/SignUpSlider";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#0d0d0d]">
      <div className="container max-w-full flex justify-between min-h-screen">
        <div className="hidden lg:block lg:w-[40%] xl:w-[33%] fixed overflow-hidden">
          <SignUpSlider />
        </div>
        <div className="w-full flex items-center justify-center min-h-screen xl:py-32 lg:w-[60%] lg:ml-[40%]">
          <div className="flex justify-center flex-col w-[65%]">
            <div className="pb-12">
              <Link to="/">
                <img src="/images/logo.png" alt="mobiholder logo" />
              </Link>
            </div>
            <div className="relative p-[2px] bg-signup-bdr rounded-[7px]">
              <div className=" bg-[#0d0d0d] rounded-[7px] ">
                <form className="p-9">
                  <h3 className="font-montserrat font-medium text-[20px] lg:text-[22px] xl:text-[24px] xll:text-[28px] leading-[42.7px] tracking-[-3%] text-[#ffffff] mb-7">
                    Login to your account
                  </h3>

                  <div className="mb-10">
                    <label
                      htmlFor="username"
                      className={`mb-2 block font-inter font-normal text-lg lg:text-[16px] tracking-tight text-[#999797] focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
                    >
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                        <MdOutlineEmail />
                      </div>
                    </div>
                    <input
                      type="text"
                      id="username"
                      required
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className={`mb-2 block font-inter font-normal text-lg lg:text-[16px] tracking-tight text-[#999797] focus:outline-none
                        xl:text-base
                        2xl:text-lg`}
                    >
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-[30px] left-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                        <CiLock />
                      </div>
                      <div className="absolute inset-y-[30px] right-4 flex items-center pointer-events-none text-[#999797] text-base z-10">
                        <IoEyeOffOutline />
                      </div>
                    </div>
                    <input
                      type="text"
                      id="password"
                      required
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="flex justify-end mb-10">
                    <p className="font-inter font-normal text-[20px] leading-[30.5px] tracking-[3%] underline text-[#242ef2]">
                      <Link className="underline">Forget Password</Link>
                    </p>
                  </div>

                  <Link>
                    <button className="w-full rounded-full bg-[#a324f2] py-[17px] px-[128px]">
                      <span className="font-montserrat font-semibold text-[16px] leading-[19.5px] text-[#ffffff]">
                        Login
                      </span>
                    </button>
                  </Link>
                </form>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <p className="font-inter font-normal text-[16px] lg:text-[17px] xl:text-[18px] xll:text-[20px] leading-[30.5px] tracking-[3%] text-[#ffffff]">
                Don’t have an account?{" "}
                <Link to="/signup" className="underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

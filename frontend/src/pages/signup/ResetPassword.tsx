import { Link } from "react-router-dom";
import SignUpSlider from "../../components/signupslider/SignUpSlider";
import { MdOutlineEmail } from "react-icons/md";

const ResetPassword = () => {
  return (
    <div className="bg-[#0d0d0d]">
      <div className="container max-w-full flex justify-between min-h-screen ">
        <div className="hidden xl:block lg:w-[40%] xl:w-[33%] fixed overflow-hidden">
          <SignUpSlider />
        </div>
        <div className="w-full flex items-center justify-center min-h-screen xl:py-16 xl:w-[60%] xl:ml-[40%]">
          <div className="w-[65%]">
            <div className="pb-12">
              <Link to="/">
                <img
                  src="/images/logo.png"
                  alt="mobiholder logo"
                  className="w-[40%]"
                />
              </Link>
            </div>
            <div className="relative p-[2px] bg-signup-bdr rounded-[30px]">
              <div className=" bg-[#0d0d0d] rounded-[30px] ">
                <form action="" className="p-9">
                  <h3 className="font-montserrat font-medium text-lg lg:text-xl 2xl:text-2xl tracking-[-3%] text-[#ffffff] mb-4">
                    Reset your Password{" "}
                  </h3>
                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className={`mb-2 block font-inter font-normal text-sm tracking-tight text-[#999797] focus:outline-none
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
                      type="email"
                      id="username"
                      required
                      className="bg-[#2e2f36] pl-10 py-5 rounded-[10px] text-[#999797] w-full text-sm 2xl:text-lg"
                      placeholder="Enter your email to get a reset password link "
                    />
                    <div className="mt-7">
                      <Link to='/resetpassword'>
                        <button className="w-full rounded-full bg-[#a324f2] py-[17px] px-[108px]">
                          <span className="font-montserrat font-semibold text-sm 2xl:text-base text-[#ffffff]">
                            Send password reset link
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <p className="font-inter font-normal text-sm 2xl:text-lg tracking-[3%] text-[#E5E5E5]">
                Remember your password ?{" "}
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

export default ResetPassword;

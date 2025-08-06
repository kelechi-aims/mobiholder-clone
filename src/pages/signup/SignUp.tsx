import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="bg-[#15171f] py-8 md:py-8 lg:py-12 md:h-screen">
        <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0">
          <div className="md:px-0 xl:px-40 flex flex-col gap-12 md:gap-16 lg:gap-10">
            <div className="justify-center items-center flex flex-col gap-6 md:gap-10">
              <div className="">
                <Link to="/" className="flex justify-center items-center">
                  <img
                    src="/images/logo.png"
                    alt=""
                    className="cursor-pointer w-1/2 lg:w-full"
                  />
                </Link>
              </div>
              <p className="font-montserrat font-medium text-[13px] md:text-[20px] xl:text-[20px] xls:text-[26px] 2xl:leading-[33.64px] tracking-[-3%] text-[#ffffff]">
                Welcome! Choose a user type to Sign Up as :
              </p>
            </div>
            <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-8 md:gap-12">
              <div className="w-[90%] md:w-[65%] lg:w-[47%]">
                <Link to="/signup/individual">
                  <div className="p-[1px] bg-signup-individual-bg">
                    <div className="bg-[#24152D]">
                      <img
                        src="/images/reg-individual-vector.png"
                        alt="reg-individual-vector"
                        className=""
                      />
                    </div>
                  </div>
                  <div className="bg-[#a324f2] rounded-[7px] p-4">
                    <h6 className="font-inter font-semibold text-[18px] md:text-[24px] leading-[29.05px] text-[#eeeeee] mb-3">
                      Individual
                    </h6>
                    <p className="font-inter font-medium text-sm 2xl:text-[16px] leading-[20.06px] text-[#fefefe]">
                      This account type is for regular users
                    </p>
                  </div>
                </Link>
              </div>

              <div className="w-[90%] md:w-[65%] lg:w-[47%]">
                <Link to="/signup/organization">
                  <div className="p-[1px] bg-signup-Organization-bg">
                    <div className="bg-[#15182d]">
                      <img
                        src="/images/reg-coporation-vector.png"
                        alt="reg-coporation-vector"
                      />
                    </div>
                  </div>
                  <div className="bg-[#242ef2] rounded-[7px] p-4">
                    <h6 className="font-inter font-semibold text-[18px] leading-[29.05px] text-[#eeeeee] mb-3">
                      Organisation
                    </h6>
                    <p className="font-inter font-medium text-sm 2xl:text-[16px] leading-[20.06px] text-[#fefefe]">
                      This account type is for companies and organizations
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center pb-16 md:pb-0">
              <div className="border bg-[#2e2f36] border-[#525151] rounded-full py-4 md:py-6 px-12 md:px-[53px] w-fit ">
                <p className="font-inter font-normal text-xs md:text-sm 2xl:text-[20px] leading-[100%] tracking-[0%] text-center text-[#ffffff] ">
                  Already have an account ? Proceed to{" "}
                  <Link to="/login" className="text-[#4E47DC]">
                    Login
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

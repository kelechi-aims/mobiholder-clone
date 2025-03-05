import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="bg-[#15171f] py-10 min-h-[100vh]">
        <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0">
          <div className="px-20 md:px-2 xl:px-40">
            <div className="justify-center items-center flex flex-col pb-10 pt-24">
              <div className="mb-10">
                <Link to="/">
                  <img
                    src="/images/logo.png"
                    alt=""
                    className="cursor-pointer"
                  />
                </Link>
              </div>
              <p className="font-montserrat font-medium text-[22px] xl:text-[24px] xls:text-[26px] leading-[33.64px] tracking-[-3%] text-[#ffffff]">
                Welcome! Choose a user type to Sign Up as :
              </p>
            </div>
            <div className="flex sm:flex-col items-center justify-center md:flex-row md:justify-between gap-24 mb-24">
              <div className="w-full md:w-[47%]">
                <Link to="/signup/individual">
                  <div className="p-[1px] bg-signup-individual-bg">
                    <div className="bg-[#24152D]">
                      <img
                        src="/images/reg-individual-vector.png"
                        alt="reg-individual-vector"
                      />
                    </div>
                  </div>
                  <div className="bg-[#a324f2] rounded-[7px] p-8">
                    <h6 className="font-inter font-semibold text-[24px] leading-[29.05px] text-[#eeeeee] mb-3">
                      Individual
                    </h6>
                    <p className="font-inter font-medium text-[16px] leading-[20.06px] text-[#fefefe]">
                      This account type is for regular users
                    </p>
                  </div>
                </Link>
              </div>

              <div className="w-full md:w-[47%]">
                <Link to="/signup/organization">
                  <div className="p-[1px] bg-signup-Organization-bg">
                    <div className="bg-[#15182d]">
                      <img
                        src="/images/reg-coporation-vector.png"
                        alt="reg-coporation-vector"
                      />
                    </div>
                  </div>
                  <div className="bg-[#242ef2] rounded-[7px] p-8">
                    <h6 className="font-inter font-semibold text-[24px] leading-[29.05px] text-[#eeeeee] mb-3">
                      Individual
                    </h6>
                    <p className="font-inter font-medium text-[16px] leading-[20.06px] text-[#fefefe]">
                      This account type is for regular users
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="border bg-[#2e2f36] border-[#525151] rounded-full py-6 px-[53px] w-fit ">
                <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0%] text-center text-[#ffffff] ">
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

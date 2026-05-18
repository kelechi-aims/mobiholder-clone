import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <div>
      <div className="bg-[#15171f] py-8 md:py-8 lg:py-12 md:h-screen">
        <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0 md:h-[calc(100vh-164px)] ">
          <div className="md:px-0 xl:px-40 flex flex-col gap-12 md:justify-between h-full">
            <div className="justify-center items-center flex flex-col gap-6 md:gap-10">
              <div className="">
                <Link href="/" className="flex justify-center items-center">
                  <Image
                    src="/images/logo.png"
                    alt=""
                    height={100}
                    width={300}
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
                <Link href="/auth/signup/individual">
                  <div className="p-px bg-signup-individual-bg">
                    <div className="bg-[#24152D]">
                      <Image
                        src="/images/reg-individual-vector.png"
                        alt="reg-individual-vector"
                        height={100}
                        width={500}
                        className=""
                      />
                    </div>
                  </div>
                  <div className="bg-purple rounded-[7px] p-4">
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
                <Link href="/auth/signup/organization">
                  <div className="p-px bg-signup-Organization-bg">
                    <div className="bg-[#15182d]">
                      <Image
                        src="/images/reg-coporation-vector.png"
                        alt="reg-coporation-vector"
                        height={100}
                        width={500}
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
              <div className="border bg-[#2e2f36] border-[#525151] rounded-full py-4 md:py-6 px-8 md:px-12 lg:px-13.25 w-fit ">
                <p className="font-inter font-normal text-xs md:text-sm 2xl:text-[20px] leading-[100%] tracking-[0%] text-center text-[#ffffff] ">
                  Already have an account ? Proceed to{" "}
                  <Link href="/auth/login" className="text-[#4E47DC]">
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

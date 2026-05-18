import { BsFillTelephoneFill } from "react-icons/bs";

import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "../../../_components/ContactForm";

const page = () => {
  return (
    <div>
      <div className='bg-[url("/images/home-hero.gif")] bg-cover flex flex-col justify-center'>
        <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0">
          <h1
            className={`pt-54.75 font-grifter font-bold text-white pb-26.25
            text-[30.96px] leading-[40.84px]
            md:text-[40.96px] md:leading-[45.84px]
            lg:text-[45.96px] lg:leading-[47.84px]
            xl:text-[47.96px] xl:leading-[48.84px] 
            xls:text-[49.96px] xls:leading-[49.84px] 
            2xl:text-[70.96px] 2xl:leading-[80.84px]`}
          >
            Contact Us
          </h1>
        </div>
      </div>

      <div>
        <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0 my-26.5">
          <div className="border-2 rounded-[38px] border-[#2e2f36] bg-[#0d151d] px-10 md:px-13 py-10 md:py-15.75">
            <div className="xl:flex justify-between">
              <div className="rounded-[30px] bg-contactus-bg w-full mb-14 xl:mb-0 xl:w-[40%] p-6 md:p-10">
                <h4
                  className={`font-grifter font-bold text-[19px] md:text-[30px] leading-[60.84px] text-white
                  xl:text-[34px]
                  2xl:text-[40px] `}
                >
                  Contact Information
                </h4>
                <p
                  className={`font-inter font-normal text-sm md:text-[20px] leading-6.25 md:leading-8.75 text-[#e9e8e8]
                  xl:text-[16px]
                  2xl:text-[22px] `}
                >
                  We are here to help make your experience convenient and
                  smooth, shoot us a mail today
                </p>
                <div className="flex items-center gap-6 md:gap-11 mt-4 md:mt-6">
                  <div className="text-white text-2xl md:text-6xl xl:text-4xl 2xl:text-6xl">
                    <BsFillTelephoneFill />
                  </div>
                  <div>
                    <p
                      className={`font-inter font-medium text-sm md:text-[22px] leading-11 text-[#fefefe]
                      xl:text-[16px]
                      2xl:text-[22px] `}
                    >
                      0700 000 0000
                    </p>
                    <p
                      className={`font-inter font-medium text-sm md:text-[22px] leading-11 text-[#fefefe]
                      xl:text-[16px]
                      2xl:text-[22px] `}
                    >
                      0700 000 0000
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 md:gap-11 mt-1 md:mt-6">
                  <div className="text-white text-2xl md:text-6xl xl:text-4xl 2xl:text-6xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p
                      className={`font-inter font-medium text-sm md:text-[22px] leading-11 text-[#fefefe]
                      xl:text-[16px]
                      2xl:text-[22px] `}
                    >
                      infomobiholder@gmail.com
                    </p>
                    <p
                      className={`font-inter font-medium text-sm md:text-[22px] leading-11 text-[#fefefe]
                      xl:text-[16px]
                      2xl:text-[22px] `}
                    >
                      mobisupport@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 md:gap-11 mt-1 md:mt-6">
                  <div className="text-white text-2xl md:text-6xl xl:text-4xl 2xl:text-6xl ">
                    <FaLocationDot />
                  </div>
                  <div>
                    <p
                      className={`font-inter font-medium text-sm md:text-[22px] leading-11 text-[#fefefe]
                      xl:text-[16px]
                      2xl:text-[22px] `}
                    >
                      Lekki , Lagos
                    </p>
                    <p
                      className={`font-inter font-medium text-sm md:text-[22px] leading-11 text-[#fefefe]
                      xl:text-[16px]
                      2xl:text-[22px] `}
                    >
                      London, UK
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-[55%]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

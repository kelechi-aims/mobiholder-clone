import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CallToAction = () => {
  return (
    <div className="">
      <div className='border border-[#101223] border-solid bg-[url("/images/calltoactionbg.gif")] bg-cover flex flex-col justify-center] py-25 lg:py-47.5'>
        <div className="container mx-auto px-8 xll:px-8 2xl:px-0">
          <div className="w-[70%] lg:w-[60%]">
            <h1
              className={`font-grifter font-bold bg-clip-text text-transparent bg-cta-text text-[24px] leading-10.25 md:text-[40px] md:leading-11.5
                        lg:text-[46px] lg:leading-11.75
                        xl:text-[47.96px] xl:leading-[48.84px] 
                        xls:text-[49.96px] xls:leading-[49.84px] 
                        2xl:text-[70.96px] 2xl:leading-[80.84px]
                    `}
            >
              Ready to unlock your Management potential?
            </h1>
            <p
              className={`font-inter font-medium text-white mb-10 text-[12px] leading-6.25
                        md:text-[14px] md:leading-7.5
                        lg:text-base lg:leading-12.25
                    `}
            >
              Take control of your team, tasks, and performance with streamlined
              management tools. Boost productivity, enhance collaboration, and
              watch your business thrive!
            </p>
            <button className=" rounded-[100px] py-4 px-5 md:py-5.25 md:px-7.5 bg-[#2842f2] ">
              <span className="text-white font-grifter font-bold lg:text-[20px] leading-12.25 flex justify-center items-center gap-2.5">
                Get Started <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-25 lg:py-47.5 relative z-10 overflow-hidden">
        {/* Rotating backdround gif */}
        <Image
          src="/images/about-bg.gif"
          alt="about-gif"
          height={100}
          width={100}
          className={`absolute top-[85%] lg:top-[69%] right-0 transform translate-x-[60%] -z-10`}
        />

        <div className="container mx-auto px-8 xll:px-8 2xl:px-0 flex flex-col lg:flex-row gap-10">
          <div className="relative w-full max-h-[70%] lg:w-2/5 lg:max-h-full h-75 lg:h-auto">
            <Image
              src="/images/cta-img1.png"
              alt="cta-img1"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          <div className="flex flex-col lg:w-[55%] items-center">
            <h2
              className={`font-grifter font-bold text-[#061f25] text-[24px] leading-10.25 md:text-[40px] md:leading-11.5
                        lg:text-[46px] lg:leading-[11.75
                        xl:text-[47.96px] xl:leading-[48.84px] 
                        xls:text-[49.96px] xls:leading-[49.84px] 
                        2xl:text-[70.96px] 2xl:leading-[80.84px]
                    `}
            >
              Download the App
            </h2>
            <p
              className={`font-inter font-medium text-[#282828] text-[12px] leading-6.25
                        md:text-[14px] md:leading-6.25
                        lg:text-[16px] lg:leading-7.5
                        xl:text-[18px] xl:leading-12.25
                    `}
            >
              Experience seamless access to all our features right at your
              fingertips! Download the mobile app now and enjoy convenience,
              real-time updates, and a user-friendly interface wherever you go.
            </p>

            <div className="flex gap-5 xll:gap-10 mt-10 items-start">
              <button className=" ">
                <div className="flex gap-1.5 xll:gap-2.5 py-3.5 md:py-5.25 px-5 md:px-7.5 rounded-[9px] bg-[#061f25] border-8 border-[#205dc8]">
                  <Image
                    src="/images/playstore.png"
                    alt="playstore"
                    width={100}
                    height={100}
                    className="w-5 h-5.75 md:w-7 md:h-7.75"
                  />
                  <p className="font-mulish font-medium text-[9px] md:text-[12px] leading-4 xll:text-[14px] xll:leading-[18.2px] text-white">
                    Download on <br />
                    <span className="font-unbounded font-black text-[12px] md:text-[20px] leading-5 xll:text-[24px] xll:leading-[23.4px] ">
                      PlayStore
                    </span>
                  </p>
                </div>
              </button>

              <button className=" ">
                <div className="flex gap-1.5 xll:gap-2.5 py-3.5 md:py-5.25 px-5 md:px-7.5 rounded-[9px] bg-[#061f25] border-8 border-[#205dc8]">
                  <Image
                    src="/images/apple.png"
                    alt="playstore"
                    width={100}
                    height={100}
                    className="w-5 h-5.75 md:w-7 md:h-8.5"
                  />
                  <p className="font-mulish font-medium text-[9px] md:text-[12px] leading-4 xll:text-[14px] xll:leading-[18.2px] text-white">
                    Download on <br />
                    <span className="font-unbounded font-black text-[12px] md:text-[20px] leading-5 xll:text-[24px] xll:leading-[23.4px] ">
                      AppStore
                    </span>
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

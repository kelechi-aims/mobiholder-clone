"use client";
import { managerialControl } from "@/app/_lib/data";
import Image from "next/image";
import { useState } from "react";

const HomeAbout = () => {
  const [selectedAbout, setSelectedAbout] = useState(managerialControl[0].id);

  // Handle about section change
  const handleAboutClick = (aboutId: number) => {
    setSelectedAbout(aboutId);
  };
  return (
    <div className="flex justify-center relative overflow-hidden">
      <Image
        src="/images/about-bg.gif"
        alt="about-gif"
        width={100}
        height={100}
        className={`absolute max-w-122.5 max-h-122.25 w-full h-full top-[40%] left-0 transform translate-x-[-20%] `}
      />

      <div className="container mx-auto px-8 mt-16.5 md:mt-19 lg:mt-20 xll:px-8 2xl:px-0 xl:mt-21.25 relative">
        <div className="bg-[#060e16] rounded-[50px] px-7.5 md:px-13 xl:px-20 flex flex-col shadow-about-sh z-10">
          {/* About section header */}
          <div className="flex items-center justify-center flex-col mt-[46.66px] mb-8.75 md:mb-10 lg:my-15 xl:mt-21.5 xl:mb-19">
            <Image
              src="/images/mobiholder-logo.png"
              alt="mobiholder-logo"
              width={100}
              height={100}
              className="max-w-16.5 max-h-[55.32px] mb-5"
            />
            <h3
              className={`text-white font-grifter font-bold text-center text-[24px] leading-10.25
                md:text-[41px] md:leading-11.5
                lg:text-[46px] lg:leading-11.75
                xl:text-[47.96px] xl:leading-[48.84px] 
                xls:text-[49.96px] xls:leading-[49.84px] 
                2xl:text-[70.96px] 2xl:leading-[80.84px] `}
            >
              Access to Top Notch <br />
              Managerial Control{" "}
            </h3>
            <p
              className={`text-[#cccccc] font-inter font-medium text-center text-[10px] leading-6.25
                md:text-base md:leading-8 md:w-[80%] lg:w-[70%] lg:text-[16px] lg:leading-7.5 xl:w-[60%]
                xl:text-[22px] xl:leading-12.25`}
            >
              Do more with Mobiholder, manage your Events, IDs, subscriptions{" "}
              and memberships with one app.
            </p>
          </div>

          {/* Buttons */}
          <div
            className={`bg-[#fefefe] rounded-[40px] mb-10.25 md:mb-12.75 lg:mb-[80-px] xl:mb-20.5 p-2 flex flex-col md:flex-row justify-between`}
          >
            {managerialControl.map((about) => (
              <button
                key={about.id}
                onClick={() => handleAboutClick(about.id)}
                className={`rounded-[100px] font-grifter font-bold text-[12px] 
                    py-2.75 px-7.5 leading-3.75
                    ${selectedAbout === about.id ? "bg-[#242ef2] text-[#ffffff]" : "bg-[#242EF20D] text-[#6c73ff]"} 
                    md:py-3.25 md:px-7.5 md:leading-3.75
                    lg:text-[16px] lg:py-3.5 lg:px-10 lg:leading-5
                    2xl:text-[20px] xl:py-5.25  `}
              >
                {about.type}
              </button>
            ))}
          </div>

          {/* Display content */}
          {selectedAbout &&
            managerialControl.map(
              (about) =>
                about.id === selectedAbout && (
                  <div key={about.id}>
                    <div
                      className={`grid grid-cols-1 gap-10
                      md:grid-cols-1 md:gap-7.5 mb-12.5
                      lg:grid-cols-[395px_auto] lg:gap-6.25 lg:mb-15
                      xl:grid-cols-[590px_auto] xl:gap-15 xl:mb-26`}
                    >
                      <div>
                        <h3
                          className={`font-grifter font-bold text-[24px] text-center leading-10.25 bg-about-text-gradient bg-clip-text text-transparent
                          md:text-[41px] md:leading-11.5
                          lg:text-[46px] lg:leading-11.75
                          xl:text-[47.96px] xl:leading-[48.84px] 
                          xls:text-[49.96px] xls:leading-[49.84px] 
                          2xl:text-[70.96px] 2xl:leading-[80.84px]
                          md:mb-5       
                          lg:text-left                
                           `}
                        >
                          {about.type}
                        </h3>
                        <p
                          className="font-grifter font-medium text-[10px] text-center lg:text-left leading-6.25 md:text-base md:leading-8 
                          lg:text-[16px] lg:leading-7.5
                          xl:text-[22px] xl:leading-12.25 text-[#a3a2a2]"
                        >
                          {about.desc}
                        </p>
                      </div>
                      <div className="grid place-content-center items-center justify-center">
                        <Image
                          src={about.cover}
                          alt={about.type}
                          width={100}
                          height={100}
                          className=""
                        />
                      </div>
                    </div>

                    <div
                      className={`grid grid-cols-1  h-160 gap-2.5 border-t border-[#303031] mb-30 md:mb-7.5 relative
                        lg:grid-cols-2 lg:mb-40 lg:h-95
                        xl:grid-cols-2 xl:mb-40 xl:h-160 `}
                    >
                      {about.features.map((feature, index) => (
                        <div
                          key={feature.id}
                          className={`border-b lg:border-b-0 lg:border-r pt-10 lg:pt-12.5 xl:pt-22.25 ${index % 2 === 1 ? "border-none lg:pl-10 xl:pl-12.5 " : "border-[#303031] pr-5"}`}
                        >
                          <div className="xl:pr-7.5 md:w-[55%] lg:w-full">
                            <h4 className="font-grifter font-bold text-[18px] md:text-[24px] lg:text-[28px] leading-8.75 xl:text-[32px] xl:leading-11.25 text-[#fefefe] mb-5">
                              {feature.title}
                            </h4>
                            <p className="font-inter font-medium text-[10px] md:text-base lg:text-[18px] xl:text-[22px] leading-8 xl:leading-12.25 text-[#a3a2a2] md:mb-5 mb-35 ">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {about.imgs.length > 0 &&
                      about.imgs.map((img, index) => (
                        <Image
                          key={index}
                          src={img.src}
                          alt={img.alt}
                          width={100}
                          height={100}
                          className={img.className}
                        />
                      ))}
                  </div>
                ),
            )}
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;

import { useState } from "react";
import { managerialControl } from "../../../data";

const About = () => {
  const [selectedAbout, setSelectedAbout] = useState(managerialControl[0].id);

  // Handle about section change
  const handleAboutClick = (aboutId: number) => {
    setSelectedAbout(aboutId);
  };
  return (
    <div className="flex justify-center relative overflow-hidden">
      <img
        src="/images/about-bg.gif"
        alt="about-gif"
        className={`absolute max-w-[489px] max-h-[489px] w-[100%] h-[100%] top-[40%] left-0 transform translate-x-[-20%] `}
      />

      <div className="container mx-auto px-8 mt-[66px] md:mt-[76px] lg:mt-[100px] xll:px-8 2xl:px-0 flex xl:mt-[133px] relative">
        <div className="bg-[#060e16] rounded-[50px] px-[40px] md:px-[60px] xl:px-[80px] shadow-about-sh z-10">
          {/* About section header */}
          <div className="flex items-center justify-center flex-col mt-[46.66px] mb-[35px] md:mb-[40px] lg:my-[60px] xl:mt-[86px] xl:mb-[76px]">
            <img
              src="/images/mobiholder-logo.png"
              alt="mobiholder-logo"
              className="max-w-[66px] max-h-[55.32px] mb-[20px]"
            />
            <h3
              className={`text-white font-grifter font-bold text-center text-[40px] leading-[60px]
                md:text-[50px] md:leading-[70px]
                lg:text-[60px] lg:leading-[80px]
                xl:text-[70px] xl:leading-[90px] `}
            >
              Access to Top Notch <br />
              Managerial Control{" "}
            </h3>
            <p
              className={`text-[#cccccc] font-inter font-medium text-center text-[16px] leading-[25px]
                md:leading-[32px]
                xl:text-[22px] xl:leading-[49px]`}
            >
              Do more with Mobiholder, manage your Events, IDs, subscriptions{" "}
              <br />
              and memberships with one app.
            </p>
          </div>

          {/* Buttons */}
          <div
            className={`bg-[#fefefe] rounded-[40px] mb-[41px] md:mb-[51px] lg:mb-[80-px] xl:mb-[82px] p-[8px] flex justify-between`}
          >
            {managerialControl.map((about) => (
              <button
                key={about.id}
                onClick={() => handleAboutClick(about.id)}
                className={`rounded-[100px] font-grifter font-bold text-[14px] 
                    py-[11px] px-[30px] leading-[15px]
                    ${selectedAbout === about.id ? "bg-[#242ef2] text-[#ffffff]" : "bg-[#242EF20D] text-[#6c73ff]"} 
                    md:py-[13px] md:px-[30px] md:leading-[15px]
                    lg:text-[16px] lg:py-[14px] lg:px-[40px] lg:leading-[20px]
                    xl:text-[20px] xl:py-[21px]  `}
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
                      className={`grid grid-cols-1 gap-[20px]
                      md:grid-cols-1 md:gap-[30px] mb-[50px]
                      lg:grid-cols-[395px_auto] lg:gap-[25px] lg:mb-[60px]
                      xl:grid-cols-[590px_auto] xl:gap-[60px] xl:mb-[104px]`}
                    >
                      <div>
                        <h3
                          className={`font-grifter font-bold text-[40px] text-center leading-[60px] bg-about-text-gradient bg-clip-text text-transparent
                          md:mb-[20px]       
                          lg:text-left                
                          xl:text-[53px] xl:leading-[70px] `}
                        >
                          {about.type}
                        </h3>
                        <p className="font-grifter font-medium text-[16px] text-center lg:text-left leading-[30px] xl:text-[20px] xl:leading-[49px] text-[#a3a2a2]">
                          {about.desc}
                        </p>
                      </div>
                      <div className="grid place-content-center items-center justify-center">
                        <img src={about.cover} alt={about.type} className="" />
                      </div>
                    </div>

                    <div
                      className={`grid grid-cols-1  h-[640px] gap-[10px] border-t border-[#303031] mb-[30px] relative
                        lg:grid-cols-2 lg:mb-[160px] lg:h-[380px]
                        xl:grid-cols-2 xl:mb-[160px] xl:h-[640px] `}
                    >
                      {about.features.map((feature, index) => (
                        <div
                          key={feature.id}
                          className={`border-b lg:border-b-0 lg:border-r pt-[40px] lg:pt-[50px] xl:pt-[89px] ${index % 2 === 1 ? "border-none lg:pl-[40px] xl:pl-[50px] " : "border-[#303031] pr-[20px]"}`}
                        >
                          <div className="xl:pr-[30px] w-[55%] lg:w-full">
                            <h4 className="font-grifter font-bold text[28px] leading-[35px] xl:text-[32px] xl:leading-[45px] text-[#fefefe] mb-[20px]">
                              {feature.title}
                            </h4>
                            <p className="font-inter font-medium text-[18px] xl:text-[22px] leading-[32px] xl:leading-[49px] text-[#a3a2a2] mb-[20px]">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {about.imgs.length > 0 &&
                      about.imgs.map((img, index) => (
                        <img
                          key={index}
                          src={img.src}
                          alt={img.alt}
                          className={img.className}
                        />
                      ))}
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default About;

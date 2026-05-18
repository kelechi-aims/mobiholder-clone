import { FeaturesData, featuresData } from "@/app/_lib/data";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="flex justify-center bg-[#020d11] pt-20 mt-23.75 ">
      <div className="container mx-auto px-8 xll:px-8 2xl:px-0 z-10">
        <div className="relative">
          <Image
            src="/images/ellipse.png"
            alt="ellipse"
            width={1000}
            height={400}
            className=" relative "
          />
          <div
            className={`w-[70%] md:w-[60%] flex flex-col justify-center items-center absolute top-[42.5%] left-[14%] md:left-[19%] xl:left-[17.5%] `}
          >
            <h3
              className={`font-grifter font-bold text-center text-white text-[24px] leading-10.25 md:text-[40px] md:leading-11.5
                        lg:text-[46px] lg:leading-11.75
                        xl:text-[47.96px] xl:leading-[48.84px] 
                        xls:text-[49.96px] xls:leading-[49.84px] 
                        2xl:text-[70.96px] 2xl:leading-[80.84px]
                    `}
            >
              Why Individuals and SMEs choose us
            </h3>
            <p
              className={`w-[80%] lg:w-[60%] xl:w-[58%] 2xl:w-[50%] font-inter font-normal text-[10px] md:text-[12px] lg:text-base text-center text-[#afb3ca]`}
            >
              With MobiHolder you get the feeling that comes with being in
              control. Manage everything from one app today!
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-15 mt-20 md:mt-0 mb-30 px-0 xll:px-0">
          <div className="flex justify-between items-center flex-col w-full lg:flex-row lg:flex-wrap gap-16 lg:gap-8">
            {featuresData.map((feature: FeaturesData) => (
              <div
                key={feature.id}
                className={`px-7.5 border bg-feature-card border-solid rounded-[20px] bg-clip-border border-transparent 
                                bg-gradient-to-br-feat-card-bdr inline-flex flex-col justify-center gap-5.75 py-12.5 w-full 
                                lg:w-72.5 lg:h-122.5
                                xl:w-87.5 xl:h-122.5
                                xll:w-102.5
                                2xl:w-118.25    
                            `}
              >
                <h6 className="font-rubik font-medium text-3xl tracking-[-1px] text-[#cad1e9] text-left ">
                  {feature.title}
                </h6>
                <p className="font-roboto font-normal text-base text-[#afb3ca] text-left">
                  {feature.description}
                </p>
                <Image
                  src={feature.image}
                  alt={`feature-${feature.id}`}
                  width={500}
                  height={300}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-between gap-16 xl:gap-8 w-full">
            <div
              className={`px-7.5 border bg-feature-card border-solid rounded-[20px] bg-clip-border border-transparent
                        border-feat-card-bdr flex flex-col lg:flex-row justify-around lg:justify-center lg:items-center gap-5.75 lg:py-12.5 
                        w-full h-125 md:h-159
                        lg:w-237.5 lg:h-full
                        xl:w-195 xl:h-full
                        xll:w-225
                        2xl:w-250
                    `}
            >
              <div className="lg:w-4/6">
                <h6 className="font-rubik font-medium text-3xl tracking-[-1px] text-[#cad1e9] text-left mb-[10px] ">
                  Revenue from Subscriptions module
                </h6>
                <p className="font-roboto font-normal text-base text-[#afb3ca] text-left">
                  Unlock a steady revenue stream by offering subscription-based
                  access to your organisation. Our platform&apos;s subscription
                  module allows you to create flexible plans that cater to
                  different user needs, offering options like monthly,
                  quarterly, or annual subscriptions.
                </p>
              </div>
              <Image
                src="/images/feature-img4.png"
                alt="feature-img4"
                width={400}
                height={100}
                className="lg:w-2/5 h-auto"
              />
            </div>

            <div
              className={`max-h-max px-7.5 border bg-feature-card border-solid rounded-[20px] bg-clip-border border-transparent border-feat-card-bdr 
                        flex flex-col md:flex-row w-full justify-between 
                        xl:flex-col xl:justify-center xl:w-87.5
                        xll:w-102.5 2xl:w-117.5
                        gap-5.75 py-12.75 xll:py-10 2xl:py-7
                    `}
            >
              <div className="">
                <h6 className="font-rubik font-medium text-3xl tracking-[-1px] text-[#cad1e9] text-left ">
                  Join Us Today{" "}
                </h6>
                <p className="font-roboto font-normal text-[base text-[#afb3ca] max-w-82.75 text-left">
                  Enjoy these benefits as you become a Mobiholder user
                  today{" "}
                </p>
              </div>
              <button className="px-7.5 py-5.25 bg-purple border w-75 border-purple rounded-[100px] flex justify-center items-center">
                <span className="text-white font-grifter font-bold text-[20px] leading-12.25 flex justify-center items-center gap-2.5">
                  Get Started <FaArrowRightLong />
                </span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-[#101223] border rounded-4xl border-solid bg-clip-border border-transparent border-feature-border backdrop-blur-[13.4px]
             absolute left-0 h-[2863.72px] md:h-831.25 lg:h-377.75 xl:h-358 xll:h-372 2xl:h-373.25 w-full mt-11 md:mt-32
            `}
      ></div>
    </div>
  );
};

export default Features;

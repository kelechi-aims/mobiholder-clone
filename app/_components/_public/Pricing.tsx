"use client";
import { useState } from "react";
import { RiRadioButtonLine } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { pricing, PricingPlan } from "@/app/_lib/data";

function Pricing() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };
  return (
    <div className="flex justify-between px-0 lg:px-10 xl:px-0 flex-wrap gap-10 items-center">
      {pricing.map((item: PricingPlan, index) => (
        <div
          key={index}
          className={`xl:w-82.5 2xl:w-[380.297px] rounded-4xl p-10 bg-pricing-card-bg backdrop-blur-[84px] border ${
            activeCard === index ? "border-blue-400" : "border-transparent"
          }
                        `}
        >
          <div className="mb-7">
            <div
              className={`w-fit rounded-full ${activeCard === index ? "bg-pricing-chk" : "bg-transparent"}`}
            >
              <RiRadioButtonLine
                className={`h-10 w-10 mb-5 ${activeCard === index ? "text-black" : "text-white"}`}
              />
            </div>
            <h6 className="font-grifter font-bold text-base xl:text-[22px] 2xl:leading-7 text-white">
              {item.name}
            </h6>
            <p className="font-inter font-normal text-sm xl:text-base 2xl:text-[19px] xl:leading-5 text-white">
              {item.desc}
            </p>
          </div>

          <div className="mb-7">
            <span className="font-inter font-medium text-3xl 2xl:text-5xl text-white">
              {" "}
              <span className="font-normal font-sm text-[#FFFFFFCC]">
                {item.price}{" "}
                <span className="font-normal text-sm text-[#FFFFFFCC]">
                  / per month
                </span>
              </span>
            </span>
          </div>

          <div className="mb-6">
            <button
              onClick={() => handleCardClick(index)}
              className={`w-full rounded-full px-3 py-3.5 shadow-custom-inset font-inter font-medium text-sm text-white ${
                activeCard === index ? "bg-[#FF2BFF]" : "bg-pricing-btn border "
              }
                                `}
            >
              Get Started
            </button>
          </div>
          <hr />
          <div className="my-8">
            <p className="font-inter font-medium text-lg text-white ">
              What you will get
            </p>
            {item.features.map((feature, index) => (
              <ul key={index} className="">
                <li className="flex gap-2 items-center  text-white">
                  <IoIosCheckmarkCircleOutline />{" "}
                  <span className="font-inter font-normal text-base text-white">
                    {feature}
                  </span>
                </li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pricing;

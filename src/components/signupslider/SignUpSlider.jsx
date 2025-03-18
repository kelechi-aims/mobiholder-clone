import { useEffect, useState } from "react";
import { signupslider } from "../../data";

const SignUpSlider = () => {
  const [currentSlider, setCurrentslider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentslider((prevSlider) =>
        prevSlider === signupslider.length - 1 ? 0 : prevSlider + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [signupslider.length]);

  return (
    <div className="bg-[#15171e] pt-16 pb-4 px-[55px] h-screen relative">
      <div className="flex gap-4 justify-between">
        {signupslider.map((_, index) => (
          <div
            key={index}
            className={`h-[6px] w-24 rounded transition-all ${currentSlider === index ? "bg-[#242ef2]" : "bg-[#242ef2] bg-opacity-30"}`}
          ></div>
        ))}
      </div>

      <div className="pt-20 flex flex-col justify-between items-center ">
        <img
          src={signupslider[currentSlider].img}
          alt={signupslider[currentSlider].alt}
          className="pb-20 h-[50%] w-full"
        />
        <div className="lg:w-[95%] xl:w-[90%] text-center flex flex-col justify-center items-center">
          <h3 className="w-[90%] text-[#eeeeee] font-montserrat font-semibold text-[20px] xll:text-[24px] 2xl:text-[28px] mb-4">
            {signupslider[currentSlider].title}
          </h3>
          <p className="text-[#b4b4b4] text-[15px] xll:text-base">
            {signupslider[currentSlider].desc}
          </p>
        </div>
      </div>
      <footer className="absolute bottom-4 left-[25%]">
        <p className="font-inter lg:text-[11px] xl:text-[13px] pt- xl:pt-[120px] text-[#3f4353] text-center">
          Copyright © 2024 Mobiholder. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default SignUpSlider;

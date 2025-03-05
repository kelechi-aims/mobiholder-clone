import { useEffect, useState } from "react";
import { signupslider } from "../../data";

const SignUpSlider = () => {
  const [currentSlider, setCurrentslider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentslider((prevSlider) =>
        prevSlider === signupslider.length - 1 ? 0 : prevSlider + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [signupslider.length]);

  return (
    <div className="bg-[#15171e] pt-20 pb-5 px-[67px]">
      <div className="flex gap-4 justify-between">
        {signupslider.map((_, index) => (
          <div
            key={index}
            className={`h-[6px] w-24 rounded transition-all ${currentSlider === index ? "bg-[#242ef2]" : "bg-[#242ef2] bg-opacity-30"}`}
          ></div>
        ))}
      </div>

      <div className="pt-20 flex flex-col justify-center items-center">
        <img
          src={signupslider[currentSlider].img}
          alt={signupslider[currentSlider].alt}
          className="pb-20"
        />
        <div className="w-[90%] text-center flex flex-col justify-center items-center">
          <h3 className="w-[90%] text-[#eeeeee] font-montserrat font-semibold text-[20px] xll:text-[24px] 2xl:text-[28px] mb-4">
            {signupslider[currentSlider].title}
          </h3>
          <p className="text-[#b4b4b4] text-[15px] xll:text-base">
            {signupslider[currentSlider].desc}
          </p>
        </div>
        <footer>
          <p className="font-inter text-[13px] mt-[120px] text-[#3f4353] text-center">
            Copyright © 2024 Mobiholder. All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SignUpSlider;

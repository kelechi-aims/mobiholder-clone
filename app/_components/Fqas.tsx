"use client";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { fqasData, FqasData } from "../_lib/data";
function Fqas() {
  const [selectedFqas, setSelectedFqas] = useState<FqasData>(fqasData[0]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const accordionRef = useRef<HTMLDivElement | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleFqasClick = (index: number) => {
    setSelectedFqas(fqasData[index]);
  };

  // handle clicks outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      accordionRef.current &&
      !accordionRef.current.contains(event.target as Node)
    ) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside as EventListener);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener,
      );
    };
  }, []);
  return (
    <div>
      <div className="border-b border-[#abaaaa] flex justify-around">
        {fqasData.map((fqas, index) => (
          <h3
            key={index}
            className={`font-grifter font-bold text-[12px] md:text-xl 2xl:text-[30px] 2xl:leading-12.25 text-[#abaaaa] ${
              selectedFqas === fqas
                ? "text-[#242ef2] border-b-4 border-[#242ef2]"
                : ""
            }`}
            onClick={() => handleFqasClick(index)}
          >
            {fqas.type}
          </h3>
        ))}
      </div>

      <div ref={accordionRef}>
        {selectedFqas && (
          <div className="mt-10 mb-40 px-16 md:px-24 xl:px-32">
            {selectedFqas.content.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#Ec3c3c3] py-6 last:border-b-0"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full text-left focus:outline-none font-inter font-medium text-[10px] md:text-lg lg:text-xl 2xl:text-[28px] 2xl:leading-12.25"
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform ${activeIndex === index ? "rotate-180" : ""}`}
                  >
                    <IoIosArrowDown />
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="mt-2 text-gray-600 text-[22px] leadig-[49px] ">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Fqas;

import React, { useEffect, useRef, useState } from 'react';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Faq, FqasData, fqasData } from '../../data';
import { IoIosArrowDown } from "react-icons/io";

const FqasPage = () => {
  const [selectedFqas, setSelectedFqas] = useState<FqasData>(fqasData[0]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const accordionRef = useRef<HTMLDivElement | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleFqasClick = (index: number) => {
    setSelectedFqas(fqasData[index]);
  }

  // handle clicks outside
  const handleClickOutside = (event: MouseEvent) => {
    if (accordionRef.current && !accordionRef.current.contains(event.target as Node)) {
      setActiveIndex(null);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside as EventListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
    };
  }, [])


  return (
    <div>
      <div className='bg-[url("/images/home-hero.gif")] bg-cover flex flex-col justify-center'>
          <div className='container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0'>
            <h1 className={`pt-[219px] font-grifter font-bold text-white pb-[105px]
              text-[70px] leading-[114.8px]`}
            >FAQs</h1>
          </div>
      </div>

      <div className='relative overflow-hidden'>
        <img src="/images/about-bg.gif" alt="background image" className='absolute max-w-[602px] max-h-[566px] top-[-4%] right-0 transform translate-x-[75%] xl:translate-x-[70%] -z-10 ' />
        <div className='container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0 my-[50px]'>
          <div className='mb-[100px] flex flex-col gap-6 items-center '>
            <h3 className={`font-grifter font-bold text-[#061F25]
              text-[40px] leading-[60px]
              lg:text-[55px] lg:leading-[90px]
              `}>Frequently Asked Questions</h3>
              <p className='font-inter font-medium text-sm 2xl:text-[22px] lg:text-base xl:text-xl 2xl:leading-[49px] text-[#282828] w-[60%] 2xl:w-[50%] text-center'>
                Here are some of the questions we are asked most often. If you need additional help you can also contact support below</p>

              <button className='py-[21px] px-[30px] bg-[#a324f2] text-white text-base xl:text-xl font-bold font-grifter rounded-[100px] flex items-center gap-[10px]'>Contact Support <MdOutlineArrowRightAlt /></button>
              
          </div>
          {/* accordion */}

          <div >
            <div className='border-b border-[#abaaaa] flex justify-around'>
            {fqasData.map((fqas, index) => (
              <h3 
                key={index} 
                className={`font-grifter font-bold text-xl 2xl:text-[30px] 2xl:leading-[49px] text-[#abaaaa] ${
                  selectedFqas === fqas ? "text-[#242ef2] border-b-4 border-[#242ef2]" : ""
                }`}
                onClick={() => handleFqasClick(index)}>{fqas.type}</h3>
            ))}
            </div>

            <div ref={accordionRef}>
              {selectedFqas && (
                <div className='mt-10 mb-40 px-24 xl:px-32'>
                {selectedFqas.content.map((faq, index) => (
                  <div key={index}
                    className='border-b border-[#Ec3c3c3] py-6 last:border-b-0'
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className='flex items-center justify-between w-full text-left focus:outline-none font-inter font-medium text-lg lg:text-xl 2xl:text-[28px] 2xl:leading-[49px]'
                    >
                      {faq.question}
                      <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                        <IoIosArrowDown />
                      </span>
                    </button>

                    {activeIndex === index && (
                      <div className='mt-2 text-gray-600 text-[22px] leadig-[49px] '>
                        {faq.answer}
                      </div>
                   )}
                </div>
              ))}
            </div>

              )}
            </div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default FqasPage
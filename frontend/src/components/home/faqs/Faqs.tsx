import React, { useState } from 'react'
import { Faq, faqs } from '../../../data'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

  return (
    <div className='flex justify-center py-[80px]'>
        <div className="container mx-auto px-8 md:px-0 xl:px-0 xll:px-8 2xl:px-0 flex flex-col justify-center items-center">
            <div className='w-[80%]'>
                <h2 className={`font-grifter font-bold text-[#061f25] text-center text-[24px] leading-[41px]
                    md:text-[40px] md:leading-[46px]
                    lg:text-[46px] lg:leading-[47px]
                    xl:text-[47.96px] xl:leading-[48.84px] 
                    xls:text-[49.96px] xls:leading-[49.84px] 
                    2xl:text-[70.96px] 2xl:leading-[80.84px] 
                `}>Frequently Asked Questions</h2>

                <div className='mb-[30px]'>
                    {faqs.map((faq: Faq, index) => (
                        <div key={index}
                            className='border-b border-[#Ec3c3c3] py-6 last:border-b-0'
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className='flex items-center justify-between w-full text-left focus:outline-none font-inter font-medium text-[12px] md:text-lg lg:text-xl 2xl:text-[28px] 2xl:leading-[49px]'
                            >
                                {faq.question}
                                <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    <IoIosArrowDown />
                                </span>
                            </button>

                            {activeIndex === index && (
                                <div className='mt-2 text-gray-600 text-[12px] md:text-[22px] leadig-[49px] '>
                                    {faq.answer}
                                </div>
            
                            )}
                        </div>
                    ))}
                </div>

                
            </div>
            <button className=' bg-[#205dc8] py-[5px] md:py-[9px] px-[35px] md:px-[41px] font-grifter rounded-[100px] font-bold text-white text-[14px] md:text-[18px] leading-[49px]'><Link to='/'>See All</Link></button> 
            
        </div>
    </div>
  )
}

export default Faqs
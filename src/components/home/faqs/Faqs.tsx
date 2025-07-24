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
                <h2 className={`font-grifter font-bold text-[#061f25] text-center text-[40px] leading-[60px]
                    md:text-[50px] md:leading-[60px]
                    lg:-text-[60] lg:leading-[80px]
                    xll:text-[70px] xll:leading-[114.84px] 
                `}>Frequently Asked Questions</h2>

                <div className='mb-[30px]'>
                    {faqs.map((faq: Faq, index) => (
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

                
            </div>
            <button className=' bg-[#205dc8] py-[9px] px-[41px] font-grifter rounded-[100px] font-bold text-white text-[18px] leading-[49px]'><Link to='/'>See All</Link></button> 
            
        </div>
    </div>
  )
}

export default Faqs
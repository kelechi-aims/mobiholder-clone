import React, { useState } from 'react'
import { RiRadioButtonLine } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Navbar from '../../components/navbar/Navbar';
import { pricing, PricingPlan } from '../../data'


const Pricing = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setActiveCard(index);
    };

  return (
    <div>
        <div className='bg-[url("/images/home-hero.gif")] bg-cover flex flex-col justify-center'>
            <div className='container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0'>
                <h1 className={`pt-[219px] font-grifter font-bold text-white pb-[105px]
                    text-[30.96px] leading-[40.84px]
                    md:text-[40.96px] md:leading-[45.84px]
                    lg:text-[45.96px] lg:leading-[47.84px]
                    xl:text-[47.96px] xl:leading-[48.84px] 
                    xls:text-[49.96px] xls:leading-[49.84px] 
                    2xl:text-[70.96px] 2xl:leading-[80.84px]
                    `}
                    >Pricing</h1>
            </div>
        </div>

        <div className='relative overflow-hidden'>
            <div className='container mx-auto px-6 md:px-0 lg:px-8 xll:px-8 2xl:px-0'>
                <div className='rounded-[40px] bg-[#0d0e1d] mt-[140px] mb-[240px] px-[40px] md:px-[66px] py-[120px]  md:py-[140px]'>
                    <div className='flex justify-center items-center text-center'>
                        <h3 className={`mb-[100px] font-grifter font-bold text-transparent bg-clip-text bg-pricing-txt w-full md:w-[55%] 2xl:w-[41%]
                            text-[30px] leading-[60px]
                            lg:text-[52px] lg:leading-[75px]
                            xl:text-[64px] xl:leading-[72px] tracking-[-4px]`}>Choose a plan that best suits you</h3>
                    </div>

                    <div className='flex justify-between px-0 lg:px-10 xl:px-0 flex-wrap gap-10 items-center'>
                    {pricing.map((item: PricingPlan, index) => (
                    <div 
                        key={index} 
                        className={`xl:w-[330px] 2xl:w-[380.297px] rounded-[32px] p-10 bg-pricing-card-bg backdrop-blur-[84px] border ${
                            activeCard === index ? "border-blue-400" : "border-transparent"
                        }
                        `}
                    >
                        <div className='mb-7'>
                            <div className={`w-fit rounded-full ${ activeCard === index ? "bg-pricing-chk" : "bg-transparent"}`}>
                                <RiRadioButtonLine className={`h-10 w-10 mb-5 ${ activeCard === index ? "text-black" : "text-white"}`}/>
                            </div>
                            <h6 className='font-grifter font-bold text-base xl:text-[22px] 2xl:leading-[28px] text-white'>{item.name}</h6>
                            <p className='font-inter font-normal text-sm xl:text-base 2xl:text-[19px] xl:leading-[20px] text-white'>{item.desc}</p>
                        </div>

                        <div className='mb-7'>
                            <span className='font-inter font-medium text-3xl 2xl:text-5xl text-white'> <span className='font-normal font-sm text-[#FFFFFFCC]'>{item.price} <span className='font-normal text-sm text-[#FFFFFFCC]'>/ per month</span></span></span>
                        </div>

                        <div className='mb-6'>
                            <button 
                                onClick={() => handleCardClick(index)}
                                className={`w-full rounded-full px-3 py-[14px] shadow-custom-inset font-inter font-medium text-sm text-white ${
                                    activeCard === index ? "bg-[#FF2BFF]" : "bg-pricing-btn border "
                                }
                                `}
                            >Get Started</button>
                        </div> 
                        <hr />
                        <div className='my-8'>
                            <p className='font-inter font-medium text-lg text-white '>What you will get</p>
                            {item.features.map((feature, index) => (
                                <ul key={index} className=''>
                                <li className='flex gap-2 items-center  text-white'><IoIosCheckmarkCircleOutline /> <span className='font-inter font-normal text-base text-white'>{feature}</span></li>
                            </ul>
                            ))}
                        </div>                           
                    </div>
                    ))}
                    </div>
                </div>
            </div>
            <img src="/images/pricing-vector.png" alt="vector design" className='absolute top-[6%] xll:left-[5%] 2xl:left-[25%]' />
        </div>


    </div>
  )
}

export default Pricing
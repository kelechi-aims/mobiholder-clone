import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const CallToAction = () => {
  return (
    <div className='relative'>
        <div className='border border-[#101223] border-solid bg-[url("/images/calltoactionbg.gif")] bg-cover flex flex-col justify-center] py-[190px]'>
            <div className="container mx-auto px-8 xl:px-0 xll:px-8 2xl:px-0">
                <div className='w-[70%] lg:w-[60%]'>
                    <h1 className={`font-grifter font-bold bg-clip-text text-transparent bg-cta-text text-[40px] leading-[60px]
                        md:text-[50px] md:leading-[70px]
                        lg:-text-[60] lg:leading-[80px]
                        xl:text-[70px] xl:leading-[95px]
                    `}>Ready to unlock your Management potential?</h1>
                    <p className={`font-inter font-medium text-white mb-[40px] text-[16px] leading-[25px]
                        md:text-[18px] md:leading-[30px]
                        lg:text-[22px] lg:leading-[49px]
                    `}>Take control of your team, tasks, and performance with streamlined management tools. Boost productivity, enhance collaboration, and watch your business thrive!</p>
                    <button className=' rounded-[100px] py-[21px] px-[30px] bg-[#2842f2] '><span className='text-white font-grifter font-bold text-[20px] leading-[49px] flex justify-center items-center gap-[10px]'>Get Started <FaArrowRightLong /></span></button>
                </div>
            </div>
        </div>

        <div className='flex justify-center py-[190px] relative z-10'>
            <div className="container mx-auto px-8 xl:px-0 xll:px-8 2xl:px-0 flex flex-col lg:flex-row gap-[40px]">
                <img src="/images/cta-img1.png" alt="cta-img1" className='w-full max-h-[70%] lg:w-2/5 lg:max-h-[100%] h-auto place-items-center'/>
                <div className='flex flex-col lg:w-[55%] items-center'>
                    <h2 className={`font-grifter font-bold text-[#061f25] text-[40px] leading-[60px]
                        lg:text-[50px] lg:leading-[70px]
                        xl:text-[70px] xl:leading-[95px]
                        xll:text-[70px] xll:leading-[114.84px]
                    `}>Download the App</h2>
                    <p className={`font-inter font-medium text-[#282828]
                        md:text-[16px] md:leading-[25px]
                        lg:text-[18px] lg:leading-[30px]
                        xl:text-[22px] xl:leading-[49px]
                    `}>Experience seamless access to all our features right at your fingertips! Download the mobile app now and enjoy convenience, real-time updates, and a user-friendly interface wherever you go.</p>

                   <div className='flex gap-[20px] xll:gap-[40px] mt-[40px] items-start'>
                        <button className=' '>
                            <div className='flex gap-[6px] xll:gap-[10px] py-[21px] px-[30px] rounded-[9px] bg-[#061f25] border-8 border-[#205dc8]'>
                                <img src="/images/playstore.png" alt="playstore" className=' w-[28px] h-[31px]'/>
                                <p className='font-mulish font-medium text-[12px] leading-[16px] xll:text-[14px] xll:leading-[18.2px] text-white'>Download on <br/><span className='font-unbounded font-black text-[20px] leading-[20px] xll:text-[24px] xll:leading-[23.4px] '>PlayStore</span></p>
                            </div>
                        </button>

                        <button className=' '>
                            <div className='flex gap-[6px] xll:gap-[10px] py-[21px] px-[30px] rounded-[9px] bg-[#061f25] border-8 border-[#205dc8]'>
                                <img src="/images/apple.png" alt="playstore" className=' w-[28px] h-[34px]'/>
                                <p className='font-mulish font-medium text-[12px] leading-[16px] xll:text-[14px] xll:leading-[18.2px] text-white'>Download on <br/><span className='font-unbounded font-black text-[20px] leading-[20px] xll:text-[24px] xll:leading-[23.4px] '>AppStore</span></p>
                            </div>
                        </button>
                   </div>

                </div>
            </div>


        </div>
        <img src="/images/about-bg.gif" alt="about-gif" className={`absolute w-[100%] max-w-[800px] h-[100%] max-h-[800px] top-[81%] md:top-[85%] lg:top-[80%] xl:top-[80%] xll:top-[77%] 2xl:top-[78%] 2xl:left-[70%] overflow-hidden xll:left-[75%]  lg:left-[80%] md:left-[50%] left-[60%] -z-10`} />

    </div>
  )
}

export default CallToAction

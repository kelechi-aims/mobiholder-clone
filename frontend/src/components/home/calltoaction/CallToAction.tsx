import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const CallToAction = () => {
  return (
    <div className=''>
        <div className='border border-[#101223] border-solid bg-[url("/images/calltoactionbg.gif")] bg-cover flex flex-col justify-center] py-[100px] lg:py-[190px]'>
            <div className="container mx-auto px-8 xll:px-8 2xl:px-0">
                <div className='w-[70%] lg:w-[60%]'>
                    <h1 className={`font-grifter font-bold bg-clip-text text-transparent bg-cta-text text-[24px] leading-[41px] md:text-[40px] md:leading-[46px]
                        lg:text-[46px] lg:leading-[47px]
                        xl:text-[47.96px] xl:leading-[48.84px] 
                        xls:text-[49.96px] xls:leading-[49.84px] 
                        2xl:text-[70.96px] 2xl:leading-[80.84px]
                    `}>Ready to unlock your Management potential?</h1>
                    <p className={`font-inter font-medium text-white mb-[40px] text-[12px] leading-[25px]
                        md:text-[14px] md:leading-[30px]
                        lg:text-base lg:leading-[49px]
                    `}>Take control of your team, tasks, and performance with streamlined management tools. Boost productivity, enhance collaboration, and watch your business thrive!</p>
                    <button className=' rounded-[100px] py-[16px] px-[20px] md:py-[21px] md:px-[30px] bg-[#2842f2] '><span className='text-white font-grifter font-bold lg:text-[20px] leading-[49px] flex justify-center items-center gap-[10px]'>Get Started <FaArrowRightLong /></span></button>
                </div>
            </div>
        </div>

        <div className='flex justify-center py-[100px] lg:py-[190px] relative z-10 overflow-hidden'>
            {/* Rotating backdround gif */}
            <img src="/images/about-bg.gif" alt="about-gif" className={`absolute top-[85%] lg:top-[69%] right-0 transform translate-x-[60%] -z-10`} />

            <div className="container mx-auto px-8 xll:px-8 2xl:px-0 flex flex-col lg:flex-row gap-[40px]">
                
                <img src="/images/cta-img1.png" alt="cta-img1" className='w-full max-h-[70%] lg:w-2/5 lg:max-h-[100%] h-auto place-items-center'/>
                <div className='flex flex-col lg:w-[55%] items-center'>
                    <h2 className={`font-grifter font-bold text-[#061f25] text-[24px] leading-[41px] md:text-[40px] md:leading-[46px]
                        lg:text-[46px] lg:leading-[47px]
                        xl:text-[47.96px] xl:leading-[48.84px] 
                        xls:text-[49.96px] xls:leading-[49.84px] 
                        2xl:text-[70.96px] 2xl:leading-[80.84px]
                    `}>Download the App</h2>
                    <p className={`font-inter font-medium text-[#282828] text-[12px] leading-[25px]
                        md:text-[14px] md:leading-[25px]
                        lg:text-[16px] lg:leading-[30px]
                        xl:text-[18px] xl:leading-[49px]
                    `}>Experience seamless access to all our features right at your fingertips! Download the mobile app now and enjoy convenience, real-time updates, and a user-friendly interface wherever you go.</p>

                   <div className='flex gap-[20px] xll:gap-[40px] mt-[40px] items-start'>
                        <button className=' '>
                            <div className='flex gap-[6px] xll:gap-[10px] py-[14px] md:py-[21px] px-[20px] md:px-[30px] rounded-[9px] bg-[#061f25] border-8 border-[#205dc8]'>
                                <img src="/images/playstore.png" alt="playstore" className='w-[20px] h-[23px] md:w-[28px] md:h-[31px]'/>
                                <p className='font-mulish font-medium text-[9px] md:text-[12px] leading-[16px] xll:text-[14px] xll:leading-[18.2px] text-white'>Download on <br/><span className='font-unbounded font-black text-[12px] md:text-[20px] leading-[20px] xll:text-[24px] xll:leading-[23.4px] '>PlayStore</span></p>
                            </div>
                        </button>

                        <button className=' '>
                            <div className='flex gap-[6px] xll:gap-[10px] py-[14px] md:py-[21px] px-[20px] md:px-[30px] rounded-[9px] bg-[#061f25] border-8 border-[#205dc8]'>
                                <img src="/images/apple.png" alt="playstore" className='w-[20px] h-[23px] md:w-[28px] md:h-[34px]'/>
                                <p className='font-mulish font-medium text-[9px] md:text-[12px] leading-[16px] xll:text-[14px] xll:leading-[18.2px] text-white'>Download on <br/><span className='font-unbounded font-black text-[12px] md:text-[20px] leading-[20px] xll:text-[24px] xll:leading-[23.4px] '>AppStore</span></p>
                            </div>
                        </button>
                   </div>

                </div>
            </div>



        </div>

    </div>
  )
}

export default CallToAction

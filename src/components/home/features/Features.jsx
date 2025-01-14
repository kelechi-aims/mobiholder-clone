import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Features = () => {
  return (
    <div className='flex justify-center bg-[#020d11] pt-[80px] mt-[95px] '>
        <div className='container mx-auto px-8 xll:px-8 2xl:px-0 z-10'>
           
            <div className='relative'>
                <img src="/images/ellipse.png" alt="ellipse" className='max-w-[] relative '/>
                <div className={`w-[50%] md:w-[60%] flex flex-col justify-center items-center absolute top-[42.5%] left-[23%] xl:left-[17.5%] `}>
                    <h3 className={`font-grifter font-bold text-center text-white text-[40px] leading-[60px]
                        lg:text-[55px] lg:leading-[75px]
                        xl:text-[70px] xl:leading-[90px]
                    `}>Why Individuals and SMEs choose us</h3>
                    <p className={`w-[80%] lg:w-[60%] xl:w-[58%] 2xl:w-[50%] font-inter font-normal text-xs xl:text-base text-center text-[#afb3ca]`}>With MobiHolder you get the feeling that comes with being in control. Manage everything from one app today!</p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-[60px] mb-[120px] px-0 xl:px-[135px] xll:px-0'>
                <div className='flex justify-between items-center flex-wrap gap-8'>
                    <div className={`px-[30px] border bg-feature-card border-solid rounded-[20px] bg-clip-border border-transparent 
                        bg-gradient-to-br-feat-card-bdr inline-flex flex-col justify-center gap-[23px] py-[50px]
                        md:max-w-[325px] lg:max-w-[290px]
                        max-w-[433px] w-full max-h-[490px] h-full
                        xll:max-w-[410px]
                        2xl:max-w-[473px]

                    `}>
                        <h6 className='font-rubik font-medium text-3xl tracking-[-1px] text-[#cad1e9] text-left '>Easy Sign Up</h6>
                        <p className='font-roboto font-normal text-base text-[#afb3ca] text-left'>Choose a user type and get started in seconds <br />with our simple and user-friendly sign-up <br />process.  Start exploring without any hassle!</p>
                        <img src="/images/feature-img1.png" alt="feature-img1" className=' w-full h-auto'/>
                    </div>
                    <div className={`px-[30px] border bg-feature-card border-solid rounded-[20px] bg-clip-border border-transparent 
                        border-feat-card-bdr flex flex-col justify-center gap-[23px] py-[50px]
                        md:max-w-[325px] lg:max-w-[290px]
                        max-w-[433px] w-full max-h-[490px] h-full
                        xll:max-w-[410px]
                        2xl:max-w-[473px]
                    `}>
                        <h6 className='font-rubik font-medium text-3xl tracking-[-1px] text-[#cad1e9] text-left '>Never lose your IDs </h6>
                        <p className='font-roboto font-normal text-base text-[#afb3ca] text-left'>Keep all your important IDs safe and accessible in one secure place. Our platform allows you to store, organize, and retrieve your IDs effortlessly, so you’re never scrambling to find them when you need them most.</p>
                        <img src="/images/feature-img2.png" alt="feature-img3" className='w-full h-auto'/>
                    </div>
                    <div className={`px-[30px] border bg-feature-card border-solid rounded-[20px] bg-clip-border border-transparent 
                        border-feat-card-bdr flex flex-col justify-center gap-[23px] py-[50px]
                        md:max-w-[325px] lg:max-w-[290px]
                        max-w-[433px] w-full max-h-[490px] h-full
                        xll:max-w-[410px]
                        2xl:max-w-[473px]
                    `}>
                        <h6 className='font-rubik font-medium text-3xl tracking-[-1px] text-[#cad1e9] text-left '>24/7 Customer Support</h6>
                        <p className='font-roboto font-normal text-base text-[#afb3ca] text-left'>You’ll receive regular reports on your privacy status and any outstanding threats. If new records become associated with you, we will send you an alert.</p>
                        <img src="/images/feature-img3.png" alt="feature-img3" className='w-full h-auto '/>
                    </div>
                </div>

                <div className='flex flex-wrap justify-between gap-8'>
                    <div className={`px-[30px] border bg-feature-card border-solid rounded-[20px] bg-clip-border border-transparent
                        border-feat-card-bdr flex justify-center items-center gap-[23px] py-[50px] 
                        max-w-[1050px] w-full h-full
                        xll:max-w-[900px]
                        2xl:max-w-[1050px]
                    `}>
                        <div className='w-4/6'>
                            <h6 className='font-rubik font-medium text-3xl tracking-[-1px] text-[#cad1e9] text-left mb-[10px] '>Revenue from Subscriptions module</h6>
                            <p className='font-roboto font-normal text-base text-[#afb3ca] text-left'>Unlock a steady revenue stream by offering subscription-based access to your organisation. Our platform's subscription module allows you to create flexible plans that cater to different user needs, offering options like monthly, quarterly, or annual subscriptions.</p>
                        </div>
                        <img src="/images/feature-img4.png" alt="feature-img4" className='w-2/5 h-auto'/>
                    </div>
                    <div className={`max-h-max px-[30px] border bg-feature-card border-solid rounded-[20px] bg-clip-border border-transparent
                         border-feat-card-bdr flex flex-col justify-center gap-[23px] py-[19px] xll:py-[28px] 2xl:py-[19px]
                    `}>
                        <h6 className='font-rubik font-medium text-3xl tracking-[-1px] text-[#cad1e9] text-left '>Join Us Today </h6>
                        <p className='font-roboto font-normal text-[base text-[#afb3ca] max-w-[331px] text-left'>Enjoy these benefits as you become a Mobiholder user today </p>
                        <button className='px-[30px] py-[21px] bg-purple border border-purple rounded-[100px] flex justify-center items-center'><span className='text-white font-grifter font-bold text-[20px] leading-[49px] flex justify-center items-center gap-[10px]'>Get Started <FaArrowRightLong /></span> </button>
                    </div>
                </div>

            </div>

        </div>

        <div className={`bg-[#101223] border rounded-[32px] border-solid bg-clip-border border-transparent border-feature-border backdrop-blur-[13.4px]
             absolute left-0 h-[2096px] lg:h-[1546px] xl:h-[1715px] xll:h-[1517px] 2xl:h-[1499px] w-full mt-32
            `}></div>

    </div>
  )
}

export default Features
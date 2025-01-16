import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { featuresData } from '../../../data';

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

            <div className='flex flex-col justify-center items-center gap-[60px] mb-[120px] px-0 xll:px-0'>
                <div className='flex justify-between items-center flex-col w-full lg:flex-row lg:flex-wrap gap-16 lg:gap-8'>
                    {featuresData.map((feature) => (
                        <div 
                            key={feature.id} 
                            className={`px-[30px] border bg-feature-card border-solid rounded-[20px] bg-clip-border border-transparent 
                                bg-gradient-to-br-feat-card-bdr inline-flex flex-col justify-center gap-[23px] py-[50px] w-full h-[636px]
                                lg:w-[290px] lg:h-[490px]
                                xl:w-[350px] xl:h-[490px]
                                xll:w-[410px]
                                2xl:w-[473px]    
                            `}
                        >
                            <h6 className='font-rubik font-medium text-3xl tracking-[-1px] text-[#cad1e9] text-left '>
                                {feature.title}
                            </h6>
                            <p className='font-roboto font-normal text-base text-[#afb3ca] text-left'>
                                {feature.description}
                            </p>
                            <img src={feature.image} alt={`feature-${feature.id}`} className=' w-full h-auto'/>
                        </div>

                    ))}
                </div>

                <div className='flex flex-wrap justify-between gap-16 xl:gap-8 w-full'>
                    <div className={`px-[30px] border bg-feature-card border-solid rounded-[20px] bg-clip-border border-transparent
                        border-feat-card-bdr flex flex-col lg:flex-row justify-around lg:justify-center lg:items-center gap-[23px] lg:py-[50px] 
                        w-full h-[636px]
                        lg:w-[950px] lg:h-full
                        xl:w-[780px] xl:h-full
                        xll:w-[900px]
                        2xl:w-[1000px]
                    `}>
                        <div className='lg:w-4/6'>
                            <h6 className='font-rubik font-medium text-3xl tracking-[-1px] text-[#cad1e9] text-left mb-[10px] '>Revenue from Subscriptions module</h6>
                            <p className='font-roboto font-normal text-base text-[#afb3ca] text-left'>Unlock a steady revenue stream by offering subscription-based access to your organisation. Our platform's subscription module allows you to create flexible plans that cater to different user needs, offering options like monthly, quarterly, or annual subscriptions.</p>
                        </div>
                        <img src="/images/feature-img4.png" alt="feature-img4" className='lg:w-2/5 h-auto'/>
                    </div>

                    <div className={`max-h-max px-[30px] border bg-feature-card border-solid rounded-[20px] bg-clip-border border-transparent border-feat-card-bdr 
                        flex flex-row w-full justify-between 
                        xl:flex-col xl:justify-center xl:w-[350px]
                        xll:w-[410px] 2xl:w-[470px]
                        gap-[23px] py-[51px] xll:py-[40px] 2xl:py-[28px]
                    `}>
                        <div className=''>
                            <h6 className='font-rubik font-medium text-3xl tracking-[-1px] text-[#cad1e9] text-left '>Join Us Today </h6>
                            <p className='font-roboto font-normal text-[base text-[#afb3ca] max-w-[331px] text-left'>Enjoy these benefits as you become a Mobiholder user today </p>
                        </div>
                        <button className='px-[30px] py-[21px] bg-purple border w-[300px] border-purple rounded-[100px] flex justify-center items-center'><span className='text-white font-grifter font-bold text-[20px] leading-[49px] flex justify-center items-center gap-[10px]'>Get Started <FaArrowRightLong /></span> </button>

                    </div>
                </div>

            </div>

        </div>

        <div className={`bg-[#101223] border rounded-[32px] border-solid bg-clip-border border-transparent border-feature-border backdrop-blur-[13.4px]
             absolute left-0 h-[3325px] lg:h-[1511px] xl:h-[1432px] xll:h-[1488px] 2xl:h-[1493px] w-full mt-32
            `}></div>

    </div>
  )
}

export default Features
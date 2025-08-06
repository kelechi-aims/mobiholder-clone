import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
import { Blog, blogs } from '../../../data';

const News = () => {
  return (
    <div className='flex justify-center py-[70px] bg-[#020d11] z-10 relative'>
        <div className="container mx-auto px-8 xll:px-8 2xl:px-0">
            <div className='flex flex-col lg:flex-row items-center pb-10 lg:pb-0  w-full justify-between xll:pr-[50px]'>
                <div className='w-[60%] md:w-[70%] lg:w-1/2'>
                    <h2 className={`font-grifter font-bold bg-clip-text text-transparent bg-news-text text-[24px] leading-[41px]
                        md:text-[40px] md:leading-[46px]
                        lg:text-[46px] lg:leading-[47px]
                        xl:text-[47.96px] xl:leading-[48.84px] 
                        xls:text-[49.96px] xls:leading-[49.84px] 
                        2xl:text-[70.96px] 2xl:leading-[80.84px] 
                        mb-[10px]
                    `}>Stay In the Loop</h2>
                    <p className={`font-inter font-medium text-white text-[12px] leading-[25px]
                        md:text-[14px] md:leading-[25px]
                        lg:text-[16px] lg:leading-[30px]
                        xl:text-[18px] xl:leading-[49px]
                        mb-[30px]
                    `}>Never miss an update! Subscribe for the latest news, tips, and insights.</p>
                </div>

                <div>
                    <form action="" className='bg-[#f9f7f3] rounded-[17px] py-[5px] px-[5px] flex justify-between'>
                        <input type="email" 
                            placeholder='Your email address'
                            className={`font-inter font-medium text-[#a3a2a2] focus:outline-none focus:ring-2 focus:ring-blue-50 text-[12px] leading-[25px]
                                md:text-[14px] md:leading-[25px]
                                lg:text-[16px] lg:leading-[30px]
                                xl:text-[18px] xl:leading-[49px]
                                pl-[20px] xll:pl-[30px] w-[60%]
                            `}
                        />
                        <button
                            type='submit'
                            className={`bg-[#205dcb] py-[6px] xll:py-[10px] px-[23px] xll:px-[42px] text-white font-inter font-medium rounded-[17px] border text-[12px] leading-[25px]
                                md:text-[14px] md:leading-[25px]
                                lg:text-[16px] lg:leading-[30px]
                                xl:text-[18px] xl:leading-[49px] 
                            `}
                        >Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-h-[506px] overflow-y-auto scrollbar-thin scrollbar-track-[#031616] scrollbar-thumb-[#111b1f] scrollbar-thumb-rounded-[28px] scrollbar-track-rounded-[28px] gap-[60px] xl:gap-[85px] mt-[29px] mb-[69px]'>
                {blogs.map((blog: Blog, index) => (
                    <div key={index} className='flex flex-col px-10 xl:px-0 items-center md:flex-col xl:flex-row gap-[60px] relative'>
                        <img src={blog.img} alt={blog.alt} className='w-full mt-10 xl:mt-0 xl:max-w-[600px] xl:max-h-[300px]  h-auto rounded-[11px] xl:sticky bottom-[5%] ' />

                        <div className='xl:pr-[69px] xl:w-1/2'> 
                            <div  className='flex flex-wrap gap-5'>
                            {blog.tags.map((tag, index) => (
                                <button key={index} className='border-[0.6px] rounded-[100px] bg-news-bdr bg-clip-border border-transparent '>
                                    <div className='font-inter font-medium text-[12px] leading-[30px] lg:text-base 2xl:text-[18px] 2xl:leading-[49px] text-white bg-[#031616] py-[6px] px-[43px] rounded-[100px] '>
                                        {tag}
                                    </div>
                                </button>                
                            ))}
                            </div>
                            

                            <div>
                                <h2 className='font-inter font-medium text-[20px] md:text-[25px] leading-[35px] lg:text-3xl 2xl:text-[45px] 2xl:leading-[71px] text-white mt-9 lg:mt-[15px]'>{blog.title}</h2>
                                <p className='font-inter font-medium text-[12px] md:text-[16px] leading-[30px] 2xl:text-[22px] 2xl:leading-[49px] text-white mt-[14px]'>{blog.desc}</p>

                                <Link to='/' className='underline'><span className='font-inter text-left font-normal text-[16px] leading-[30px] lg:text-[22px] lg:leading-[49px] text-white flex items-center gap-[10px]'>See full case study <GoArrowUpRight /></span></Link>
                            </div>

                        </div>
                    </div>

                    
                ))}               
            </div>
            
            <hr className='mr-[20px] border-[#1e3737] '/>

           <div className='pt-[50px]'>
             <h2 className={`font-grifter font-bold  bg-clip-text text-transparent bg-news-text text-[24px] leading-[41px]
                md:text-[40px] md:leading-[46px]
                lg:text-[46px] lg:leading-[47px]
                xl:text-[47.96px] xl:leading-[48.84px] 
                xls:text-[49.96px] xls:leading-[49.84px] 
                2xl:text-[70.96px] 2xl:leading-[80.84px] 
            `}>Trusted by Top Brands</h2>  
             <p className={`font-inter font-medium text-white text-[12px] leading-[25px]
                md:text-[14px] md:leading-[25px]
                lg:text-[16px] lg:leading-[30px]
                xl:text-[18px] xl:leading-[49px]
            `}>We take pride in being the go-to solution for some of the world’s top brands.</p>
             
             <div className='flex justify-between mt-[30px] items-center relative'>
                <img src="/images/news-logo1.png" alt="news-logo1" className='relative max-h-[25px] max-w-[70px] md:max-w-[100px] xl:max-h-[40px] xl:max-w-[220px] w-1/3 h-auto'/>
                <div className='top-0 left-0 h-full w-[80px] md:w-[101px] xl:w-[220px] bg-news-logo absolute'></div>
                
                <img src="/images/news-logo2.png" alt="news-logo2" className='max-h-[20px] max-w-[40px] md:max-h-[25px] md:max-w-[60px] xl:max-h-[40px] xl:max-w-[100px] w-1/3 h-auto'/>
                <img src="/images/news-logo3.png" alt="news-logo3" className='max-h-[20px] max-w-[80px] md:max-h-[25px] md:max-w-[128px] xl:max-h-[40px] xl:max-w-[176px] w-1/3 h-auto'/>
                <img src="/images/news-logo4.png" alt="news-logo4" className='max-h-[20px] max-w-[65px] md:max-h-[25px] md:max-w-[85px] xl:max-h-[40px] xl:max-w-[169px] w-1/3 h-auto'/>
                <img src="/images/news-logo5.png" alt="news-logo5" className='max-h-[25px] max-w-[70px] md:max-w-[101px] xl:max-h-[40px] xl:max-w-[202px] w-1/3 h-auto'/>
                <div className='py-[30px] bg-news-logo2 h-full w-[101px] xl:w-[220px] absolute top-0 right-0 '></div>
             </div> 
           </div> 
        </div>
    </div>
  )
}

export default News
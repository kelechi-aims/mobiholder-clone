import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from '../../navbar/Navbar';

const Header = () => {
  return (
    <div className='bg-[url("/images/home-hero.gif")] bg-cover flex flex-col justify-center'>
      <Navbar />
      <div className='container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0'>
        <div className='flex gap-[72px] xl:gap-[78.76px] items-center   mt-[80px] mb-[15px] xl:mt-[164.29px] xl:mb-[37.65px] md:mb-[25px]'>
          <div className='flex gap-0 items-center relative'>
            <img src="/images/kacey.jpg" alt="trustedby" className='w-[30px] h-[30px] xl:w-[41.22px] xl:h-[41.22px] border-[2.17px] border-solid border-[#01090D] rounded-full '/>
            <img src="/images/kacey.jpg" alt="trustedby" className='w-[30px] h-[30px] xl:w-[41.22px] xl:h-[41.22px] border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-[23.14px]'/>
            <img src="/images/kacey.jpg" alt="trustedby" className='w-[30px] h-[30px] xl:w-[41.22px] xl:h-[41.22px] border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-[46.28px]'/>
            <img src="/images/kacey.jpg" alt="trustedby" className='w-[30px] h-[30px] xl:w-[41.22px] xl:h-[41.22px] border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-[69.42px]'/>
          </div>
          <p className='text-white font-inter text-[10px] font-medium xl:text-[17.51px] text-center'>Already trusted by 1.2k</p>
        </div>
        <h1 className={`
          font-bold text-[30.96px] text-white font-grifter text-left  mb-[12px] leading-[40.84px]
          md:text-[60.96px] md:leading-[55.84px] md:mb-[16.84px]
          lg:text-[100.96px] lg:leading-[114.84px] lg:mb-[20.84px]
        `}>Digitalising your<br/>physical wallet</h1>
        <p className={`
          font-medium text-[14px] text-white font-inter text-left leading-[25px] mb-[20px]
          md:text-[18px] md:leading-[32px] md:mb-[28px]
          xl:text-[28px] xl:leading-[49px] xl:mb-[38px]`}>App an for you to manage your IDs, Events,<br />subscriptions and much more</p>
        <Link>
          <button className={`rounded-full bg-purple items-center py-[12px] px-[20px] mb-[110px]
            xl:py-[21px] xl:px-[30px] xl:mb-[224px]`}>
            <span className={`text-[10px] gap-[5px] font-grifter font-bold flex items-center text-white
              xl:text-[20px] xl:gap-[10px]`}>Download the App <FaArrowRightLong /></span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header;
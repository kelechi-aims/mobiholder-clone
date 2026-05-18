import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeHero = () => {
  return (
    <div>
      <div className='bg-[url("/images/home-hero.gif")] bg-cover bg-center flex pb-16'>
        <div className="container mx-auto px-8 lg:px-8 xll:px-8 2xl:px-0">
          <div className="flex gap-13.75 md:gap-17.5 xl:gap-17.25 w-[85%] items-center pb-1.25 pt-55 md:pt-37.5 xl:pt-37.5 2xl:mt-[22.29px] xl:pb-[22.65px] md:pb-5">
            <div className="flex gap-0 items-center relative">
              <Image
                src="/images/kacey.jpg"
                alt="trustedby"
                width={100}
                height={100}
                className="w-7.5 h-7.5 border-[2.17px] border-solid border-[#01090D] rounded-full "
              />
              <Image
                src="/images/kacey.jpg"
                alt="trustedby"
                width={100}
                height={100}
                className="w-7.5 h-7.5 border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-4.25 md:left-5 xl:left-[20.14px]"
              />
              <Image
                src="/images/kacey.jpg"
                alt="trustedby"
                width={100}
                height={100}
                className="w-7.5 h-7.5 border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-8.75 md:left-10 xl:left-[41.28px]"
              />
              <Image
                src="/images/kacey.jpg"
                alt="trustedby"
                width={100}
                height={100}
                className="w-7.5 h-7.5 border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-12.5 md:left-15 xl:left-[60.42px]"
              />
            </div>
            <p className="text-white font-inter font-medium text-xs md:text-sm text-center">
              Already trusted by 1.2k
            </p>
          </div>
          <h1
            className={`
          font-bold text-[30.96px] text-white font-grifter text-left  pb-1.25 leading-[40.84px]
          md:text-[40.96px] md:leading-[45.84px] md:pb-[16.84px]
          lg:text-[45.96px] lg:leading-[47.84px] lg:pb-[17.84px]
          xl:text-[47.96px] xl:leading-[48.84px] 
          xls:text-[49.96px] xls:leading-[49.84px] 
          2xl:text-[70.96px] 2xl:leading-[80.84px] 
        `}
          >
            Digitalising your
            <br />
            physical wallet
          </h1>
          <p
            className={`
          font-medium text-[10px] text-white font-inter text-left mb-5
          md:text-base 
          2xl:text-[24px] 2xl:leading-10.75`}
          >
            App an for you to manage your IDs, Events,
            <br />
            subscriptions and much more
          </p>
          <Link href="/">
            <button
              className={`rounded-full bg-purple items-center py-3 px-4.5
              xl:py-4 xl:px-6.25`}
            >
              <span
                className={`text-[10px] gap-1.25 font-grifter font-bold flex items-center text-white
              md:text-[16px] md:gap-1.75
              2xl:text-[20px] 2xl:gap-2.5`}
              >
                Download the App <FaArrowRightLong />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

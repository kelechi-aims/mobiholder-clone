import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <div className='bg-[url("/images/home-hero.gif")] bg-cover flex flex-col justify-center'>
        <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0">
          <div className="flex gap-[72px] xl:gap-[78.76px] items-center mt-[158px] mb-[15px] 2xl:mt-[242.29px] xl:mb-[37.65px] md:mb-[25px]">
            <div className="flex gap-0 items-center relative">
              <img
                src="/images/kacey.jpg"
                alt="trustedby"
                className="w-[30px] h-[30px] xl:w-[41.22px] xl:h-[41.22px] border-[2.17px] border-solid border-[#01090D] rounded-full "
              />
              <img
                src="/images/kacey.jpg"
                alt="trustedby"
                className="w-[30px] h-[30px] xl:w-[41.22px] xl:h-[41.22px] border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-[23.14px]"
              />
              <img
                src="/images/kacey.jpg"
                alt="trustedby"
                className="w-[30px] h-[30px] xl:w-[41.22px] xl:h-[41.22px] border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-[46.28px]"
              />
              <img
                src="/images/kacey.jpg"
                alt="trustedby"
                className="w-[30px] h-[30px] xl:w-[41.22px] xl:h-[41.22px] border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-[69.42px]"
              />
            </div>
            <p className="text-white font-inter text-[10px] font-medium xl:text-[17.51px] text-center">
              Already trusted by 1.2k
            </p>
          </div>
          <h1
            className={`
          font-bold text-[30.96px] text-white font-grifter text-left  mb-[12px] leading-[40.84px]
          md:text-[60.96px] md:leading-[55.84px] md:mb-[16.84px]
          lg:text-[65.96px] lg:leading-[60.84px] lg:mb-[17.84px]
          xl:text-[67.96px] xl:leading-[61.84px] xl:mb-[18.84px]
          2xl:text-[100.96px] 2xl:leading-[114.84px] 2xl:mb-[20.84px]
        `}
          >
            Digitalising your
            <br />
            physical wallet
          </h1>
          <p
            className={`
          font-medium text-[14px] text-white font-inter text-left leading-[25px] mb-[20px]
          md:text-[18px] md:leading-[32px] md:mb-[28px]
          xl:text-[22px] xl:leading-[39px] xl:mb-[32px]
          2xl:text-[28px] 2xl:leading-[49px] 2xl:mb-[38px]`}
          >
            App an for you to manage your IDs, Events,
            <br />
            subscriptions and much more
          </p>
          <Link>
            <button
              className={`rounded-full bg-purple items-center py-[12px] px-[20px] mb-[110px]
            xl:py-[21px] xl:px-[30px] 2xl:mb-[224px]`}
            >
              <span
                className={`text-[10px] gap-[5px] font-grifter font-bold flex items-center text-white
              xl:text-[14px] xl:gap-[7px]
                  2xl:text-[20px] 2xl:gap-[10px]`}
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

export default Header;

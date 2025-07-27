import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <div className='bg-[url("/images/home-hero.gif")] bg-cover bg-center flex h-[calc(100vh-500px)] md:h-[calc(100vh-200px)] xl:h-[calc(100vh-100px)]'>
        <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0">
          <div className="flex gap-[142px] md:gap-[100px] xl:gap-[78.76px] items-center pt-[300px] mb-[15px] md:mt-[100px] 2xl:mt-[242.29px] xl:mb-[37.65px] md:mb-[25px]">
            <div className="flex gap-0 items-center relative">
              <img
                src="/images/kacey.jpg"
                alt="trustedby"
                className="w-[80px] h-[80px] md:w-[50px] md:h-[50px] xl:w-[34.22px] xl:h-[34.22px] border-[2.17px] border-solid border-[#01090D] rounded-full "
              />
              <img
                src="/images/kacey.jpg"
                alt="trustedby"
                className="w-[80px] h-[80px] md:w-[50px] md:h-[50px] xl:w-[34.22px] xl:h-[34.22px] border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-[43px] md:left-[30px] xl:left-[23.14px]"
              />
              <img
                src="/images/kacey.jpg"
                alt="trustedby"
                className="w-[80px] h-[80px] md:w-[50px] md:h-[50px] xl:w-[34.22px] xl:h-[34.22px] border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-[85px] md:left-[55px] xl:left-[46.28px]"
              />
              <img
                src="/images/kacey.jpg"
                alt="trustedby"
                className="w-[80px] h-[80px] md:w-[50px] md:h-[50px] xl:w-[34.22px] xl:h-[34.22px] border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-[130px] md:left-[80px]  xl:left-[69.42px]"
              />
            </div>
            <p className="text-white font-inter font-medium text-[16.51px] xl:text-[13.5px] text-center">
              Already trusted by 1.2k
            </p>
          </div>
          <h1
            className={`
          font-bold text-[30.96px] text-white font-grifter text-left  mb-[12px] leading-[40.84px]
          md:text-[60.96px] md:leading-[55.84px] md:mb-[16.84px]
          lg:text-[55.96px] lg:leading-[60.84px] lg:mb-[17.84px]
          xl:text-[57.96px] xl:leading-[61.84px] xl:mb-[18.84px]
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
          md:text-[17.8px] md:leading-[26px] md:mb-[62px]
          xl:text-[18px] xl:leading-[33px] xl:mb-[28px]
          2xl:text-[22px] 2xl:leading-[43px] 2xl:mb-[32px]`}
          >
            App an for you to manage your IDs, Events,
            <br />
            subscriptions and much more
          </p>
          <Link to='/'>
            <button
              className={`rounded-full bg-purple items-center py-[12px] px-[18px] mb-[110px]
            xl:py-[16px] xl:px-[25px] 2xl:mb-[224px]`}
            >
              <span
                className={`text-[13px] gap-[5px] font-grifter font-bold flex items-center text-white
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

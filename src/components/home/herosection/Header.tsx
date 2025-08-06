import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <div className='bg-[url("/images/home-hero.gif")] bg-cover bg-center flex h-[calc(100vh-200px)] md:h-[calc(100vh-300px)] lg:h-[calc(100vh-250px)] xl:h-[calc(100vh-180px)]'>
        <div className="container mx-auto px-8 lg:px-8 xll:px-8 2xl:px-0">
          <div className="flex gap-[55px] md:gap-[70px] xl:gap-[69px] w-[85%] items-center pb-[5px] pt-[220px] md:pt-[150px] xl:pt-[150px] 2xl:mt-[22.29px] xl:pb-[22.65px] md:pb-[20px]">
            <div className="flex gap-0 items-center relative">
              <img
                src="/images/kacey.jpg"
                alt="trustedby"
                className="w-[30px] h-[30px] border-[2.17px] border-solid border-[#01090D] rounded-full "
              />
              <img
                src="/images/kacey.jpg"
                alt="trustedby"
                className="w-[30px] h-[30px] border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-[17px] md:left-[20px] xl:left-[20.14px]"
              />
              <img
                src="/images/kacey.jpg"
                alt="trustedby"
                className="w-[30px] h-[30px] border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-[35px] md:left-[40px] xl:left-[41.28px]"
              />
              <img
                src="/images/kacey.jpg"
                alt="trustedby"
                className="w-[30px] h-[30px] border-[2.17px] border-solid border-[#01090D] rounded-full absolute left-[50px] md:left-[60px] xl:left-[60.42px]"
              />
            </div>
            <p className="text-white font-inter font-medium text-xs md:text-sm text-center">
              Already trusted by 1.2k
            </p>
          </div>
          <h1
            className={`
          font-bold text-[30.96px] text-white font-grifter text-left  pb-[5px] leading-[40.84px]
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
          font-medium text-[10px] text-white font-inter text-left mb-[20px]
          md:text-base 
          2xl:text-[24px] 2xl:leading-[43px]`}
          >
            App an for you to manage your IDs, Events,
            <br />
            subscriptions and much more
          </p>
          <Link to='/'>
            <button
              className={`rounded-full bg-purple items-center py-[12px] px-[18px]
              xl:py-[16px] xl:px-[25px]`}
            >
              <span
                className={`text-[10px] gap-[5px] font-grifter font-bold flex items-center text-white
              md:text-[16px] md:gap-[7px]
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

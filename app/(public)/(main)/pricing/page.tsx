import Pricing from "@/app/_components/_public/Pricing";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className='bg-[url("/images/home-hero.gif")] bg-cover flex flex-col justify-center'>
        <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0">
          <h1
            className={`pt-54.75 font-grifter font-bold text-white pb-26.25
                    text-[30.96px] leading-[40.84px]
                    md:text-[40.96px] md:leading-[45.84px]
                    lg:text-[45.96px] lg:leading-[47.84px]
                    xl:text-[47.96px] xl:leading-[48.84px] 
                    xls:text-[49.96px] xls:leading-[49.84px] 
                    2xl:text-[70.96px] 2xl:leading-[80.84px]
                    `}
          >
            Pricing
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-0 lg:px-8 xll:px-8 2xl:px-0">
          <div className="rounded-[40px] bg-[#0d0e1d] mt-35 mb-60 px-10 md:px-16.5 py-30  md:py-35">
            <div className="flex justify-center items-center text-center">
              <h3
                className={`mb-25 font-grifter font-bold text-transparent bg-clip-text bg-pricing-txt w-full md:w-[55%] 2xl:w-[41%]
                            text-[30px] leading-15
                            lg:text-[52px] lg:leading-18.75
                            xl:text-[64px] xl:leading-18 tracking-[-4px]`}
              >
                Choose a plan that best suits you
              </h3>
            </div>

            <Pricing />
          </div>
        </div>

        <Image
          src="/images/pricing-vector.png"
          alt="vector design"
          width={1500}
          height={1500}
          className="absolute top-[6%] xll:left-[5%] 2xl:left-[25%]"
        />
      </div>
    </div>
  );
};

export default page;

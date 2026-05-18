import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import Fqas from "@/app/_components/Fqas";

function page() {
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
            FAQs
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <Image
          src="/images/about-bg.gif"
          alt=""
          width={602}
          height={566}
          unoptimized
          className="absolute top-[-4%] right-0 translate-x-[75%] xl:translate-x-[70%] -z-10 max-w-150.5 max-h-141.5"
        />
        <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0 my-12.5">
          <div className="mb-25 flex flex-col gap-6 items-center ">
            <h3
              className={`font-grifter font-bold text-[#061F25]
              text-[30px] leading-15
              lg:text-[52px] lg:leading-18.75
              xl:text-[64px] xl:leading-18
              `}
            >
              Frequently Asked Questions
            </h3>
            <p className="font-inter font-medium text-[12px] md:text-sm 2xl:text-[22px] lg:text-base xl:text-xl 2xl:leading-12.25 text-[#282828] w-[60%] 2xl:w-[50%] text-center">
              Here are some of the questions we are asked most often. If you
              need additional help you can also contact support below
            </p>

            <button className="py-4 px6 md:py-5.25 md:px-7.5 bg-purple text-white text-[12px] md:text-base xl:text-xl font-bold font-grifter rounded-[100px] flex items-center gap-2.5">
              Contact Support <MdOutlineArrowRightAlt />
            </button>
          </div>
          {/* accordion */}

          <Fqas />
        </div>
      </div>
    </div>
  );
}

export default page;

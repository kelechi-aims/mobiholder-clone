import { Blog, blogs } from "@/app/_lib/data";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const News = () => {
  return (
    <div className="flex justify-center py-17.5 bg-[#020d11] z-10 relative">
      <div className="container mx-auto px-8 xll:px-8 2xl:px-0">
        <div className="flex flex-col lg:flex-row items-center pb-10 lg:pb-0  w-full justify-between xll:pr-12.5">
          <div className="w-[60%] md:w-[70%] lg:w-1/2">
            <h2
              className={`font-grifter font-bold bg-clip-text text-transparent bg-news-text text-[24px] leading-10.25
                        md:text-[40px] md:leading-11.5
                        lg:text-[46px] lg:leading-11.75
                        xl:text-[47.96px] xl:leading-[48.84px] 
                        xls:text-[49.96px] xls:leading-[49.84px] 
                        2xl:text-[70.96px] 2xl:leading-[80.84px] 
                        mb-2.5
                    `}
            >
              Stay In the Loop
            </h2>
            <p
              className={`font-inter font-medium text-white text-[12px] leading-6.25
                        md:text-[14px] md:leading-6.25
                        lg:text-[16px] lg:leading-7.5
                        xl:text-[18px] xl:leading-12.25
                        mb-7.5
                    `}
            >
              Never miss an update! Subscribe for the latest news, tips, and
              insights.
            </p>
          </div>

          <div>
            <form
              action=""
              className="bg-[#f9f7f3] rounded-[17px] py-1.25 px-1.25 flex justify-between"
            >
              <input
                type="email"
                placeholder="Your email address"
                className={`font-inter font-medium text-[#a3a2a2] focus:outline-none focus:ring-2 focus:ring-blue-50 text-[12px] leading-6.25
                                md:text-[14px] md:leading-6.25
                                lg:text-[16px] lg:leading-7.5
                                xl:text-[18px] xl:leading-12.25
                                pl-5 xll:pl-7.5 w-[60%]
                            `}
              />
              <button
                type="submit"
                className={`bg-[#205dcb] py-1.5 xll:py-2.5 px-5.75 xll:px-10.5 text-white font-inter font-medium rounded-[17px] border text-[12px] leading-6.25
                                md:text-[14px] md:leading-6.25
                                lg:text-[16px] lg:leading-7.5
                                xl:text-[18px] xl:leading-12.25 
                            `}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col max-h-126.5 overflow-y-auto scrollbar-thin scrollbar-track-[#031616] scrollbar-thumb-[#111b1f] scrollbar-thumb-rounded-[28px] scrollbar-track-rounded-[28px] gap-15 xl:gap-21.25 mt-7.25 mb-17.25">
          {blogs.map((blog: Blog, index) => (
            <div
              key={index}
              className="flex flex-col px-10 xl:px-0 items-center md:flex-col xl:flex-row gap-15 relative"
            >
              <Image
                src={blog.img}
                alt={blog.alt}
                width={600}
                height={300}
                className="w-full mt-10 xl:mt-0 xl:max-w-150 h-auto rounded-[11px] xl:sticky bottom-[5%]"
              />

              <div className="xl:pr-17.25 xl:w-1/2">
                <div className="flex flex-wrap gap-5">
                  {blog.tags.map((tag, index) => (
                    <button
                      key={index}
                      className="border-[0.6px] rounded-[100px] bg-news-bdr bg-clip-border border-transparent "
                    >
                      <div className="font-inter font-medium text-[12px] leading-7.5 lg:text-base 2xl:text-[18px] 2xl:leading-12.25 text-white bg-[#031616] py-1.5 px-10.75 rounded-[100px] ">
                        {tag}
                      </div>
                    </button>
                  ))}
                </div>

                <div>
                  <h2 className="font-inter font-medium text-[20px] md:text-[25px] leading-8.75 lg:text-3xl 2xl:text-[45px] 2xl:leading-17.75 text-white mt-9 lg:mt-3.75">
                    {blog.title}
                  </h2>
                  <p className="font-inter font-medium text-[12px] md:text-[16px] leading-7.5 2xl:text-[22px] 2xl:leading-12.25 text-white mt-3.5">
                    {blog.desc}
                  </p>

                  <Link href="/" className="underline">
                    <span className="font-inter text-left font-normal text-[16px] leading-7.5 lg:text-[22px] lg:leading-12.25 text-white flex items-center gap-2.5">
                      See full case study <GoArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="mr-5 border-[#1e3737] " />

        <div className="pt-12.5">
          <h2
            className={`font-grifter font-bold  bg-clip-text text-transparent bg-news-text text-[24px] leading-10.25
                md:text-[40px] md:leading-11.5
                lg:text-[46px] lg:leading-11.74
                xl:text-[47.96px] xl:leading-[48.84px] 
                xls:text-[49.96px] xls:leading-[49.84px] 
                2xl:text-[70.96px] 2xl:leading-[80.84px] 
            `}
          >
            Trusted by Top Brands
          </h2>
          <p
            className={`font-inter font-medium text-white text-[12px] leading-6.25
                md:text-[14px] md:leading-6.25
                lg:text-[16px] lg:leading-7.5
                xl:text-[18px] xl:leading-12.25
            `}
          >
            We take pride in being the go-to solution for some of the
            world&apos;s top brands.
          </p>

          <div className="flex justify-between mt-7.5 items-center relative">
            {/* LEFT FADE */}
            <div className="top-0 left-0 h-full w-20 md:w-25.25 xl:w-55 bg-news-logo absolute z-10"></div>

            <div className="w-1/3 flex justify-center">
              <Image
                src="/images/news-logo1.png"
                alt="news-logo1"
                width={220}
                height={40}
                className="max-h-6.25 max-w-17.5 md:max-w-25 xl:max-h-10 xl:max-w-55 h-auto w-auto object-contain"
              />
            </div>

            <div className="w-1/3 flex justify-center">
              <Image
                src="/images/news-logo2.png"
                alt="news-logo2"
                width={100}
                height={40}
                className="max-h-5 max-w-10 md:max-h-6.25 md:max-w-15 xl:max-h-10 xl:max-w-25 h-auto w-auto object-contain"
              />
            </div>

            <div className="w-1/3 flex justify-center">
              <Image
                src="/images/news-logo3.png"
                alt="news-logo3"
                width={176}
                height={40}
                className="max-h-5 max-w-20 md:max-h-6.25 md:max-w-32 xl:max-h-10 xl:max-w-44 h-auto w-auto object-contain"
              />
            </div>

            <div className="w-1/3 flex justify-center">
              <Image
                src="/images/news-logo4.png"
                alt="news-logo4"
                width={169}
                height={40}
                className="max-h-5 max-w-16.25 md:max-h-6.25 md:max-w-21.25 xl:max-h-10 xl:max-w-42.25 h-auto w-auto object-contain"
              />
            </div>

            <div className="w-1/3 flex justify-center">
              <Image
                src="/images/news-logo5.png"
                alt="news-logo5"
                width={202}
                height={40}
                className="max-h-6.25 max-w-17.5 md:max-w-25.25 xl:max-h-10 xl:max-w-50.5 h-auto w-auto object-contain"
              />
            </div>

            {/* RIGHT FADE */}
            <div className="py-7.5 bg-news-logo2 h-full w-25.25 xl:w-55 absolute top-0 right-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

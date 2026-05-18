import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='bg-[url("/images/footer-bg.gif")] bg-cover flex justify-center py-20'>
      <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0 ">
        <div className="md:px-10 lg:px-52 xl:p-0 flex flex-col xl:flex-row xl:flex-wrap gap-14 xl:gap-5 xl:justify-between w-full">
          <div className="w-full xl:w-125">
            <Image
              src="/images/logo.png"
              alt="logo"
              className="mb-5"
              width={100}
              height={100}
            />
            <p className="font-inter font-medium text-[10px] md:text-[12px] xl:text-base xll:text-[18px] xll:leading-12.25 text-white">
              More than just being a digital version of your wallet, MobiHolder
              is poised to bridge the identification gap in Africa
            </p>

            <p className="font-inter font-medium text-[10px] md:text-[12px] xl:text-base xll:text-[18px] xll:leading-12.25 text-white my-2.5">
              Download the App
            </p>

            <div className="flex gap-5 justify-between items-center">
              <button className=" ">
                <div className="flex gap-1.5 xll:gap-2.5 py-3.5 md:py-5.25 px-5 md:px-7.5 rounded-[9px] bg-[#061f25]">
                  <Image
                    src="/images/playstore.png"
                    alt="playstore"
                    width={100}
                    height={100}
                    className="w-5 h-5.75 lg:w-7 lg:h-7.75"
                  />
                  <p className="font-mulish font-medium text-[9px] md:text-[12px] leading-4 xll:text-[14px] xll:leading-[18.2px] text-white">
                    Download on <br />
                    <span className="font-unbounded font-black text-[12px] md:text-[20px] leading-5 xll:text-[24px] xll:leading-[23.4px] ">
                      PlayStore
                    </span>
                  </p>
                </div>
              </button>

              <button className=" ">
                <div className="flex gap-1.5 xll:gap-2.5 py-3.5 md:py-5.25 px-5 md:px-7.5 rounded-[9px] bg-[#061f25]">
                  <Image
                    src="/images/apple.png"
                    alt="playstore"
                    width={100}
                    height={100}
                    className="w-5 h-5.75 lg:w-7 lg:h-8.5"
                  />
                  <p className="font-mulish font-medium text-[9px] md:text-[12px] leading-4 xll:text-[14px] xll:leading-[18.2px] text-white">
                    Download on <br />
                    <span className="font-unbounded font-black text-[12px] md:text-[20px] leading-5 xll:text-[24px] xll:leading-[23.4px] ">
                      AppStore
                    </span>
                  </p>
                </div>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
            <div className="flex justify-between xl:justify-around xl:w-82.75 xll:w-104.5 2xl:w-124.5">
              <div>
                <h5 className="font-inter font-medium text-base md:text-[20px] leading-10 xll:text-[22px] xll:leading-12.25 text-white">
                  COMPANY
                </h5>
                <ul>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    <Link href="/">HOME</Link>
                  </li>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    FEATURES
                  </li>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    <Link href="/pricing">PRICING</Link>
                  </li>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    <Link href="/fqas">FAQS</Link>
                  </li>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    <Link href="/contactus">CONTACT</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-inter font-medium text-base md:text-[20px] leading-10 xll:text-[22px] xll:leading-12.25 text-white">
                  SUPPORT
                </h5>
                <ul>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    <Link href="/legal?tab=terms">TERMS & CONDITIONS</Link>
                  </li>

                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    <Link href="/legal?tab=privacy">PRIVACY POLICY</Link>
                  </li>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    HELP CENTER
                  </li>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    <Link href="/legal">LEGAL</Link>
                  </li>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    DOWNLOAD
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-between xl:justify-around xl:w-82.75 xll:w-104.5 2xl:w-124.5">
              <div>
                <h5 className="font-inter font-medium text-base md:text-[20px] leading-10 xll:text-[22px] xll:leading-12.25 text-white">
                  SOCIALS
                </h5>
                <ul>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    TWITTER
                  </li>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    INSTAGRAM
                  </li>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    FACEBOOK
                  </li>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    LINKEDIN
                  </li>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    TIKTOK
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-inter font-medium text-base md:text-[20px] leading-10 xll:text-[22px] xll:leading-12.25 text-white">
                  CONTACT US
                </h5>
                <ul>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    +234 812 345 6789
                  </li>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    help@mobiholder.com
                  </li>
                  <li className="font-inter font-medium text-[11px] md:text-[14px] leading-10 xll:text-[16px] xll:leading-12.25 text-white">
                    support@mobiholder.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-center items-center">
          <span className="font-mulish text-[14px] md:text-lg lg:text-xl 2xl:text-2xl tracking-[-0.04rem] text-center text-[#9a9999] mr-3">
            © 2024, Mobiholder. All rights reserved
          </span>
          <span className="font-inter text-[11px] lg:text-sm 2xl:text-base text-right text-[#ffffff] leading-12.25 pt-1">
            Manage Policy | Cookie Policy | Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

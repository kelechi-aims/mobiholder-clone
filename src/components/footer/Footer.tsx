import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-[url("/images/footer-bg.gif")] bg-cover flex justify-center py-[80px]'>
      <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0 ">
        <div className="md:px-[40px] lg:px-52 xl:p-0 flex flex-col xl:flex-row xl:flex-wrap gap-14 xl:gap-[20px] xl:justify-between w-full">
          <div className="w-full xl:w-[500px]">
            <img src="/images/logo.png" alt="logo" className="mb-[20px]" />
            <p className="font-inter font-medium text-[10px] md:text-[12px] xl:text-base xll:text-[18px] xll:leading-[49px] text-white">
              More than just being a digital version of your wallet, MobiHolder
              is poised to bridge the identification gap in Africa
            </p>

            <p className="font-inter font-medium text-[10px] md:text-[12px] xl:text-base xll:text-[18px] xll:leading-[49px] text-white my-[10px]">
              Download the App
            </p>

            <div className="flex gap-[20px] justify-between items-center">
              <button className=" ">
                <div className="flex gap-[6px] xll:gap-[10px] py-[14px] md:py-[21px] px-[20px] md:px-[30px] rounded-[9px] bg-[#061f25]">
                  <img
                    src="/images/playstore.png"
                    alt="playstore"
                    className="w-[20px] h-[23px] lg:w-[28px] lg:h-[31px]"
                  />
                  <p className="font-mulish font-medium text-[9px] md:text-[12px] leading-[16px] xll:text-[14px] xll:leading-[18.2px] text-white">
                    Download on <br />
                    <span className="font-unbounded font-black text-[12px] md:text-[20px] leading-[20px] xll:text-[24px] xll:leading-[23.4px] ">
                      PlayStore
                    </span>
                  </p>
                </div>
              </button>

              <button className=" ">
                <div className="flex gap-[6px] xll:gap-[10px] py-[14px] md:py-[21px] px-[20px] md:px-[30px] rounded-[9px] bg-[#061f25]">
                  <img
                    src="/images/apple.png"
                    alt="playstore"
                    className="w-[20px] h-[23px] lg:w-[28px] lg:h-[34px]"
                  />
                  <p className="font-mulish font-medium text-[9px] md:text-[12px] leading-[16px] xll:text-[14px] xll:leading-[18.2px] text-white">
                    Download on <br />
                    <span className="font-unbounded font-black text-[12px] md:text-[20px] leading-[20px] xll:text-[24px] xll:leading-[23.4px] ">
                      AppStore
                    </span>
                  </p>
                </div>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 ">
            <div className="flex justify-between xl:justify-around xl:w-[331px] xll:w-[418px] 2xl:w-[498px]">
            <div>
              <h5 className="font-inter font-medium text-base md:text-[20px] leading-[40px] xll:text-[22px] xll:leading-[49px] text-white">
                COMPANY
              </h5>
              <ul>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  <Link to="/">HOME</Link>
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  FEATURES
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  <Link to="/pricing">PRICING</Link>
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  <Link to="/fqas">FAQS</Link>
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  <Link to="/contactus">CONTACT</Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-inter font-medium text-base md:text-[20px] leading-[40px] xll:text-[22px] xll:leading-[49px] text-white">
                SUPPORT
              </h5>
              <ul>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  TERMS & CONDITIONS
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  PRIVACY POLICY
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  HELP CENTER
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  <Link to="/legal">LEGAL</Link>
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  DOWNLOAD
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between xl:justify-around xl:w-[331px] xll:w-[418px] 2xl:w-[498px]">
            <div>
              <h5 className="font-inter font-medium text-base md:text-[20px] leading-[40px] xll:text-[22px] xll:leading-[49px] text-white">
                SOCIALS
              </h5>
              <ul>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  TWITTER
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  INSTAGRAM
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  FACEBOOK
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  LINKEDIN
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  TIKTOK
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-inter font-medium text-base md:text-[20px] leading-[40px] xll:text-[22px] xll:leading-[49px] text-white">
                CONTACT US
              </h5>
              <ul>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  +234 812 345 6789
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
                  help@mobiholder.com
                </li>
                <li className="font-inter font-medium text-[11px] md:text-[14px] leading-[40px] xll:text-[16px] xll:leading-[49px] text-white">
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
          <span className="font-inter text-[11px] lg:text-sm 2xl:text-base text-right text-[#ffffff] leading-[49px] pt-1">
            Manage Policy | Cookie Policy | Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

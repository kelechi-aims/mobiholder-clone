import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[url("/images/footer-bg.gif")] bg-cover flex justify-center py-[80px]'>
      <div className="container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0 flex flex-wrap gap-[20px] justify-between w-full">
        
      <div className='max-w-[500px]'>
        <img src="/images/logo.png" alt="logo" className='mb-[20px]'/>
        <p className='font-inter font-medium text-[18px] leading-[49px] text-white'>More than just being a digital version of your wallet, MobiHolder is poised to bridge the identification gap in Africa</p>

        <p className='font-inter font-medium text-[18px] leading-[49px] text-white my-[10px]'>Download the App</p>

        <div className='flex gap-[20px] justify-between items-center'>
          <button className=' '>
            <div className='flex gap-[10px] py-[21px] px-[30px] rounded-[9px] bg-[#061f25]'>
              <img src="/images/playstore.png" alt="playstore" className=' w-[28px] h-[31px]'/>
               <p className='font-mulish font-medium text-[14px] leading-[18.2px] text-white'>Download on <br/><span className='font-unbounded font-black text-[24px] leading-[23.4px] '>PlayStore</span></p>
            </div>
          </button>

          <button className=' '>
            <div className='flex gap-[15px] py-[21px] px-[30px] rounded-[9px] bg-[#061f25]'>
              <img src="/images/apple.png" alt="playstore" className=' w-[28px] h-[34px]'/>
              <p className='font-mulish font-medium text-[14px] leading-[18.2px] text-white'>Download on <br/><span className='font-unbounded font-black text-[24px] leading-[23.4px] '>AppStore</span></p>
            </div>
          </button>
        </div>

      </div>

      <div>
          <h5 className='font-inter font-medium text-[22px] leading-[49px] text-white'>COMPANY</h5>
          <ul>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>HOME</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>FEATURES</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>PRICING</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>FAQS</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>CONTACT</li>
          </ul>
        </div>

      <div>
          <h5 className='font-inter font-medium text-[22px] leading-[49px] text-white'>SUPPORT</h5>
          <ul>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>TERMS & CONDITIONS</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>PRIVACY POLICY</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>HELP CENTER</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>LEGAL</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>DOWNLOAD</li>
          </ul>
        </div>

      <div>
          <h5 className='font-inter font-medium text-[22px] leading-[49px] text-white'>SOCIALS</h5>
          <ul>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>TWITTER</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>INSTAGRAM</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>FACEBOOK</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>LINKEDIN</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>TIKTOK</li>
          </ul>
        </div>

        <div>
          <h5 className='font-inter font-medium text-[22px] leading-[49px] text-white'>CONTACT US</h5>
          <ul>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>+234 812 345 6789</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>help@mobiholder.com</li>
            <li className='font-inter font-medium text-[18px] leading-[49px] text-white'>support@mobiholder.com</li>
          </ul>
        </div>

        

      </div>
    </div>
  )
}

export default Footer
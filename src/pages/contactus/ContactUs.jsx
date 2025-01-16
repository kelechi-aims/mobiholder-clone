import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const ContactUs = () => {
  return (
    <div className='relative'>
      <div className='bg-[url("/images/home-hero.gif")] bg-cover flex flex-col justify-center'>
      <Navbar className='top-0 sticky'/>
        <div className='container mx-auto px-8 md:px-0 lg:px-8 xll:px-8 2xl:px-0'>
          <h1 className={`pt-[219px] font-grifter font-bold text-white pb-[105px]
            text-[70px] leading-[114.8px]`}
          >FAQs</h1>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
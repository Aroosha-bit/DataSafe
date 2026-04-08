import Image from 'next/image'
import React from 'react'
import vector8 from "../../../public/images/vector8.svg"
import vector6 from "../../../public/images/vector6.svg"
import vector9 from "../../../public/images/vector9.svg"
import logo from "../../../public/images/logo.svg"
import vector12 from "../../../public/images/vector12.svg"
import vector13 from "../../../public/images/vector13.svg"
const FooterPage = () => {
  return (
    <div className='flex flex-col'>
      <div className='relative overflow-hidden bg-[#05164D]'>
        <div className="hidden lg:block absolute -bottom-20 left-0">
          <Image src={vector8} alt="" />
        </div>
         <div className="lg:hidden block absolute bottom-0 left-0">
          <Image src={vector13} alt="" />
        </div>
        <div className="absolute bottom-20 right-20 lg:right-50">
          <Image src={vector6} alt="" />
        </div>

        <div className="lg:block hidden absolute top-0 right-0">
          <Image src={vector9} alt="" />
        </div>
         <div className="lg:hidden block absolute top-0 right-0">
          <Image src={vector12} alt="" />
        </div>

        <div className='container mx-auto lg:px-50 p-10 lg:p-30 relative z-10 flex lg:flex-row flex-col  lg:space-between  gap-10 lg:gap-40'>
          <div className='items-center '>
            <Image src={logo} alt='' />
          </div>
          <div className='flex flex-col gap-[30px]'>
            <h3 className='text-[#FFFFFF] font-[700] text-[20px]'>Pages</h3>
            <a href='/faqs' className='text-[#FFFFFF] font-[400] text-[16px]'>FAQs</a>
            <a href='/contact' className='text-[#FFFFFF] font-[400] text-[16px]'>Contact Us</a>
            <a href='/prices' className='text-[#FFFFFF] font-[400] text-[16px]'>Prices</a>
          </div>
          <div className='flex flex-col gap-[30px]'>
            <h3 className='text-[#FFFFFF] font-[700] text-[20px]'>Resources</h3>
            <a href='/terms' className='text-[#FFFFFF] no-underline font-[400] text-[16px]'>Terms and Conditions</a>
            <a href='/cookies' className='text-[#FFFFFF] font-[400] text-[16px]'>Cookie policy</a>
            <a href='/privacy' className='text-[#FFFFFF] font-[400] text-[16px]'>Privacy policy</a>
            <a href='/disclaimer' className='text-[#FFFFFF] font-[400] text-[16px]'>Disclaimer</a>
          </div>
        </div>

      </div>
      <div className='bg-[#011247] flex justify-center items-center p-[20px] lg:p-[10px]'>
        <h3 className='text-[#FFFFFF] font-[400] text-[16px] lg:text-start text-center'>
          © Copyrights 2022 DataSafe All rights reserved.
        </h3>

      </div>


    </div>
  )
}

export default FooterPage
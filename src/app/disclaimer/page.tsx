import FooterPage from '@/components/common/footer'
import Image from 'next/image'
import React from 'react'
import vector10 from "../../../public/images/vector10.svg"
import vector1 from "../../../public/images/vector1.svg"
import vector2 from "../../../public/images/vector2.svg"
import vector3 from "../../../public/images/vector3.svg"
import vector14 from "../../../public/images/vector14.svg"
import logo from "../../../public/images/logo.svg"
import { DisclaimerData } from '@/data/disclaimerData'
const CookiesPage = () => {
  return (
    <div className='bg-white'>
      <section className="relative overflow-hidden gradient p-10 lg:p-22">
        <div className="hidden lg:block absolute left-0 -top-16 z-0">
          <Image src={vector1} alt="" />
        </div>
        <div className="lg:hidden block absolute left-0 top-0 z-0">
          <Image src={vector10} alt="" />
        </div>
        <div className="absolute right-10 top-10 z-0">
          <Image src={vector2} className="" alt="" />
        </div>

        <div className="absolute left-10 bottom-5 z-0">
          <Image src={vector3} className="" alt="" />
        </div>

        <div className=" absolute -right-35 lg:right-0 -bottom-20 lg:bottom-0 z-0">
          <Image src={vector14} className="" alt="" />
        </div>

        <div className="flex flex-col justify-center items-center gap-10 relative z-10">
          <a href="/">
            <Image src={logo} className="" alt="Logo" />
          </a>
          <div className='text-[#FFFFFF] font-[700] text-[32px] lg:text-[48px] lg:text-start text-center' >Disclaimer</div>


        </div>
      </section>

      <section className='container mx-auto px-6 lg:px-20 mt-10 lg:mt-20 mb-10 flex flex-col '>

        <div className='flex flex-col gap-10' >
          {DisclaimerData.map((item, index) => (
            <div className='flex flex-col gap-4' key={index}>
              <h3 className='font-[700] text-[16px] lg:text-[24px] text-[#333333]'>
                {item.title}
              </h3>

              {item.descrList?.map((data, index) => (
                <div className='flex flex-col gap-2' key={index}>
                  <h3 className='font-[400] text-[16px] lg:text-[24px] text-[#333333]'>
                    {data}
                  </h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <FooterPage />
    </div>
  )
}

export default CookiesPage
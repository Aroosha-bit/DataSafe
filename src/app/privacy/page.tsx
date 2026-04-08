import FooterPage from '@/components/common/footer'
import Image from 'next/image'
import React from 'react'
import vector10 from "../../../public/images/vector10.svg"
import vector1 from "../../../public/images/vector1.svg"
import vector2 from "../../../public/images/vector2.svg"
import vector3 from "../../../public/images/vector3.svg"
import vector14 from "../../../public/images/vector14.svg"
import logo from "../../../public/images/logo.svg"
import { CookiesData } from '@/data/cookiesData'
import { PrivacyData, privacypolicy } from '@/data/privacyData'
const PrivacyPage = () => {
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
          <div className='text-[#FFFFFF] font-[700] text-[32px] lg:text-[48px] lg:text-start text-center' >Privacy policy</div>


        </div>
      </section>

      <section className='container mx-auto px-6 lg:px-20 mt-10 lg:mt-20 mb-10 flex flex-col '>
        <div className='font-[400] text-[16px] lg:text-[24px] text-[#333333] mb-5'>
          Confidentiality and security are core values of Data-Safe and, consequently, we are committed to ensuring the privacy of the user at all times and not to collect unnecessary information. Below, we provide you with all the necessary information about our Privacy Policy in relation to the personal data we collect, explaining:
        </div>
        <div className='flex flex-col gap-5' >
          {privacypolicy.map((item, index) => (
            <div className='flex items-center gap-4' key={index}>
              <div className='w-[8px] h-[8px] bg-[#FFAD00] rounded-full'></div>

              <div className='font-[400] text-[16px] lg:text-[24px] text-[#333333]'>
                {item.descr}
              </div>


            </div>
          ))}
        </div>

        <div className='flex flex-col gap-5 mt-5' >
          {PrivacyData.map((item, index) => (
            <div className='flex flex-col gap-4' key={index}>

              <div className='font-[700] text-[16px] lg:text-[24px] text-[#333333]'>
                {item.title}
              </div>
              <div>
                {item.descrList.map((item, index) => (
                  <div className='flex gap-[10px] '>
                    <div className='font-[400] text-[16px] lg:text-[24px] text-[#333333]'>
                      {item.label}
                    </div>
                    <div>
                      {item.data.map((item, index) => (
                        <div className='font-[400] text-[16px] lg:text-[24px] text-[#333333]'>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>


            </div>
          ))}
        </div>
      </section>

      <FooterPage />
    </div>
  )
}

export default PrivacyPage
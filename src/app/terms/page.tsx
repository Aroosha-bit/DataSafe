import Image from 'next/image'
import React from 'react'
import vector10 from "../../../public/images/vector10.svg"
import vector1 from "../../../public/images/vector1.svg"
import vector2 from "../../../public/images/vector2.svg"
import vector3 from "../../../public/images/vector3.svg"
import vector14 from "../../../public/images/vector14.svg"
import logo from "../../../public/images/logo.svg"
import { TermsData } from '@/data/termsData'
import FooterPage from '@/components/common/footer'

const TermsPage = () => {
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
          <div className='text-[#FFFFFF] font-[700] text-[32px] lg:text-[48px] lg:text-start text-center' >Terms and conditions of use</div>


        </div>
      </section>

      <section className='container mx-auto px-6 lg:px-20 mt-10 lg:mt-20 mb-10 flex flex-col items-center'>
        <div className='font-[400] text-[16px] lg:text-[24px] text-[#333333] mb-5'>
          This document (hereinafter, the "Agreement") constitutes a legally binding agreement between you and Traffix Marketing online SCP governing your use of the REMOTE BACKUP SERVICE, called Traffix Marketing online SCP BACKUP ONLINE, on the basis of the following:
        </div>
        <div className='flex flex-col gap-10' >
          {TermsData.map((item, index) => (

            <div className='flex flex-col gap-4' key={index}>
              <h3 className='font-[700] text-[16px] lg:text-[24px] text-[#333333]'>
                {item.title}
              </h3>

              <div className='font-[400] text-[16px] lg:text-[24px] text-[#333333]'>
                {item.descr1}
              </div>


              {item.descr?.map((data, subIndex) => (
                <div key={subIndex} className='flex flex-col gap-[5px]'>

                  <div className='flex gap-[5px] font-[400] text-[16px] lg:text-[24px] text-[#333333]'>
                    <h3>{data.label}</h3>
                    <p>{data.item}</p>
                  </div>

                  {data.itemlist?.map((subItem, innerIndex) => (
                    <div
                      key={innerIndex}
                      className='flex gap-[5px] ml-6 font-[400] text-[16px] lg:text-[24px] text-[#333333]'
                    >
                      <h3>{subItem.label1}</h3>
                      <p>{subItem.data}</p>
                    </div>
                  ))}

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

export default TermsPage
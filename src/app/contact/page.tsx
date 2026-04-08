"use client"
import React, { useEffect, useState } from 'react'
import FooterPage from '@/components/common/footer'
import Image from 'next/image'
import vector10 from "../../../public/images/vector10.svg"
import vector1 from "../../../public/images/vector1.svg"
import vector2 from "../../../public/images/vector2.svg"
import vector3 from "../../../public/images/vector3.svg"
import vector14 from "../../../public/images/vector14.svg"
import logo from "../../../public/images/logo.svg"
import map from "../../../public/images/map.svg"
import { ArrowUpRight } from 'lucide-react'

const ContactPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 0);
  }, []);
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
          <div className='text-[#FFFFFF] font-[700] text-[32px] lg:text-[48px] lg:text-start text-center' >Contact</div>


        </div>
      </section>
      <section className='container mx-auto  flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-16 items-center  '>
        {
          loading ? (
            <div className="flex flex-col gap-[20px] px-6 lg:px-20 pt-5 lg:py-20 animate-pulse">

              <div className="h-8 w-2/3 bg-gray-300 rounded"></div>

              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex flex-col gap-[5px]">
                  <div className="h-5 w-40 bg-gray-300 rounded"></div>
                  <div className="h-10 w-full bg-gray-200 rounded"></div>
                </div>
              ))}

              <div className="flex items-center gap-3">
                <div className="h-4 w-4 bg-gray-300 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="h-3 w-full bg-gray-200 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                <div className="h-3 w-4/6 bg-gray-200 rounded"></div>
              </div>

              <div className="h-10 w-40 bg-gray-400 rounded"></div>
            </div>

          ) : (
            <div className='flex flex-col gap-[20px] px-6 lg:px-20 pt-5  lg:py-20'>
              <h3 className='text-[#333333] font-[700] text-[24px] text-center lg:text-start lg:text-[32px]'>We’d love to hear from you</h3>
              <div className='flex flex-col gap-[5px]'>
                <label className='text-[#0A0D13] font-[600] text-[18px]'>Name and surname</label>
                <input type='text' placeholder='Enter your name' className='text-[#0A0D13] p-[10px] font-[400] text-[16px] border-[1px] border-[#ACACAC] rounded-[4px]' />
              </div>
              <div className='flex flex-col gap-[5px]'>
                <label className='text-[#0A0D13] font-[600] text-[18px]'>Company</label>
                <input type='text' placeholder='Enter your company name' className='text-[#0A0D13] p-[10px] font-[400] text-[16px] border-[1px] border-[#ACACAC] rounded-[4px]' />
              </div>
              <div className='flex flex-col gap-[5px]'>
                <label className='text-[#0A0D13] font-[600] text-[18px]'>Email</label>
                <input type='text' placeholder='Enter your email address' className='text-[#0A0D13] p-[10px] font-[400] text-[16px] border-[1px] border-[#ACACAC] rounded-[4px]' />
              </div>
              <div className='flex flex-col gap-[5px]'>
                <label className='text-[#0A0D13] font-[600] text-[18px]'>Phone</label>
                <input type='number' placeholder='Enter your phone number' className='text-[#0A0D13] p-[10px] font-[400] text-[16px] border-[1px] border-[#ACACAC] rounded-[4px]' />
              </div>
              <div className='flex flex-col gap-[5px]'>
                <label className='text-[#0A0D13] font-[600] text-[18px]'>Message</label>
                <input type='text' placeholder='Enter your message' className='text-[#0A0D13] p-[10px] font-[400] text-[16px] border-[1px] border-[#ACACAC] rounded-[4px]' />
              </div>
              <div >
                <label className='flex gap-[10px] text-[#333333] font-[400] text-[16px]'>
                  <input type="checkbox" name="newsletter" value="subscribe" />
                  I authorize the processing of my data in order to respond to the queries raised.
                </label>
              </div>
              <div className='text-[#333333] font-[400] text-[16px]'>
                Responsible for the file: Data-Safe . Purpose: sending information about products and services to the subscriber. Legitimation: consent. Recipients: The data will not be communicated to third parties. Rights: access, rectify and delete data, as well as other rights, as explained in the additional information. You can consult additional and detailed information in our Policy
              </div>
              <a href='' className='bg-[#05164D] p-[10px] w-fit flex items-center'>
                <div className='font-[700] text-[#FFFFFF] text-[20px]'>SEND MESSAGE</div>
                <ArrowUpRight />
              </a>
            </div>
          )}
        <div className=''>
          <Image src={map} alt='' className='w-full' />
        </div>

      </section>

      <FooterPage />
    </div>
  )
}

export default ContactPage
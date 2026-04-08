"use client"
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import vector10 from "../../../public/images/vector10.svg"
import vector1 from "../../../public/images/vector1.svg"
import vector2 from "../../../public/images/vector2.svg"
import vector3 from "../../../public/images/vector3.svg"
import vector14 from "../../../public/images/vector14.svg"
import plusIcon from "../../../public/images/plusIcon.svg"
import minusIcon from "../../../public/images/minusIcon.svg"
import logo from "../../../public/images/logo.svg"
import FooterPage from '@/components/common/footer'
const accordionData = [
  {
    title: "Does datasafe work in all devices?",
    content:
      "All of your data will be deleted at the end of your subscription.",
  },
  {
    title: "What happens to my data if I unsubscribe from the service?",
    content:
      "All of your data will be deleted at the end of your subscription.",
  },
  {
    title: "Can I do my backups locally?",
    content:
      "All of your data will be deleted at the end of your subscription.",
  },
  {
    title: "Can I deactivate the Cloud backups?",
    content:
      "All of your data will be deleted at the end of your subscription.",
  },
  {
    title: "For how long do you keep my backups?",
    content:
      "All of your data will be deleted at the end of your subscription.",
  },
  {
    title: "Can I increase the time my backups are saved?",
    content:
      "All of your data will be deleted at the end of your subscription.",
  },
  {
    title: "Can I increase the size of my backups?",
    content:
      "All of your data will be deleted at the end of your subscription.",
  },
];
const FaqsPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='bg-[#FFFFFF]'>
      <section className="relative overflow-hidden gradient p-10 lg:p-22">

        <div className="hidden lg:block absolute left-0 top-0 z-0">
          <Image src={vector1} alt="" />
        </div>
        <div className="lg:hidden block absolute left-0 top-0 z-0">
          <Image src={vector10} alt="" />
        </div>
        <div className="absolute right-10 top-20 z-0">
          <Image src={vector2} className="" alt="" />
        </div>

        <div className="absolute left-10 bottom-10 z-0">
          <Image src={vector3} className="" alt="" />
        </div>

        <div className="lg:block hidden absolute right-0 bottom-0 z-0">
          <Image src={vector14} className="" alt="" />
        </div>

        <div className="flex flex-col justify-center items-center gap-10 relative z-10">


          <Image src={logo} className="" alt="Logo" />
          <div className='text-[#FFFFFF] font-[700] text-[48px]' >FAQs</div>


        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-30  mt-16 mb-10 ">
        <div className='text-[#333333] font-[700] text-[32px] text-center'>Frequently Asked Questions</div>
        <div className=" mt-10">
          {accordionData.map((item, index) => (
            <div key={index} className="cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out bg-[#F9F9F9] mb-4 rounded-lg  px-[20px]">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex cursor-pointer gap-[20px] items-center py-5 text-slate-800"
              >
                <span className="transition-transform duration-300">
                  {openIndex === index ? (
                    <Image src={minusIcon} alt='' className='w-[17px] h-[17px]' />
                  ) : (
                    <Image src={plusIcon} alt='' className='w-[17px] h-[17px]' />
                  )}
                </span>
                <span className='text-[#3A3A3A] font-[500] text-[16px] lg:text-[20px]' >{item.title}</span>


              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
              >
                <div className="ml-[35px] pb-5 text-[#3A3A3A] font-[400] text-[16px] lg:text-[20px]">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      <FooterPage />
    </div>
  )
}

export default FaqsPage
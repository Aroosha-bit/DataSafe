"use client"

import React from 'react'
import Image from 'next/image'
import vector10 from "../../../public/images/vector10.svg"
import vector1 from "../../../public/images/vector1.svg"
import vector2 from "../../../public/images/vector2.svg"
import vector3 from "../../../public/images/vector3.svg"
import vector14 from "../../../public/images/vector14.svg"
import vector5 from "../../../public/images/vector5.svg"
import vector6 from "../../../public/images/vector6.svg"
import vector7 from "../../../public/images/vector7.svg"
import logo from "../../../public/images/logo.svg"
import pricing from "../../../public/images/pricing.svg"
import price1 from "../../../public/images/price1.svg"
import price2 from "../../../public/images/price2.svg"
import price3 from "../../../public/images/price3.svg"
import price4 from "../../../public/images/price4.svg"
import price5 from "../../../public/images/price5.svg"
import ms365 from "../../../public/images/ms365.svg"
import ms1 from "../../../public/images/ms1.svg"
import ms2 from "../../../public/images/ms2.svg"
import ms3 from "../../../public/images/ms3.svg"
import ms4 from "../../../public/images/ms4.svg"
import cloudBackup from "../../../public/images/cloudBackup.svg"
import { cloudBackupData } from '@/data/pricingData'
import { ArrowUpRight } from 'lucide-react'
import FooterPage from '@/components/common/footer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const PricesPage = () => {
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
          <div className='text-[#FFFFFF] font-[700] text-[48px]' >Prices</div>


        </div>
      </section>

      <section className='container mx-auto px-6 lg:px-20 mt-10 lg:mt-20 flex flex-col items-center'>
        <div className='text-[#333333] font-[700] text-[24px] lg:text-[32px] text-center'>Calculate the estimated prices for the data you are going to secure using Data-Safe:
        </div>

        <section className="container mx-auto   mt-10 flex flex-col gap-[40px] items-center">

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

            <div className="relative bg-white flex items-center justify-center w-full min-h-[320px] lg:min-h-full overflow-hidden text-center">

              <div className="absolute top-0 left-0">
                <Image src={vector5} alt="" className="w-[60px] lg:w-auto" />
              </div>

              <div className="absolute top-6 right-6 lg:top-12 lg:right-12">
                <Image src={vector6} alt="" className="w-[40px] lg:w-auto" />
              </div>

              <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-16">
                <Image src={vector7} alt="" className="w-[40px] lg:w-auto" />
              </div>

              <h2 className="text-[#05164D] font-[700] text-[28px] lg:text-[64px] leading-tight">
                Get your<br />estimated<br />price
              </h2>

            </div>

            <div className="flex flex-col items-center justify-center px-6 sm:px-10 lg:px-12 py-10 lg:py-[50px] bg-[#05164D] text-center w-full h-full">

              <div className="flex flex-col items-center gap-[10px] w-full">

                <p className="text-white font-[700] text-lg lg:text-[24px]">
                  Storage capacity (in GB):
                </p>

                <div className=" flex items-center border-2 border-white overflow-hidden">

                  <button className="bg-[#FFAD00] w-12 h-12 lg:w-16 lg:h-14 flex items-center justify-center text-white text-2xl lg:text-3xl font-bold">
                    −
                  </button>

                  <div className="bg-white w-full h-12 lg:h-14 flex items-center justify-center">
                    <span className="text-[#0B1F4B] font-bold text-xl lg:text-2xl">
                      100
                    </span>
                  </div>

                  <button className="bg-[#FFAD00] w-12 h-12 lg:w-16 lg:h-14 flex items-center justify-center text-white text-2xl lg:text-3xl font-bold">
                    +
                  </button>

                </div>
              </div>

              <div className="flex items-end mt-8">
                <span className="text-white font-[700] text-4xl sm:text-6xl lg:text-[90px] leading-none">
                  127,8
                </span>

                <div className="flex flex-col items-start ml-2">
                  <span className="text-[#FFAD00] font-[700] text-xl lg:text-[42px] leading-none">
                    €
                  </span>
                  <span className="text-white font-[700] text-lg lg:text-[40px] leading-none">
                    /Monthly
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-[10px] mt-6 w-full">

                <p className="text-white text-xs lg:text-[16px]">
                  * Each GB increase above 100GB equals to 0.16€
                </p>

                <a
                  href="#"
                  className="flex items-center justify-center gap-3 bg-[#FFAD00] py-[10px] px-2"
                >
                  <span className="text-white font-[700] text-lg  lg:text-[24px]">
                    PURCHASE NOW
                  </span>
                  <ArrowUpRight className="text-white w-5 h-5 lg:w-6 lg:h-6" strokeWidth={3} />
                </a>

              </div>

            </div>
          </div>

          {/* FOOTNOTE */}
          <div className="w-full max-w-5xl text-[#333333] text-sm sm:text-base lg:text-[22px] text-center px-6">
            Data-safe will only charge for the capacity used and not for the maximum capacity
          </div>

        </section>

        <section className='lg:mt-10 flex lg:flex-row flex-col-reverse items-center lg:justify-between ' >
          <div className='lg:w-8/12 flex flex-col gap-[10px]'>
            <h3 className='text-[#333333] font-[700] text-[24px] lg:text-[48px]'>Pricing</h3>
            <p className='text-[#333333] font-[400] text-[16px] lg:text-[24px]'>Whether you’re a small company, freelancer or end user, DataSafe has got you covered. We have a wide range of pricing plans to make sure you get the best value for money. Here's a breakdown of our plans:</p>
          </div>
          <div className='flex items-center'>
            <Image src={pricing} alt='' className='w-80 lg:w-full' />
          </div>
        </section>

        <section className="flex flex-col lg:gap-0 gap-[14px] lg:grid lg:grid-cols-3 lg:grid-rows-2 ">
          <div className="flex flex-col gap-[20px] lg:border-r lg:border-dashed lg:border-[#D9D9D9] lg:p-[30px]">
            <Image src={price1} alt="" />
            <p className="text-[#333333] font-[400] text-[16px] lg:text-[24px]">We start at <span className='font-[700]'>100GB for just 15€</span> and every extra GB is only 0.16€. </p>
          </div>
          <div className="flex flex-col gap-[20px] lg:border-r lg:border-dashed lg:border-[#D9D9D9] lg:p-[30px]">
            <Image src={price2} alt="" />
            <p className="text-[#333333] font-[400] text-[16px] lg:text-[24px]">Our prices include the servers so you won’t need to worry about overly complex integrations.</p>
          </div>
          <div className="flex flex-col gap-[20px] lg:border-b lg:border-dashed lg:border-[#D9D9D9] lg:p-[30px]">
            <Image src={price3} alt="" />
            <p className="text-[#333333] font-[400] text-[16px] lg:text-[24px]">And the best part? It’s one of the easiest and most user friendly services in the market.</p>
          </div>
          <div className="flex flex-col gap-[20px] lg:border-t lg:border-r lg:border-dashed lg:border-[#D9D9D9] lg:p-[30px]">
            <Image src={price4} alt="" />
            <p className="text-[#333333] font-[400] text-[16px] lg:text-[24px]">We have different GB limits – 100GB, 250GB, 500GB, 750GB, 1000GB and unlimited – so you won’t have to worry about overspending. </p>
          </div>
          <div className="flex flex-col gap-[20px] lg:border-t lg:border-r lg:border-dashed lg:border-[#D9D9D9] lg:p-[30px]">
            <Image src={price5} alt="" />
            <p className="text-[#333333] font-[400] text-[16px] lg:text-[24px]">For extra peace of mind, we also offer a fully integrated service to <span className='font-[700]'>protect your Microsoft 365 account</span>, for just €3.49.</p>
          </div>
        </section>

        <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 items-stretch">

          <div className="w-full h-full">
            <Image
              src={cloudBackup}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[url('/images/bg1.svg')] bg-cover bg-center flex items-center p-6 sm:p-10 lg:p-14">

            <div className="flex flex-col gap-4 text-center lg:text-left">

              <h3 className="font-bold text-white text-2xl sm:text-3xl lg:text-5xl">
                DataSafe Cloud backup
              </h3>

              <p className="text-white text-sm sm:text-base lg:text-xl">
                We know how important it is to keep your data secure. That’s why DataSafe comes with top-of-the-line security measures. Here are some of the features that make us the best cloud backup solution:
              </p>

            </div>

          </div>

        </section>
      </section>

      <section>

        <div className="container mx-auto px-6 lg:px-22">

          <div className="bg-[#F9F9F9] py-10">

            <Swiper
              modules={[Pagination, Autoplay]}

              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}

              loop={true}

              pagination={{
                clickable: true,
              }}

              spaceBetween={30}

              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}

              className="pb-16"
            >
              {cloudBackupData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-start gap-6 p-6">

                    <div className="relative w-[80px] h-[80px]">
                      <div className="absolute bottom-0 left-2 w-[60px] h-[60px] bg-[#F5ECD7] rounded-full z-0" />
                      <Image
                        src={item.img}
                        alt="cloud backup"
                        className="relative z-10 w-[60px] h-auto"
                      />
                    </div>

                    <p className="text-[#333] text-[16px] leading-relaxed">
                      {item.descr}
                    </p>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>

        <style jsx global>{`
    .swiper-pagination {
      margin-top: 20px; 
      position: relative;
    }

    .swiper-pagination-bullet {
      background-color: #D1D1D1;
      opacity: 1;
      width: 9px;
      height: 8px;
      margin: 0 6px !important;
    }

    .swiper-pagination-bullet-active {
      background-color: #FFAD00;
      width: 20px;
      border-radius: 9999px;
    }
  `}</style>

      </section>


      <section className='container mx-auto px-6 lg:px-20 lg:mt-20 flex flex-col items-center '>
        <section className='lg:mt-10 flex lg:flex-row flex-col-reverse items-center lg:justify-between lg:gap-0 gap-[40px] ' >
          <div className='lg:w-8/12 flex flex-col gap-[10px]'>
            <h3 className='text-[#333333] font-[700] text-[24px] lg:text-[48px]'>Microsoft 365 data protection</h3>
            <p className='text-[#333333] font-[400] text-[16px] lg:text-[24px]'>If you’re a Microsoft 365 user, you know how difficult it can be to keep track of all your data. That’s why DataSafe has got you covered with our Microsoft 365 data protection service. Here’s what you'll get: </p>
          </div>
          <div>
            <Image src={ms365} alt='' />
          </div>
        </section>

        <section className="flex flex-col lg:gap-0 gap-[14px] mt-5 lg:grid lg:grid-cols-4 lg:grid-rows-1  mb-20">
          <div className="flex flex-col gap-[20px] lg:border-r lg:border-dashed lg:border-[#D9D9D9] lg:p-[30px]">
            <Image src={ms1} alt="" />
            <p className="text-[#333333] font-[400] text-[16px] lg:text-[24px]">We offer recovery of deleted items to help you keep control of your customers’ data in Microsoft 365.</p>
          </div>
          <div className="flex flex-col gap-[20px] lg:border-r lg:border-dashed lg:border-[#D9D9D9] lg:p-[30px]">
            <Image src={ms2} alt="" />
            <p className="text-[#333333] font-[400] text-[16px] lg:text-[24px]">You’ll be able to manage your Microsoft 365 backups from the same dashboard as server and workstation backups.</p>
          </div>
          <div className="flex flex-col gap-[20px] lg:border-r lg:border-dashed lg:border-[#D9D9D9] lg:p-[30px]">
            <Image src={ms3} alt="" />
            <p className="text-[#333333] font-[400] text-[16px] lg:text-[24px]">Enjoy up to seven years of data retention, so you can meet your regulatory requirements.</p>
          </div>
          <div className="flex flex-col gap-[20px]  lg:p-[30px]">
            <Image src={ms4} alt="" />
            <p className="text-[#333333] font-[400] text-[16px] lg:text-[24px]">All your storage needs are taken care of – we provide global private cloud storage.</p>
          </div>

        </section>
      </section>



      <FooterPage />

    </div>
  )
}

export default PricesPage
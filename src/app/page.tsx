import Image from "next/image";
import logo from "../../public/images/logo.svg"
import heroImg from "../../public/images/heroImg.svg"
import heroImg1 from "../../public/images/heroImg1.png"
import heroImg2 from "../../public/images/heroImg2.png"
import suitabilityImg from "../../public/images/suitabilityImg.svg"
import orderImg from "../../public/images/orderImg.svg"
import vector1 from "../../public/images/vector1.svg"
import vector2 from "../../public/images/vector2.svg"
import vector3 from "../../public/images/vector3.svg"
import vector4 from "../../public/images/vector4.svg"
import vector5 from "../../public/images/vector5.svg"
import vector6 from "../../public/images/vector6.svg"
import vector7 from "../../public/images/vector7.svg"
import recovery from "../../public/images/recovery.svg"
import safeguard from "../../public/images/safeguard.svg"
import ms from "../../public/images/ms.svg"
import cloud from "../../public/images/cloud.svg"
import orderImg1 from "../../public/images/orderImg1.png"
import vector10 from "../../public/images/vector10.svg"
import vector11 from "../../public/images/vector11.svg"
import orderImg2 from "../../public/images/orderImg2.png"
import { ArrowUpRight } from "lucide-react";
import FooterPage from "@/components/common/footer";
export default function Home() {
  return (
    <div className="bg-white">

      <section className="relative overflow-hidden gradient pt-10 lg:pt-32">

        <div className="hidden lg:block absolute left-0 top-0 z-0">
          <Image src={vector1} alt="" />
        </div>
        <div className="lg:hidden block absolute left-0 top-0 z-0">
          <Image src={vector10} alt="" />
        </div>
        <div className="absolute right-180 top-20 z-0">
          <Image src={vector2} className="" alt="" />
        </div>

        <div className="absolute left-10 bottom-10 z-0">
          <Image src={vector3} className="" alt="" />
        </div>

        <div className="lg:block hidden absolute right-0 bottom-0 z-0">
          <Image src={vector4} className="" alt="" />
        </div>
        <div className="lg:hidden block absolute right-0 bottom-0 z-0">
          <Image src={vector11} className="" alt="" />
        </div>
        <div className=" lg:pl-20 flex flex-col lg:flex-row items-center gap-10 relative z-10">

          <div className="lg:p-0 p-[10px] w-full lg:w-1/2 flex flex-col md:items-start items-center gap-5">
            <a href="/">
              <Image src={logo} className="" alt="Logo" />
            </a>

            <h1 className="text-white text-[26px] lg:text-[48px] text-center md:text-start lg:text-start font-[700] ">
              Data-Safe™ offers a safe refuge from complex backup operations.
            </h1>

            <p className="text-white font-[400] text-[16px] text-center md:text-start lg:text-start lg:text-[24px]">
              Data-Safe™ is a solution for all your protection needs. It offers uncomplicated features and services, making it simple to protect your data and resources.
            </p>

            <button className="cursor-pointer bg-[#FFAD00] px-6 py-3 flex items-center gap-2 w-fit  lg:mx-0 text-white font-bold rounded-lg hover:scale-105 transition-all duration-200 ease-in-out">
              ACQUIRE <ArrowUpRight />
            </button>
          </div>

          <div className="hidden lg:block md:w-full lg:w-1/2">
            <Image src={heroImg1} alt="" className="" />
          </div>
          <div className="lg:hidden block ">
            <Image src={heroImg2} alt="" className="" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-20 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-center">

        <div className="flex flex-col gap-4 ">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#333]">
            Why should you opt for Cloud Backup
          </h2>

          <p className="text-base lg:text-lg text-[#333]">
            Cloud services are Internet-based computing services that provide users with access to applications and data stored on remote servers.
          </p>

          <button className="cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out bg-[#05164D] text-white px-6 py-3 flex items-center gap-2 w-fit">
            SUITABILITY TEST <ArrowUpRight />
          </button>
        </div>

        <Image src={suitabilityImg} alt="" className="w-full h-auto" />

      </section>

      <section className="bg-[#05164D] overflow-visible relative mt-16 flex lg:flex-row flex-col items-center lg:items-end min-h-[500px] lg:min-h-[600px]">
        <div className="w-full lg:w-1/2 hidden lg:flex items-end justify-center self-end">
          <div className="relative w-full">
            <Image
              src={orderImg2}
              alt="Data-Safe dashboard"
              className="w-full object-contain object-bottom translate-y-[60px]"
            />
          </div>
        </div>

        <div className="lg:hidden block px-6 pt-10">
          <Image src={orderImg1} alt="Data-Safe dashboard" className="w-full" />
        </div>

        <div className="lg:w-1/2 flex flex-col md:items-start items-center gap-[16px] px-10 py-16 lg:py-20">
          <h2 className="text-white font-bold text-[24px] text-center md:text-start lg:text-[38px] leading-tight">
            Reliable and Errorless Data backup with the Data-Safe™ protection
          </h2>
          <p className="text-white font-normal text-[16px] text-center md:text-start lg:text-[18px] opacity-90">
            Data-Safe's appliance-free direct-to-cloud backup for servers, workstations, and Microsoft 365 data gives you recovery flexibility with the long-term retention that comes with the subscription plan.
          </p>
          <div className="w-fit bg-[#FFAD00] px-4 py-3 flex items-center gap-[6px] cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out">
            <h3 className="text-white font-bold text-[16px] lg:text-[20px] tracking-wide">ORDER NOW</h3>
            <ArrowUpRight className="h-[22px] w-[22px] text-white" />
          </div>
        </div>
      </section>

      <section className="container mx-auto lg:px-40 lg:mt-20 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 ">
        <div className="flex flex-col gap-[20px] lg:border-r lg:border-dashed lg:border-[#D9D9D9] p-[30px]">
          <Image src={recovery} alt="" />
          <h3 className="font-[700] text-[26px] lg:text-[36px] text-[#333333]">Disaster Recovery</h3>
          <p className="text-[#333333] font-[400] text-[16px] lg:text-[24px]">Ensure there are no service interruptions or data losses for your clients or personnel. </p>
        </div>
        <div className="flex flex-col gap-[20px] lg:border-b lg:border-dashed lg:border-[#D9D9D9] p-[30px]">
          <Image src={safeguard} alt="" />
          <h3 className="font-[700] text-[26px] lg:text-[36px] text-[#333333]">Ransomware Safeguard</h3>
          <p className="text-[#333333] font-[400] text-[16px] lg:text-[24px]">DataSafe backups protect against ransomware attacks by allowing data to be restored without paying ransoms.</p>
        </div>
        <div className="flex flex-col gap-[20px] lg:border-t lg:border-dashed lg:border-[#D9D9D9] p-[30px]">
          <Image src={ms} alt="" />
          <h3 className="font-[700] text-[26px] lg:text-[36px] text-[#333333]">Microsoft 365 protection</h3>
          <p className="text-[#333333] font-[400] text-[16px] lg:text-[24px]">Cloud backup solution for Microsoft 365 data, such as email, OneDrive, and SharePoint.</p>
        </div>
        <div className="flex flex-col gap-[20px] lg:border-l lg:border-dashed lg:border-[#D9D9D9] p-[30px]">
          <Image src={cloud} alt="" />
          <h3 className="font-[700] text-[26px] lg:text-[36px] text-[#333333]">Cloud Software</h3>
          <p className="text-[#333333] font-[400] text-[16px] lg:text-[24px]">SaaS (software as a service) is a high cost-effective and almost maintenance-free service model.</p>
        </div>
      </section>

      <section className="bg-[#F9F9F9] mt-10 lg:mt-20 p-6 lg:p-20 flex flex-col gap-[40px] items-center">

        <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:px-40">

          <div className="relative bg-white flex items-center justify-center w-full h-[250px] lg:h-full overflow-hidden text-center">

            <div className="absolute top-0 left-0">
              <Image src={vector5} alt="" className="w-[60px] lg:w-auto" />
            </div>

            <div className="absolute top-6 right-6 lg:top-12 lg:right-12">
              <Image src={vector6} alt="" className="w-[40px] lg:w-auto" />
            </div>

            <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-16">
              <Image src={vector7} alt="" className="w-[40px] lg:w-auto" />
            </div>

            <h2 className="text-[#05164D] font-[700] text-[28px] lg:text-[64px] ">
              Get your<br />estimated<br />price
            </h2>

          </div>

          <div className="flex flex-col items-center px-4 sm:px-6 lg:px-10 py-8 lg:py-[50px] bg-[#05164D] text-center">

            <div className="flex flex-col items-center gap-[10px]">
              <p className="text-white font-[700] text-lg lg:text-[24px]">
                Storage capacity(in GB):
              </p>

              <div className="w-full sm:w-7/12 flex items-center border-2 border-white overflow-hidden">
                <button className="cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out bg-[#FFAD00] w-12 h-12 lg:w-16 lg:h-14 flex items-center justify-center text-white text-2xl lg:text-3xl font-bold">
                  −
                </button>

                <div className="bg-white w-full lg:w-28 h-12 lg:h-14 flex items-center justify-center">
                  <span className="text-[#0B1F4B] font-bold text-xl lg:text-2xl">100</span>
                </div>

                <button className="cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out bg-[#FFAD00] w-12 h-12 lg:w-16 lg:h-14 flex items-center justify-center text-white text-2xl lg:text-3xl font-bold">
                  +
                </button>
              </div>
            </div>

            {/* PRICE */}
            <div className="flex items-center mt-6">
              <span className="text-white font-[700] text-4xl sm:text-6xl lg:text-[90px]">
                127,8
              </span>

              <div className="flex flex-col items-start ml-2">
                <span className="text-[#FFAD00] font-[700] text-xl lg:text-[42px]">€</span>
                <span className="text-white font-[700] text-lg lg:text-[40px]">
                  /Monthly
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-[10px] mt-6">
              <p className="text-white text-xs lg:text-[16px]">
                * Each GB increase above 100gb equals to 0.16€
              </p>

              <a
                href="#"
                className="cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out flex items-center justify-center gap-3 bg-[#FFAD00] py-[10px] w-full sm:w-9/12"
              >
                <span className="text-white font-[700] text-lg lg:text-[24px]">
                  PURCHASE NOW
                </span>
                <ArrowUpRight className="text-white w-5 h-5 lg:w-6 lg:h-6" strokeWidth={3} />
              </a>
            </div>

          </div>
        </div>

        {/* FOOT TEXT */}
        <div className="text-[#333333] text-sm sm:text-base lg:text-[22px] text-center px-4">
          Data-safe will only charge for the capacity used and not for the maximum capacity
        </div>

      </section>

      <FooterPage />
    </div>
  );
}

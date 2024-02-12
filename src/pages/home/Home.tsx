import { HomeCleaning } from '@/assets'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { offers, plans, qualities, services, team } from '@/constants'
import React from 'react'
import { Helmet } from 'react-helmet'
import { BiCheck, BiRightArrowAlt, BiShareAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Plane, Subscribe1, Subscribe2, Subscribe3, Subscribe4 } from '../../assets'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Navbar />
      <Helmet>
        <title>Home | T-ZZO</title>
      </Helmet>
      <div className='w-full min-h-[calc(100vh_-_40vh)] md:min-h-[calc(100vh_-_20vh)] flex flex-col items-center relative justify-start pt-44' id='home-bg'>
        <span className='text-primary-yellow text-base md:text-xl font-semibold my-8'>THE BEST CLEANING SERVICE EVER!</span>
        <span className='font-extrabold text-white text-4xl smlg:text-7xl text-center'>We Are Certified Company</span>
        <div className='flex items-center gap-x-4 my-6'>
          <button className='bg-primary-yellow hover:bg-white text-secondary-blue px-8 smlg:px-12 py-3 smlg:py-4 rounded-lg font-semibold text-base smlg:text-xl'>
            Take Our Service
            <BiRightArrowAlt className='hidden text-2xl sm:inline ml-2' />
          </button>
          <Link to="/contact">
            <button className='bg-secondary-blue hover:bg-white text-white hover:text-secondary-blue px-8 smlg:px-12 py-3 smlg:py-4 rounded-lg font-semibold hidden mmsm:flex'>
              Contact Us
              <BiRightArrowAlt className='hidden text-2xl sm:inline ml-2' />
            </button>
          </Link>
        </div>
        <div className='absolute -bottom-64 lg:-bottom-44 bxl:-bottom-28 w-full hidden md:flex items-center justify-center gap-x-4 lg:gap-x-12'>
          {
            qualities.map((quality, index) => (
              <div key={index} className='group shadow-lg hover:bg-primary-blue w-4/12 lg:w-3/12 bxl:w-1/5 p-6 mx-2 flex flex-col bg-white items-center py-12'>
                <quality.icon size={64} className='hover:text-white group-hover:text-white text-primary-blue' />
                <span className='font-bold text-2xl my-4 group-hover:text-white text-secondary-blue group'>{quality.head}</span>
                <span className='my-4 group-hover:text-white text-primary-gray'>{quality.description}</span>
                <span className='flex items-center my-4 cursor-pointer group-hover:text-white text-secondary-blue'>
                  Read More
                  <BiRightArrowAlt className='' />
                </span>
              </div>
            ))
          }
        </div>
      </div>
      <div className='w-full flex flex-col px-6 smm:px-10 lg:px-3 bxl:px-24 pt-14 md:pt-72 lg:pt-64 bxl:pt-44 bg-white'>
        <div className='w-full flex items-center'>
          <div className='w-6/12 hidden md:flex items-center justify-end'>
            <img src={HomeCleaning} alt="" className='w-full lg:w-8/12' />
          </div>
          <div className='w-full md:w-6/12 bxl:w-4/12 md:ml-14 flex flex-col items-start'>
            <span className='text-primary-blue font-semibold text-base sm:text-lg md:text-xl'>Who we are</span>
            <span className='my-6 text-secondary-blue font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl'>
              We Have Over 30+ Years of Experiences on Cleaning Area with Successful Projects
            </span>
            <span className='text-primary-gray my-6'>
              T-ZZO Inc. est une entreprise privée qui offre des services de hautes qualités d’entretien ménager, de nettoyage et de la conciergerie aux entreprises commerciales et aux maisons résidentielles partout à Laval, Montréal ainsi que ses environs.             </span>
            <div className='my-4 grid grid-cols-2'>
              {
                offers.map((offer, index) => (
                  <div key={index} className='flex items-center mx-3'>
                    <BiCheck className='text-secondary-blue' size={24} />
                    <span className='text-primary-gray ml-1'>{offer.name}</span>
                  </div>
                ))
              }
            </div>
            <button className='bg-primary-yellow hover:bg-secondary-blue text-secondary-blue hover:text-white px-8 py-3 rounded-lg font-semibold text-lg my-4'>
              Take Our Service
              <BiRightArrowAlt className='text-2xl inline ml-2' />
            </button>
          </div>
        </div>
      </div>
      <div className='bg-primary-blue px-1 msm:px-4 lg:px-10 xl:px-24 bxl:px-44 py-24 my-12 flex flex-col items-center'>
        <span className='my-4 font-semibold text-lg text-primary-yellow'>Our Services</span>
        <span className='font-bold text-4xl text-center text-white'>
          Our Residential & Commercial
          <br></br>
          Cleaning Services
        </span>
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8'>
          {
            services.map((service, index) => (
              <div key={index} className='hover:bg-secondary-blue cursor-pointer group w-11/12 bg-white rounded-lg p-2 py-6 my-2 msm:my-3 mx-auto flex flex-col items-center'>
                <div className='group-hover:bg-primary-yellow bg-primary-blue w-16 sm:w-24 h-16 sm:h-24 rounded-full flex justify-center items-center'>
                  <service.icon className='text-[30px] sm:text-[40px] text-white group-hover:text-secondary-blue' />
                </div>
                <span className='my-6 text-center font-bold text-lg sm:text-2xl text-secondary-blue group-hover:text-white'>{service.title}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className='bg-white py-10 md:py-24 px-2 smlg:px-8 lg:px-20 xl:px-44 flex flex-col items-center'>
        <span className='font-bold text-base md:text-xl text-primary-blue my-4'>Our Working Experts</span>
        <span className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secondary-blue my-4 text-center'>
          Meet Our Team of Expert
          <br></br>
          Cleaning Staff
        </span>
        <div className='w-full grid grid-cols-1 dsm:grid-cols-2 smlg:grid-cols-3'>
          {
            team.map((member, index) => (
              <div className='group w-11/12 mx-auto flex flex-col my-3 bg-secondary-gray p-4 rounded-lg items-center' key={index}>
                <div className='w-full flex justify-between'>
                  <div className='flex flex-col'>
                    <span className='font-bold text-2xl text-secondary-blue my-1'>{member.name}</span>
                    <span className='my-1 text-primary-gray'>Office Cleaner</span>
                  </div>
                  <span className='w-12 h-12 flex items-center justify-center group-hover:bg-primary-yellow bg-secondary-blue/30 text-secondary-blue rounded-full'>
                    <BiShareAlt size={24} />
                  </span>
                </div>
                <img src={member.image} className='w-10/12 group-hover:scale-110' alt="" />
              </div>
            ))
          }
        </div>
      </div>
      <div className='bg-secondary-gray py-24 px-2 md:px-10 bxl:px-44 flex flex-col items-center'>
        <span className='font-bold text-base sm:text-xl my-4 text-primary-blue'>Pricing Plan</span>
        <span className='my-4 font-bold text-lg smm:text-xl sm:text-3xl text-center text-secondary-blue'>
          Choose Your Affordable <br></br>
          Pricing Plan
        </span>
        <div className='w-full grid grid-cols-1 smm:grid-cols-2 mlg:grid-cols-3 mlg:gap-y-0 gap-y-4'>
          {
            plans.map((plan, index) => (
              <div className='group cursor-pointer mx-auto my-2 w-11/12 flex flex-col items-center bg-white pb-4 rounded-b-lg' key={index}>
                <div className='group-hover:bg-primary-blue bg-secondary-blue flex flex-col w-full relative items-center rounded-lg p-4 pb-16 pt-10 lg:py-16' id='clip'>
                  <span className='flex items-center text-white'>
                    <span>$</span>
                    <span className='text-4xl lg:text-6xl font-semibold'>{plan.price}</span>
                    <span>/mo</span>
                  </span>
                </div>
                <div className='relative w-full flex flex-col items-center py-10'>
                  <button className="group-hover:bg-secondary-blue bg-primary-blue px-8 py-3 rounded-xl text-white capitalize text-base lg:text-lg absolute -top-12 z-30">{plan.name} PLAN</button>
                  {
                    plan.offers.map((offer, index) => (
                      <div className='flex items-center my-2' key={index}>
                        <span className='text-primary-gray ml-1'>{offer.name}</span>
                      </div>
                    ))
                  }
                  <button hidden className='bg-primary-yellow mt-4 px-8 py-3 text-secondary-blue group-hover:text-white group-hover:bg-secondary-blue'>
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='w-full py-[70px] pb-[65px] flex bg-[#0989ff] relative items-center justify-center'>
        <div>
          <img className='absolute z-[1] opacity-[0.4] top-0 left-0 mix-blend-luminosity max-w-full' src={Subscribe1} alt="" />
          <img className='absolute z-[1] opacity-[0.4] top-[53%] left-[10%] mix-blend-luminosity' src={Subscribe2} alt="" />
          <img className='absolute z-[1] opacity-[0.4] bottom-[10%] left-[12%]' src={Subscribe3} alt="" />
          <img className='absolute z-[1] -top-[5%] right-[12%]' src={Subscribe4} alt="" />
          <div className='absolute z-[1] top-[24%] right-[17%] h-[110px] w-[399px]'>
            <img src={Plane} className='absolute -top-[34%] -left-[6%]' alt="" />
            <svg width="399" height="110" className="absolute top-0 left-0 hidden md:flex" viewBox="0 0 399 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.499634 1.00049C8.5 20.0005 54.2733 13.6435 60.5 40.0005C65.6128 61.6426 26.4546 130.331 15 90.0005C-9 5.5 176.5 127.5 218.5 106.5C301.051 65.2247 202 -57.9188 344.5 40.0003C364 53.3997 384 22 399 22" stroke="white" strokeOpacity="0.5" strokeDasharray="3 3"></path>
            </svg>
            <svg className="absolute -top-2 left-0 md:hidden" width="324" height="210" viewBox="0 0 193 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1C4.85463 20.0046 26.9085 13.6461 29.9086 40.0095C32.372 61.6569 13.5053 130.362 7.98637 90.0217C-3.57698 5.50061 85.7981 127.53 106.034 106.525C145.807 65.2398 98.0842 -57.9337 166.742 40.0093C176.137 53.412 185.773 22.0046 193 22.0046" stroke="white" strokeOpacity="0.5" strokeDasharray="3 3"></path>
            </svg>
          </div>
        </div>
        <div className='w-11/12 md:w-10/12 lg:w-8/12 z-[2] flex flex-col lg:flex-row items-center justify-around'>
          <div className='flex flex-col w-full lg:w-1/2 text-white justify-center'>
            <span className='my-2'>SALE 20% OFF</span>
            <span className='font-extrabold text-4xl text-white'>Subscribe to our Newsletter</span>
          </div>
          <div className='flex w-full lg:w-1/2 items-center justify-end'>
            <div className='w-11/12 md:w-8/12 flex lg:mt-0 mt-6'>
              <input type="text" className='w-11/12 outline-none border-none rounded-l-lg p-4' placeholder='Enter your email here' />
              <button className='p-4 rounded-r-lg text-white cursor-pointer bg-[#010f1c]'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
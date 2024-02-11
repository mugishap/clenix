import { HomeCleaning } from '@/assets'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { offers, qualities, services, team } from '@/constants'
import React from 'react'
import { Helmet } from 'react-helmet'
import { BiCheck, BiRightArrowAlt, BiShareAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Navbar />
      <Helmet>
        <title>Home | T-ZZO</title>
      </Helmet>
      <div className='w-full min-h-[calc(100vh_-_20vh)] flex flex-col items-center relative justify-start pt-44' id='home-bg'>
        <span className='text-primary-yellow text-xl font-semibold my-8'>THE BEST CLEANING SERVICE EVER!</span>
        <span className='font-extrabold text-white text-7xl'>We Are Certified Company</span>
        <div className='flex items-center gap-x-4 my-6'>
          <button className='bg-primary-yellow hover:bg-white text-secondary-blue px-12 py-4 rounded-lg font-semibold text-xl'>
            Take Our Service
            <BiRightArrowAlt className='text-2xl inline ml-2' />
          </button>
          <Link to="/contact">
            <button className='bg-secondary-blue hover:bg-white text-white hover:text-secondary-blue px-12 py-4 rounded-lg font-semibold'>
              Contact Us
              <BiRightArrowAlt className='text-2xl inline ml-2' />
            </button>
          </Link>
        </div>
        <div className='absolute -bottom-28 w-full flex items-center justify-center gap-x-12'>
          {
            qualities.map((quality, index) => (
              <div key={index} className='group shadow-lg hover:bg-primary-blue w-1/5 p-6 mx-2 flex flex-col bg-white items-center py-12'>
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
      <div className='w-full flex flex-col px-24 pt-44 bg-white'>
        <div className='w-full flex items-center'>
          <div className='w-6/12 flex items-center justify-end'>
            <img src={HomeCleaning} alt="" className='w-8/12' />
          </div>
          <div className='w-4/12 ml-14 flex flex-col items-start'>
            <span className='text-primary-blue font-semibold text-xl'>Who we are</span>
            <span className='my-6 text-secondary-blue font-bold text-4xl'>
              We Have Over 30+ Years of Experiences on Cleaning Area with Successful Projects
            </span>
            <span className='text-primary-gray my-6'>
              Perspiciatis unde omnis iste natus error sit voluptatem accusantium dummy doloremque laudantium totam remeaque. Perspiciatis unde omnis iste natus error sit The voluptatem accusantiumeomnis iste natus error sit voluptatem doloremque totam remeaque.
            </span>
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
      <div className='bg-primary-blue px-44 py-24 my-12 flex flex-col items-center'>
        <span className='my-4 font-semibold text-lg text-primary-yellow'>Our Services</span>
        <span className='font-bold text-4xl text-center text-white'>
          Our Residential & Commercial
          <br></br>
          Cleaning Services
        </span>
        <div className='w-full grid grid-cols-4 my-8'>
          {
            services.map((service, index) => (
              <div key={index} className='hover:bg-secondary-blue cursor-pointer group w-11/12 bg-white rounded-lg p-2 py-6 my-3 mx-auto flex flex-col items-center'>
                <div className='group-hover:bg-primary-yellow bg-primary-blue w-24 h-24 rounded-full flex justify-center items-center'>
                  <service.icon size={40} className='text-white group-hover:text-secondary-blue' />
                </div>
                <span className='my-6 font-bold text-2xl text-secondary-blue group-hover:text-white'>{service.title}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className='bg-white py-24 px-44 flex flex-col items-center'>
        <span className='font-bold text-xl text-primary-blue my-4'>Our Working Experts</span>
        <span className='font-bold text-4xl text-secondary-blue my-4 text-center'>
          Meet Our Team of Expert
          <br></br>
          Cleaning Staff
        </span>
        <div className='w-full grid grid-cols-3'>
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
      <div className='bg-secondary-gray py-24 px-44 flex flex-col items-center'>
        <span className='font-bold text-xl my-4 text-primary-blue'>Pricing Plan</span>
        <span className='my-4 font-bold text-3xl text-secondary-blue'>
          Choose Your Affordable <br></br>
          Pricing Plan
        </span>
      </div>
      <Footer />
    </div>
  )
}

export default Home
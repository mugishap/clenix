import { HomeCleaning } from '@/assets'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { offers, qualities } from '@/constants'
import React from 'react'
import { BiCheck, BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen bg-secondary-gray'>
      <Navbar />
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
              <div key={index} className='group hover:bg-primary-blue w-1/5 p-6 mx-2 flex flex-col bg-white items-center py-12'>
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
      <div className='w-full flex flex-col px-24 pt-32 bg-white'>
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
      <Footer />
    </div>
  )
}

export default Home
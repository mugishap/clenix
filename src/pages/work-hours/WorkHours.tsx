import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { hours } from '@/constants'
import React from 'react'
import { Helmet } from 'react-helmet'

const WorkHours: React.FC = () => {
    return (
        <div className='w-full flex flex-col min-h-screen'>
            <Helmet>
                <title>Heures de travail | T-ZZO</title>
            </Helmet>
            <Navbar />
            <div className='flex flex-col items-center'>
                <span className='text-secondary-blue text-2xl font-bold my-6'>Our Working Hours</span>
                    <table className='whitespace-nowrap w-11/12 md:w-10/12 smlg:w-8/12 my-6'>
                        <thead className='w-full bg-primary-blue text-white'>
                            <tr>
                                <th align='left' className='p-2'>Day</th>
                                <th align='left' className='p-2'>Opens</th>
                                <th align='left' className='p-2'>Closes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hours.map((hour, index) => {
                                    return (
                                        <tr key={index} className='even:bg-primary-blue/40 text-lg'>
                                            <td className='p-3'>{hour.day}</td>
                                            <td className='p-3'>{hour.open}</td>
                                            <td className='p-3'>{hour.closes}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </div>
            <Footer />
        </div>
    )
}

export default WorkHours
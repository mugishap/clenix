import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const NotFound: React.FC<{}> = () => {

    return (
        <div className='w-full flex flex-col min-h-screen justify-between'>
            <Navbar />
            <div className="w-full">
                <Helmet>
                    <title>404 | T-ZZO</title>
                </Helmet>
                <main className="w-full flex items-center justify-center flex-col pt-12 pb-16">
                    <section className="relative flex flex-col">
                        <div className="text-[#263048] text-[200px] font-bold z-[1] px-6">
                            404
                        </div>
                        <div className="absolute bg-primary-blue bottom-12 h-[30%] w-full"></div>
                    </section>
                    <section className="flex flex-col items-center space-y-3 pb-8">
                        <h2 className="text-[#2A2C30] font-medium text-2xl">Sorry Page Not Found :(</h2>
                        <p className="text-gray-primary text-center max-w-md text-[18px]">We are sorry. The Page you are looking for does not exist. It might have been moved or delete.</p>
                    </section>
                    <Link to="/">
                        <button className="text-white bg-secondary-blue rounded py-3 px-8 text-lg">
                            Back To Home Page
                        </button>
                    </Link>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound
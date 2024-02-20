import { navbarLinks } from '@/constants'
import { CommonContext } from '@/context'
import React, { useContext } from 'react'
import { BiCart, BiSearch, BiX } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const MobileNavbar: React.FC = () => {

    const { setShowNavbar } = useContext(CommonContext)

    return (
        <div className='fixed bg-black/70 z-30 flex items-start justify-center min-h-screen w-full'>
            <div className='absolute w-full h-full z-40' onClick={() => setShowNavbar(false)}></div>
            <div className='w-11/12 flex flex-col bg-white p-4 rounded-b-lg z-50'>
                <BiX size={30} className='self-end cursor-pointer' onClick={() => setShowNavbar(false)} />
                {
                    navbarLinks.map((link, index) => (
                        <Link onClick={() => setShowNavbar(false)} to={link.href} key={index} className='my-3 text-lg'>
                            {link.label}
                        </Link>
                    ))
                }
                <div className='flex flex-col gap-y-6'>
                    <span className='w-12 text-primary-blue cursor-pointer h-12 rounded-full hover:bg-primary-blue hover:text-white duration-0 bg-secondary-gray flex items-center justify-center'>
                        <BiSearch size={22} className='duration-0' />
                    </span>
                    <span className='w-12 text-primary-blue 12 cursor-pointer h-12 rounded-full hover:bg-primary-blue hover:text-white duration-0 bg-secondary-gray flex items-center justify-center'>
                        <BiCart size={22} className='duration-0' />
                    </span>
                    <button className='w-fit px-8 py-3 rounded bg-transparent text-black'>
                        {/* OBTENIR UN DEVIS */}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar
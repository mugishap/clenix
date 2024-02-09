import { LogoText } from '@/assets'
import { navbarLinks } from '@/constants'
import { INavbarLink } from '@/types'
import React from 'react'
import { BiCart, BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <div className='flex items-center px-36 bg-white py-2 justify-between'>
            <img src={LogoText} className='w-64' alt="" />
            <div className='flex items-center gap-x-4'>
                {
                    navbarLinks.map((link: INavbarLink, index: number) => (
                        <Link to={link.href} key={index} className='hover:text-primary-blue'>{link.label}</Link>
                    ))
                }
            </div>
            <div className='flex items-center gap-x-4'>
                <span className='w-12 text-primary-blue cursor-pointer h-12 rounded-full hover:bg-primary-blue hover:text-white duration-0 bg-secondary-gray flex items-center justify-center'>
                    <BiSearch size={22} className='duration-0' />
                </span>
                <span className='w-12 text-primary-blue 12 cursor-pointer h-12 rounded-full hover:bg-primary-blue hover:text-white duration-0 bg-secondary-gray flex items-center justify-center'>
                    <BiCart size={22} className='duration-0' />
                </span>
                <button className='px-8 py-3 rounded bg-primary-yellow text-black'>
                    GET A QUOTE
                </button>
            </div>
        </div>
    )
}

export default Navbar
import { Logo, LogoText } from '@/assets'
import { navbarLinks } from '@/constants'
import { CommonContext } from '@/context'
import { INavbarLink } from '@/types'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { BiCart, BiMenu, BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {

    const { setShowNavbar } = useContext(CommonContext)

    return (
        <div className='flex items-center px-3 lg:px-10 mplg:px-36 bg-white py-2 justify-between'>
            <Link to="/"> <img src={LogoText} className='flex md:hidden smlg:flex w-44 smm:w-64' alt="" /></Link>
            <Link to="/"> <img src={Logo} className='hidden md:flex smlg:hidden w-14' alt="" /></Link>
            <div className='hidden md:flex items-center gap-x-4'>
                {
                    navbarLinks.map((link: INavbarLink, index: number) => {
                        if (link.href === "/#services") {
                            return (<a href={link.href} key={index} className='hover:text-primary-blue'>{link.label}</a>)
                        }
                        return (<Link to={link.href} key={index} className='hover:text-primary-blue'>{link.label}</Link>)

                    })
                }
            </div>
            <div className='hidden md:flex items-center gap-x-4'>
                <span className='w-12 text-primary-blue cursor-pointer h-12 rounded-full hover:bg-primary-blue hover:text-white duration-0 bg-secondary-gray flex items-center justify-center'>
                    <BiSearch size={22} className='duration-0' />
                </span>
                <span className='w-12 text-primary-blue 12 cursor-pointer h-12 rounded-full hover:bg-primary-blue hover:text-white duration-0 bg-secondary-gray flex items-center justify-center'>
                    <BiCart size={22} className='duration-0' />
                </span>
                <button className='px-8 py-3 rounded bg-transparent text-black'
                    onClick={() => toast.error('This feature is not available yet.')}
                >
                    {/* OBTENIR UN DEVIS */}
                </button>
            </div>
            <BiMenu size={30} className='flex md:hidden cursor-pointer text-secondary-blue' onClick={() => setShowNavbar(true)} />
        </div>
    )
}

export default Navbar
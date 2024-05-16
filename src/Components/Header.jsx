import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import SideNav from './SideNav';
import { scrollToSection } from '@/utils/helpers';
import Image from 'next/image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleNav() {
        setIsOpen(!isOpen)
    }

    const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-main-blue transition ease transform duration-300`
    useEffect(() => {
        const handleResize = () => {
            const isScreenSm = window.innerWidth >= 640
            if (isScreenSm) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <header className='relative' >
            {/* <section className='h-10 bg-main-purple'>

            </section> */}
            <nav className="bg-main-purple text-main-background border-b py-1 z-40 w-full ">
                <SideNav toggleNav={toggleNav} isOpen={isOpen} />
                <div className="container mx-auto flex justify-between items-center px-3 sm:px-6">

                    <div className='sm:hidden z-30'>
                        <button
                            className="flex flex-col h-12 w-12 justify-center items-center group select-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div
                                className={`${genericHamburgerLine} ${isOpen
                                    ? "rotate-45 translate-y-2 opacity-70 group-hover:opacity-100"
                                    : "opacity-70 group-hover:opacity-100"
                                    }`}
                            />
                            <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-70 group-hover:opacity-100"}`} />
                            <div
                                className={`${genericHamburgerLine} ${isOpen
                                    ? "-rotate-45 -translate-y-3 opacity-70 group-hover:opacity-100"
                                    : "opacity-70 group-hover:opacity-100"
                                    }`}
                            />
                        </button>
                    </div>

                    <Image
                        src='https://res.cloudinary.com/dlz0x3nss/image/upload/v1715603117/main-web/uht6mggxu01sxytu6vx1.jpg'
                        alt="logo"
                        height={110}
                        width={110}
                        className='rounded-full'
                    />


                    <div className="hidden sm:text-xl sm:flex sm:items-center text-center sm:justify-center gap-3 sm:gap-5">
                        <a onClick={() => scrollToSection('projects')} className="hover:text-main-blue cursor-pointer">פרוייקטים</a>
                        <a onClick={() => scrollToSection('projects')} className="hover:text-main-blue cursor-pointer">לקוחות</a>
                        <a onClick={() => scrollToSection('projects')} className="hover:text-main-blue cursor-pointer">הצוות שלנו</a>
                        <a onClick={() => scrollToSection('projects')} className="hover:text-main-blue cursor-pointer">אודות</a>
                    </div>

                    <div className="flex gap-2 text-xl">

                        {/* <Link href="https://wa.me/9720505507556" className="">
                            <FaWhatsapp className='w-6 h-6' />
                        </Link> */}
                        <Link legacyBehavior href="https://www.instagram.com/lu_lihi_benaim/" passHref>
                            <a target="_blank" rel="noopener noreferrer" className="">
                                <SlSocialInstagram className='w-6 h-6' />
                            </a>
                        </Link>

                        <Link href={''} className="">
                            <FaFacebookF className='w-6 h-6' />
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    )
}

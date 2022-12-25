import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Sling as Hamburger } from 'hamburger-react'
import logoDarkMode from '../public/images/moon.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Navbar() {
const [open, setOpen] = useState(false)
const [navbar, setNavbar] = useState(false)
const router = useRouter()

const navbarScroll = () => {
    if(window.scrollY >= 10) {
        setNavbar(true)
    } else {
        setNavbar(false)
    }
}

useEffect(() => {
    navbarScroll()
    window.addEventListener('scroll', navbarScroll)
})

  return (
      <div className={`text-color-white py-3.5 md:py-2.5 fixed top-0 w-full z-50 ${navbar ? "backdrop-blur-md" : "backdrop-blur-none"}`}>
        <nav className='container mx-auto w-5/6 flex flex-wrap items-center justify-between'>
            <div className="navbar-brand text-3xl font-bold">
                Zak!
            </div>
            <div className='flex items-center md:order-1'>
                <button>
                    <Image
                        src={logoDarkMode}
                        width={30}
                        alt='darkmode'
                    />
                </button>
            </div>
            <button className='md:hidden' onClick={() => setOpen(!open)}>
                <Hamburger
                    distance='lg'
                    size={25}
                />
            </button>
            <div className='w-full md:w-auto'>
                <ul className={`${open ? 'block' : 'hidden'} flex flex-col md:flex-row font-normal space-y-8 md:space-y-0 md:space-x-8 md:order-2 md:flex py-5 text-center`}>
                    <li>
                        <Link href='/' className={`page-link ${router.pathname === "/" ? "active" : ""}`}>About</Link>
                    </li>
                    <li>
                        <Link href='portfolio' className={`page-link ${router.pathname === "/portfolio" ? "active" : ""}`}>Portfolio</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
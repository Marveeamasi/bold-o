'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { IoMenu } from 'react-icons/io5'
import { LuArrowUpLeft } from 'react-icons/lu'
import { motion } from 'framer-motion'
import MobileMenu from './MobileMenu'


const NavLinks = ({ className, onLinkClick }) => (
  <div className={className}>
    <Link href={'#'} className='font-semibold text-[16px] text-[white]' onClick={onLinkClick}>
      Product
    </Link>
    <Link href={'#'} className='font-semibold text-[16px] text-[white]' onClick={onLinkClick}>
      Services
    </Link>
    <Link href={'#'} className='font-semibold text-[16px] text-[white]' onClick={onLinkClick}>
      About
    </Link>
    <Link
      href={'#'}
      className='font-[700] text-[16px] text-[#0A2640] bg-[white] rounded-[24px] flex items-center justify-center w-[128px] h-[40px] hover:bg-transparent transition-colors duration-300 ease-linear hover:border-2 hover:border-[white] hover:text-white'
      onClick={onLinkClick}
    >
      Log In
    </Link>
  </div>
)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  const iconVariants = {
    open: { rotate: 90, opacity: 1 },
    closed: { rotate: 0, opacity: 1 },
  }

  return (
    <div className='flex pt-[56px] pb-[10px] z-20 px-[100px] max-sm:px-5 max-sm:py-3 bg-[#0A2640] justify-between items-center w-full sticky top-0'>
      <div className='flex items-center gap-2'>
        <Image
          src={'/logo.webp'}
          width={25.90987777709961}
          height={33.157894134521484}
          alt='Boldo logo'
          className=''
        />
        <h1 className='manrope text-[43.25px] text-[white] font-[700]'>Boldo</h1>
      </div>
      <NavLinks className='flex items-center gap-10 justify-end max-md:hidden' />
      <motion.div
        variants={iconVariants}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='md:hidden'
      >
        {isOpen ? (
          <LuArrowUpLeft
            onClick={toggleMenu}
            className='text-white text-[50px] cursor-pointer transition-all duration-300 ease-in-out'
            aria-label='Close menu'
          />
        ) : (
          <IoMenu
            onClick={toggleMenu}
            className='text-white text-[50px] cursor-pointer transition-all duration-300 ease-in-out'
            aria-label='Open menu'
          />
        )}
      </motion.div>
      {isOpen && <MobileMenu closeMenu={() => setIsOpen(false)} ref={menuRef} />}
    </div>
  )
}
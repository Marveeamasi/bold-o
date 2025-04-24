'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const menuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 20, 
      duration: 0.4 
    }
  },
  exit: { 
    opacity: 0, 
    x: '100%', 
    transition: { 
      duration: 0.3 
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 }
  })
}

const MobileMenu = forwardRef(({ closeMenu }, ref) => (
  <motion.div
    ref={ref}
    variants={menuVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
    className='flex flex-col items-center gap-10 justify-end md:hidden fixed right-10 top-[150px] w-fit p-10 h-fit rounded-[24px] backdrop-blur-xs bg-[#ffffffe5] border border-[#8b8b8b70]'
  >
    {['Product', 'Services', 'About'].map((text, i) => (
      <motion.div key={text} variants={itemVariants} custom={i}>
        <Link href={'#'} className='font-semibold text-[16px]' onClick={closeMenu}>
          {text}
        </Link>
      </motion.div>
    ))}
    <motion.div variants={itemVariants} custom={3}>
      <Link
        href={'#'}
        className='font-[700] text-[16px] text-[#0A2640] bg-[white] rounded-[24px] flex items-center justify-center w-[128px] h-[40px] border-2 border-[#0A2640] hover:bg-[#0A2640] transition-colors duration-300 ease-linear hover:text-white'
        onClick={closeMenu}
      >
        Log In
      </Link>
    </motion.div>
  </motion.div>
))

MobileMenu.displayName = 'MobileMenu'

export default MobileMenu
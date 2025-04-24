import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='py-[100px] px-[100px] max-sm:py-20 max-sm:px-5 flex justify-between items-center flex-wrap-reverse gap-10 max-sm:flex-col-reverse '>
       <div className='flex flex-col gap-14 max-sm:items-center'>
         <div className='flex items-center gap-3 manrope'>
            <Image src={'/logodark.png'} width={24.92} height={32.3684} alt={'logo'} />
            <h1 className='text-[#0A2640] text-[43.25px] font-[700]'>Boldo</h1>
         </div>
         <p className='w-[300px] leading-[28px] text-[16px] font-[400] text-[#777777] max-sm:text-center'>Social media validation business model canvas graphical
             user interface launch party creative facebook iPad twitter.
        </p>
        <p className='leading-[28px] mt-16 text-[16px] font-[400] text-[#777777]'>All rights reserved.</p>
       </div>
       <div className='flex flex-col gap-14 max-sm:items-center'>
        <h1 className='text-[20px] font-[700]'>Landings</h1>
        <Link href={'#'} className='text-[20px] font-[400] text-[#777777]'>Home</Link>
        <Link href={'#'} className='text-[20px] font-[400] text-[#777777]'>Products</Link>
        <Link href={'#'} className='text-[20px] font-[400] text-[#777777]'>Services</Link>
       </div>
       <div className='flex flex-col gap-14 max-sm:items-center'>
        <h1 className='text-[20px] font-[700]'>Company</h1>
        <Link href={'#'} className='text-[20px] font-[400] text-[#777777]'>Home</Link>
        <Link href={'#'} className='text-[20px] font-[400] text-[#777777] flex items-center gap-2'>Careers <button className='text-[#0A2640] bg-[#65E4A3] w-[72px] h-[30px]  cursor-pointer text-[13px] font-[700] rounded-[120px]'>Hiring!</button></Link>
        <Link href={'#'} className='text-[20px] font-[400] text-[#777777]'>Services</Link>
       </div>
       <div className='flex flex-col gap-14 max-sm:items-center'>
        <h1 className='text-[20px] font-[700]'>Resources</h1>
        <Link href={'#'} className='text-[20px] font-[400] text-[#777777]'>Blog</Link>
        <Link href={'#'} className='text-[20px] font-[400] text-[#777777]'>Products</Link>
        <Link href={'#'} className='text-[20px] font-[400] text-[#777777]'>Services</Link>
       </div>
    </div>
  )
}

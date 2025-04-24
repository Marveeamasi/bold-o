'use client'

import { useState } from 'react'

const CardBackground = () => (
  <div className='absolute z-[0] top-[-1054px] right-[-466px] h-[1293px] w-[1293px] rounded-full bg-[#1C3D5B]' />
)

const Heading = () => (
  <h1 className='manrope text-[48px] text-white text-center leading-[72px] max-sm:text-[32px] max-sm:leading-[48px]'>
    An enterprise template to ramp<br /> up your company website
  </h1>
)

const ContactForm = () => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('We will respond to your email shortly!')
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-center gap-5 max-sm:flex-col'>
      <input
        type='email'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Your email address'
        className='h-[56px] w-[370px] max-sm:w-full rounded-[240px] bg-white p-5 px-10 outline-none placeholder:text-[#000] max-sm:text-center'
        aria-label='Email address'
        required
      />
      <button
        type='submit'
        className='h-[60px] w-[210px] max-sm:w-full cursor-pointer rounded-[56px] bg-[#65E4A3] text-[20px] font-[700] text-[#0A2640]'
      >
        Start now
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <div className='px-[100px] py-[140px] pb-[50px] font-[400] max-sm:px-5 max-sm:py-20'>
      <div
        id='card'
        className='relative flex flex-col items-center justify-center gap-14 overflow-hidden rounded-[12px] bg-[#0A2640] p-[100px] max-sm:p-5'
      >
        <CardBackground />
        <div className='z-[1] flex flex-col items-center gap-10'>
          <Heading />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
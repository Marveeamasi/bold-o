'use client'

import Image from 'next/image'

const Heading = () => (
  <div className='flex flex-col w-full self-center max-w-[800px] max-md:w-full max-sm:items-center'>
    <h3 className='mb-5 text-[20px] font-[400] text-[#777777]'>Our team</h3>
    <h1 className='text-[48px] font-[400] manrope leading-[72px] max-sm:text-center max-sm:leading-[48px]'>
      The leadership team
    </h1>
    <p className='mt-10 text-[20px] font-[400] text-[#777777] leading-[32px] maxi-sm:leading-[24px] max-sm:text-center'>
      Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding
      iteration. Traction stock user experience deployment beta innovator incubator focus.
    </p>
  </div>
)

const TeamMember = ({ src, alt, name, role }) => (
  <div className='flex flex-col font-[400] gap-7 max-sm:items-center'>
    <Image
      src={src}
      alt={alt}
      width={300}
      height={354}
      className='w-[300px] h-[354px] rounded-[24px] object-cover'
      priority
    />
    <h2 className='text-[28px] manrope'>{name}</h2>
    <p className='text-[20px] text-[#777777]'>{role}</p>
  </div>
)

const TeamMembers = () => {
  const members = [
    {
      src: '/a-guy-with-yellow-hat.png',
      alt: 'Man wearing a yellow hat',
      name: 'Michael Scott',
      role: 'General Manager'
    },
    {
      src: '/a-guy-with-glasses.png',
      alt: 'Man wearing glasses',
      name: 'Dwight Schrute',
      role: 'General Manager'
    },
    {
      src: '/a-guy-seating.png',
      alt: 'Man seated',
      name: 'Pam Beetsley',
      role: 'General Manager'
    }
  ]

  return (
    <div className='flex items-center justify-center gap-10 max-sm:flex-col'>
      {members.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  )
}

export default function Team() {
  return (
    <div className='flex w-full flex-col justify-center px-[100px] max-sm:px-5 py-[100px] max-sm:py-20 gap-20'>
      <Heading />
      <TeamMembers />
    </div>
  )
}
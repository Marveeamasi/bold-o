'use client'

import Image from 'next/image'

const Heading = () => (
  <div className='flex w-full max-w-[800px] flex-col max-sm:items-center'>
    <h3 className='mb-5 text-[20px] font-[400] text-[#ffffff]'>Our values</h3>
    <h1 className='text-[48px] font-[400] manrope text-[#ffffff] leading-[72px] max-sm:text-center max-sm:leading-[48px]'>
      Things in we believe
    </h1>
    <p className='mt-7 text-[20px] font-[400] text-[#f1f1f1] leading-[32px] max-sm:text-center max-sm:leading-[24px]'>
      Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding
      iteration. Traction stock user experience deployment beta innovator incubator focus.
    </p>
  </div>
)

const ValueCard = ({ src, alt, title, description }) => (
  <div className='flex gap-10 max-sm:flex-col max-sm:items-center'>
    <Image
      src={src}
      alt={alt}
      width={150}
      height={151}
      className='h-[151px] w-[150px] rounded-[24px] object-cover max-sm:h-[300px] max-sm:w-full max-sm:object-top'
      priority
    />
    <div className='flex flex-col gap-2 font-[400] max-sm:items-center'>
      <h2 className='text-[28px] manrope text-white max-sm:text-center'>{title}</h2>
      <p className='text-[20px] text-[#f1f1f1] max-sm:text-center'>{description}</p>
    </div>
  </div>
)

const ValueCards = () => {
  const values = [
    {
      src: '/bluebg-image.png',
      alt: 'Abstract blue background',
      title: 'We are commited.',
      description:
        'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.'
    },
    {
      src: '/person-walking.png',
      alt: 'Person walking outdoors',
      title: 'We are responsible.',
      description:
        'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.'
    },
    {
      src: '/shaking-hands.png',
      alt: 'People shaking hands',
      title: 'We aim for progress.',
      description:
        'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration.'
    }
  ]

  return (
    <div className='flex w-full max-w-[800px] flex-col gap-10'>
      {values.map((value, index) => (
        <ValueCard key={index} {...value} />
      ))}
    </div>
  )
}

export default function Values() {
  return (
    <div className='flex flex-col items-center justify-center gap-20 bg-[#0A2640] p-[100px] max-sm:p-5 max-sm:py-20'>
      <Heading />
      <ValueCards />
    </div>
  )
}
'use client'

import Image from 'next/image'

const ImageGroup = () => (
  <div className='absolute top-[-100px] max-sm:top-[-50px] flex self-center justify-center items-center gap-10'>
    <div className='flex flex-col items-center gap-10'>
      <Image
        src={'/a-guy-calling.jpg'}
        alt='Man making a phone call'
        width={300}
        height={285}
        className='w-[300px] h-[285px] object-cover rounded-[24px]'
        priority
      />
      <Image
        src={'/bluebg-image.png'}
        alt='Abstract blue background'
        width={300}
        height={303}
        className='w-[300px] h-[303px] object-cover rounded-[24px]'
        priority
      />
    </div>
    <div className='flex flex-col items-center max-lg:hidden'>
      <Image
        src={'/lady-calling.jpg'}
        alt='Woman making a phone call'
        width={400}
        height={632}
        className='w-[400px] h-[632px] object-cover rounded-[24px]'
        priority
      />
    </div>
    <div className='flex flex-col items-center gap-10 max-sm:hidden'>
      <Image
        src={'/person-walking.png'}
        alt='Person walking outdoors'
        width={302}
        height={305}
        className='w-[302px] h-[305px] object-cover rounded-[24px]'
        priority
      />
      <Image
        src={'/people-seating.jpg'}
        alt='Group of people seated together'
        width={302}
        height={287}
        className='w-[302px] h-[287px] object-cover rounded-[24px]'
        priority
      />
    </div>
  </div>
)

const TextContent = () => (
  <div className='flex flex-col w-full max-w-[800px] mt-[700px] self-center max-sm:items-center'>
    <h3 className='mb-5 text-[20px] font-[400] text-[#777777]'>Our story</h3>
    <h1 className='text-[48px] font-[400] manrope leading-[72px] max-sm:text-center max-sm:leading-[48px]'>
      Handshake infographic mass market crowdfunding iteration.
    </h1>
    <p className='mt-10 text-[20px] font-[400] text-[#777777] leading-[32px] max-sm:text-center'>
      Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding
      iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding
      growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects
      return on investment bootstrapping business-to-consumer.
    </p>
  </div>
)

export default function Story() {
  return (
    <div className='relative flex w-full flex-col justify-center px-[100px] max-sm:px-5 gap-40 pb-40'>
      <ImageGroup />
      <TextContent />
    </div>
  )
}
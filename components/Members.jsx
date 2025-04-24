'use client'

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Heading = () => (
  <div className='flex flex-col items-center gap-5'>
    <h3 className='text-[20px] font-[400] text-[#F1F1F1]'>Our numbers</h3>
    <h1 className='text-[48px] manrope text-center text-white leading-[72px] max-sm:leading-[48px]'>
      Handshake infographic mass market<br /> crowdfunding iteration.
    </h1>
  </div>
)

const NumberCard = ({ value, label, index, isInView }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    if (value === '120m') {
      return `${Math.round(latest / 1000000)}m`
    }
    return Math.round(latest).toLocaleString()
  })

  useEffect(() => {
    if (isInView) {
      count.set(0)
      animate(count, value === '120m' ? 120000000 : parseInt(value.replace(/,/g, '')), {
        duration: 1.5,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100,
        damping: 20
      })
    }
  }, [count, value, isInView])

  return (
    <motion.div
      className='flex flex-col max-sm:items-center'
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
      }}
    >
      <motion.div
        className='text-[96px] max-lg:text-[48px] max-md:text-[24px] text-[#4FE9A4] manrope'
        aria-label={`${value} ${label}`}
      >
        {rounded}
      </motion.div>
      <div className='text-[24px] max-lg:text-[16px] max-md:text-[12px] text-[#F1F1F1]'>Cool feature title</div>
    </motion.div>
  )
}

const NumberCards = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const cards = [
    { value: '120m', label: 'Cool feature title' },
    { value: '10,000', label: 'Cool feature title' },
    { value: '240', label: 'Cool feature title' }
  ]

  return (
    <motion.div
      ref={ref}
      className='flex items-center justify-center gap-40 max-lg:gap-10 max-sm:gap-5'
      initial='hidden'
      whileInView='visible'
      exit='exit'
      viewport={{ once: true, amount: 0.3 }}
    >
      {cards.map((card, index) => (
        <NumberCard key={index} value={card.value} label={card.label} index={index} isInView={isInView} />
      ))}
    </motion.div>
  )
}

export default function Members() {
  return (
    <div className='bg-[#0A2640] flex flex-col items-center font-[400] px-[100px] max-sm:px-5 py-[100px] max-sm:py-20 gap-5'>
      <Heading />
      <NumberCards />
    </div>
  )
}
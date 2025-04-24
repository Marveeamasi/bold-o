'use client'

import { motion } from 'framer-motion'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Members from '@/components/Members'
import Navbar from '@/components/Navbar'
import Story from '@/components/Story'
import Team from '@/components/Team'
import Values from '@/components/Values'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 20, 
      duration: 0.6 
    }
  },
  exit: { 
    opacity: 0, 
    y: 50, 
    transition: { 
      duration: 0.4 
    }
  }
}

const Section = ({ children, className }) => (
  <motion.section
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    exit="exit"
    viewport={{ once: true, amount: 0.3 }}
    className={className}
  >
    {children}
  </motion.section>
)

export default function About() {
  const sections = [
    { Component: Hero, key: 'hero' },
    { Component: Story, key: 'story' },
    { Component: Members, key: 'members' },
    { Component: Team, key: 'team' },
    { Component: Values, key: 'values' },
    { Component: Contact, key: 'contact' },
    { Component: Footer, key: 'footer' },
  ]

  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      {sections.map(({ Component, key }) => (
        <Section key={key}>
          <Component />
        </Section>
      ))}
    </div>
  )
}
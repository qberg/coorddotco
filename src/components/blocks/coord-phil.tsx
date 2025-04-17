'use client'
import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import React, { useRef } from 'react'

const parasOne = [
  "COORD is more than a platform; it's a movement to ensure that no craft dies unseen, no artisan works in isolation, and no story goes untold.",
  'Rooted in deep respect for heritage, we provide artisans with the tools, visibility, and opportunities to connect with a global audience while ensuring their craft continues to evolve. ',
]

const parasTwo = [
  'Our journey began with a simple yet profound realization: traditional craftsmanship is not just an art form but a way of life, deeply interwoven with culture, identity, and community. Yet, countless artisans face the risk of losing their craft due to a lack of access, opportunities, and fair compensation. Many go unrecognized as their work is often overlooked in contemporary design aesthetics. COORD exists to change this narrative.',
  'By bridging tradition with contemporary design, we create an ecosystem where craftsmanship is not just preserved but thrives—where artisans are recognized as creators, not just producers. We foster collaborations that are ethical, transparent, and mutually enriching, ensuring that every craft has a future and every artisan has a voice.',
]

const CoordPhil = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageOneY = useTransform(scrollYProgress, [0.05, 1], ['0%', '-35%'])
  const imageTwoY = useTransform(scrollYProgress, [0.1, 1], ['0%', '-25%'])

  return (
    <section ref={sectionRef} className="flex flex-col min-h-screen py-8 px-4 md:px-10 4xl:px-14">
      <div className="flex items-start justify-between gap-4 lg:gap-9 2xl:gap-40 4xl:gap-64">
        <h2 className="whitespace-nowrap">Coord Philosophy</h2>
        <div className="hidden ml-auto md:flex gap-2 lg:gap-4 xl:gap-10 2xl:gap-14 4xl:gap-16">
          <div className="flex-1">
            <Paragraphs paragraphs={parasOne} />
          </div>
          <div className="flex-1">
            <Paragraphs paragraphs={parasTwo} />
          </div>
        </div>
      </div>

      <motion.div className="flex flex-col gap-4 md:hidden mt-16 pl-[35%]">
        <Paragraphs paragraphs={parasOne} />
        <Paragraphs paragraphs={parasTwo} />
      </motion.div>

      <div className="mt-16 md:mt-auto flex gap-4 md:gap-8 4xl:gap-12 w-full">
        <motion.div
          className="relative w-full md:max-w-[20%] aspect-[3/4] overflow-hidden"
          style={{ y: imageOneY }}
          // Add willChange to optimize performance
          initial={{ willChange: 'transform' }}
        >
          <Image
            src="/coord-phil/image1.png"
            alt="Artisan craftwork showcase"
            fill
            priority
            className="object-cover"
            loading="eager"
          />
        </motion.div>

        <motion.div
          className="relative w-full md:max-w-[20%] aspect-[3/4] overflow-hidden"
          style={{ y: imageTwoY }}
          // Add willChange to optimize performance
          initial={{ willChange: 'transform' }}
        >
          <Image
            src="/coord-phil/image2.png"
            alt="Artisan craftwork showcase"
            fill
            priority
            className="object-cover"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  )
}

// Memoize the Paragraphs component to prevent unnecessary re-renders
const Paragraphs = React.memo(({ paragraphs }: { paragraphs: string[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  )
})

Paragraphs.displayName = 'Paragraphs'

export default CoordPhil

'use client'
import { motion, MotionValue, useSpring, useTransform } from 'motion/react'
import Image from 'next/image'
import React from 'react'

const parasOne = [
  "COORD is more than a platform; it's a movement to ensure that no craft dies unseen, no artisan works in isolation, and no story goes untold.",
  'Rooted in deep respect for heritage, we provide artisans with the tools, visibility, and opportunities to connect with a global audience while ensuring their craft continues to evolve. ',
]

const parasTwo = [
  'Our journey began with a simple yet profound realization: traditional craftsmanship is not just an art form but a way of life, deeply interwoven with culture, identity, and community. Yet, countless artisans face the risk of losing their craft due to a lack of access, opportunities, and fair compensation. Many go unrecognized as their work is often overlooked in contemporary design aesthetics. COORD exists to change this narrative.',
  'By bridging tradition with contemporary design, we create an ecosystem where craftsmanship is not just preserved but thrives—where artisans are recognized as creators, not just producers. We foster collaborations that are ethical, transparent, and mutually enriching, ensuring that every craft has a future and every artisan has a voice.',
]

interface CoordPhilProps {
  scrollYProgress: MotionValue<number>
}

const CoordPhil: React.FC<CoordPhilProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0.1, 0.15, 0.2, 0.22], [0.8, 0.87, 0.94, 1])

  const springScale = useSpring(scale, {
    stiffness: 200,
    damping: 50,
    mass: 1.5,
    restDelta: 0.01,
  })

  return (
    <motion.section
      className="sticky top-0 bg-mist-background flex flex-col min-h-screen py-8 px-4 md:px-10 4xl:px-14 overflow-hidden"
      style={{ scale: springScale, transformOrigin: 'top' }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 lg:gap-9 2xl:gap-40 4xl:gap-64">
          <motion.h2 className="whitespace-nowrap">Coord Philosophy</motion.h2>

          <div className="hidden ml-auto md:flex gap-2 lg:gap-4 xl:gap-10 2xl:gap-14 4xl:gap-16">
            <div className="flex-1">
              <Paragraphs paragraphs={parasOne} className="paragraph" />
            </div>
            <div className="flex-1">
              <Paragraphs paragraphs={parasTwo} className="paragraph" />
            </div>
          </div>
        </div>

        <motion.div className="flex flex-col gap-4 md:hidden mt-16 pl-[35%]">
          <Paragraphs paragraphs={parasOne} className="paragraph" />
          <Paragraphs paragraphs={parasTwo} className="paragraph" />
        </motion.div>

        <div className="mt-16 md:mt-auto flex gap-4 md:gap-8 4xl:gap-12 w-full">
          <motion.div className="relative w-full md:max-w-[20%] aspect-[3/4] overflow-hidden">
            <Image
              src="/coord-phil/image1.png"
              alt="Artisan craftwork showcase"
              fill
              priority
              className="object-cover"
              loading="eager"
            />
          </motion.div>

          <motion.div className="relative w-full md:max-w-[20%] aspect-[3/4] overflow-hidden">
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
      </div>
    </motion.section>
  )
}

interface ParagraphsProps {
  paragraphs: string[]
  className?: string
}

const Paragraphs = React.memo(({ paragraphs, className }: ParagraphsProps) => {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((para, index) => (
        <motion.p key={index} className={className}>
          {para}
        </motion.p>
      ))}
    </div>
  )
})

Paragraphs.displayName = 'Paragraphs'

export default CoordPhil

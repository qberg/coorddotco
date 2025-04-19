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
      className="sticky top-0 bg-mist-background min-h-screen md:h-screen p-4 md:p-10 3xl:p-14 md:overflow-hidden"
      style={{ scale: springScale, transformOrigin: 'top' }}
    >
      <div className="flex flex-col md:flex-row gap-16">
        <div className="flex items-start justify-between w-full gap-8 xl:gap-36  4xl:gap-64">
          <h2 className="whitespace-nowrap">Coord Philosophy</h2>

          <div className="hidden md:flex gap-4 xl:gap-10 2xl:gap-12 3xl:gap-16">
            <div className="w-1/2">
              <Paragraphs paragraphs={parasOne} className="paragraph" />
            </div>

            <div className="w-1/2">
              <Paragraphs paragraphs={parasTwo} className="paragraph" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:hidden pl-[35%] pb-8 md:pb-0">
          <Paragraphs paragraphs={parasOne} className="paragraph" />
          <Paragraphs paragraphs={parasTwo} className="paragraph" />
        </div>
      </div>

      <div className="md:absolute bottom-0 left-0 p-4 md:p-10 3xl:p-14 flex flex-row gap-5 xl:gap-8 2xl:gap-11 w-full">
        <div className="bg-mist-background/10 aspect-[0.76/1] w-1/2 md:max-w-[15%] 2xl:max-w-[20%] relative">
          <Image
            src="/coord-phil/image1.png"
            alt="Artisan craftwork showcase"
            fill
            priority
            className="object-cover"
            loading="eager"
          />
        </div>

        <div className="bg-mist-background/10 aspect-[0.76/1] w-1/2 md:max-w-[15%] 2xl:max-w-[20%] relative">
          <Image
            src="/coord-phil/image2.png"
            alt="Artisan craftwork showcase"
            fill
            priority
            className="object-cover"
            loading="eager"
          />
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

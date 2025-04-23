'use client'
import HorseBg from '@/components/horse-bg'
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
  isMobile: boolean
}

const CoordPhil: React.FC<CoordPhilProps> = ({ scrollYProgress, isMobile }) => {
  const scale = useTransform(
    scrollYProgress,
    [0.07, 0.09, 0.11, 0.13, 0.22, 0.23, 0.26, 0.28],
    [0.8, 0.87, 0.94, 1, 1, 0.94, 0.87, 0.8],
  )

  const opacity = useTransform(
    scrollYProgress,
    [0.23, 0.25, 0.27, 0.28, 0.3],
    [1, 0.75, 0.6, 0.5, 0],
  )

  const y = useTransform(
    scrollYProgress,
    [0.22, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29],
    [0, -105, -145, -175, -195, -205, -215],
  )

  const springScale = useSpring(scale, {
    stiffness: 200,
    damping: 50,
    mass: 1.5,
    restDelta: 0.01,
  })

  const headerY = useTransform(scrollYProgress, [0.1, 0.13, 0.15], [100, 25, 0])
  const headerClipPath = useTransform(
    scrollYProgress,
    [0.09, 0.16],
    ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'], // Clip-path animation from top to bottom
  )

  const springHeaderY = useSpring(headerY, {
    stiffness: 300,
    damping: 50,
    mass: 1,
    restDelta: 0.001,
  })

  {
    /*const paraOneClipPath = useTransform(
    scrollYProgress,
    [0.13, 0.14], // Starts after header begins, finishes a bit after header
    ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
  )
  */
  }
  const paraOneOpacity = useTransform(scrollYProgress, [0.13, 0.135], [0, 1])

  const paraTwoOpacity = useTransform(scrollYProgress, [0.13, 0.14], [0, 1])

  {
    /*
  const paraTwoClipPath = useTransform(
    scrollYProgress,
    [0.13, 0.15], // Starts slightly after first paragraph, creating a cascade effect
    ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
  )
  */
  }

  const paraOneY = useTransform(scrollYProgress, [0.13, 0.16], [30, 0])
  const paraTwoY = useTransform(scrollYProgress, [0.14, 0.17], [30, 0])

  const springParaOneY = useSpring(paraOneY, {
    stiffness: 250,
    damping: 45,
    mass: 1,
    restDelta: 0.001,
  })

  const springParaTwoY = useSpring(paraTwoY, {
    stiffness: 220,
    damping: 42,
    mass: 1,
    restDelta: 0.001,
  })

  const imageScale = useTransform(
    scrollYProgress,
    [0.08, 0.13, 0.23, 0.32, 0.34, 0.36, 0.38, 0.43],
    [0.9, 0.98, 1, 1, 0.98, 0.96, 0.95, 0.94],
  )

  const imageOneY = useTransform(
    scrollYProgress,

    [0.08, 0.12, 0.13, 0.14, 0.32, 0.335, 0.345, 0.355, 0.37, 0.39, 0.41],
    [-300, -100, -50, 0, 0, -50, -110, -160, -180, -190, -200],
  )
  const imageTwoY = useTransform(
    scrollYProgress,
    [0.08, 0.12, 0.13, 0.14, 0.32, 0.335, 0.345, 0.355, 0.37, 0.39, 0.41],
    [-300, -100, -50, 0, 0, -50, -110, -160, -180, -190, -200],
  )

  const springImageOneY = useSpring(imageOneY, {
    stiffness: 240,
    damping: 40,
    mass: 1.2,
    restDelta: 0.001,
  })

  const springImageTwoY = useSpring(imageTwoY, {
    stiffness: 220,
    damping: 38,
    mass: 1.3,
    restDelta: 0.001,
  })

  const springImageScale = useSpring(imageScale, {
    stiffness: 300,
    damping: 45,
    mass: 1.1,
    restDelta: 0.001,
  })
  return (
    <motion.section
      className="sticky top-0 bg-white min-h-screen md:h-screen p-4 md:p-10 3xl:p-14 md:overflow-hidden"
      style={
        !isMobile ? { scale: springScale, opacity: opacity, y: y, transformOrigin: 'top' } : {}
      }
    >
      <HorseBg />
      <motion.div className="flex flex-col md:flex-row gap-16">
        <div className="flex items-start justify-between w-full gap-8 xl:gap-24 2xl:gap-36  4xl:gap-64">
          <motion.h2
            className="whitespace-nowrap"
            style={
              !isMobile
                ? {
                    y: springHeaderY,
                    clipPath: headerClipPath,
                    transformOrigin: 'left top',
                  }
                : { y: 0, clipPath: headerClipPath }
            }
          >
            Coord Philosophy
          </motion.h2>

          <div className="hidden md:flex gap-4 xl:gap-10 2xl:gap-12 3xl:gap-16">
            <motion.div
              className="w-1/2 overflow-hidden"
              style={{
                y: springParaOneY,
              }}
            >
              <motion.div style={{ opacity: paraOneOpacity }}>
                <Paragraphs paragraphs={parasOne} className="paragraph" />
              </motion.div>
            </motion.div>

            <motion.div
              className="w-1/2 overflow-hidden"
              style={{
                y: springParaTwoY,
              }}
            >
              <motion.div style={{ opacity: paraTwoOpacity }}>
                <Paragraphs paragraphs={parasTwo} className="paragraph" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:hidden pl-[35%] pb-8 md:pb-0">
          <Paragraphs paragraphs={parasOne} className="paragraph" />
          <Paragraphs paragraphs={parasTwo} className="paragraph" />
        </div>
      </motion.div>

      <div className="md:absolute bottom-0 left-0 p-4 md:p-10 3xl:p-14 flex flex-row gap-5 xl:gap-8 2xl:gap-11 w-full">
        <motion.div
          className="bg-mist-background/10 aspect-[0.76/1] w-1/2 md:max-w-[15%] 2xl:max-w-[20%] relative"
          style={
            !isMobile
              ? { y: springImageOneY, scale: springImageScale, transformOrigin: 'bottom' }
              : {}
          }
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
          className="bg-mist-background/10 aspect-[0.76/1] w-1/2 md:max-w-[15%] 2xl:max-w-[20%] relative"
          style={
            !isMobile
              ? { y: springImageTwoY, scale: springImageScale, transformOrigin: 'bottom' }
              : {}
          }
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

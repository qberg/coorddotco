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
}

const CoordPhil: React.FC<CoordPhilProps> = ({ scrollYProgress }) => {
  // Section scaling with slight wave effect for paper-like quality
  const scale = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.2, 0.22, 0.3, 0.34, 0.38, 0.41, 0.43],
    [0.8, 0.87, 0.94, 1, 1, 0.99, 0.97, 0.85, 0.8],
  )

  // Enhanced opacity transition with slight fluctuation for paper-like quality
  const opacity = useTransform(
    scrollYProgress,
    [0.38, 0.39, 0.41, 0.43, 0.45, 0.46],
    [1, 0.98, 0.75, 0.6, 0.5, 0],
  )

  // Add subtle skew/perspective distortion for paper-like bending
  const rotateX = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.2, 0.3, 0.34, 0.38, 0.41],
    [2, 1, 0, 0, 2, 4, 6],
  )

  // Paper-like wave effect with subtle distortion
  const y = useTransform(
    scrollYProgress,
    [0.32, 0.33, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46],
    [0, -20, -45, -80, -105, -115, -120, -125, -130],
  )

  // Add subtle side movements for paper waviness
  const x = useTransform(
    scrollYProgress,
    [0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44],
    [0, 2, -1, 3, -2, 1, 0],
  )

  // Paper-like flexibility with spring physics
  const springScale = useSpring(scale, {
    stiffness: 120, // Lower stiffness for more paper-like flexibility
    damping: 30, // Lower damping for more natural oscillation
    mass: 1.2, // Slightly higher mass for paper-like inertia
    restDelta: 0.005,
  })

  const springRotateX = useSpring(rotateX, {
    stiffness: 90,
    damping: 20,
    mass: 1,
  })

  const springY = useSpring(y, {
    stiffness: 110,
    damping: 25,
    mass: 1.3,
  })

  const springX = useSpring(x, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  })

  // Header animations with more fluidity
  const headerY = useTransform(scrollYProgress, [0.18, 0.21, 0.23], [100, 25, 0])
  const headerClipPath = useTransform(
    scrollYProgress,
    [0.16, 0.22],
    ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
  )

  const springHeaderY = useSpring(headerY, {
    stiffness: 300,
    damping: 50,
    mass: 1,
    restDelta: 0.001,
  })

  // Add subtle header movement for paper effect
  const headerX = useTransform(
    scrollYProgress,
    [0.32, 0.34, 0.36, 0.38, 0.4, 0.42],
    [0, 1, -1, 2, -1, 0],
  )

  const springHeaderX = useSpring(headerX, {
    stiffness: 70,
    damping: 15,
    mass: 0.7,
  })

  // Paragraph animations
  const paraOneClipPath = useTransform(
    scrollYProgress,
    [0.18, 0.23],
    ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
  )

  const paraTwoClipPath = useTransform(
    scrollYProgress,
    [0.19, 0.24],
    ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
  )

  const paraOneY = useTransform(scrollYProgress, [0.18, 0.23], [30, 0])
  const paraTwoY = useTransform(scrollYProgress, [0.19, 0.24], [30, 0])

  // Add subtle paragraph movement for paper effect
  const paraOneX = useTransform(
    scrollYProgress,
    [0.32, 0.34, 0.36, 0.38, 0.4, 0.42],
    [0, 2, -1, 3, -2, 0],
  )

  const paraTwoX = useTransform(
    scrollYProgress,
    [0.32, 0.34, 0.36, 0.38, 0.4, 0.42],
    [0, 1, -2, 2, -3, 0],
  )

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

  const springParaOneX = useSpring(paraOneX, {
    stiffness: 60,
    damping: 15,
    mass: 0.7,
  })

  const springParaTwoX = useSpring(paraTwoX, {
    stiffness: 65,
    damping: 17,
    mass: 0.75,
  })

  // Image animations with enhanced physical interactions
  // More flexible paper-like effects for images
  const imageScale = useTransform(
    scrollYProgress,
    [0.12, 0.21, 0.23, 0.32, 0.34, 0.36, 0.38, 0.43],
    [0.9, 0.98, 1, 1, 0.98, 0.96, 0.95, 0.94],
  )

  // Enhanced physical movement for images
  const imageOneY = useTransform(
    scrollYProgress,
    [0.12, 0.21, 0.23, 0.32, 0.34, 0.35, 0.36, 0.38, 0.4, 0.42],
    [-225, -25, 0, 0, -50, -110, -160, -180, -190, -200],
  )

  // Second image with slight delay for more natural movement
  const imageTwoY = useTransform(
    scrollYProgress,
    [0.12, 0.21, 0.23, 0.32, 0.335, 0.345, 0.355, 0.37, 0.39, 0.41],
    [-225, -25, 0, 0, -30, -90, -140, -170, -190, -200],
  )

  // Add slight horizontal sway for paper-like movement
  const imageOneX = useTransform(
    scrollYProgress,
    [0.32, 0.34, 0.36, 0.38, 0.4, 0.42],
    [0, 3, -1, 4, -2, 0],
  )

  const imageTwoX = useTransform(
    scrollYProgress,
    [0.32, 0.34, 0.36, 0.38, 0.4, 0.42],
    [0, -2, 3, -3, 1, 0],
  )

  // Spring physics tuned for more paper-like movement
  const springImageOneY = useSpring(imageOneY, {
    stiffness: 160,
    damping: 25,
    mass: 1.1,
    restDelta: 0.001,
  })

  const springImageTwoY = useSpring(imageTwoY, {
    stiffness: 140,
    damping: 23,
    mass: 1.2,
    restDelta: 0.001,
  })

  const springImageOneX = useSpring(imageOneX, {
    stiffness: 50,
    damping: 15,
    mass: 0.6,
  })

  const springImageTwoX = useSpring(imageTwoX, {
    stiffness: 55,
    damping: 17,
    mass: 0.65,
  })

  const springImageScale = useSpring(imageScale, {
    stiffness: 200,
    damping: 35,
    mass: 1,
    restDelta: 0.001,
  })

  // Add slight rotation to enhance paper-like effect
  const imageOneRotate = useTransform(
    scrollYProgress,
    [0.32, 0.34, 0.36, 0.38, 0.4],
    [0, -1, -2, -1.5, -1],
  )

  const imageTwoRotate = useTransform(
    scrollYProgress,
    [0.32, 0.335, 0.355, 0.37, 0.39],
    [0, -0.5, -1.5, -1, -0.5],
  )

  const springImageOneRotate = useSpring(imageOneRotate, {
    stiffness: 100,
    damping: 20,
    mass: 0.8,
  })

  const springImageTwoRotate = useSpring(imageTwoRotate, {
    stiffness: 90,
    damping: 18,
    mass: 0.85,
  })

  return (
    <motion.section
      className="sticky top-0 bg-mist-background min-h-screen md:h-screen p-4 md:p-10 3xl:p-14 md:overflow-hidden"
      style={{
        scale: springScale,
        opacity: opacity,
        y: springY,
        x: springX,
        rotateX: springRotateX,
        transformOrigin: 'left top',
        transformPerspective: '5000px',
      }}
    >
      <HorseBg />

      <motion.div className="flex flex-col md:flex-row gap-16">
        <div className="flex items-start justify-between w-full gap-8 xl:gap-24 2xl:gap-36 4xl:gap-64">
          <motion.h2
            className="whitespace-nowrap"
            style={{
              y: springHeaderY,
              x: springHeaderX,
              clipPath: headerClipPath,
              transformOrigin: 'left top',
            }}
          >
            Coord Philosophy
          </motion.h2>

          <div className="hidden md:flex gap-4 xl:gap-10 2xl:gap-12 3xl:gap-16">
            <motion.div
              className="w-1/2 overflow-hidden"
              style={{
                y: springParaOneY,
                x: springParaOneX,
              }}
            >
              <motion.div style={{ clipPath: paraOneClipPath }}>
                <Paragraphs paragraphs={parasOne} className="paragraph" />
              </motion.div>
            </motion.div>

            <motion.div
              className="w-1/2 overflow-hidden"
              style={{
                y: springParaTwoY,
                x: springParaTwoX,
              }}
            >
              <motion.div style={{ clipPath: paraTwoClipPath }}>
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
          style={{
            y: springImageOneY,
            x: springImageOneX,
            scale: springImageScale,
            rotate: springImageOneRotate,
            transformOrigin: 'bottom center',
            zIndex: 10,
          }}
        >
          <Image
            src="/coord-phil/image1.png"
            alt="Artisan craftwork showcase"
            fill
            priority
            className="object-cover"
            loading="eager"
          />

          {/* Add subtle shadow for depth when pushed up */}
          <motion.div
            className="absolute inset-0 pointer-events-none shadow-lg"
            style={{
              opacity: useTransform(scrollYProgress, [0.32, 0.34, 0.38], [0, 0.3, 0.2]),
            }}
          />
        </motion.div>

        <motion.div
          className="bg-mist-background/10 aspect-[0.76/1] w-1/2 md:max-w-[15%] 2xl:max-w-[20%] relative"
          style={{
            y: springImageTwoY,
            x: springImageTwoX,
            scale: springImageScale,
            rotate: springImageTwoRotate,
            transformOrigin: 'bottom center',
            zIndex: 10,
          }}
        >
          <Image
            src="/coord-phil/image2.png"
            alt="Artisan craftwork showcase"
            fill
            priority
            className="object-cover"
            loading="eager"
          />

          {/* Add subtle shadow for depth when pushed up */}
          <motion.div
            className="absolute inset-0 pointer-events-none shadow-lg"
            style={{
              opacity: useTransform(scrollYProgress, [0.32, 0.335, 0.38], [0, 0.3, 0.2]),
            }}
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

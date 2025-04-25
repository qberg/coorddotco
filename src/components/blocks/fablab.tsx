import HorseBg from '@/components/horse-bg'
import CoordButton from '@/components/ui/coord-button'
import { motion, MotionValue, useTransform } from 'motion/react'
import Image from 'next/image'
import React from 'react'

interface FabLabProps {
  scrollYProgress: MotionValue<number>
  isMobile: boolean
}

const springTransition = {
  type: 'spring',
  duration: 4,
  delay: 0,
  stiffness: 200,
  damping: 40,
  restDelta: 0.01,
}

const defaultViewport = { once: true, amount: 0.6 }

interface DecoImage {
  src: string
  className: string
  motion: {
    initialPos: { x: number; y: number }
    animatePos: { x: string; y: string | number }
    hidden?: boolean
  }
  size: string
  aspectRatio: string
}

const decorativeImages: DecoImage[] = [
  {
    src: '/fablab/bl.png',
    className: 'absolute bottom-10 left-16 md:left-44 2xl:left-56 3xl:left-80',
    motion: {
      initialPos: { x: 0, y: 0 },
      animatePos: { x: '-5%', y: '15%' },
    },
    size: 'w-[188px] md:w-[230px] 2xl:w-[377px] 3xl:w-[500px]',
    aspectRatio: 'aspect-square',
  },
  {
    src: '/fablab/tl.png',
    className: 'absolute left-0 top-28 md:top-10 md:left-8 2xl:left-20 3xl:left-32 -z-10',
    motion: {
      initialPos: { x: 0, y: 0 },
      animatePos: { x: '-30%', y: -10 },
    },
    size: 'w-[210px] md:w-[285px] 2xl:w-[400px] 3xl:w-[600px]',
    aspectRatio: 'aspect-square',
  },
  {
    src: '/fablab/br.png',
    className: 'hidden md:block absolute bottom-0 right-10 2xl:right-10 3xl:right-10 -z-10',
    motion: {
      initialPos: { x: 0, y: 0 },
      animatePos: { x: '15%', y: '5%' },
    },
    size: 'w-[225px] 2xl:w-[360px] 3xl:w-[580px]',
    aspectRatio: 'aspect-[1.5/1]',
  },
  {
    src: '/fablab/tr.png',
    className: 'hidden md:block absolute top-10 right-14 2xl:right-20 3xl:right-20 -z-10',
    motion: {
      initialPos: { x: 0, y: 0 },
      animatePos: { x: '40%', y: '-10%' },
    },
    size: 'w-[225px] 2xl:w-[340px] 3xl:w-[480px]',
    aspectRatio: 'aspect-[0.75/1]',
  },
]

const DecoImageComponent: React.FC<{ image: DecoImage }> = ({ image }) => (
  <motion.div
    className={image.className}
    initial={{ x: image.motion.initialPos.x, y: image.motion.initialPos.y }}
    whileInView={{ x: image.motion.animatePos.x, y: image.motion.animatePos.y }}
    transition={springTransition}
    viewport={defaultViewport}
  >
    <div className={`relative ${image.size} ${image.aspectRatio}`}>
      <Image
        src={image.src}
        alt="Some deco for fablab"
        fill
        priority
        className="object-cover block"
      />
    </div>
  </motion.div>
)

const FabLab: React.FC<FabLabProps> = ({ scrollYProgress, isMobile }) => {
  const scale = useTransform(
    scrollYProgress,
    [0.37, 0.4, 0.42, 0.44, 0.52, 0.55, 0.58],
    [0.8, 0.87, 0.94, 1, 1, 0.95, 0.9],
  )

  const opacity = useTransform(
    scrollYProgress,
    [0.37, 0.4, 0.52, 0.58, 0.59, 0.65],
    [0, 1, 1, 1, 0.8, 0],
  )

  const y = useTransform(scrollYProgress, [0.55, 0.58], [0, 100])

  return (
    <motion.section
      className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center"
      style={{
        ...(isMobile ? {} : { scale, opacity, y }),
        transformOrigin: 'center center',
      }}
    >
      <HorseBg variant="orange" opacity={10} />

      {decorativeImages.map((image, index) => (
        <DecoImageComponent key={index} image={image} />
      ))}

      <div className="py-4 2xl:py-8 px-4 md:px-10 2xl:px-14 flex flex-col">
        <motion.h2
          className="text-white"
          style={{
            fontSize: 'clamp(7.8125rem, 2.9499rem + 19.797vw, 34.625rem)',
            lineHeight: '93%',
          }}
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={springTransition}
          viewport={defaultViewport}
        >
          Fablab
        </motion.h2>

        <motion.div
          className="w-full flex md:justify-end px-3 md:px-0"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={springTransition}
          viewport={defaultViewport}
        >
          <div className="flex flex-col justify-end md:items-start gap-3">
            <h4 className="text-white max-w-[20ch] md:max-w-[50ch]">
              Crafted by Generations, Made for Today
            </h4>

            <p className="max-w-[35ch] md:max-w-[50ch] text-white text-left">
              A space where artisans bring ideas to life with their time-honored skills. Work with
              master craftsmen, discover rare techniques, and keep tradition thriving.
            </p>

            <div className="flex justify-start w-full">
              <CoordButton variant="white" withArrow>
                Contact
              </CoordButton>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default FabLab

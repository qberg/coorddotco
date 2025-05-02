'use client'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import CoordButton from '@/components/ui/coord-button'
import Image from 'next/image'
import { clipPathRevealTB } from '@/motion/variants'
import { useRef } from 'react'
import AppearTitle from '@/motion/appear-title'

const fadeUpVariant = (duration: number, delay: number) => ({
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'easeInOut',
      duration: duration,
      delay: delay,
    },
  },
})

const textRevealVariant = {
  hidden: {
    clipPath: 'inset(15% 0 0 0)',
  },
  visible: {
    clipPath: 'inset(100% 0 0 0)',
    transition: {
      duration: 1.5,
      type: 'spring',
      stiffness: 75,
      damping: 20,
    },
  },
}

const headerStyles = {
  fontSize: 'clamp(6rem, -0.6964rem + 13.9509vw, 21.625rem)',
}

const Hero = () => {
  const coverRef = useRef(null)

  const { scrollYProgress: coverScrollProgress } = useScroll({
    target: coverRef,
    offset: ['start end', 'end start'],
  })

  const coverScale = useTransform(coverScrollProgress, [0, 1], [1, 1.1])

  const smoothCoverScale = useSpring(coverScale, {
    stiffness: 100,
    damping: 20,
  })

  return (
    <section className="relative py-2 md:py-2 sxl:py-4 px-4 md:px-10 4xl:px-14 h-full">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between w-full">
        <div className="relative w-fit h-fit">
          <h1 className="text-highlight leading-[93%]" style={headerStyles}>
            <AppearTitle duration={1.2} delay={0}>
              Fablab
            </AppearTitle>
          </h1>

          <motion.div
            className="absolute bg-white inset-0 z-10"
            variants={textRevealVariant}
            initial="hidden"
            animate="visible"
          />
        </div>

        <div className="flex flex-col gap-4 sxl:gap-8 3xl:gap-12 4xl:gap-14 w-full md:w-[25rem] sxl:w-[40rem] 2xl:w-[48rem] 3xl:w-[56rem] 4xl:w-[64rem]">
          <motion.div
            ref={coverRef}
            className="relative aspect-[1.63/1] md:aspect-[1.8/1] sxl:aspect-[1.63/1] w-full"
            variants={clipPathRevealTB(0.5, 0)}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="absolute inset-0" style={{ scale: smoothCoverScale }}>
              <Image
                src="/fablab/hero-cover.png"
                alt="Fablab hero cover image"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.p
            className="md:pl-[5%] md:pr-[5%] sxl:pl-[15%] sxl:pr-[15%] 2xl:pl-[20%] 2xl:pr-[20%]"
            variants={fadeUpVariant(0.3, 0.5)}
            initial="hidden"
            animate="visible"
          >
            A space designed to bring your craft visions to life. Access resources, prototype
            designs, collaborate with experts, and refine your craft with mentorship.
          </motion.p>

          <motion.div
            className="md:pl-[5%] md:pr-[5%] sxl:pl-[15%] sxl:pr-[15%] 2xl:pl-[20%] 2xl:pr-[20%] flex justify-end"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'easeInOut',
              delay: 0.5,
              duration: 0.4,
            }}
          >
            <CoordButton variant="yellow" withArrow>
              Book a Studio
            </CoordButton>
          </motion.div>
        </div>

        <div className="block md:hidden">
          <HeroDeco />
        </div>
      </div>

      <div className="absolute bottom-0 hidden md:block">
        <HeroDeco />
      </div>
    </section>
  )
}

const HeroDeco = () => {
  const decoRef = useRef(null)

  const { scrollYProgress: decoScrollProgress } = useScroll({
    target: decoRef,
    offset: ['start end', 'end start'],
  })

  const decoScale = useTransform(decoScrollProgress, [0, 1], [1, 1.1])

  const smoothDecoScale = useSpring(decoScale, {
    stiffness: 100,
    damping: 20,
  })

  return (
    <div className="flex gap-8 md:gap-10 sxl:gap-20 2xl:gap-28 3xl:gap-32 4xl:gap-36 py-4">
      <motion.div
        ref={decoRef}
        className="relative aspect-[0.79/1] w-[11rem] md:w-[12rem] sxl:w-[16rem] 2xl:w-[20rem] 3xl:w-[24rem] 4xl:w-[28rem]"
        variants={clipPathRevealTB(0.5, 0)}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="absolute inset-0" style={{ scale: smoothDecoScale }}>
          <Image
            src="/fablab/hero-deco.png"
            alt="Fablab Hero Deco"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.h5
        className="w-2/5 bg-white flex md:items-center md:justify-center md:max-w-[45ch]"
        variants={fadeUpVariant(0.3, 0.5)}
        initial="hidden"
        animate="visible"
      >
        A Fab Lab, or digital fabrication laboratory, is a place to play, to create, to mentor and
        to invent
      </motion.h5>
    </div>
  )
}

export default Hero

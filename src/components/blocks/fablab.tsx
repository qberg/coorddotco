import HorseBg from '@/components/horse-bg'
import CoordButton from '@/components/ui/coord-button'
import { motion, MotionValue, useTransform } from 'motion/react'
import Image from 'next/image'
import React from 'react'

const titleStyle = {
  fontSize: 'clamp(7.8125rem, 2.9499rem + 19.797vw, 34.625rem)',
  lineHeight: '93%',
}

interface FabLabProps {
  scrollYProgress: MotionValue<number>
  isMobile: boolean
}

const FabLab: React.FC<FabLabProps> = ({ scrollYProgress, isMobile }) => {
  const scale = useTransform(scrollYProgress, [0.37, 0.4, 0.42, 0.44], [0.8, 0.87, 0.94, 1])

  return (
    <motion.section
      className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center"
      style={{
        ...(isMobile
          ? {}
          : {
              scale,
            }),
      }}
    >
      <HorseBg variant="orange" opacity="10" />

      {/*Deco Images */}
      <div className="absolute bottom-10 left-16 md:left-44 2xl:left-56 3xl:left-80">
        <motion.div className="relative w-[188px] md:w-[230px] 2xl:w-[377px] 3xl:w-[500px] aspect-square">
          <Image
            src="/fablab/bl.png"
            alt="Some deco for fablab"
            fill
            priority
            className="object-cover block"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute left-0 top-28 md:top-10 md:left-8 2xl:left-20 3xl:left-32 -z-10"
        animate={{ x: '-30%', y: -10 }}
        transition={{ type: 'spring', duration: 2, stiffness: 200, damping: 40, restDelta: 0.01 }}
      >
        <div className="relative aspect-square w-[210px] md:w-[285px] 2xl:w-[400px] 3xl:w-[600px]">
          <Image
            src="/fablab/tl.png"
            alt="Some deco for fablab"
            fill
            priority
            className="object-cover block"
          />
        </div>
      </motion.div>

      <div className="hidden md:block absolute bottom-0 right-10 2xl:right-10 3xl:right-10 -z-10">
        <motion.div className="relative aspect-[1.5/1] w-[225px] 2xl:w-[360px] 3xl:w-[580px]">
          <Image
            src="/fablab/br.png"
            alt="Some deco for fablab"
            fill
            priority
            className="object-cover block"
          />
        </motion.div>
      </div>

      <div className="hidden md:block absolute top-10 right-14 2xl:right-20 3xl:right-20 -z-10">
        <motion.div className="relative aspect-[0.75/1] w-[225px] 2xl:w-[340px] 3xl:w-[480px]">
          <Image
            src="/fablab/tr.png"
            alt="Some deco for fablab"
            fill
            priority
            className="object-cover block"
          />
        </motion.div>
      </div>

      <div className="py-4 2xl:py-8 px-4 md:px-10 2xl:px-14 flex flex-col">
        <h2 className="text-white" style={titleStyle}>
          Fablab
        </h2>

        <div className="w-full flex md:justify-end px-3 md:px-0">
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
        </div>
      </div>
    </motion.section>
  )
}

export default FabLab

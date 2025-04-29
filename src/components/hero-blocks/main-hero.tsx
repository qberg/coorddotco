import CoordLogo from '@/components/coord-logo-text'
import CoordButton from '@/components/ui/coord-button'
import Image from 'next/image'
import { motion, MotionValue, useSpring, useTransform } from 'motion/react'
import React from 'react'

interface MainHeroProps {
  scrollYProgress: MotionValue<number>
  isMobile: boolean
}

const MainHero: React.FC<MainHeroProps> = ({ scrollYProgress, isMobile }) => {
  const scale = useTransform(scrollYProgress, [0.064, 0.17], [0.99, 0.8])
  const opacity = useTransform(
    scrollYProgress,
    [0.106, 0.141, 0.155, 0.16, 0.18],
    [1, 0.75, 0.6, 0.5, 0],
  )
  const y = useTransform(
    scrollYProgress,
    [0.11, 0.14, 0.15, 0.165, 0.18],
    [0, -105, -115, -125, -130],
  )

  const springScale = useSpring(scale, {
    stiffness: 300,
    damping: 50,
    mass: 1,
    restDelta: 0.01,
  })

  return (
    <motion.section
      className="sticky top-[var(--navbar-height)] flex flex-col  px-4 md:px-10 4xl:px-14 min-h-[calc(100svh-var(--navbar-height))] bg-white"
      style={
        !isMobile
          ? {
              scale: springScale,
              opacity: opacity,
              y: y,
              transformOrigin: 'top',
            }
          : { scale: 1, opacity: 1 }
      }
    >
      <motion.div
        className="flex justify-center sm:mt-6 mt-2 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <CoordLogo />
      </motion.div>

      <motion.div
        className="flex-1 relative overflow-hidden"
        layoutId="hero-image-container"
        style={{
          marginTop: 'calc(-1 * clamp(2rem, 0.1578rem + 7.5576vw, 12.25rem))',
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div className="w-full h-full">
          <picture>
            <img
              src="/main-hero/bg-922x1200.png"
              alt="Hero background image"
              className="absolute top-0 left-0 w-full h-full object-cover block lg:hidden"
              loading="eager"
            />
            <motion.img
              layoutId="image"
              transition={{ duration: 0.5, delay: 0.5 }}
              src="/pre-loader/im.png"
              alt="Hero background image"
              className="absolute top-0 left-0 w-full h-full object-cover hidden lg:block"
              loading="eager"
            />

            <motion.div
              layoutId="overlay"
              className="absolute inset-0 bg-black/15"
              transition={{ duration: 0.5, delay: 0.5 }}
            ></motion.div>
          </picture>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col h-full w-full z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 2.5,
          }}
        >
          <div className="flex justify-start md:justify-end items-start mt-14 sm:mt-14 md:mt-14 lg:mt-20 xl:mt-24 3xl:mt-28 4xl:mt-36 pl-[50%] md:pr-[10%]">
            <div className="text-left">
              <p className="mb-4 text-white cta-text">Start a Craft Story With Us</p>
              <CoordButton variant="white" withArrow>
                Contact
              </CoordButton>
            </div>
          </div>
          <div
            className="px-4 md:px-10 text-white w-full absolute bottom-0 pb-4"
            style={{
              maxWidth: 'clamp(48rem, 32rem + 25vw, 72rem)',
            }}
          >
            <h1 className={`text-balance max-w-full break-words`}>
              A Collective for Innovation in Craft
            </h1>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default MainHero

import CoordLogo from '@/components/coord-logo-text'
import CoordButton from '@/components/ui/coord-button'
import Image from 'next/image'
import { motion, MotionValue, useSpring, useTransform } from 'motion/react'
import React from 'react'

interface MainHeroProps {
  scrollYProgress: MotionValue<number> | null
}

const MainHero: React.FC<MainHeroProps> = ({ scrollYProgress }) => {
  // Create a default MotionValue for mobile that stays at 0
  const defaultMotionValue = React.useMemo(() => new MotionValue(0), [])

  // Use the provided scrollYProgress or the default one that doesn't change
  const progress = scrollYProgress || defaultMotionValue

  // Now we can safely use hooks with the guaranteed MotionValue
  const scale = useTransform(progress, [0.091, 0.22], [1, 0.8])
  const opacity = useTransform(progress, [0.15, 0.2, 0.22, 0.24, 0.26], [1, 0.75, 0.6, 0.5, 0])
  const y = useTransform(progress, [0.13, 0.22, 0.23, 0.24, 0.25], [0, -105, -115, -125, -130])

  // Spring animation
  const springScale = useSpring(scale, {
    stiffness: 300,
    damping: 50,
    mass: 1,
    restDelta: 0.01,
  })

  return (
    <motion.section
      className="sticky top-[var(--navbar-height)] flex flex-col px-4 md:px-10 4xl:px-14 min-h-[calc(100svh-var(--navbar-height))]"
      style={{
        scale: springScale,
        opacity: opacity,
        y: y,
        transformOrigin: 'top',
      }}
    >
      <div className="flex justify-center sm:mt-6 mt-2 z-10">
        <CoordLogo />
      </div>
      <div
        className="flex-1 relative overflow-hidden"
        style={{
          marginTop: 'calc(-1 * clamp(2rem, 0.1578rem + 7.5576vw, 12.25rem))',
        }}
      >
        <Image
          src="/main-hero/bg-922x1200.png"
          alt="Hero backround image"
          fill
          priority
          className="object-cover block lg:hidden"
        />
        <Image
          src="/main-hero/bg-big-4896x1664.png"
          alt="Hero backround image"
          fill
          priority
          className="object-cover hidden lg:block"
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="absolute inset-0 flex flex-col h-full w-full z-10">
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
        </div>
      </div>
    </motion.section>
  )
}

export default MainHero

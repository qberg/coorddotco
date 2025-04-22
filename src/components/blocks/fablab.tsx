import HorseBg from '@/components/horse-bg'
import { motion, MotionValue, useTransform } from 'motion/react'
import React from 'react'

interface FabLabProps {
  scrollYProgress: MotionValue<number>
  isMobile: boolean
}

const FabLab: React.FC<FabLabProps> = ({ scrollYProgress, isMobile }) => {
  const scale = useTransform(scrollYProgress, [0.37, 0.4, 0.42, 0.44], [0.8, 0.87, 0.94, 1])

  return (
    <motion.section
      className="sticky top-0 h-screen overflow-hidden"
      style={{
        ...(isMobile
          ? {}
          : {
              scale,
            }),
      }}
    >
      <HorseBg variant="orange" />
      <div className="py-4 2xl:py-8 px-4 md:px-10 2xl:px-14">
        <h2>Fablab</h2>
      </div>
    </motion.section>
  )
}

export default FabLab

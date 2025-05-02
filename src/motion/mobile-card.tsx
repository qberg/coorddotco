'use client'

import { motion } from 'motion/react'

interface MobileCardProps {
  children: React.ReactNode
  index: number
  isVisible: boolean
}

const MobileCard: React.FC<MobileCardProps> = ({ children, index, isVisible }) => {
  const delay = 0.2 + index * 0.1

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={
        isVisible
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 30,
            }
      }
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

export default MobileCard

'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface StaggeredCardProps {
  children: React.ReactNode
  index: number
}

const StaggeredCard: React.FC<StaggeredCardProps> = ({ children, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, {
    once: false,
    amount: 0.01,
    margin: '0px 0px -100px 0px',
  })

  const delay = index * 0.01

  return (
    <motion.div
      ref={cardRef}
      initial={{
        x: '25%',
        opacity: 0,
      }}
      animate={
        isInView
          ? {
              x: '0%',
              opacity: 1,
            }
          : {
              x: '25%',
              opacity: 0,
            }
      }
      transition={{
        duration: 0.4,
        delay: delay,
        type: 'spring',
        stiffness: 150,
        damping: 60,
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

export default StaggeredCard

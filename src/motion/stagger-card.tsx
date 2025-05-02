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
    amount: 0.1,
    margin: '0px 0px -100px 0px',
  })

  const delay = index * 0.1

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 20,
        x: 75,
        scale: 0.95,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: 20,
              x: 75,
              scale: 0.95,
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

export default StaggeredCard

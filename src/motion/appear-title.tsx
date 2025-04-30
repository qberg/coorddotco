'use client'

import { motion, useAnimation, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

interface AppearTitleProps {
  children: React.ReactNode
  visible?: boolean
  className?: string
  delay?: number
  duration?: number
}

const AppearTitle: React.FC<AppearTitleProps> = ({
  children,
  visible = true,
  className = '',
  delay = 0,
  duration = 1,
}) => {
  const controls = useAnimation()
  const titleRef = useRef(null)

  const isInView = useInView(titleRef, {
    once: true,
    amount: 0.01,
  })

  useEffect(() => {
    if (isInView && visible) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, isInView, visible])

  const titleVariants = {
    hidden: { y: '95%' },
    visible: {
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        type: 'spring',
        stiffness: 300,
        damping: 60,
        restDelta: 0.01,
      },
    },
  }

  return (
    <div className={`overflow-hidden inline-block ${className}`}>
      <motion.div
        ref={titleRef}
        initial="hidden"
        animate={controls}
        variants={titleVariants}
        style={{ display: 'inline-block' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default AppearTitle

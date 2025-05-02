'use client'
import { motion, useAnimation, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'
interface AppearTextProps {
  children: React.ReactNode
  visible?: boolean
  className?: string
  delay?: number
  duration?: number
}

const AppearText: React.FC<AppearTextProps> = ({
  children,
  visible = true,
  className = '',
  delay = 0,
  duration = 1,
}) => {
  const controls = useAnimation()
  const textRef = useRef(null)
  const isInView = useInView(textRef, {
    once: true,
    amount: 0.1,
  })

  useEffect(() => {
    if (isInView && visible) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, isInView, visible])

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
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
    <motion.div
      ref={textRef}
      initial="hidden"
      animate={controls}
      variants={textVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AppearText

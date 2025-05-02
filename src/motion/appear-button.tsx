'use client'
import { motion, useAnimation, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

interface AppearButtonProps {
  children: React.ReactNode
  visible?: boolean
  delay?: number
  duration?: number
}

const AppearButton: React.FC<AppearButtonProps> = ({
  children,
  visible = true,
  delay = 0,
  duration = 0.8,
}) => {
  const controls = useAnimation()
  const buttonRef = useRef(null)
  const isInView = useInView(buttonRef, {
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

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        type: 'spring',
        stiffness: 400,
        damping: 50,
        restDelta: 0.01,
      },
    },
  }

  return (
    <motion.div ref={buttonRef} initial="hidden" animate={controls} variants={buttonVariants}>
      {children}
    </motion.div>
  )
}

export default AppearButton

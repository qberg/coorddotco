'use client'
import { motion, useAnimation, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

import {
  clipPathRevealBT,
  clipPathRevealLR,
  clipPathRevealRL,
  clipPathRevealTB,
} from '@/motion/variants'

interface ClipRevealProps {
  children: React.ReactNode
  visible?: boolean
  delay?: number
  duration?: number
  direction?: 'TB' | 'BT' | 'LR' | 'RL'
}

const ClipReveal: React.FC<ClipRevealProps> = ({
  children,
  visible = true,
  delay = 0,
  duration = 1,
  direction = 'TB',
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, {
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

  const getVariants = () => {
    switch (direction) {
      case 'TB':
        return clipPathRevealTB(duration, delay)
      case 'BT':
        return clipPathRevealBT(duration, delay)
      case 'LR':
        return clipPathRevealLR(duration, delay)
      case 'RL':
        return clipPathRevealRL(duration, delay)
      default:
        return clipPathRevealTB(duration, delay)
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  )
}

export default ClipReveal

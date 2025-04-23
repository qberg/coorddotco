'use client'
import { motion, useMotionValue, useTransform } from 'motion/react'
import React, { useEffect, useState } from 'react'

interface PreLoaderProps {
  setIsLoading: (_: boolean) => void
}

const PreLoader: React.FC<PreLoaderProps> = ({ setIsLoading }) => {
  // Use motion values for smooth animation without re-renders
  const progress = useMotionValue(0)
  const percentage = useTransform(progress, (value) => Math.round(value * 100))
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // Set the duration to match the container animation duration (1 second)
    const duration = 2000 // 1 second in milliseconds
    const startTime = Date.now()

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min(elapsed / duration, 1)
      progress.set(newProgress)

      if (newProgress < 1) {
        requestAnimationFrame(updateProgress)
      } else {
        // When progress reaches 100%, wait a moment before fading out
        setTimeout(() => {
          setIsAnimating(false)
        }, 300)
      }
    }

    const animationFrame = requestAnimationFrame(updateProgress)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [progress])

  return (
    <div className="fixed inset-0 h-screen w-screen flex items-center justify-center overflow-hidden px-4 md:px-10 4xl:px-14">
      {/* Percentage counter positioned at the top */}
      <motion.div
        className="fixed bottom-4 left-0 w-full flex justify-center items-center z-20"
        initial={{ opacity: 1 }}
        animate={{ opacity: isAnimating ? 1 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-36 md:w-48 mt-2">
            <span className="text-black font-playfair font-bold tracking-widest uppercase">
              Loading
            </span>
            <motion.span className="text-black font-playfair font-bold tracking-widest">
              <motion.span>{percentage}</motion.span>%
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Main hero image container */}
      <motion.div
        layoutId="hero-image-container"
        className="relative overflow-hidden"
        initial={{ width: '613px', height: '345px' }}
        animate={{ width: '97%', height: '90vh' }}
        transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }}
        exit={{
          y: '26vh',
          height: '47vh',
          transition: {
            duration: 2,
            delay: 1,
          },
        }}
        onAnimationComplete={() => {
          setTimeout(() => {
            setIsLoading(false)
          }, 500)
        }}
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
              src="/pre-loader/im.png"
              alt="Hero background image"
              className="absolute top-0 left-0 w-full h-full object-cover hidden lg:block"
              loading="eager"
            />
          </picture>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PreLoader

import { motion } from 'motion/react'
import React from 'react'

interface PreLoaderProps {
  setIsLoading: (_: boolean) => void
}

const PreLoader: React.FC<PreLoaderProps> = ({ setIsLoading }) => {
  return (
    <motion.div
      key="loader"
      className="flex flex-col bg-orange-background items-center justify-center h-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0.5,
        y: '-100%',
        transition: { duration: 1.0 },
      }}
    >
      <motion.div
        className="w-24 h-24 border-t-4 border-white rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1.5,
          repeat: 2, // Limited repeats so it can complete
          ease: 'linear',
        }}
      />
      <motion.h1
        className="mt-8 font-bold text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.5 },
        }}
        onAnimationComplete={() => setIsLoading(false)}
      >
        COORD
      </motion.h1>
    </motion.div>
  )
}

export default PreLoader

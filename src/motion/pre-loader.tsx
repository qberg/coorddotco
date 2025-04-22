'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

interface PreLoaderProps {
  setIsLoading: (_: boolean) => void
}

const PreLoader: React.FC<PreLoaderProps> = ({ setIsLoading }) => {
  return (
    <div className="inset-0 h-screen flex items-center justify-center bg-white overflow-hidden">
      <motion.div
        layoutId="hero-image-container"
        className="relative overflow-hidden"
        initial={{ width: '600px', height: '350px' }}
        animate={{ width: '95vw', height: '95vh' }}
        transition={{ duration: 1 }}
        exit={{
          width: '95vw',
          height: '44vh',
          y: '22vh',
          transition: {
            duration: 1,
            delay: 0,
          },
          transformOrigin: 'top',
        }}
        onAnimationComplete={() => {
          setIsLoading(false)
        }}
      >
        <div className="w-full h-full bg-green-50">
          <Image
            src="/main-hero/bg-big-4896x1664.png"
            alt="Loading image"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default PreLoader

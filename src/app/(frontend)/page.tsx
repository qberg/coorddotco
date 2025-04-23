'use client'
import React, { useState } from 'react'
import StartPage from '@/components/pages/start-page'
import { motion, AnimatePresence } from 'motion/react'
import PreLoader from '@/motion/pre-loader'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div key="pre-loader">
          <PreLoader setIsLoading={setIsLoading} />
        </motion.div>
      ) : (
        <motion.div key="content">
          <StartPage />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

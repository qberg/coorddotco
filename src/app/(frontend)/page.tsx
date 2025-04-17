'use client'
import React, { useState } from 'react'

import StartPage from '@/components/pages/start-page'
import { AnimatePresence } from 'motion/react'
import PreLoader from '@/motion/pre-loader'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <PreLoader key="loader" setIsLoading={setIsLoading} />
        ) : (
          <StartPage key="page" />
        )}
      </AnimatePresence>
    </>
  )
}

'use client'
import CoordCommunity from '@/components/blocks/coord-communty'
import CoordPhil from '@/components/blocks/coord-phil'
import DiscoverArtisans from '@/components/blocks/discover-artisan'
import FabLab from '@/components/blocks/fablab'
import Library from '@/components/blocks/library'
import Services from '@/components/blocks/services'
import MainHero from '@/components/hero-blocks/main-hero'
import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { useRef } from 'react'
import { useScroll } from 'motion/react'
import useIsMobile from '@/hooks/useIsMobile'
import useScrollLogger from '@/hooks/useScrollLogger'
import { motion } from 'motion/react'

const StartPage = () => {
  const mainContainerRef = useRef(null)
  const isMobile = useIsMobile()

  const { scrollYProgress } = useScroll({
    target: mainContainerRef,
    offset: ['start end', 'end start'],
  })

  useScrollLogger(scrollYProgress, 'Main Container Scroll', 100)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <Header />
      </motion.div>
      <main ref={mainContainerRef} className="relative md:h-[1200vh]">
        <MainHero scrollYProgress={scrollYProgress} isMobile={isMobile} />
        <CoordPhil scrollYProgress={scrollYProgress} isMobile={isMobile} />
        <div className="hidden md:block h-[100vh]" />
        <Library scrollYProgress={scrollYProgress} isMobile={isMobile} />
        <div className="hidden md:block h-[100vh]" />
        <FabLab scrollYProgress={scrollYProgress} isMobile={isMobile} />
        <div className="hidden md:block h-[100vh]" />
        <Services />
        <div className="hidden md:block h-[100vh]" />
        <DiscoverArtisans />
        <div className="hidden md:block h-[100vh]" />
        <CoordCommunity />
      </main>
      <Footer />
    </>
  )
}

export default StartPage

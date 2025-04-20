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
import { useRef } from 'react'
import { useScroll } from 'motion/react'
import useIsMobile from '@/hooks/useIsMobile'
import useScrollLogger from '@/hooks/useScrollLogger'

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
      <Header />
      <main ref={mainContainerRef} className="relative md:h-[850vh]">
        <MainHero scrollYProgress={scrollYProgress} isMobile={isMobile} />
        <CoordPhil scrollYProgress={scrollYProgress} isMobile={isMobile} />
        <div className="hidden md:block h-[100vh]" />
        <Library scrollYProgress={scrollYProgress} isMobile={isMobile} />
        <div className="hidden md:block h-[50vh]" />
        <Services />
        <FabLab />
        <DiscoverArtisans />
        <CoordCommunity />
      </main>
      <Footer />
    </>
  )
}

export default StartPage

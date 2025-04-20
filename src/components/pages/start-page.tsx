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

const StartPage = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: mainContainerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <>
      <Header />
      <main ref={mainContainerRef} className="relative h-[800vh]">
        <MainHero scrollYProgress={scrollYProgress} />
        <CoordPhil scrollYProgress={scrollYProgress} />
        <div className="h-[100vh]" />
        <Library scrollYProgress={scrollYProgress} />
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

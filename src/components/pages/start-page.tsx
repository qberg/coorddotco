'use client'
import CoordCommunity from '@/components/blocks/coord-communty'
import CoordPhil from '@/components/blocks/coord-phil'
import DiscoverArtisans from '@/components/blocks/discover-artisan'
import FabLab from '@/components/blocks/fablab'
import Library from '@/components/blocks/library'
import Services from '@/components/blocks/services'
import MainHero from '@/components/hero-blocks/main-hero'
import { useEffect, useRef } from 'react'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Footer from '@/components/footer'

// Import type for Locomotive Scroll
import type LocomotiveScroll from 'locomotive-scroll'

const StartPage = () => {
  // Specify the correct type for the container ref
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Define a variable to hold the instance with proper typing
    let locomotiveScroll: LocomotiveScroll | null = null

    // Define event handlers outside of the async function so we can reference them for cleanup
    const handleLoad = () => {
      if (locomotiveScroll) locomotiveScroll.update()
    }

    const handleResize = () => {
      if (locomotiveScroll) {
        setTimeout(() => locomotiveScroll?.update(), 500)
      }
    }

    // Initialize Locomotive Scroll
    const initLocomotiveScroll = async () => {
      try {
        // Properly import the module with type safety
        const LocomotiveScrollModule = (await import('locomotive-scroll')).default

        // Make sure the container exists before initializing
        if (!containerRef.current) return

        // Initialize with proper typing for options
        locomotiveScroll = new LocomotiveScrollModule({
          el: containerRef.current,
          smooth: true,
          multiplier: 1,
          lerp: 0.05,
          getDirection: true,
          getSpeed: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
            breakpoint: 640,
          },
        })

        // Initial update with delay
        setTimeout(() => {
          locomotiveScroll?.update()
        }, 1000)

        // Add event listeners
        window.addEventListener('load', handleLoad)
        window.addEventListener('resize', handleResize)
      } catch (error) {
        console.error('Failed to initialize Locomotive Scroll:', error)
      }
    }

    // Call the initialization function
    initLocomotiveScroll()

    // Cleanup function
    return () => {
      // Remove event listeners using the same function references
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('resize', handleResize)

      // Destroy the instance if it exists
      if (locomotiveScroll) {
        locomotiveScroll.destroy()
      }
    }
  }, [])

  return (
    <div data-scroll-container ref={containerRef}>
      <div data-scroll-section>
        <MainHero />
      </div>
      <div data-scroll-section>
        <CoordPhil />
      </div>
      <div data-scroll-section>
        <Library />
      </div>
      <div data-scroll-section>
        <Services />
      </div>
      <div data-scroll-section>
        <FabLab />
      </div>
      <div data-scroll-section>
        <DiscoverArtisans />
      </div>
      <div data-scroll-section>
        <CoordCommunity />
      </div>
      <div data-scroll-section>
        <Footer />
      </div>
    </div>
  )
}

export default StartPage

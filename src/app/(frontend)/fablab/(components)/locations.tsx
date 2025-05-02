'use client'
import Image from 'next/image'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { clipPathRevealTB, fadeUpVariant } from '@/motion/variants'
import { useRef } from 'react'
import useIsMobile from '@/hooks/useIsMobile'

const defaultViewport = {
  once: true,
  amount: 0.01,
}

const Locations = () => {
  const mapRef = useRef(null)
  const isMobile = useIsMobile()

  const { scrollYProgress: mapScrollProgress } = useScroll({
    target: mapRef,
    offset: ['start end', 'end start'],
  })

  const mapScale = useTransform(mapScrollProgress, [0, 1], [1, 1.1])
  const smoothMapScale = useSpring(mapScale, {
    stiffness: 100,
    damping: 20,
  })

  return (
    <section className="relative py-4 sxl:py-10 px-4 md:px-10 4xl:px-14 w-full flex flex-col gap-8 md:gap-10 overflow-hidden">
      <motion.h2
        className="text-highlight"
        variants={fadeUpVariant(0.4, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        Explore Fablab
      </motion.h2>

      <motion.div
        ref={mapRef}
        className="relative w-full aspect-[0.5/1] md:aspect-[1.85/1]"
        variants={clipPathRevealTB(1.5, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <motion.div className="absolute inset-0" style={{ scale: smoothMapScale }}>
          <Image
            src={isMobile ? '/fablab/location.png' : '/fablab/location-desktop.png'}
            alt="Fablab Locations"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Locations

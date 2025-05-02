'use client'
import useMeasure from 'react-use-measure'
import { motion, useScroll, useTransform } from 'motion/react'
import ServicesHero from '@/app/(frontend)/services/(components)/hero'
import Header from '@/components/header'
import BreadCrumb from '@/app/(frontend)/services/(components)/breadcrumb'
import useIsMobile from '@/hooks/useIsMobile'
import ServiceInfoM from '@/app/(frontend)/services/(components)/service-info-motion'
import Image from 'next/image'
import { useRef } from 'react'
import Footer from '@/components/footer'

const Page = () => {
  const [headerRef, headerBounds] = useMeasure()
  const [breadCrumbRef, breadCrumbBounds] = useMeasure()

  const pageRef = useRef<HTMLElement>(null)
  const csScrollDetectorRef = useRef<HTMLDivElement>(null)
  const ccScrollDetectorRef = useRef<HTMLDivElement>(null)
  const boScrollDetectorRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const headerHeight = headerBounds?.height || 0
  const breadCrumbHeight = breadCrumbBounds?.height || 0
  const remainingHeight = `calc(100vh - ${headerHeight}px - ${breadCrumbHeight}px)`

  const { scrollYProgress: csDetectorScrollProgress } = useScroll({
    target: csScrollDetectorRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: ccDetectorScrollProgress } = useScroll({
    target: ccScrollDetectorRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: boDetectorScrollProgress } = useScroll({
    target: boScrollDetectorRef,
    offset: ['start end', 'end start'],
  })

  // Transform properties for the first background (Customer Service)
  const bg1Opacity = useTransform(csDetectorScrollProgress, [0.15, 0.25, 0.95, 1], [0, 1, 1, 0])
  const bg1Scale = useTransform(csDetectorScrollProgress, [0, 0.85], [1.25, 1])
  const bg1Y = useTransform(csDetectorScrollProgress, [0, 0.85], ['0%', '-5%'])

  // Transform properties for the second background (Custom Crafts)
  const bg2Opacity = useTransform(ccDetectorScrollProgress, [0.15, 0.25, 0.95, 1], [0, 1, 1, 0])
  const bg2Scale = useTransform(ccDetectorScrollProgress, [0, 0.85], [1.25, 1])
  const bg2Y = useTransform(ccDetectorScrollProgress, [0, 0.85], ['0%', '-5%'])

  // Transform properties for the third background (Bulk Ordering)
  const bg3Opacity = useTransform(boDetectorScrollProgress, [0.15, 0.25, 0.95, 1], [0, 1, 1, 0])
  const bg3Scale = useTransform(boDetectorScrollProgress, [0, 0.85], [1.25, 1])
  const bg3Y = useTransform(boDetectorScrollProgress, [0, 0.85], ['0%', '-5%'])

  return (
    <main ref={pageRef} className="relative">
      <motion.div
        className="fixed inset-0 w-full h-full -z-10"
        style={{ opacity: bg1Opacity, scale: bg1Scale, y: bg1Y }}
      >
        <Image
          src="/services/fs1.png"
          alt="Services Background Image 1"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="fixed inset-0 w-full h-full -z-10"
        style={{ opacity: bg2Opacity, scale: bg2Scale, y: bg2Y }}
      >
        <Image
          src="/services/fs2.png"
          alt="Services Background Image 2"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className="fixed inset-0 w-full h-full -z-10"
        style={{ opacity: bg3Opacity, scale: bg3Scale, y: bg3Y }}
      >
        <Image
          src="/services/fs3.png"
          alt="Services Background Image 3"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Header and BreadCrumb */}
      <div ref={headerRef}>
        <Header />
      </div>
      <div ref={breadCrumbRef}>
        <BreadCrumb />
      </div>

      {/* Hero Section */}
      <div style={!isMobile ? { height: remainingHeight } : {}}>
        <ServicesHero />
      </div>

      {/* First Section - Customer Service */}
      <div
        ref={csScrollDetectorRef}
        className="absolute left-0 w-full pointer-events-none"
        style={{
          top: '200vh',
          height: '300vh',
        }}
      />

      <div className="relative">
        <ServiceInfoM />
      </div>

      <div className="h-screen" />

      {/* Second Section - Custom Crafts */}
      <div
        ref={ccScrollDetectorRef}
        className="absolute left-0 w-full pointer-events-none"
        style={{
          top: '500vh',
          height: '250vh',
        }}
      />

      <div className="relative">
        <ServiceInfoM />
      </div>

      <div className="h-screen" />

      {/* Third Section - Bulk Ordering */}
      <div
        ref={boScrollDetectorRef}
        className="absolute left-0 w-full pointer-events-none"
        style={{
          top: '750vh',
          height: '300vh',
        }}
      />

      <div className="relative">
        <ServiceInfoM />
      </div>

      <div className="h-screen" />

      <Footer />
    </main>
  )
}

export default Page

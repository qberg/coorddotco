'use client'

import { motion, AnimatePresence, MotionValue, useTransform, useSpring } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useCallback, useRef } from 'react'

const cardStyle = {
  width: 'clamp(14.25rem, 10.9402rem + 13.4749vw, 32.5rem)',
}

const fontStyle = {
  fontSize: 'clamp(0.75rem, 0.614rem + 0.5538vw, 1.5rem)',
}

interface Slide {
  smSrc: string
  lgSrc: string
  alt: string
}

const slides: Slide[] = [
  {
    smSrc: '/library/slides/smim1.png',
    lgSrc: '/library/slides/lgim1.png',
    alt: 'Library Showcase Image',
  },
  {
    smSrc: '/library/slides/smim2.png',
    lgSrc: '/library/slides/lgim2.png',
    alt: 'Library Showcase Image',
  },
  {
    smSrc: '/library/slides/smim3.png',
    lgSrc: '/library/slides/lgim3.png',
    alt: 'Library Showcase Image',
  },
  {
    smSrc: '/library/slides/smim4.png',
    lgSrc: '/library/slides/lgim4.png',
    alt: 'Library Showcase Image',
  },
]

const cardOne = {
  title: 'Search by Location',
  href: '/library',
  desc: 'Every region carries its own craft legacy. Explore artisans and time-honored traditions rooted in the landscapes of India, from the intricate weaves of Kutch to the delicate woodwork of Kashmir, the finesse of Pathamadai Pai in Tamil Nadu to the timeless glow of Pembarthi brass in Telangana.',
}

const cardTwo = {
  title: 'Search by Composition',
  href: '/library',
  desc: "Materials tell stories of the land and its people. Whether it's the richness of handwoven textiles, the resilience of terracotta, the finesse of metalwork, or the artistry of lacquered wood, find crafts defined by the elements they are born from.",
}

interface LibraryProps {
  scrollYProgress: MotionValue<number>
  isMobile: boolean
}

const Library: React.FC<LibraryProps> = ({ scrollYProgress, isMobile }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [previousSlideIndex, setPreviousSlideIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Base scaling animations
  const scale = useTransform(scrollYProgress, [0.22, 0.25, 0.27, 0.29], [0.8, 0.87, 0.94, 1])
  const springScale = useSpring(scale, {
    stiffness: 200,
    damping: 50,
    mass: 1.5,
    restDelta: 0.01,
  })

  const bgScale = useTransform(scrollYProgress, [0.22, 0.28, 0.29], [1.4, 1.05, 1])
  const springBgScale = useSpring(bgScale, {
    stiffness: 300,
    damping: 45,
    mass: 1,
    restDelta: 0.01,
  })

  // Header animations
  const headerY = useTransform(scrollYProgress, [0.25, 0.27, 0.29], [100, 25, 0])
  const headerClipPath = useTransform(
    scrollYProgress,
    [0.24, 0.28],
    ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
  )
  const springHeaderY = useSpring(headerY, {
    stiffness: 300,
    damping: 50,
    mass: 1,
    restDelta: 0.001,
  })

  // Thumbnail animations
  const thumbnailX = useTransform(scrollYProgress, [0.29, 0.31], [-150, 0])
  const springThumbnailX = useSpring(thumbnailX, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
    restDelta: 0.01,
  })

  // Enhanced card animations with staggered timing and parallax
  const cardOneY = useTransform(scrollYProgress, [0.25, 0.29, 0.3], [250, 70, 0])
  const cardTwoY = useTransform(scrollYProgress, [0.25, 0.29, 0.31], [180, 60, 0])

  const cardOneX = useTransform(scrollYProgress, [0.25, 0.31], [-30, 0])
  const cardTwoX = useTransform(scrollYProgress, [0.25, 0.31], [30, 0])

  const springCardOneY = useSpring(cardOneY, {
    stiffness: 180,
    damping: 60,
    mass: 1,
    restDelta: 0.01,
  })

  const springCardTwoY = useSpring(cardTwoY, {
    stiffness: 160,
    damping: 55,
    mass: 1,
    restDelta: 0.01,
  })

  const springCardOneX = useSpring(cardOneX, {
    stiffness: 200,
    damping: 65,
    mass: 1,
    restDelta: 0.01,
  })

  const springCardTwoX = useSpring(cardTwoX, {
    stiffness: 190,
    damping: 60,
    mass: 1,
    restDelta: 0.01,
  })

  // Parallax effect for card content
  const cardOneContentY = useTransform(scrollYProgress, [0.26, 0.32], [20, 0])
  const cardTwoContentY = useTransform(scrollYProgress, [0.26, 0.32], [25, 0])

  const springCardOneContentY = useSpring(cardOneContentY, {
    stiffness: 220,
    damping: 70,
    mass: 0.8,
    restDelta: 0.01,
  })

  const springCardTwoContentY = useSpring(cardTwoContentY, {
    stiffness: 210,
    damping: 65,
    mass: 0.8,
    restDelta: 0.01,
  })

  const handleThumbnailClick = useCallback(
    (index: number) => {
      if (index === currentSlideIndex) return
      console.log('Thumbnail clicked:', index)
      setPreviousSlideIndex(currentSlideIndex)
      setCurrentSlideIndex(index)
    },
    [currentSlideIndex],
  )

  // Removed mouse-based parallax effect

  return (
    <motion.section
      ref={containerRef}
      className="sticky top-0 py-4 2xl:py-8 px-4 md:px-10 4xl:px-14 h-screen overflow-hidden"
      style={
        !isMobile
          ? {
              scale: springScale,
              transformOrigin: 'top',
            }
          : { scale: 1 }
      }
    >
      {/* Background Image with enhanced transitions */}
      <motion.div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={
          !isMobile
            ? {
                scale: springBgScale,
              }
            : {}
        }
      >
        <AnimatePresence mode="sync">
          {previousSlideIndex !== null && (
            <motion.div
              key={`previous-${previousSlideIndex}`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={isMobile ? slides[previousSlideIndex].smSrc : slides[previousSlideIndex].lgSrc}
                alt={slides[previousSlideIndex].alt}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          )}
          <motion.div
            key={`current-${currentSlideIndex}`}
            initial={previousSlideIndex !== null ? { opacity: 1, scale: 0.25 } : { opacity: 1 }}
            animate={{ opacity: 1, scale: 1.0 }}
            transition={{
              duration: 0.7,
              type: 'spring',
              stiffness: 200,
              damping: 100,
              restDelta: 0.01,
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={isMobile ? slides[currentSlideIndex].smSrc : slides[currentSlideIndex].lgSrc}
              alt={slides[currentSlideIndex].alt}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="relative flex flex-col h-full gap-28 md:gap-24 2xl:gap-28 3xl:gap-32 pb-8 md:pb-0">
        <motion.h2
          className=""
          style={
            !isMobile
              ? {
                  clipPath: headerClipPath,
                  transformOrigin: 'left top',
                  y: springHeaderY,
                }
              : {}
          }
        >
          Library
        </motion.h2>

        <div className="block md:hidden absolute top-0 right-0">
          <Thumbnails
            slides={slides}
            activeIndex={currentSlideIndex}
            onThumbnailClick={handleThumbnailClick}
          />
        </div>

        <div className="flex-1 flex flex-col gap-3 justify-between md:flex-row md:justify-end md:items-stretch relative md:gap-14 3xl:gap-20 xl:mr-16 2xl:mr-24">
          <motion.div
            className="hidden md:block absolute top-0 left-0"
            style={{ x: springThumbnailX }}
          >
            <Thumbnails
              slides={slides}
              activeIndex={currentSlideIndex}
              onThumbnailClick={handleThumbnailClick}
            />
          </motion.div>

          {/* Enhanced Card One with parallax and hover effects */}
          <motion.div
            className=""
            style={
              !isMobile
                ? {
                    y: springCardOneY,
                    x: springCardOneX,
                  }
                : {}
            }
          >
            <LibCard {...cardOne} contentYTransform={springCardOneContentY} />
          </motion.div>

          {/* Enhanced Card Two with parallax and hover effects */}
          <motion.div
            className="flex justify-end md:items-end 2xl:pb-4 3xl:pb-16"
            style={
              !isMobile
                ? {
                    y: springCardTwoY,
                    x: springCardTwoX,
                  }
                : {}
            }
          >
            <LibCard {...cardTwo} contentYTransform={springCardTwoContentY} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

interface ThumbnailsProps {
  slides: Slide[]
  activeIndex: number
  onThumbnailClick: (index: number) => void
}

const Thumbnails: React.FC<ThumbnailsProps> = ({ slides, activeIndex, onThumbnailClick }) => {
  return (
    <div className="flex flex-col gap-2 justify-start z-20">
      {slides.map((slide, index) => (
        <motion.button
          key={index}
          type="button"
          initial={{ opacity: 0.7, y: 10 }}
          animate={{
            opacity: activeIndex === index ? 1 : 0.8,
            y: 0,
            scale: activeIndex === index ? 1.05 : 1,
          }}
          whileHover={{
            opacity: 1,
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: index * 0.1,
          }}
          className={`relative w-14 2xl:w-20 3xl:w-28 aspect-[3/4] cursor-pointer overflow-hidden border-0 p-0 ${
            activeIndex === index ? 'ring-2 ring-white' : ''
          }`}
          onClick={() => {
            console.log('Clicking thumbnail:', index)
            onThumbnailClick(index)
          }}
          aria-label={`View slide ${index + 1}`}
        >
          <motion.div
            className="absolute inset-0 bg-white z-10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeIndex === index ? 0.2 : 0,
            }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 200, damping: 100 }}
          />

          <Image
            src={slide.smSrc}
            alt={slide.alt}
            fill
            priority
            className="object-cover pointer-events-none"
          />

          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-highlight"
            initial={{ width: '0%' }}
            animate={{
              width: activeIndex === index ? '100%' : '0%',
            }}
            transition={{ duration: 1, type: 'spring', stiffness: 200, damping: 100 }}
          />
        </motion.button>
      ))}
    </div>
  )
}

interface LibCardProps {
  title: string
  href: string
  desc: string
  contentYTransform?: MotionValue<number>
}

const LibCard: React.FC<LibCardProps> = ({ title, href, desc, contentYTransform }) => {
  return (
    <Link
      href={href}
      className="bg-blue-background relative p-5 flex flex-col justify-between items-start gap-14 aspect-[7/8] md:aspect-[69/100] md:max-h-[60vh] overflow-hidden"
      style={cardStyle}
    >
      {/* Card content with parallax effect */}
      <motion.div
        className="relative z-10 flex flex-col justify-between h-full w-full"
        style={contentYTransform ? { y: contentYTransform } : {}}
      >
        <h3 className="text-white">{title}</h3>

        <div
          className="text-mist-background font-hanken font-extralight leading-[1.2]"
          style={fontStyle}
        >
          {desc}
        </div>
      </motion.div>
    </Link>
  )
}

export default Library

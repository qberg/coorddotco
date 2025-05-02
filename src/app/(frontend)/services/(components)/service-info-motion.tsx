'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform, useAnimation } from 'motion/react'
import HorseBg from '@/components/horse-bg'
import CoordButton from '@/components/ui/coord-button'
import useIsMobile from '@/hooks/useIsMobile'
import Card from '@/app/(frontend)/services/(components)/card'
import AppearTitle from '@/motion/appear-title'

const ServiceInfo = () => {
  const outerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const [containerWidth, setContainerWidth] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, {
    once: false,
    amount: 0.3,
  })

  useEffect(() => {
    if (headerInView) {
      setIsVisible(true)
    }
  }, [headerInView])

  useEffect(() => {
    const updateMeasurements = () => {
      if (isMobile || !cardsRef.current || !containerRef.current) return

      const containerW = containerRef.current.offsetWidth
      const scrollW = cardsRef.current.scrollWidth

      setContainerWidth(containerW)
      setScrollWidth(scrollW)

      const totalScrollDistance = scrollW - containerW
      setScrollHeight(window.innerHeight + totalScrollDistance)
    }

    updateMeasurements()
    window.addEventListener('resize', updateMeasurements)

    return () => {
      window.removeEventListener('resize', updateMeasurements)
    }
  }, [isMobile])

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start end', 'end start'],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      console.log('Info scrollYProgress:', value)
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  const x = useTransform(scrollYProgress, [0.3, 1], [0, -(scrollWidth - containerWidth + 900)])
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.75, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.15], [-10, 0])

  if (isMobile === null) return null

  return (
    <motion.div
      ref={outerRef}
      style={
        !isMobile
          ? { height: scrollHeight, scale: scale, y: y, transformOrigin: 'center top' }
          : { scale: 1, y: 0 }
      }
    >
      <motion.section
        ref={sectionRef}
        className="min-h-screen pt-8 px-4 md:px-10 4xl:px-14 relative overflow-hidden"
        style={
          !isMobile
            ? {
                position: 'sticky',
                top: 0,
                width: '100%',
              }
            : undefined
        }
      >
        <HorseBg variant="orange" />
        <Header ref={headerRef} isVisible={isVisible} />

        <div ref={containerRef} className="w-full">
          {!isMobile ? (
            <motion.div
              ref={cardsRef}
              className="flex gap-8 mt-20 md:mt-12 sxl:mt-28 2xl:mt-44 3xl:mt-56 w-fit will-change-transform"
              style={{ x }}
            >
              {cards.map((card, i) => (
                <StaggeredCard key={i} index={i}>
                  <div className="shrink-0 w-full md:w-auto">{card}</div>
                </StaggeredCard>
              ))}
            </motion.div>
          ) : (
            <div className="flex flex-col gap-8 py-12">
              {cards.map((card, i) => (
                <div key={i} className="shrink-0 w-full md:w-auto">
                  {card}
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.section>
    </motion.div>
  )
}

interface StaggeredCardProps {
  children: React.ReactNode
  index: number
}

const StaggeredCard: React.FC<StaggeredCardProps> = ({ children, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, {
    once: false,
    amount: 0.1,
    margin: '0px 0px -100px 0px',
  })

  const delay = index * 0.1

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 20,
        x: 75,
        scale: 0.95,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: 20,
              x: 75,
              scale: 0.95,
            }
      }
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

interface HeaderProps {
  isVisible: boolean
  ref: React.RefObject<HTMLDivElement>
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(({ isVisible }, ref) => {
  return (
    <div ref={ref} className="flex justify-between text-white items-start">
      <div className="flex flex-col gap-8 md:gap-4">
        <AppearTitle visible={isVisible} delay={0}>
          <h2 className="">Craft Sourcing</h2>
        </AppearTitle>

        <AppearTitle visible={isVisible} delay={0.1}>
          <p className="w-full md:max-w-[70ch]">
            Whether you&apos;re outfitting a commercial space or curating for a personal collection,
            our art curation service allows you to select from a curated catalog of stunning pieces.
          </p>
        </AppearTitle>

        <div className="flex justify-between">
          <AppearTitle visible={isVisible} delay={0.2} className="block md:hidden">
            <h5 className="max-w-[15ch]">
              Discover a wide range of regional Indian crafts, handpicked for their authenticity and
              artistry.
            </h5>
          </AppearTitle>

          <AppearButton visible={isVisible} delay={0.2}>
            <div className="sxl:mt-1 3xl:mt-2">
              <CoordButton variant="white" withArrow>
                Contact Us
              </CoordButton>
            </div>
          </AppearButton>
        </div>
      </div>

      <AppearTitle visible={isVisible} delay={0.3} className="hidden md:block">
        <h5 className="md:max-w-[25ch] sxl:max-w-[30ch] hidden md:block">
          Discover a wide range of regional Indian crafts, handpicked for their authenticity and
          artistry.
        </h5>
      </AppearTitle>
    </div>
  )
})

Header.displayName = 'Header'

interface AppearButtonProps {
  children: React.ReactNode
  visible?: boolean
  delay?: number
  duration?: number
}

const AppearButton: React.FC<AppearButtonProps> = ({
  children,
  visible = true,
  delay = 0,
  duration = 0.8,
}) => {
  const controls = useAnimation()
  const buttonRef = useRef(null)
  const isInView = useInView(buttonRef, {
    once: true,
    amount: 0.01,
  })

  useEffect(() => {
    if (isInView && visible) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, isInView, visible])

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        type: 'spring',
        stiffness: 400,
        damping: 50,
        restDelta: 0.01,
      },
    },
  }

  return (
    <motion.div ref={buttonRef} initial="hidden" animate={controls} variants={buttonVariants}>
      {children}
    </motion.div>
  )
}

const cards = [
  <Card
    key="card1"
    id="01"
    title="Browse the Collection"
    desc="Explore our curated collection of regional Indian crafts, browse online or request a catalog tailored to your needs. "
    imgSrc="/services/cards/cs1.png"
  />,
  <Card
    key="cs2"
    id="02"
    title="Contact Us"
    desc="If you find a piece you love, reach out to us for more details or a personalized catalog with similar works."
    imgSrc="/services/cards/cs2.png"
  />,
  <Card
    key="cs3"
    id="03"
    title="Choose Your Piece"
    desc="After reviewing our catalog, select the artwork that fits your vision."
    imgSrc="/services/cards/cs3.png"
  />,
  <Card
    key="cs4"
    id="04"
    title="Craft and Delivery"
    desc="Once your choice is made, we'll coordinate the crafting of the piece and ensure timely delivery to your location."
    imgSrc="/services/cards/cs4.png"
  />,
]

export default ServiceInfo

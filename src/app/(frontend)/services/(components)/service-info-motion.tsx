'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import HorseBg from '@/components/horse-bg'
import CoordButton from '@/components/ui/coord-button'
import useIsMobile from '@/hooks/useIsMobile'
import Card from '@/app/(frontend)/services/(components)/card'
import AppearTitle from '@/motion/appear-title'
import StaggeredCard from '@/motion/stagger-card'
import AppearButton from '@/motion/appear-button'

interface CardData {
  id: string
  title: string
  desc: string
  imgSrc: string
}

// Define the interface for ServiceInfoM props
export interface ServiceInfoProps {
  title: string
  desc: string
  subTitle: string
  cards: CardData[]
  variant?: string
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({
  title,
  desc,
  subTitle,
  cards,
  variant = 'orange',
}) => {
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

  const textColorClass = variant === 'orange' ? 'text-white' : 'text-black'
  const buttonVariant = variant === 'orange' ? 'white' : 'yellow'
  const bgVariant = variant === 'orange' ? 'orange' : 'mist'

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

  const x = useTransform(scrollYProgress, [0.3, 1], [0, -(scrollWidth - containerWidth + 1125)])
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
        className={`min-h-screen pt-8 px-4 md:px-10 4xl:px-14 relative overflow-hidden ${textColorClass}`}
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
        <HorseBg variant={bgVariant} />
        <Header
          ref={headerRef}
          isVisible={isVisible}
          title={title}
          desc={desc}
          subTitle={subTitle}
          textColorClass={textColorClass}
          buttonVariant={buttonVariant}
        />

        <div ref={containerRef} className="w-full">
          {!isMobile ? (
            <motion.div
              ref={cardsRef}
              className="flex gap-8 mt-20 md:mt-12 sxl:mt-28 2xl:mt-44 3xl:mt-56 w-fit will-change-transform"
              style={{ x }}
            >
              {cards.map((card, i) => (
                <StaggeredCard key={i} index={i}>
                  <div className="shrink-0 w-full md:w-auto">
                    <Card
                      key={card.id}
                      id={card.id}
                      title={card.title}
                      desc={card.desc}
                      imgSrc={card.imgSrc}
                      textColorClass={textColorClass}
                    />
                  </div>
                </StaggeredCard>
              ))}
            </motion.div>
          ) : (
            <div className="flex flex-col gap-8 py-12">
              {cards.map((card, i) => (
                <div key={i} className="shrink-0 w-full md:w-auto">
                  <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    desc={card.desc}
                    imgSrc={card.imgSrc}
                    textColorClass={textColorClass}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.section>
    </motion.div>
  )
}

interface HeaderProps {
  isVisible: boolean
  ref: React.RefObject<HTMLDivElement>
  title: string
  subTitle: string
  desc: string
  textColorClass: string
  buttonVariant: string
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ isVisible, title, subTitle, desc, textColorClass, buttonVariant }, ref) => {
    return (
      <div ref={ref} className={`flex justify-between ${textColorClass} items-start`}>
        <div className="flex flex-col gap-8 md:gap-4">
          <AppearTitle visible={isVisible} delay={0}>
            <h2 className="">{title}</h2>
          </AppearTitle>

          <AppearTitle visible={isVisible} delay={0.1}>
            <p className="w-full md:max-w-[70ch]">{desc}</p>
          </AppearTitle>

          <div className="flex justify-between">
            <AppearTitle visible={isVisible} delay={0.2} className="block md:hidden">
              <h5 className="max-w-[15ch]">{}</h5>
            </AppearTitle>

            <AppearButton visible={isVisible} delay={0.2}>
              <div className="sxl:mt-1 3xl:mt-2">
                <CoordButton variant={buttonVariant === 'white' ? 'white' : 'yellow'} withArrow>
                  Contact Us
                </CoordButton>
              </div>
            </AppearButton>
          </div>
        </div>

        <AppearTitle visible={isVisible} delay={0.3} className="hidden md:block">
          <h5 className="md:max-w-[25ch] sxl:max-w-[30ch] hidden md:block">{subTitle}</h5>
        </AppearTitle>
      </div>
    )
  },
)

Header.displayName = 'Header'

export default ServiceInfo

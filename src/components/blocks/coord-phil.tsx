'use client'
import { AnimationSequence, motion, stagger, useAnimate, useInView } from 'motion/react'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const parasOne = [
  "COORD is more than a platform; it's a movement to ensure that no craft dies unseen, no artisan works in isolation, and no story goes untold.",
  'Rooted in deep respect for heritage, we provide artisans with the tools, visibility, and opportunities to connect with a global audience while ensuring their craft continues to evolve. ',
]

const parasTwo = [
  'Our journey began with a simple yet profound realization: traditional craftsmanship is not just an art form but a way of life, deeply interwoven with culture, identity, and community. Yet, countless artisans face the risk of losing their craft due to a lack of access, opportunities, and fair compensation. Many go unrecognized as their work is often overlooked in contemporary design aesthetics. COORD exists to change this narrative.',
  'By bridging tradition with contemporary design, we create an ecosystem where craftsmanship is not just preserved but thrives—where artisans are recognized as creators, not just producers. We foster collaborations that are ethical, transparent, and mutually enriching, ensuring that every craft has a future and every artisan has a voice.',
]
const CoordPhil: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (isInView) {
      const animationSequence: AnimationSequence = [
        ['.title', { opacity: 1, y: 0 }, { duration: 0.4, ease: 'easeOut' }],

        [
          '.paragraph',
          { opacity: 1, y: 0 },
          { duration: 0.4, delay: stagger(0.1), ease: 'easeOut' },
        ],

        [
          '.image-one',
          { opacity: 1, y: 0, scale: 1 },
          { duration: 0.6, delay: 0.05, ease: 'easeOut' },
        ],
        [
          '.image-two',
          { opacity: 1, y: 0, scale: 1 },
          { duration: 0.6, delay: 0.1, ease: 'easeOut' },
        ],
      ]

      animate(animationSequence)
    }
  }, [isInView, animate])

  return (
    <motion.section
      ref={sectionRef}
      className="flex flex-col min-h-screen py-8 px-4 md:px-10 4xl:px-14 overflow-hidden"
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div ref={scope} className="flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 lg:gap-9 2xl:gap-40 4xl:gap-64">
          <motion.h2 className="title whitespace-nowrap" initial={{ opacity: 0, y: 20 }}>
            Coord Philosophy
          </motion.h2>

          <div className="hidden ml-auto md:flex gap-2 lg:gap-4 xl:gap-10 2xl:gap-14 4xl:gap-16">
            <div className="flex-1">
              <Paragraphs paragraphs={parasOne} className="paragraph" />
            </div>
            <div className="flex-1">
              <Paragraphs paragraphs={parasTwo} className="paragraph" />
            </div>
          </div>
        </div>

        <motion.div className="flex flex-col gap-4 md:hidden mt-16 pl-[35%]">
          <Paragraphs paragraphs={parasOne} className="paragraph" />
          <Paragraphs paragraphs={parasTwo} className="paragraph" />
        </motion.div>

        <div className="mt-16 md:mt-auto flex gap-4 md:gap-8 4xl:gap-12 w-full">
          <motion.div
            className="image-one relative w-full md:max-w-[20%] aspect-[3/4] overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
          >
            <Image
              src="/coord-phil/image1.png"
              alt="Artisan craftwork showcase"
              fill
              priority
              className="object-cover"
              loading="eager"
            />
          </motion.div>

          <motion.div
            className="image-two relative w-full md:max-w-[20%] aspect-[3/4] overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
          >
            <Image
              src="/coord-phil/image2.png"
              alt="Artisan craftwork showcase"
              fill
              priority
              className="object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

interface ParagraphsProps {
  paragraphs: string[]
  className?: string
}

const Paragraphs = React.memo(({ paragraphs, className }: ParagraphsProps) => {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((para, index) => (
        <motion.p key={index} className={className} initial={{ opacity: 0, y: 20 }}>
          {para}
        </motion.p>
      ))}
    </div>
  )
})

Paragraphs.displayName = 'Paragraphs'

export default CoordPhil

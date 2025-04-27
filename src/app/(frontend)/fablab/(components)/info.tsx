'use client'

import { clipPathRevealTB, fadeUpVariant } from '@/motion/variants'
import { motion, useInView, useScroll, useSpring, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'

const Info = () => {
  const coverRef = useRef(null)

  const { scrollYProgress: coverScrollProgress } = useScroll({
    target: coverRef,
    offset: ['start end', 'end start'],
  })

  {
    /*
  const rawCoverY = useTransform(coverScrollProgress, [0, 1], ['0%', '-15%'])
  const coverY = useSpring(rawCoverY, {
    stiffness: 100,
    damping: 20,
  })
  */
  }

  const imageScale = useTransform(coverScrollProgress, [0, 1], [1.15, 1.0])
  const smoothImageScale = useSpring(imageScale, {
    stiffness: 100,
    damping: 20,
  })

  const isInView = useInView(coverRef, {
    once: true,
    margin: '-100px',
  })
  return (
    <section className="relative py-4 sxl:py-10 px-4 md:px-10 4xl:px-14 w-full">
      <div className="w-full flex flex-col gap-8 md:flex-row md:w-[80%]">
        <motion.div
          ref={coverRef}
          className="relative aspect-[0.94/1] w-[20rem] md:w-[32rem] sxl:w-[45rem] 2xl:w-[54rem] 3xl:w-[63rem] 4xl:w-[72rem] flex-shrink-0 -ml-4 md:ml-0 min-h-[21rem] overflow-hidden"
          variants={clipPathRevealTB(1.5)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="absolute inset-0"
            style={{ scale: smoothImageScale, transformOrigin: 'center bottom' }}
          >
            <Image
              src="/fablab/info-cover.png"
              alt="Fablab Info Cover"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:items-center md:justify-center gap-10 sxl:gap-24 2xl:gap-28 3xl:gap-36 4xl:gap-40">
          <div className="flex flex-col gap-10 3xl:gap-12">
            <div className="flex justify-end w-full">
              <motion.div
                className="relative aspect-square w-24 md:w-28 sxl:w-36 2xl:w-40 3xl:w-48 4xl:w-56 -mr-4 md:mr-0"
                variants={clipPathRevealTB(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.01 }}
              >
                <Image
                  src="/fablab/info-deco.png"
                  alt="Fablab Deco Image"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </div>

            <motion.h3
              variants={fadeUpVariant(0.4, 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              Space for Creative Engagement
            </motion.h3>
          </div>

          <motion.div
            variants={fadeUpVariant(0.4, 0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <p className="mb-4 2xl:mb-6 3xl:mb-8">
              Whether you work with wood, metal, textiles, ceramics, or any other material, our
              Fablab is equipped to support your creative journey.
            </p>

            <p className="mb-8 md:mb-0">
              Explore any process or technique from traditional craftsmanship to modern fabrication
              with our guidance, tools, and expertise.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Info

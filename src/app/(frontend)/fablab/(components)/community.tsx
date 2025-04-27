import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { clipPathRevealTB, fadeUpVariant } from '@/motion/variants'

const defaultViewPort = { once: true, amount: 0.1 }

interface DecoImage {
  imgSrc: string
  imgAlt: string
}
const decoImages: DecoImage[] = [
  { imgSrc: '/fablab/com-deco.png', imgAlt: 'Fablab Community Deco Image' },
  {
    imgSrc: '/fablab/com-deco.png',
    imgAlt: 'Fablab Community Deco Image',
  },
  {
    imgSrc: '/fablab/com-deco.png',
    imgAlt: 'Fablab Community Deco Image',
  },
]

const Community = () => {
  return (
    <section className="relative py-4 sxl:py-10 px-4 md:px-10 4xl:px-14 w-full flex flex-col md:flex-row md:justifty-between gap-10">
      <div className="flex flex-col gap-10 md:w-3/5">
        <motion.h3
          className="text-[1.5rem] md:text-[1.75rem] sxl:text-[1.875rem] 2xl:text-[2rem] 3xl:text-[2.5rem] 4xl:text-[3rem]"
          variants={fadeUpVariant(0.4, 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewPort}
        >
          A Community of Craft Creation
        </motion.h3>

        <div className="flex gap-8  md:gap-10 w-full h-full">
          {decoImages.map((image, index) => (
            <DecoImage key={index} {...image} />
          ))}
        </div>
      </div>

      <motion.div
        className="flex flex-col gap-10 md:justify-end md:flex-end"
        variants={fadeUpVariant(0.4, 0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewPort}
      >
        <h3 className="text-[1rem] md:text-[1.75rem] sxl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.5rem] 4xl:text-[4rem]">
          Who can use our Fablab?
        </h3>

        <p className="max-w-[90%] md:max-w-[65ch]">
          Fab Labs are open to anyone who wants to create, offering access to craft techniques,
          fabrication tools, and a collaborative space.
        </p>
      </motion.div>
    </section>
  )
}

interface DecoImageProps {
  imgSrc: string
  imgAlt: string
}

const DecoImage: React.FC<DecoImageProps> = ({ imgSrc, imgAlt }) => {
  return (
    <motion.div
      className="relative overflow-hidden aspect-[0.75/1] w-24 md:w-32 sxl:w-44 2xl:w-52 3xl:w-56 4xl:w-64"
      variants={clipPathRevealTB(0.8)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewPort}
    >
      <div className="absolute inset-0">
        <Image src={imgSrc} alt={imgAlt} fill priority className="object-cover" />
      </div>
    </motion.div>
  )
}

export default Community

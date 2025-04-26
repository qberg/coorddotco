import { motion } from 'motion/react'
import CoordButton from '@/components/ui/coord-button'
import Image from 'next/image'
import { clipPathRevealTB, clipPathRevealBT } from '@/motion/variants'

const fadeUpVariant = (duration: number, delay: number) => ({
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'easeInOut',
      duration: duration,
      delay: delay,
    },
  },
})

const headerStyles = {
  fontSize: 'clamp(6rem, -0.6964rem + 13.9509vw, 21.625rem)',
}

const Hero = () => {
  return (
    <section className="relative py-2 md:py-2 sxl:py-4 px-4 md:px-10 4xl:px-14 h-full">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between w-full">
        <motion.h1
          className="text-highlight leading-[93%]"
          style={headerStyles}
          variants={clipPathRevealBT(0.5)}
          initial="hidden"
          animate="visible"
        >
          Fablab
        </motion.h1>

        <div className="flex flex-col gap-4 sxl:gap-8 3xl:gap-12 4xl:gap-14 w-full md:w-[25rem] sxl:w-[40rem] 2xl:w-[48rem] 3xl:w-[56rem] 4xl:w-[64rem]">
          <motion.div
            className="relative aspect-[1.63/1] md:aspect-[1.8/1] sxl:aspect-[1.63/1] w-full"
            variants={clipPathRevealTB(0.5)}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/fablab/hero-cover.png"
              alt="Fablab hero cover image"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <motion.p
            className="md:pl-[5%] md:pr-[5%] sxl:pl-[15%] sxl:pr-[15%] 2xl:pl-[20%] 2xl:pr-[20%]"
            variants={fadeUpVariant(0.3, 0.5)}
            initial="hidden"
            animate="visible"
          >
            A space designed to bring your craft visions to life. Access resources, prototype
            designs, collaborate with experts, and refine your craft with mentorship.
          </motion.p>

          <motion.div
            className="md:pl-[5%] md:pr-[5%] sxl:pl-[15%] sxl:pr-[15%] 2xl:pl-[20%] 2xl:pr-[20%] flex justify-end"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'easeInOut',
              delay: 0.5,
              duration: 0.4,
            }}
          >
            <CoordButton variant="yellow" withArrow>
              Book a Studio
            </CoordButton>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 flex gap-8 md:gap-10 sxl:gap-20 2xl:gap-28 3xl:gap-32 4xl:gap-36 py-4">
        <motion.div
          className="relative aspect-[0.79/1] w-[11rem] md:w-[12rem] sxl:w-[16rem] 2xl:w-[20rem] 3xl:w-[24rem] 4xl:w-[28rem]"
          variants={clipPathRevealTB(0.5)}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/fablab/hero-deco.png"
            alt="Fablab Hero Deco"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <motion.h5
          className="w-2/5 bg-white flex md:items-center md:justify-center md:max-w-[45ch]"
          variants={fadeUpVariant(0.3, 0.5)}
          initial="hidden"
          animate="visible"
        >
          A Fab Lab, or digital fabrication laboratory, is a place to play, to create, to mentor and
          to invent
        </motion.h5>
      </div>
    </section>
  )
}

export default Hero

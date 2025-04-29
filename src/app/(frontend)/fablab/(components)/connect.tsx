import ConnectForm from '@/app/(frontend)/fablab/(components)/connect-form'
import { motion } from 'motion/react'
import Image from 'next/image'

const headerStyles = {
  fontSize: 'clamp(5.25rem, 0rem + 10.9375vw, 17.5rem)',
}

const defaultViewport = {
  once: true,
  amount: 0.1,
}

const textRevealVariant = {
  hidden: {
    clipPath: 'inset(15% 0 0 0)',
  },
  visible: {
    clipPath: 'inset(100% 0 0 0)',
    transition: {
      duration: 1.5,
      type: 'spring',
      stiffness: 75,
      damping: 20,
    },
  },
}

const Connect = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-screen h-full -z-100 overflow-hidden">
        <Image
          src="/menu-thread.svg"
          alt="Menu Deco Thread"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      <div className="w-full h-full flex flex-col justify-between py-4 sxl:py-10 px-4 md:px-10 4xl:px-14">
        <HeaderSection />
        <FormSection />
      </div>
    </section>
  )
}

const FormSection = () => {
  return (
    <div className="flex flex-col md:flex-row h-full md:h-auto md:-mt-6 sxl:mt-0 w-full justify-between">
      <div className="flex md:justify-end md:items-end">
        <div className="relative aspect-[0.77/1] w-14 md:w-24 sxl:w-32 2xl:w-40 3xl:w-44 4xl:w-52">
          <div className="absolute inset-0">
            <Image
              src="/fablab/connect-deco.png"
              alt="Connect Deco Image"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <ConnectForm />
    </div>
  )
}

const HeaderSection = () => {
  return (
    <div className="relative w-fit h-fit">
      <motion.h1
        className="text-highlight leading-[93%]"
        style={headerStyles}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          type: 'spring',
          stiffness: 75,
          damping: 20,
        }}
        viewport={defaultViewport}
      >
        Connect
      </motion.h1>
      <motion.div
        className="absolute bg-white inset-0 z-10"
        variants={textRevealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      />
    </div>
  )
}

export default Connect

import { motion } from 'motion/react'

export const easings = {
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
}

const NavMenu = () => {
  return (
    <motion.nav
      className="absolute inset-0 min-h-screen w-full  bg-white flex items-center justify-center z-50"
      initial={{ y: '-100%' }}
      animate={{
        y: 0,
        transition: { duration: 1, ease: easings.easeOutQuart },
      }}
      exit={{ y: '-100%', transition: { duration: 0.4 } }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
      >
        Menu
      </motion.h1>
    </motion.nav>
  )
}

export default NavMenu

import { motion } from 'motion/react'
import Link from 'next/link'

export const easings = {
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
}

interface NavItem {
  href: string
  label: string
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/', label: 'Fablab' },
  { href: '/', label: 'Service' },
  { href: '/', label: 'Contact' },
]

const NavMenu = () => {
  return (
    <motion.nav
      className="absolute inset-0 min-h-screen w-full  bg-white flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start z-50 px-4 md:px-10 4xl:px-14 gap-14"
      initial={{ y: '-100%' }}
      animate={{
        y: 0,
        transition: { duration: 1, ease: easings.easeOutQuart },
      }}
      exit={{ y: '-100%', transition: { duration: 0.4 } }}
    >
      <div
        className="flex justify-start bg-red-200 translate-y-48 md:translate-y-0"
        style={{
          height: 'clamp(7.125rem, 4.0922rem + 12.4424vw, 24rem)',
        }}
      >
        <div className="relative">
          <div
            className="text-menu-primary font-roc -rotate-90 origin-bottom-right bg-orange-500 absolute"
            style={{
              fontSize: 'clamp(7.125rem, 4.0922rem + 12.4424vw, 24rem)',
              height: 'clamp(7.125rem, 4.0922rem + 12.4424vw, 24rem)',
              width: '1.2em',
              left: '-0.2em',
              bottom: '5%',
            }}
          >
            Menu
          </div>
          <div className="w-32"></div> {/* Spacer to account for rotated text */}
        </div>

        <div className="flex flex-col ml-8 md:hidden bg-red-300">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <h2>{item.label}</h2>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-green-200 mt-auto md:mt-0">Image</div>

      <div className="hidden md:flex md:flex-col md:order-last bg-blue-200">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href} className="">
            <h2>{item.label}</h2>
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}

export default NavMenu

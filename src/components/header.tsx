'use client'

import Image from 'next/image'
import Link from 'next/link'

import { ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'
import NavMenu from '@/components/nav-menu'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isHidden, setIsHidden] = useState(false)
  const { scrollY } = useScroll()
  const lastYRef = useRef(0)

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current

    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0)
      lastYRef.current = y
    }
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <motion.header
        className="top-0 px-4 md:px-10 z-100"
        style={{
          height: 'var(--navbar-height)',
          paddingBlock: 'clamp(1rem, 0.6406rem + 1.4747vw, 3rem)',
        }}
        variants={{ hidden: { y: '-90%' }, visible: { y: '0%' } }}
        transition={{ duration: 0.25 }}
        animate={isHidden ? 'hidden' : 'visible'}
        whileHover="visible"
        onFocusCapture={() => setIsHidden(false)}
      >
        <nav className="flex items-center justify-between relative">
          <Link
            href="/"
            className="relative h-full aspect-square"
            style={{
              height: 'clamp(1.5rem, 1.0282rem + 1.9355vw, 4.125rem)',
            }}
          >
            <Image
              src={isMenuOpen ? '/icon-orange.svg' : '/icon.svg'}
              alt="COORD Brand Logo"
              fill
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>

          <button
            onClick={toggleMenu}
            className="cta-text lg:absolute lg:left-1/2 lg:-translate-x-1/2 hover:cursor-pointer hover:text-highlight"
          >
            {isMenuOpen ? '/Close' : '/Menu'}
          </button>

          {!isMenuOpen && (
            <Link href="/" className="hidden lg:block">
              <h5 className="inline-flex relative">
                <span className="">Contact</span>
                <span>
                  <ArrowRight className="ml-1" size="1em" />
                </span>

                <span className="absolute bottom-1 left-0 w-[98%] h-[0.1em] bg-black"></span>
              </h5>
            </Link>
          )}
        </nav>
      </motion.header>
      <AnimatePresence>{isMenuOpen && <NavMenu />}</AnimatePresence>
    </>
  )
}

export default Header

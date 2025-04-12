import Image from 'next/image'
import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

const Header = () => {
  return (
    <header
      className="sticky top-0 px-4 md:px-10"
      style={{
        height: 'var(--navbar-height)',
        paddingBlock: 'clamp(1rem, 0.6406rem + 1.4747vw, 3rem)',
      }}
    >
      <nav className="flex items-center justify-between relative">
        <div
          className="relative h-full aspect-square"
          style={{
            height: 'clamp(1.5rem, 1.0282rem + 1.9355vw, 4.125rem)',
          }}
        >
          <Image
            src="/icon.svg"
            alt="COORD Brand Logo"
            fill
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>

        <p className="cta-text lg:absolute lg:left-1/2 lg:-translate-x-1/2">/Menu</p>

        <Link href="/" className="hidden lg:block">
          <h5 className="inline-flex relative">
            <span className="">Contact</span>
            <span>
              <ArrowRight className="ml-1" size="1em" />
            </span>

            <span className="absolute bottom-1 left-0 w-[98%] h-[0.1em] bg-black"></span>
          </h5>
        </Link>
      </nav>
    </header>
  )
}

export default Header

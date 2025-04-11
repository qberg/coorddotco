import Image from 'next/image'
import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

const Header = () => {
  return (
    <header
      className="sticky top-0 px-2 md:px-8"
      style={{
        height: 'var(--navbar-height)',
        paddingBlock: 'clamp(1rem, 0.6406rem + 1.4747vw, 3rem)',
      }}
    >
      <nav className="flex items-center justify-between">
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

        <p>/Menu</p>

        <Link href="/" className="underline hidden sm:flex sm:gap-1 font-semibold">
          <div>Contact Us</div>
          <ArrowRight />
        </Link>
      </nav>
    </header>
  )
}

export default Header

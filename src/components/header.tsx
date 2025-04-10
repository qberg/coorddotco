import Image from 'next/image'
import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

const Header = () => {
  return (
    <header
      className="sticky top-0 px-2 md:px-8"
      style={{
        height: 'var(--navbar-height)',
        paddingBlock: 'clamp(1rem, 0.5058rem + 2.0276vw, 3.75rem)',
      }}
    >
      <nav className="flex items-center justify-between">
        <div
          className="relative h-full aspect-square"
          style={{
            height: 'clamp(1.5rem, 1.1419rem + 1.4689vw, 3.125rem)',
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

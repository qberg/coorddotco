import CoordLogo from '@/components/coord-logo-text'
import Image from 'next/image'

const MainHero = () => {
  return (
    <section className="flex flex-col min-h-[calc(100vh-var(--navbar-height))]">
      <div className="flex justify-center sm:mt-6 mt-2 z-10">
        <CoordLogo />
      </div>

      <div
        className="flex-1 relative"
        style={{
          marginTop: 'calc(-1 * clamp(2rem, 0.2924rem + 7.0056vw, 9.75rem))',
        }}
      >
        <Image
          src="/main-hero/bg-922x1200.png"
          alt="Hero backround image"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  )
}

export default MainHero

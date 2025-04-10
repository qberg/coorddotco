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
          marginTop: 'calc(-1 * clamp(2rem, 0.3376rem + 6.8203vw, 11.25rem))',
        }}
      >
        <Image
          src="/main-hero/bg-922x1200.png"
          alt="Hero backround image"
          fill
          priority
          sizes="100vw"
          className="object-cover 2xl:hidden"
        />
        <Image
          src="/main-hero/bg-big-4896x1664.png"
          alt="Hero backround image"
          fill
          priority
          sizes="100vw"
          className="object-cover hidden 2xl:block"
        />
      </div>
    </section>
  )
}

export default MainHero

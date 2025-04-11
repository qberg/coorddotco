import CoordLogo from '@/components/coord-logo-text'
import MainButton from '@/components/ui/main-button'
import Image from 'next/image'

const MainHero = () => {
  return (
    <section className="flex flex-col min-h-[calc(100svh-var(--navbar-height))] md:min-h-[calc(100vh-var(--navbar-height))]">
      <div className="flex justify-center sm:mt-6 mt-2 z-10">
        <CoordLogo />
      </div>

      <div
        className="flex-1 relative"
        style={{
          marginTop: 'calc(-1 * clamp(2rem, 0.1578rem + 7.5576vw, 12.25rem))',
        }}
      >
        <Image
          src="/main-hero/bg-922x1200.png"
          alt="Hero backround image"
          fill
          priority
          sizes="100vw"
          className="object-cover block lg:hidden"
        />
        <Image
          src="/main-hero/bg-big-4896x1664.png"
          alt="Hero backround image"
          fill
          priority
          sizes="100vw"
          className="object-cover hidden lg:block"
        />

        <div className="absolute inset-0 flex flex-col h-full w-full z-10">
          <div className="flex justify-start md:justify-end items-start pt-8 pl-[50%] md:pr-[10%]">
            <div className="text-left">
              <p className="mb-4 text-white">Start a craft story with us</p>
              <MainButton href="/contact" />
            </div>
          </div>

          <div className="mt-auto bg-white">A collective for Innovation in Craft</div>
        </div>
      </div>
    </section>
  )
}

{
  /*
  <div className="flex justify-start md:justify-end items-start pt-8 md:pt-16 px-4 md:px-12 pl-[50%] md:pl-4">
          <div className="text-left md:text-right">
            <h2 className="text-white text-xl md:text-2xl font-light mb-4">Start a Craft Story With Us</h2>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-black px-6 py-2 hover:bg-gray-100 transition-colors"
            >
              Contact us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

<div className="mt-auto px-4 md:px-12 pb-12 md:pb-24">
          <h1 className="text-white text-4xl md:text-6xl font-light leading-tight">
            A Collective for
            <br />
            Innovation in Craft
          </h1>
        </div>




*/
}
export default MainHero

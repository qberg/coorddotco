import HorseBg from '@/components/horse-bg'
import CoordButton from '@/components/ui/coord-button'

const ServiceInfo = () => {
  return (
    <section className="min-h-screen pt-8 px-4 md:px-10 4xl:px-14 relative overflow-hidden">
      <HorseBg variant="orange" />
      <Header />
    </section>
  )
}

const Header = () => {
  return (
    <div className="flex justify-between text-white items-start">
      <div className="flex flex-col gap-8 md:gap-4">
        <h2 className="">Craft Sourcing</h2>

        <p className="w-full md:max-w-[70ch]">
          Whether you&apos;re outfitting a commercial space or curating for a personal collection,
          our art curation service allows you to select from a curated catalog of stunning pieces.
        </p>

        <div className="flex justify-between">
          <h5 className="block md:hidden max-w-[15ch]">
            Discover a wide range of regional Indian crafts, handpicked for their authenticity and
            artistry.
          </h5>

          <div className="sxl:mt-1 3xl:mt-2">
            <CoordButton variant="white" withArrow>
              Contact Us
            </CoordButton>
          </div>
        </div>
      </div>

      <h5 className="hidden md:block md:max-w-[25ch] sxl:max-w-[30ch]">
        Discover a wide range of regional Indian crafts, handpicked for their authenticity and
        artistry.
      </h5>
    </div>
  )
}

export default ServiceInfo

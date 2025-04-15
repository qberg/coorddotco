import BlurImage from '@/components/blur-image'
import HorseBg from '@/components/horse-bg'
import CoordButton from '@/components/ui/coord-button'
import { Calendar, ChevronDown, ChevronUp, Clock } from 'lucide-react'
import Image from 'next/image'

const imageStyle = {
  width: 'clamp(10rem, 4.4006rem + 22.7965vw, 40.875rem)',
}

const thumbnailStyle = {
  width: 'clamp(4rem, 2.9572rem + 4.2455vw, 9.75rem)',
}

const playfairStyle = {
  fontSize: 'clamp(0.875rem, 0.705rem + 0.6922vw, 1.8125rem)',
}

const thumbnails = [
  {
    src: '/coord-community/im2.png',
    alt: 'Woven textile',
  },
  {
    src: '/coord-community/im3.png',
    alt: 'Pottery crafting',
  },
  {
    src: '/coord-community/im4.png',
    alt: 'Ceramic bowl',
  },
]

const CoordCommunity = () => {
  return (
    <section className="px-4 md:px-10 4xl:px-14 min-h-screen relative overflow-hidden">
      <HorseBg />

      <div className="flex justify-between gap-2 items-stretch">
        <div className="flex flex-col justify-between items-start gap-28">
          <h2 className="pt-8">Coord Community</h2>

          <div className="block md:hidden mt-auto">
            <EventThumbnail />
          </div>
        </div>

        <div className="flex justify-end items-start md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-40 3xl:gap-56">
          <div>
            <EventContent />
          </div>

          <div className="hidden md:block md:mt-16 2xl:mt-24 3xl:mt-32">
            <EventThumbnail />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0  pb-6 2xl:pb-11 3xl:pb-16 max-w-2xs md:max-w-lg xl:max-w-xl 3xl:max-w-2xl">
        <p className="mb-2">
          Join a thriving network of artisans, designers, and craft enthusiasts. Exchange ideas,
          co-create, and be part of a movement that champions craft excellence.
        </p>

        <CoordButton variant="yellow" withArrow>
          Contact
        </CoordButton>
      </div>
    </section>
  )
}

const EventThumbnail = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <button
        className="flex items-center justify-center rounded-none aspect-square bg-accent-primary"
        aria-label="Previous Event"
        style={{
          width: ' clamp(1.5rem, 1.1826rem + 1.2921vw, 3.25rem)',
        }}
      >
        <ChevronUp className="w-4 h-4 md:h-8 md:w-8 text-white" />
      </button>

      {thumbnails.map((thumbnail, index) => (
        <div key={index} className="relative aspect-[64/100]" style={thumbnailStyle}>
          <BlurImage
            src={thumbnail.src}
            alt={thumbnail.alt}
            fill
            priority
            className="object-cover"
          />
        </div>
      ))}

      <button
        className="flex items-center justify-center aspect-square rounded-none bg-accent-primary"
        aria-label="Previous Event"
        style={{
          width: ' clamp(1.5rem, 1.1826rem + 1.2921vw, 3.25rem)',
        }}
      >
        <ChevronDown className="w-4 h-4 md:w-8 md:h-8 text-white" />
      </button>
    </div>
  )
}

const EventContent = () => {
  return (
    <div className="flex flex-col gap-4 w-full" style={imageStyle}>
      <div className="relative w-full aspect-[3/5] md:aspect-square">
        <BlurImage
          src="/coord-community/im1.png"
          alt="Coord Community Event"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div style={playfairStyle} className="font-medium font-playfair italic text-highlight">
          Handmade Creations: A Community Craft Fair And Workshop
        </div>

        <div className="md:space-y-1">
          <div className="flex items-center text-sm">
            <Calendar className="w-4 md:w-8 mr-2 text-accent-primary" />
            <span>June 9, 2025</span>
          </div>

          <div className="flex items-center text-sm">
            <Clock className="w-4 md:w-8 mr-2 text-accent-primary" />
            <span>10:00 AM – 4:00 PM</span>
          </div>
          {/*
          <div className="flex items-center text-sm">
            <MapPin className="w-4 md:w-8 mr-2 text-accent-primary" />
            <span>Central Park Community Hall, New York, NY</span>
          </div>
          */}
        </div>

        <p className="w-full">
          A vibrant in-person event featuring live craft-making stations, artisan booths, DIY
          workshops, and a showcase of handmade creations.
        </p>
      </div>

      <div>
        <CoordButton variant="yellow" withArrow>
          Register
        </CoordButton>
      </div>
    </div>
  )
}

export default CoordCommunity

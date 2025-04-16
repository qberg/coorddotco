import HorseBg from '@/components/horse-bg'
import Image from 'next/image'
import Link from 'next/link'

const imageStyle = {
  width: 'clamp(7.1875rem, 3.8437rem + 13.6133vw, 25.625rem)',
}

const cardStyle = {
  width: 'clamp(17.5rem, 14.7796rem + 11.0752vw, 32.5rem)',
}

const fontStyle = {
  fontSize: 'clamp(0.75rem, 0.614rem + 0.5538vw, 1.5rem)',
}

const cardOne = {
  title: 'Search by Location',
  href: '/library',
  desc: 'Every region carries its own craft legacy. Explore artisans and time-honored traditions rooted in the landscapes of India, from the intricate weaves of Kutch to the delicate woodwork of Kashmir, the finesse of Pathamadai Pai in Tamil Nadu to the timeless glow of Pembarthi brass in Telangana.',
}

const cardTwo = {
  title: 'Search by Composition',
  href: '/library',
  desc: "Materials tell stories of the land and its people. Whether it's the richness of handwoven textiles, the resilience of terracotta, the finesse of metalwork, or the artistry of lacquered wood, find crafts defined by the elements they are born from.",
}

const Library = () => {
  return (
    <section className="pt-8 px-4 md:px-10 4xl:px-14 min-h-screen relative overflow-hidden">
      <HorseBg />
      <h2 className="mb-16 md:mb-12">Library</h2>

      <div className="hidden absolute top-8 right-4 md:right-10 4xl:right-14 bg-blue-400">
        Thumbnails
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-16 w-full max-w-5xl mx-auto">
        <div className="w-full flex md:justify-end md:items-start bg-red-500">
          <LibCard {...cardOne} />
        </div>

        <div className="w-full flex justify-end items-end md:justify-start md:pt-56 bg-green-500">
          <LibCard {...cardTwo} />
        </div>
      </div>

      <div className="absolute bottom-0 pb-6 hidden">
        <div className="relative w-full aspect-[3/4]" style={imageStyle}>
          <Image
            src="/coord-community/im1.png"
            alt="Coord Community Event"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

interface LibCardProps {
  title: string
  href: string
  desc: string
}

const LibCard: React.FC<LibCardProps> = ({ title, href, desc }) => {
  return (
    <Link
      href={href}
      className="bg-blue-background p-5 flex flex-col justify-between items-start gap-14 aspect-[7/8] md:aspect-[69/100]"
      style={cardStyle}
    >
      <h3 className="text-white">{title}</h3>

      <div
        className="text-mist-background font-hanken font-extralight leading-[1.2]"
        style={fontStyle}
      >
        {desc}
      </div>
    </Link>
  )
}

export default Library

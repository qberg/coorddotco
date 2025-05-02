import Image from 'next/image'

interface CardProps {
  id: string
  imgSrc: string
  title: string
  desc: string
  textColorClass: string
}

const Card: React.FC<CardProps> = ({ id, imgSrc, title, desc, textColorClass }) => {
  return (
    <div
      className={`w-full md:w-md sxl:w-xl 2xl:w-2xl 3xl:w-3xl 4xl:w-4xl justify-between flex ${textColorClass}`}
    >
      <div className="relative w-1/2 aspect-[0.77/1]">
        <Image
          src={imgSrc}
          alt="Craft Sourcing Card Image"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-between w-1/2 ml-4 sxl:ml-7 2xl:ml-8 3xl:ml-9 4xl:ml-11">
        <div className="flex flex-col gap-1">
          <h3>{id}</h3>
          <p className="text-[0.75rem] md:text-[0.875rem] sxl:text-[1rem] 2xl:text-[1.125rem] 3xl:text-[1.25rem] 4xl:text-[1.5rem] font-hanken font-light leading-[1.2]">
            {desc}
          </p>
        </div>

        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default Card

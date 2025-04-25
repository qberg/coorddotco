import Image from 'next/image'

interface ServiceImageProps {
  imageSrc: string
  className?: string
}

const ServiceImage: React.FC<ServiceImageProps> = ({ imageSrc, className }) => (
  <div className={`${className} relative w-[190px] 2xl:w-[280px] 3xl:w-[380px] aspect-[1.42/1] `}>
    <Image
      src={imageSrc}
      alt="Service section decorative image"
      fill
      priority
      className="object-cover"
    />
  </div>
)

export default ServiceImage

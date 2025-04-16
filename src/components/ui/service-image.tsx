import Image from 'next/image'

const IMAGE_STYLE = {
  maxWidth: 'clamp(11.9375rem, 10.994rem + 3.871vw, 17.1875rem)',
}

interface ServiceImageProps {
  imageSrc: string
  className?: string
}

const ServiceImage: React.FC<ServiceImageProps> = ({ imageSrc, className }) => (
  <div className={`${className} relative w-full aspect-[1.42/1]`} style={IMAGE_STYLE}>
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

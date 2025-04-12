// BlurImage.tsx
import Image from 'next/image'
import path from 'path'
import fs from 'fs/promises'
import { getPlaiceholder } from 'plaiceholder'

interface BlurImageProps {
  src: string
  alt: string
  fill?: boolean
  priority?: boolean
  className?: string
  sizes?: string
}

export const getBlurDataURL = async (imageSrc: string): Promise<string> => {
  const publicPath = path.join(process.cwd(), 'public', imageSrc.replace(/^\//, ''))
  const buffer = await fs.readFile(publicPath)
  const { base64 } = await getPlaiceholder(buffer)
  return base64
}

const BlurImage = async ({
  src,
  alt,
  fill = false,
  priority = false,
  className = '',
  sizes = '100vw',
}: BlurImageProps) => {
  const blurDataURL = await getBlurDataURL(src)

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      className={className}
      placeholder="blur"
      blurDataURL={blurDataURL}
      sizes={sizes}
    />
  )
}

export default BlurImage

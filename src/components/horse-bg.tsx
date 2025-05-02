import Image from 'next/image'
import React from 'react'

type VariantConfig = {
  className: string
  opacity: number
}

export type VariantName = 'blue' | 'orange' | 'mist'

const bgVariants: Record<VariantName, VariantConfig> = {
  blue: {
    className: 'bg-blue-background',
    opacity: 10,
  },
  orange: {
    className: 'bg-orange-background',
    opacity: 10,
  },
  mist: {
    className: 'bg-mist-background',
    opacity: 100,
  },
}

interface HorseBgProps {
  variant: VariantName
  opacity?: number
}

const HorseBg: React.FC<HorseBgProps> = ({ variant, opacity }) => {
  const safeVariant: VariantName =
    variant && Object.keys(bgVariants).includes(variant) ? (variant as VariantName) : 'mist'
  const variantSettings = bgVariants[safeVariant]

  const actualOpacity = opacity !== undefined ? opacity : variantSettings.opacity

  const getOpacityClass = () => {
    switch (actualOpacity) {
      case 0:
        return 'opacity-0'
      case 5:
        return 'opacity-5'
      case 10:
        return 'opacity-10'
      case 20:
        return 'opacity-20'
      case 25:
        return 'opacity-25'
      case 30:
        return 'opacity-30'
      case 40:
        return 'opacity-40'
      case 50:
        return 'opacity-50'
      case 60:
        return 'opacity-60'
      case 70:
        return 'opacity-70'
      case 75:
        return 'opacity-75'
      case 80:
        return 'opacity-80'
      case 90:
        return 'opacity-90'
      case 95:
        return 'opacity-95'
      case 100:
        return 'opacity-100'
      default:
        return 'opacity-100'
    }
  }

  return (
    <div className={`absolute inset-0 w-screen h-full -z-100 ${variantSettings.className}`}>
      <Image
        src="/horse.svg"
        alt="COORD Horse background"
        fill
        sizes="100vw"
        priority
        quality={85}
        className={`object-cover hidden md:block ${getOpacityClass()}`}
      />
      <Image
        src="/horse-mob.svg"
        alt="COORD Horse background"
        fill
        sizes="100vw"
        priority
        quality={85}
        className={`object-cover block md:hidden ${getOpacityClass()}`}
      />
    </div>
  )
}

export default HorseBg

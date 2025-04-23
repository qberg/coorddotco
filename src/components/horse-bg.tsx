import Image from 'next/image'
import React from 'react'

type VariantConfig = {
  className: string
  mobileOpacity: number
  desktopOpacity: number
}

type VariantName = 'blue' | 'orange' | 'mist'

const bgVariants: Record<VariantName, VariantConfig> = {
  blue: {
    className: 'bg-blue-background',
    mobileOpacity: 10,
    desktopOpacity: 10,
  },
  orange: {
    className: 'bg-orange-background',
    mobileOpacity: 10,
    desktopOpacity: 10,
  },
  mist: {
    className: 'bg-mist-background',
    mobileOpacity: 100,
    desktopOpacity: 100,
  },
}

interface HorseBgProps {
  variant: VariantName
  opacity?: string
}

const HorseBg: React.FC<HorseBgProps> = ({ variant, opacity = '100' }) => {
  const safeVariant: VariantName =
    variant && Object.keys(bgVariants).includes(variant) ? (variant as VariantName) : 'mist'

  const variantSettings = bgVariants[safeVariant]

  return (
    <div className={`absolute inset-0 w-screen h-full -z-100 ${variantSettings.className}`}>
      <Image
        src="/horse.svg"
        alt="COORD Horse background"
        fill
        sizes="100vw"
        priority
        quality={85}
        className={`object-cover hidden md:block opacity-${opacity}`}
      />
      <Image
        src="/horse-mob.svg"
        alt="COORD Horse background"
        fill
        sizes="100vw"
        priority
        quality={85}
        className={`object-cover block md:hidden opacity-${opacity}`}
      />
    </div>
  )
}

export default HorseBg

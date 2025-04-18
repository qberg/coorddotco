import Image from 'next/image'
import React from 'react'

type VariantConfig = {
  className: string
  mobileOpacity: number
  desktopOpcaity: number
}

type VariantName = 'blue' | 'orange' | 'mist'

const bgVariants: Record<VariantName, VariantConfig> = {
  blue: {
    className: 'bg-blue-background',
    mobileOpacity: 10,
    desktopOpcaity: 10,
  },

  orange: {
    className: 'bg-orange-background',
    mobileOpacity: 10,
    desktopOpcaity: 10,
  },

  mist: {
    className: 'bg-mist-background',
    mobileOpacity: 100,
    desktopOpcaity: 100,
  },
}

interface HorseBgProps {
  variant?: VariantName
}

const HorseBg: React.FC<HorseBgProps> = ({ variant }) => {
  const variantSettings = (variant && bgVariants[variant]) || bgVariants.mist
  return (
    <div className={`absolute inset-0 w-screen h-full -z-100 ${variantSettings.className}`}>
      <Image
        src="/horse.svg"
        alt="COORD Horse background"
        fill
        sizes="100vw"
        priority
        quality={85}
        className={`object-cover hidden md:block opacity-${variantSettings.desktopOpcaity}`}
      />

      <Image
        src="/horse-mob.svg"
        alt="COORD Horse background"
        fill
        sizes="100vw"
        priority
        quality={85}
        className={`object-cover block md:hidden opacity-${variantSettings.mobileOpacity}`}
      />
    </div>
  )
}

export default HorseBg

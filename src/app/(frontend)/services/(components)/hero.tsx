'use client'

import useIsMobile from '@/hooks/useIsMobile'
import Image from 'next/image'
import React from 'react'

const headerStyles = {
  fontSize: ' clamp(6rem, 3.6877rem + 9.4139vw, 18.75rem)',
}

const imageOneStyle = {
  width: 'clamp(7.5rem, 3.8571rem + 7.5893vw, 16rem)',
}

const coverImgStyle = {
  width: 'clamp(33.75rem, 20.3571rem + 27.9018vw, 65rem)',
}

interface Service {
  name: string
  desc: string
}

const servicesList: Service[] = [
  {
    name: 'Craft Sourcing',
    desc: 'Ideal for Individuals, Craft Curators, & Hobbyist Decorators',
  },
  {
    name: 'Custom Crafts',
    desc: 'Ideal for Artist, Designers, & Architects',
  },
  {
    name: 'Bulk Ordering',
    desc: 'Ideal for Brands, Businesses, & Corporates',
  },
]

const ServicesHero = () => {
  const isMobile = useIsMobile()
  return (
    <section className="h-[calc(100svh-var(--navbar-height))] pb-2 flex flex-col">
      <div className="pl-4 md:pl-16 2xl:pl-24 3xl:pl-32 relative">
        <h1 className="text-highlight" style={headerStyles}>
          Service
        </h1>

        <div className="hidden md:block absolute top-4 right-10">
          <HeroDeco isMobile={isMobile} />
        </div>
      </div>

      <div className="flex flex-col justify-between xl:flex-row xl:justify-start gap-14 px-4 md:px-0 xl:gap-8 2xl:gap-14 3xl:gap-20 mt-auto xl:pb-14">
        <div>
          <HeroCover isMobile={isMobile} />
        </div>

        <div>
          <HeroListicles />
        </div>

        <div className="block md:hidden w-full">
          <HeroDeco isMobile={isMobile} />
        </div>
      </div>
    </section>
  )
}

interface HeroCoverProps {
  isMobile: boolean
}

const HeroCover: React.FC<HeroCoverProps> = ({ isMobile }) => {
  return (
    <div
      className="relative w-full aspect-[1.65/1] md:aspect-[1.4/1] 2xl:aspect-[1.25/1] md:max-h-[45vh] 2xl:max-h-[55vh]"
      style={!isMobile ? coverImgStyle : {}}
    >
      <Image
        src={isMobile ? '/services/hero/cover-sm.png' : '/services/hero/cover-md.png'}
        alt="Services Hero Cover Image"
        fill
        priority
        className="object-cover"
      />
    </div>
  )
}

const HeroListicles = () => {
  return (
    <div className="flex h-full md:pl-[50%] xl:pl-0 xl:gap-8 2xl:gap-14 3xl:gap-20">
      <div className="hidden md:block relative w-20 h-20 3xl:w-32 3xl:h-32">
        <Image
          src="/services/hero/thumb.png"
          alt="Services Thumbnaim Image"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 2xl:gap-16 md:px-4 xl:px-0 md:mt-6 xl:mt-4 2xl:mt-9">
        {servicesList.map((service, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h4 className="services-title">{service.name}</h4>
            <p className="xl:max-w-[20ch] 2xl:max-w-[28ch]">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

interface HeroDecoProps {
  isMobile: boolean
}

const HeroDeco: React.FC<HeroDecoProps> = ({ isMobile }) => {
  return (
    <div className="flex flex-row gap-7 md:flex-col md:gap-2 2xl:gap-3 md:items-stretch">
      <div className="flex w-1/2 md:w-full md:justify-end">
        <div className="relative aspect-[3/4] w-full" style={!isMobile ? imageOneStyle : {}}>
          <Image
            src="/services/hero/deco.png"
            alt="Services Hero Deco Image"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex">
        <h5 className="max-w-[20ch] md:max-w-[22ch] xl:max-w-[15ch] 2xl:max-w-[22ch]">
          Open to anyone who wants handcrafted art and traditional crafts
        </h5>
      </div>
    </div>
  )
}

export default ServicesHero

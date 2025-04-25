import CoordButton from '@/components/ui/coord-button'
import ServiceImage from '@/components/ui/service-image'
import { ArrowRight } from 'lucide-react'
import { motion, MotionValue, useTransform } from 'motion/react'
import React from 'react'

interface ServiceCard {
  superTitle: string
  title: string
  desc: string
  features: string[]
}

interface ServicesData {
  desc: string
  cards: ServiceCard[]
}

const servicesData: ServicesData = {
  desc: "At COORD, we bring the rich diversity of India's regional crafts directly to your projects. Whether you're an individual, interior designer, architect, business, art enthusiast, or curator, we provide access to unique, handcrafted art pieces.",
  cards: [
    {
      superTitle: 'Individuals, Art Enthusiasts & Collectors',
      title: 'For Seekers of Craft',
      desc: "You believe objects hold stories. We help you find the hands that tell them. Whether you're a collector of meaning, a lover of process, or simply someone looking to add soul to your space — COORD connects you to timeless craft and the makers behind it.",
      features: [
        'Explore our library of artisans and crafted objects.',
        'Fall in love with a technique, region, or material.',
        'Reach out, and we’ll help you source available pieces — or commission one made just for you.',
        'We’ll coordinate the making, care, and delivery — along with the story behind it.',
      ],
    },
    {
      superTitle: 'Architects, Interior Designers & Artists',
      title: 'For Creative Collaborators',
      desc: "You believe objects hold stories. We help you find the hands that tell them. Whether you're a collector of meaning, a lover of process, or simply someone looking to add soul to your space — COORD connects you to timeless craft and the makers behind it.",
      features: [
        'Browse our maker profiles and material legacies.',
        'Found a form or process you’d like to build on?',
        'Let’s co-develop something unique with the artisans.',
        'From prototyping to production, we ensure transparency.',
      ],
    },
    {
      superTitle: 'Brands, Cultural Organizations & Businesses',
      title: 'For Purpose-Led Institutions',
      desc: "You believe objects hold stories. We help you find the hands that tell them. Whether you're a collector of meaning, a lover of process, or simply someone looking to add soul to your space — COORD connects you to timeless craft and the makers behind it.",
      features: [
        'Explore the works and materials available through COORD.',
        'Let&apos; understand your need -- from gifting to space-making.',
        'We co-create with the artisan.',
        'Our team handles everything from sample to scale.',
      ],
    },
  ],
}

interface ServicesProps {
  scrollYProgress: MotionValue<number>
  isMobile: boolean
}

const Services: React.FC<ServicesProps> = ({ scrollYProgress, isMobile }) => {
  const scale = useTransform(scrollYProgress, [0.52, 0.58], [1, 1])

  return (
    <motion.section
      className="sticky top-0 bg-white flex flex-col py-8 md:py-4 sxl:py-8  px-4 md:px-10 4xl:px-14 min-h-screen"
      style={{
        ...(isMobile ? {} : { scale }),
        transformOrigin: 'center center',
      }}
    >
      <h2 className="mb-4">Services</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        <div className="w-full flex flex-col gap-4 md:max-w-[60%] 2xl:max-w-[45%]">
          <p className="">{servicesData.desc}</p>
          <div>
            <CoordButton variant="yellow">Know More</CoordButton>
          </div>
        </div>

        <ServiceImage imageSrc="/services/image1.png" className="hidden md:block" />

        <div className="flex md:hidden justify-end">
          <ServiceImage imageSrc="/services/image1.png" />
        </div>
      </div>

      <div className="mt-7 md:mt-auto flex flex-col gap-4 3xl:gap-16 md:flex-row md:justify-between w-full">
        <div className="hidden md:flex flex-col justify-end w-[20%]">
          <ServiceImage imageSrc="/services/image2.png" className="" />
        </div>
        {servicesData.cards.map((card, index) => (
          <div key={index} className="w-full md:w-1/3">
            <ServiceCard {...card} />
          </div>
        ))}
      </div>
    </motion.section>
  )
}

interface ServiceCardProps {
  superTitle: string
  title: string
  desc: string
  features: string[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({ superTitle, title, desc, features }) => (
  <div className="flex flex-col border p-3 sxl:p-4 3xl:p-6 gap-4 md:gap-3  sxl:gap-4 3xl:gap-12 bg-mist-background h-full">
    <div className="font-playfair text-[0.875rem] md:text-[1rem] sxl:text-[1.5rem] 3xl:text-[2.25rem] font-medium italic md:max-w-[25ch]">
      {superTitle}
    </div>
    <h3 className="text-highlight text-[1.5rem] md:text-[1.7rem] sxl:text-[2.25rem] 3xl:text-[2.75rem]">
      {title}
    </h3>

    <p className="hidden 3xl:block max-w-[40ch] text-[1.125rem] 3xl:text-[1.5rem]">{desc}</p>

    <div className="flex flex-col">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-1">
          <span>
            <ArrowRight className="text-accent-primary w-4 sxl:w-8 3xl:w-12" />
          </span>
          <span className="md:max-w-[30ch] 2xl:max-w-[40ch] text-[0.75rem] md:text-[0.87rem] sxl:text-[1.125rem] 3xl:text-[1.5rem]">
            {feature}
          </span>
        </div>
      ))}
    </div>
  </div>
)

export default Services

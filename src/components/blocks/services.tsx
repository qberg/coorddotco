import CoordButton from '@/components/ui/coord-button'
import ServiceImage from '@/components/ui/service-image'
import { ArrowRight } from 'lucide-react'
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
  ],
}

const Services = () => {
  return (
    <section className="flex flex-col py-8  px-4 md:px-10 4xl:px-14 min-h-screen">
      <h2>Services</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="w-full md:max-w-[33%]">
          <p className="my-5 md:my-10">{servicesData.desc}</p>
          <CoordButton variant="yellow">Know More</CoordButton>
        </div>

        <ServiceImage imageSrc="/services/image1.png" className="hidden md:block" />

        <div className="flex md:hidden justify-end">
          <ServiceImage imageSrc="/services/image1.png" />
        </div>
      </div>

      <div className="mt-auto flex flex-col md:flex-row md:justify-between w-full">
        <div className="hidden md:flex flex-col justify-end w-[20%]">
          <ServiceImage imageSrc="/services/image2.png" className="" />
        </div>
        <div className="font-playfair font-medium text-m italic">
          Cards-need content confirmation
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  superTitle: string
  title: string
  desc: string
  features: string[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({ superTitle, title, desc, features }) => (
  <div className="w-full md:max-w-[24%] bg-service-background flex flex-col gap-2 p-2 lg:p-4 2xl:p-8 3xl:p-16">
    <div className="text-m font-playfair-display font-medium italic">{superTitle}</div>
    <h3 className="text-highlight">{title}</h3>

    <p>{desc}</p>

    <ul className="flex flex-col gap-5">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <ArrowRight className="text-service-secondary" size={16} />
          <span className="ml-3 text-sm font-hanken font-light">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default Services

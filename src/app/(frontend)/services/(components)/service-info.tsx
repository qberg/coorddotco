'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HorseBg from '@/components/horse-bg'
import CoordButton from '@/components/ui/coord-button'
import useIsMobile from '@/hooks/useIsMobile'
import Card from '@/app/(frontend)/services/(components)/card'

gsap.registerPlugin(ScrollTrigger)

const ServiceInfo = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile || !sectionRef.current || !slidesRef.current) return

    const totalScroll = slidesRef.current.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${totalScroll}`,
        markers: true,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      })

      gsap.to(slidesRef.current, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${totalScroll}`,
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [isMobile])

  if (!isMobile === null) return null

  return (
    <section
      ref={sectionRef}
      className="min-h-screen pt-8 px-4 md:px-10 4xl:px-14 relative overflow-hidden"
    >
      <HorseBg variant="orange" />
      <Header />

      <div
        ref={slidesRef}
        className={`${
          !isMobile
            ? 'flex gap-8  mt-20 md:mt-12 sxl:mt-28 2xl:mt-44 3xl:mt-56 w-fit will-change-transform'
            : 'flex-col gap-8 py-12'
        } flex`}
      >
        {cards.map((card, i) => (
          <div key={i} className="shrink-0 w-full md:w-auto">
            {card}
          </div>
        ))}
      </div>
    </section>
  )
}

const Header = () => {
  return (
    <div className="flex justify-between text-white items-start">
      <div className="flex flex-col gap-8 md:gap-4">
        <h2 className="">Craft Sourcing</h2>

        <p className="w-full md:max-w-[70ch]">
          Whether you&apos;re outfitting a commercial space or curating for a personal collection,
          our art curation service allows you to select from a curated catalog of stunning pieces.
        </p>

        <div className="flex justify-between">
          <h5 className="block md:hidden max-w-[15ch]">
            Discover a wide range of regional Indian crafts, handpicked for their authenticity and
            artistry.
          </h5>

          <div className="sxl:mt-1 3xl:mt-2">
            <CoordButton variant="white" withArrow>
              Contact Us
            </CoordButton>
          </div>
        </div>
      </div>

      <h5 className="hidden md:block md:max-w-[25ch] sxl:max-w-[30ch]">
        Discover a wide range of regional Indian crafts, handpicked for their authenticity and
        artistry.
      </h5>
    </div>
  )
}

const cards = [
  <Card
    key="card1"
    id="01"
    title="Browse the Collection"
    desc="Explore our curated collection of regional Indian crafts, browse online or request a catalog tailored to your needs. "
    imgSrc="/services/cards/cs1.png"
  />,
  <Card
    key="cs2"
    id="02"
    title="Contact Us"
    desc="If you find a piece you love, reach out to us for more details or a personalized catalog with similar works."
    imgSrc="/services/cards/cs2.png"
  />,
  <Card
    key="cs3"
    id="03"
    title="Choose Your Piece"
    desc="After reviewing our catalog, select the artwork that fits your vision."
    imgSrc="/services/cards/cs3.png"
  />,
  <Card
    key="cs4"
    id="04"
    title="Craft and Delivery"
    desc="Once your choice is made, we’ll coordinate the crafting of the piece and ensure timely delivery to your location."
    imgSrc="/services/cards/cs4.png"
  />,
]

export default ServiceInfo

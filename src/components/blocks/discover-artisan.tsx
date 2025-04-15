import BlurImage from '@/components/blur-image'

const playfair = {
  fontSize: 'clamp(1.125rem, 0.8329rem + 1.1982vw, 2.75rem)',
}

const DiscoverArtisans = () => {
  const imageOneStyle = {
    width: 'clamp(10rem, 6.1809rem + 15.6682vw, 31.25rem)',
  }

  return (
    <section className="flex flex-col lg:flex-row py-8  px-4 md:px-10 4xl:px-14 min-h-screen lg:justify-between">
      <div className="w-full md:max-w-[70%] xl:max-w-[50%] 2xl:max-w-[45%]">
        <h2 className="mb-4 lg:mb-8 2xl:mb-14 3xl:mb-16">
          Connecting you to the Roots of Craftsmanship.
        </h2>
        <h4>Discover. Connect. Collaborate.</h4>
        <p>
          Find artisans, explore craft legacies, and connect with the people who shape India&apos;s
          handmade heritage. Whether you seek a master weaver or a skilled metalworker, find the
          hands that keep traditions alive.
        </p>
      </div>

      <div className="flex justify-between lg:gap-6 2xl:gap-12 3xl:gap-16 mt-auto lg:mt-24">
        <div className="flex flex-col justify-end items-start" style={imageOneStyle}>
          <div className="font-playfair font-medium italic" style={playfair}>
            Hands Behind Heritage
          </div>
          <div className="relative border w-full aspect-[3/5] md:aspect-[4/5] mb-2">
            <BlurImage
              src="/artisans/im1.png"
              alt="Artisans image 1"
              fill
              priority
              className="object-cover"
            />
          </div>

          <p>Meet the makers who carry stories in every stitch, weave, and form.</p>
        </div>

        <div className="flex flex-col justify-between ml-4" style={imageOneStyle}>
          <div className="flex flex-col">
            <div className="font-playfair font-medium italic" style={playfair}>
              Craft in Motion
            </div>

            <div className="relative w-full aspect-[1.75/1] mb-4">
              <BlurImage
                src="/artisans/im2.png"
                alt="Artisans image 2"
                fill
                className="object-cover"
              />
            </div>

            <p>See tradition unfold — one thoughtful gesture at a time.</p>
          </div>

          <div className="flex flex-col">
            <div className="font-playfair font-medium italic" style={playfair}>
              Objects That Speak
            </div>
            <div className="relative w-full aspect-[1.75/1]">
              <BlurImage
                src="/artisans/im3.png"
                alt="Artisans image 3"
                fill
                className="object-cover"
              />
            </div>

            <p>Each piece holds a journey — of skill, soul, and centuries of culture.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscoverArtisans

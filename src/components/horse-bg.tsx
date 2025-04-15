import Image from 'next/image'

const HorseBg = () => {
  return (
    <div className="absolute inset-0 w-screen h-full -z-100 bg-mist-background">
      <Image
        src="/horse.svg"
        alt="COORD Horse background"
        fill
        sizes="100vw"
        priority
        quality={85}
        className="object-cover hidden md:block"
      />

      <Image
        src="/horse-mob.svg"
        alt="COORD Horse background"
        fill
        sizes="100vw"
        priority
        quality={85}
        className="object-cover block md:hidden"
      />
    </div>
  )
}

export default HorseBg

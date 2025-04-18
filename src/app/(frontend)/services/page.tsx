import ServicesHero from '@/app/(frontend)/services/(components)/hero'
import ServiceInfo from '@/app/(frontend)/services/(components)/service-info'
import Header from '@/components/header'

const Page = () => {
  return (
    <>
      <Header />
      <ServicesHero />
      <ServiceInfo />
    </>
  )
}

export default Page

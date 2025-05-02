'use client'
import useMeasure from 'react-use-measure'
import ServicesHero from '@/app/(frontend)/services/(components)/hero'
import Header from '@/components/header'
import BreadCrumb from '@/app/(frontend)/services/(components)/breadcrumb'
import useIsMobile from '@/hooks/useIsMobile'
import ServiceInfoM from '@/app/(frontend)/services/(components)/service-info-motion'

const Page = () => {
  const [headerRef, headerBounds] = useMeasure()
  const [breadCrumbRef, breadCrumbBounds] = useMeasure()
  const isMobile = useIsMobile()

  const remainingHeight = `calc(100vh - ${headerBounds.height}px - ${breadCrumbBounds.height}px)`
  return (
    <>
      <div ref={headerRef}>
        <Header />
      </div>
      <div ref={breadCrumbRef}>
        <BreadCrumb />
      </div>
      <div style={!isMobile ? { height: remainingHeight } : {}}>
        <ServicesHero />
      </div>

      <div className="">
        <ServiceInfoM />
      </div>

      <div className="h-screen" />
    </>
  )
}

export default Page

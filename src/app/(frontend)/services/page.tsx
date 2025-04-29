'use client'
import useMeasure from 'react-use-measure'
import ServicesHero from '@/app/(frontend)/services/(components)/hero'
import ServiceInfo from '@/app/(frontend)/services/(components)/service-info'
import Header from '@/components/header'
import BreadCrumb from '@/app/(frontend)/services/(components)/breadcrumb'

const Page = () => {
  const [headerRef, headerBounds] = useMeasure()
  const [breadCrumbRef, breadCrumbBounds] = useMeasure()

  const remainingHeight = `calc(100svh - ${headerBounds.height}px - ${breadCrumbBounds.height}px)`
  return (
    <>
      <div ref={headerRef}>
        <Header />
      </div>
      <div ref={breadCrumbRef}>
        <BreadCrumb />
      </div>
      <div style={{ height: remainingHeight }}>
        <ServicesHero />
      </div>
      <div>
        <ServiceInfo />
      </div>
    </>
  )
}

export default Page

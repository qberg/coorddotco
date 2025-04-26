'use client'
import useMeasure from 'react-use-measure'
import BreadCrumb from '@/app/(frontend)/fablab/(components)/breadcrumb'
import Hero from '@/app/(frontend)/fablab/(components)/hero'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Info from '@/app/(frontend)/fablab/(components)/info'

const Page = () => {
  const [headerRef, headerBounds] = useMeasure()
  const [breadCrumbRef, breadCrumbBounds] = useMeasure()

  const remainingHeight = `calc(100vh - ${headerBounds.height}px - ${breadCrumbBounds.height}px)`

  return (
    <>
      <div ref={headerRef}>
        <Header />
      </div>
      <div ref={breadCrumbRef}>
        <BreadCrumb />
      </div>
      <div style={{ height: remainingHeight }}>
        <Hero />
      </div>
      <Info />

      <Footer />
    </>
  )
}

export default Page

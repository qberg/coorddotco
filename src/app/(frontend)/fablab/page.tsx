'use client'
import useMeasure from 'react-use-measure'
import BreadCrumb from '@/app/(frontend)/fablab/(components)/breadcrumb'
import Hero from '@/app/(frontend)/fablab/(components)/hero'
import Header from '@/components/header'

const Page = () => {
  const [headerRef, headerBounds] = useMeasure()
  const [breadCrumbRef, breadCrumbBounds] = useMeasure()

  // Calculate remaining height
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
    </>
  )
}

export default Page

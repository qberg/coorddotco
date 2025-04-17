import CoordCommunity from '@/components/blocks/coord-communty'
import CoordPhil from '@/components/blocks/coord-phil'
import DiscoverArtisans from '@/components/blocks/discover-artisan'
import FabLab from '@/components/blocks/fablab'
import Library from '@/components/blocks/library'
import Services from '@/components/blocks/services'
import MainHero from '@/components/hero-blocks/main-hero'
import Footer from '@/components/footer'
import Header from '@/components/header'

const StartPage = () => {
  return (
    <>
      <Header />
      <MainHero />
      <CoordPhil />
      <Library />
      <Services />
      <FabLab />
      <DiscoverArtisans />
      <CoordCommunity />
      <Footer />
    </>
  )
}

export default StartPage

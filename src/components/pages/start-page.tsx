import CoordCommunity from '@/components/blocks/coord-communty'
import CoordPhil from '@/components/blocks/coord-phil'
import DiscoverArtisans from '@/components/blocks/discover-artisan'
import FabLab from '@/components/blocks/fablab'
import Library from '@/components/blocks/library'
import Services from '@/components/blocks/services'
import MainHero from '@/components/hero-blocks/main-hero'

const StartPage = () => {
  return (
    <>
      <MainHero />
      <CoordPhil />
      <Library />
      <Services />
      <FabLab />
      <DiscoverArtisans />
      <CoordCommunity />
    </>
  )
}

export default StartPage

import Header from '../layouts/Header'
import Hero from '../layouts/Hero'
import ExploreCategories from '../layouts/ExploreCategories'
import DealSection from '../layouts/DealSection'
import PromoSection from '../layouts/PromoSection'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <div>
    <Header></Header>
    <Hero></Hero>
    <ExploreCategories/>
    <DealSection/>
    <PromoSection/>
    <Footer></Footer>
    </div>
  )
}

export default Home
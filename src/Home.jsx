import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Head from './Head'
import Categories from './Categories'
import BestSellersHome from './BestSellersHome'
import Subscribe from './Subscribe'
import AboutUs from './AboutUs'
import WhyKoalaHome from './WhyKoalaHome'
import LogoBanner from './LogoBanner'
import AusBrand from './AusBrand'
import QuizBanner from './QuizBanner'
import NewArrivalsHome from './NewArrivalsHome'
import Reviews from './Reviews'
const Home = () => {

  return (
    <div className="scroll-smooth"> 
       <Header/>
       <Head/>    
       <Content />  
       <Categories/>
       <BestSellersHome/>
       <LogoBanner/>
       <AusBrand/>
       <QuizBanner/>
       <NewArrivalsHome/>
       <Reviews/>
       <WhyKoalaHome/>
       <AboutUs/>
       <Subscribe/>
       <Footer/>
    </div>
  )
}

export default Home
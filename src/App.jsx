import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './pages/Contact';
import Accounts from './pages/Accounts';
import WhyKoala from './pages/WhyKoala';
import MattressQuiz from './pages/MattressQuiz';
import Mattresses from './collections/Mattresses';
import Sofabeds from './collections/Sofabeds';
import Sofas from './collections/Sofas';
import Bedroom from './collections/Bedroom';
import Chatbox from './Chatbox';
import Login from './Login';
import Cart from './components/Cart';
import Product from './components/Product';
import PrivacyPolicy from './policies/privacypolicy';
import WebsiteTerms from './policies/WebsiteTerms';
import TermsOfServices from './policies/TermsOfServices';
import PromotionTerms from './policies/PromotionTerms';
import PageNotFound from './PageNotFound';

const App = () => {

  return (
    <Router>
      <div className="flex">

        <Chatbox/>  
        
        <div className="flex">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/pages/contact" element={<Contact/>}/>
            <Route path="/pages/accounts" element={<Accounts/>}/>
            <Route path="/pages/whyKoala" element={<WhyKoala/>}/> 
            <Route path="/pages/mattressQuiz" element={<MattressQuiz/>}/>
            <Route path="/collections/mattresses" element={<Mattresses/>}/>
            <Route path="/collections/sofabeds" element={<Sofabeds/>}/>
            <Route path="/collections/sofas" element={<Sofas/>}/>
            <Route path="/collections/bedroom" element={<Bedroom/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/product/:id" element={<Product/>}/>  
            <Route path="/policies/privacypolicy" element={<PrivacyPolicy/>}/>
            <Route path="/policies/websiteterms" element={<WebsiteTerms/>}/>
            <Route path="/policies/termsofservices" element={<TermsOfServices/>}/>
            <Route  path="/policies/promotionterms" element={<PromotionTerms/>}/>

            <Route path="*" element={<PageNotFound/>}/>  
          </Routes>
        </div>
        
      </div>
    </Router>
  )
}

export default App
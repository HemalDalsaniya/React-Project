import { useEffect } from 'react'
import { useLocation } from 'react-router-dom' 
import Header from '../Header'
import Head from '../Head'
import Subscribe from '../Subscribe'
import Footer from '../Footer'
import BedroomHeader from './BedroomHeader'
import BedroomContent from './BedroomContent'
const Bedroom = () => {

  const {location} = useLocation();

  useEffect( () => {
    window.scrollTo(0,0);
  },[location])

  return (
    <>
    <div>
      <Header/>
      <Head/>
      <BedroomHeader/>
      <BedroomContent/>
      <Subscribe/>
      <Footer/>
    </div>
    </>
  )
}

export default Bedroom
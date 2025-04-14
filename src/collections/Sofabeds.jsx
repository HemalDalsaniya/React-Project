import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header'
import Head from '../Head'
import Subscribe from '../Subscribe'
import Footer from '../Footer'
import SofasHeader from './SofasHeader'
import SofabedsContent from './SofabedsContent'
const Sofabeds = () => {

  const {location} = useLocation();

  useEffect( () => {
    window.scrollTo(0,0);
  },[location])

  return (

    <>
    <div>
      <Header/>
      <Head/>
      <SofasHeader/>
      <SofabedsContent/>
      <Subscribe/>
      <Footer/>
    </div>
    </>
  )
}

export default Sofabeds
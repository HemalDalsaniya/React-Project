import Header from '../Header'
import Head from '../Head'
import Subscribe from '../Subscribe'
import Footer from '../Footer'
import SofasHeader from './SofasHeader'
import SofasContent from './SofasContent'
import { useEffect } from 'react'
import { useLocation} from 'react-router-dom'

const Sofas = () => {

const {location} = useLocation();

  useEffect( () => {
    window.scrollTo(0,0);
  },[location])

  return (
    <>
    <div >
      <Header/>
      <Head/>
      <SofasHeader/>
      <SofasContent/>
      <Subscribe/>
      <Footer/>
    </div>
    </>
  )
}

export default Sofas
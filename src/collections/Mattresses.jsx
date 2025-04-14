import {useState, useRef, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header'
import Head from '../Head'
import Subscribe from '../Subscribe'
import Footer from '../Footer'
import { Link, } from 'react-router-dom'
import Van from '/icons/Van.png';
import Calender from '/icons/Calender.png';
import Warrenty from '/icons/Warrenty.png';
import compare from '/images/comparision/compare.png';

const Mattresses = () => {

const [LinkId, setLinkId] = useState(4); 
const compareRef = useRef(null);

const {location} = useLocation();

useEffect( () => {
  window.scrollTo(0,0);
},[location])

const handleClick = () => {
  if (compareRef.current) {
    compareRef.current.scrollIntoView({ behavior: 'smooth' });
  }
};

useEffect(() => { 
  if (window.location.hash === '#compare' && compareRef.current) {
    compareRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, []);


  const links = [
        { id: 1, name: "Single", 
           images: ["/images/mattresses/SingleMat/singlemat1.png", "/images/mattresses/SingleMat/singlemat2.png",
              "/images/mattresses/SingleMat/singlemat3.png"],
           rate:["4.8(643)","4.8(2059)","4.8(463)"], 
           title:["Koala Plus Mattress", "Koala Mattress", "Koala SE Mattress"], 
           description:["Advanced support & cooling with seasonal and firmness adjustment.",
                       "Australia's top-rated mattress, enhanced support and comfort.",
                       "Cloud-like comfort at a price that will have you smiling in your sleep.",], 
           price:[" $990"," $850", " $650"] },

        { id: 2, name: "King Single", 
          images: ["/images/mattresses/SingleMat/singlemat1.png", "/images/mattresses/SingleMat/singlemat2.png",
                  "/images/mattresses/SingleMat/singlemat3.png"],
          rate:["4.8(643)","4.8(2059)","4.8(463)"], 
          title:["Koala Plus Mattress", "Koala Mattress", "Koala SE Mattress"], 
          description:["Advanced support & cooling with seasonal and firmness adjustment.",
            "Australia's top-rated mattress, enhanced support and comfort.",
            "Cloud-like comfort at a price that will have you smiling in your sleep.",], 
          price:[" $990"," $850", " $650"] },

          { id: 3, name: "Double", 
            images: ["/images/mattresses/AllMat/allmat1.png", "/images/mattresses/AllMat/allmat2.png",
                    "/images/mattresses/AllMat/allmat3.png","/images/mattresses/AllMat/allmat4.png"],
            rate:["4.9(341)","4.8(643)","4.8(2059)","4.8(463)"], 
            title:["Koala Luxe Mattress", "Koala Plus Mattress", "Koala Mattress", "Koala SE Mattress"], 
            description:["Redefining luxury sleep, with cashmere & copper Kloudcell®.",
              "Advanced support & cooling with seasonal and firmness adjustment.",
              "Australia's top-rated mattress, enhanced support and comfort.",
              "Cloud-like comfort at a price that will have you smiling in your sleep.",], 
            price:[" $2,000"," $990"," $850", " $650"] },

         { id: 4, name: "Queen", 
          images: ["/images/mattresses/AllMat/allmat1.png", "/images/mattresses/AllMat/allmat2.png",
                  "/images/mattresses/AllMat/allmat3.png","/images/mattresses/AllMat/allmat4.png"],
          rate:["4.9(341)","4.8(643)","4.8(2059)","4.8(463)"], 
          title:["Koala Luxe Mattress", "Koala Plus Mattress", "Koala Mattress", "Koala SE Mattress"], 
          description:["Redefining luxury sleep, with cashmere & copper Kloudcell®.",
            "Advanced support & cooling with seasonal and firmness adjustment.",
            "Australia's top-rated mattress, enhanced support and comfort.",
            "Cloud-like comfort at a price that will have you smiling in your sleep.",], 
          price:[" $2,000"," $990"," $850", " $650"] },

        { id: 5, name: "King", images: [] },
        { id: 6, name: "Super King", images: [] },
      ];

    const handleLinkClick = (id) => {
    setLinkId(id === LinkId ? null : id);
    };


  return (
    <>
    <div >
      <Header/>
      <Head/>
      <div >
      <div className="bg-white px-40 pt-14 mb-18">
        
      <div className="flex justify-center items-center mb-3">
        <img alt="star" src="/images/rate/stars.png" className="h-6 w-30" />
        <h1 className="text-xl font-bold text-gray-500">Over 500,000 happy customers</h1>
      </div>
      <div className="flex text-4xl font-bold justify-center items-center mb-8">
        <h1 >Australia's most awarded mattress brand</h1>
      </div>

     <div className="cursor-pointer">
      <div className="flex space-x-4 mb-8 justify-center items-center">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleLinkClick(link.id)}
            className={`px-4 py-2 rounded-full cursor-pointer font-semibold ${
              LinkId === link.id ? 'bg-[#586A4D] text-white' : 'bg-zinc-100 text-[#586A4D]'
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {LinkId === 1 && (
          <div className="flex justify-start gap-8">
            {links[0].images.map((image, index) => (
              <div key={index} className="space-y-2">
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg w-95 h-80 hover:opacity-85 transition-opacity "
              />
              <div className="flex text-gray-900 justify-start gap-1"><span>
              <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png"/></span> {links[0].rate[index]}</div>
              <h3 className=" text-gray-900 font-bold">{links[0].title[index]}</h3>
              <p className="text-gray-900 w-95">{links[0].description[index]}</p>
              <p className="text-gray-900 font-bold">{links[0].price[index]}</p><br/>
              <Link to="/collections/bedroom" className="bg-[#586A4D] rounded-full text-white text-center font-bold py-4 px-35">SHOP NOW</Link>
              </div>    
              ))}
          </div>
        )}

       {LinkId === 2 && (
          <div className="flex justify-start gap-8">
            {links[1].images.map((image, index) => (
              <div key={index} className="space-y-2">
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg w-95 h-80 hover:opacity-85 transition-opacity "
              />
              <div className="flex text-gray-900 justify-start gap-1"><span>
              <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png"/></span> {links[1].rate[index]}</div>
              <h3 className=" text-gray-900 font-bold">{links[1].title[index]}</h3>
              <p className="text-gray-900 w-95">{links[1].description[index]}</p>
              <p className="text-gray-900 font-bold">{links[1].price[index]}</p><br/>
              <Link to="/collections/bedroom" className="bg-[#586A4D] rounded-full text-white text-center font-bold py-4 px-35">SHOP NOW</Link>
              </div>        
            ))}
          </div>
        )}

        {LinkId === 3 && (
          <div className="flex justify-start gap-8">
            {links[2].images.map((image, index) => (
              <div key={index} className="space-y-2">
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg w-95 h-80 hover:opacity-85 transition-opacity "
              />
              <div className="flex text-gray-900 justify-start gap-1"><span>
              <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png"/></span> {links[2].rate[index]}</div>
              <h3 className=" text-gray-900 font-bold">{links[2].title[index]}</h3>
              <p className="text-gray-900 w-95">{links[2].description[index]}</p>
              <p className="text-gray-900 font-bold">{links[2].price[index]}</p><br/>
              <Link to="/collections/bedroom" className="bg-[#586A4D] rounded-full text-white text-center font-bold  py-4 px-35">SHOP NOW</Link>
              </div> 
            ))}
          </div>
        )}

       {LinkId === 4 && (
          <div className="flex justify-start gap-8">
            {links[3].images.map((image, index) => (
              <div key={index} className="space-y-2">
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg w-95 h-80 hover:opacity-85 transition-opacity "
              />
              <div className="flex text-gray-900 justify-start gap-1"><span>
              <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png"/></span> {links[3].rate[index]}</div>
              <h3 className=" text-gray-900 font-bold">{links[3].title[index]}</h3>
              <p className="text-gray-900 w-95">{links[3].description[index]}</p>
              <p className="text-gray-900 font-bold">{links[3].price[index]}</p><br/>
              <Link to="/collections/bedroom" className="bg-[#586A4D] rounded-full text-white text-center font-bold py-4 px-35">SHOP NOW</Link>
              </div> 
            ))}
          </div>
        )}

        
      </div>
    </div>
    </div>

    <div className="flex items-center justify-center py-3 mb-8 gap-3 text-black text-md w-full bg-zinc-100">
          <img
              src={Van}  
              alt="Van" 
              width="25px"
              height="25px" 
          />Fast delivery
          <img
              src={Calender}  
              alt="Van" 
              width="25px"
              height="25px" 
          />120-night free trial
          <img
              src={Warrenty}  
              alt="Van" 
              width="25px"
              height="25px" 
          />World-class warranty
      </div>

      <div className="flex justify-between mx-40 h-32 bg-zinc-100 rounded-lg p-8 mb-14">
              <h2 className="flex justify-start text-3xl text-black font-bold items-center">Not sure which mattress is right for you?</h2>
              <div className="flex justify-end items-center gap-6">
              <Link  className="border-1 border-gray-500 hover:border-black bg-white text-gray-700 font-bold py-4 px-6 rounded-full cursor-pointer" to="/pages/mattressQuiz">TAKE THE QUIZ</Link>
              <button className="border-1 border-gray-500 hover:border-black bg-white text-gray-700 font-bold py-4 px-6 rounded-full cursor-pointer" onClick={handleClick}>COMPARE MATTRESSES</button> 
             </div>
      </div>

      <div  className="flex text-3xl font-bold justify-center items-center mb-8" id="compare" ref={compareRef}>
        <h1>Find Your Perfect Mattress</h1>
      </div>

      <div className="flex text-3xl font-bold justify-center items-center mb-8 px-40">
        <img className="border border-gray-200 rounded-lg"
              src={compare}  
              alt="Comparision Table" 
              width="100%"
              height="100%" 
          />
      </div>
  

    </div>

      <Subscribe/>
      <Footer/>
    </div>
    </>
  )
}

export default Mattresses
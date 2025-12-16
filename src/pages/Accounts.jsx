import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from '../Header';
import Head from '../Head';
import Subscribe from '../Subscribe';
import Footer from '../Footer';
import Chat from '../Chat';
const Accounts = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);

   const {location} = useLocation();
  
    useEffect( () => {
      window.scrollTo(0,0);
    },[location])

  const handleCloseClick = () => {
    setIsChatOpen(false); 
  }; 

  const contactData = [
    {
      id: 1,
      image: "/images/contact/contact1.png",  
      url: "/pages/contact"
    },
    {
      id: 2,
      image: "/images/contact/contact2.png",
      url: "/pages/accounts"
    },
    {
      id: 3,
      image: "/images/contact/contact3.png",
      onClick: () => setIsChatOpen(!isChatOpen) 
    }  
  ];

  return (
    <>
      <div>
        <Header />
        <Head />

        <div>

        <div className="bg-white px-40 pt-14 mb-12 cursor-pointer"> 
          <div className="flex gap-8">          
            {contactData.map((con) => (
              <div key={con.id}>
                <div className="rounded-xl">
                  {con.url ? (
                    <Link to={con.url}>
                      <img src={con.image} alt="image" className="rounded-lg w-150 h-80" />
                    </Link>
                  ) : (
                    <img 
                      src={con.image} 
                      alt="image" 
                      className="rounded-lg w-150 h-80" 
                      onClick={con.onClick} 
                    />
                  )}
                </div> 
              </div>
            ))}
          </div>
        </div>

        {isChatOpen && (
          <Chat 
            onClose={handleCloseClick} 
            isChatOpen={isChatOpen} 
            setIsChatOpen={setIsChatOpen} 
          />
        )}

        </div>

        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Accounts 
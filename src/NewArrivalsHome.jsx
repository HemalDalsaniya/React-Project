import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewArrivalsHome = () => {
  const [LinkId, setLinkId] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const links = [
    { 
      id: 1, 
      name: "Featured", 
      images: [
        "/images/featured/featured10.png", "/images/featured/featured11.png","/images/featured/featured12.png",
        "/images/featured/featured13.png","/images/featured/featured14.png","/images/featured/featured15.png",
        "/images/featured/featured16.png","/images/featured/featured17.png"
      ],
      rate:["4.7(527)","","4.7(66)","4.7(515)","4.6(63)","4.9(15)","5.0(15))","4.6(14)",""], 
      title:["Byron sofa Bed", "Byron Sofa Bed Ottaman", "Bungalow Modular Sofa", "Wanda Sofa Bed","Torakina Outdoor Lounge Set", 
             "Torakina Outdoor Dining Set", "Balmain Beside Table", "Byron Sofa bed Covers"], 
      size:["3.5 Seater, 1 Size","","3 Seater, 10 Size","3.5 Seater, 1 Size","6 Seater Square Coffee Table, 4 Size","4 Seater, 2 Size",
            "","3.5 seater, 1 size"], 
      price:["From $1194","From $382","From $1404", "From $2499","From $1310","From $1550","From $450", "From $1000"]
    },
    { 
      id: 2, 
      name: "Bedroom", 
      images: [
        "/images/bedroom/bedroom6.png", "/images/bedroom/bedroom7.png","/images/bedroom/bedroom40.png"
      ],
      rate:["4.9(15)","4.6(14)","4.9(15)"], 
      title:["Balmian Chest of Drawers", "Balmain Beside Table", "Balmain Chest of Drawers"], 
      size:["3 Drawers, 2 Size","","5 Drawers, 2 Size"], 
      price:["From $890","From $450","From $1100"]
    },
    { id: 3, name: "Living Room", images: [] },
    { id: 4, name: "Outdoor", images: [] }
  ];

  const currentLink = links.find((link) => link.id === LinkId);

  const handleLinkClick = (id) => {
    setLinkId(id === LinkId ? null : id);
    setCurrentIndex(0); 
  };

  const nextImage = () => {
    if (currentLink && currentIndex < currentLink.images.length - 4) {
      setCurrentIndex((prevIndex) => prevIndex + 1); 
    }
  };

  const prevImage = () => {
    if (currentLink && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1); 
    }
  };

  const progress = (currentIndex / (currentLink ? currentLink.images.length - 4 : 1)) * 100;

  return (
    <div className="bg-white px-40 pt-14">
      <div className="flex justify-between mb-8">
        <h1 className="text-4xl font-bold justify-start">New Arrivals</h1>
        <Link className="underline underline-offset-5 text-gray-700 hover:text-gray-500" 
        to={ LinkId === 1 ? "/collections/sofas" : "/collections/bedroom"}>See All</Link>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between relative">
        <div className="flex justify-start space-x-4 mb-8">
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

        {/* Right-aligned buttons */}
        <div className="absolute right-0 mt-7 -translate-y-1/2 space-x-2">
          <button
            onClick={prevImage}
            className="text-gray-700 text-2xl w-14 h-14 bg-zinc-100 bg-opacity-50 p-2 rounded-full"
          >
            &#11164;
          </button>
          <button
            onClick={nextImage}
            className="text-gray-700 text-2xl w-14 h-14 bg-zinc-100 bg-opacity-50 p-2 rounded-full"
          >
            &#11166;
          </button>
        </div>
      </div>

      {/* Carousel Images and Details */}
      {LinkId && currentLink && (
        <div className="flex justify-start gap-8 ">
          {currentLink.images.slice(currentIndex, currentIndex + 4).map((image, index) => (
            <div key={index} className="space-y-2">
              <img src={image} alt={`Carousel Image ${index + 1}`} className="rounded-lg w-95 h-80 hover:opacity-85 transition-opacity" />
              
              <div className="flex text-gray-900 justify-start gap-1">
                <span>
                  <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png" />
                </span>
                {currentLink.rate[currentIndex + index]} 
              </div>

              <h3 className="text-gray-900 font-bold">{currentLink.title[currentIndex + index]}</h3> 
              <p className="text-gray-900">{currentLink.size[currentIndex + index]}</p>
              <p className="text-gray-900">{currentLink.price[currentIndex + index]}</p> 
            </div>
          ))}
        </div>
      )}

      {/* Progress Bar */}
      <div className="h-2 bg-gray-300 mt-7 rounded-full">
        <div
          className="h-full bg-[#586A4D] rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default NewArrivalsHome
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BestSellersHome = () => {
  const [LinkId, setLinkId] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const links = [
    { 
      id: 1, 
      name: "Featured", 
      images: [
        "/images/featured/featured1.png", "/images/featured/featured2.png","/images/featured/featured3.png",
        "/images/featured/featured4.png","/images/featured/featured5.png","/images/featured/featured6.png",
        "/images/featured/featured7.png","/images/featured/featured8.png","/images/featured/featured9.png"
      ],
      rate:["4.8(2056)","4.7(1685)","4.8(645)","4.7(515)","4.9(343)","4.6(572)","4.8(469)","4.8(216)","4.7(58)"], 
      title:["Koala Mattress", "Cushy Sofa Bed", "Koala Plus Mattress", "Byron Sofa Bed","Koala Luxe Mattress", 
             "Modern Sofa", "Koala SE Mattress", "Kirribilli Bed Base","Bungalow Modular Sofa"], 
      size:["Queen, 6 Size","2.5 Seater, 3 Size","Queen, 6 Size","3.5 Seater, 1 Size","Queen, 4 Size","3 Seater, 5 Size",
            "Queen, 5 Size","Queen, 5 size","3 Seater, 10 Size"], 
      price:["From $890","From $1,390","From $1,050", "From $2,290","From $2,090","From $1,690","From $650", "From $1,150","From $1800"]
    },
    { 
      id: 2, 
      name: "Sofa Beds", 
      images: [
        "/images/sofabeds/sofabed1.png", "/images/sofabeds/sofabed2.png","/images/sofabeds/sofabed3.png",
        "/images/sofabeds/sofabed4.png","/images/sofabeds/sofabed5.png","/images/sofabeds/sofabed6.png",
        "/images/sofabeds/sofabed7.png","/images/sofabeds/sofabed8.png"
      ],
      rate:["4.7(1685)","4.8(645)","4.6(51)","4.9(343)","4.7(1685)","4.6(3258)","4.3(135)","4.7(1685)"], 
      title:["Cushy Sofa Bed", "Byron Sofa Bed", "Wanda Sofa Bed","Cushy Sofa Bed", 
             "Sofa Bed", "Stunner Sofa Bed", "Cushy Sofa Bed"], 
      size:["3 Seater, 3 Size","3.5 Seater, 1 Size","3.5 Seater, 1 Size","3 Seater, 3 Size","3 Seater, 3 Size",
            "3 Seater, 1 Size","2.5 Seater, 3 size","3.5 Seatre, 1 Size"], 
      price:["From $1,990","From $2,290","From $3,150", "From $2,090","From $1,790","From $2,190","From $1,790", "From $2,290"]
    },
    { id: 3, name: "Mattresses", images: [] },
    { id: 4, name: "Sofas", images: [] },
    { id: 5, name: "Bed Bases", images: [] },
    { id: 6, name: "Pillows", images: [] },
    { id: 7, name: "Bookshelves", images: [] }
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
    <div className="bg-white px-40 pt-14 mb-12">
      <div className="flex justify-between mb-8">
        <h1 className="text-4xl font-bold justify-start">Best Seller</h1>
        <Link className="underline underline-offset-5 text-gray-700 hover:text-gray-500" 
          to={ LinkId === 2 || LinkId=== 4 ? "/collections/sofas" : "/collections/bedroom"}
        >See All</Link>
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
        <div className="flex justify-start gap-8">
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
      <div className="w-full h-2 bg-gray-300 mt-7 rounded-full">
        <div
          className="h-full bg-[#586A4D] rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BestSellersHome
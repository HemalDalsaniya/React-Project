import { useState } from 'react';

const Review = () => {
  const [LinkId, setLinkId] = useState(1); 
  const [currentIndex, setCurrentIndex] = useState(0);

  const links = [
    { 
      id: 1, 
      review: ["Amazing Sofa Bed!", "KOALAMAZING!","Brilliant","Such a comfy mattress","Five Stars","Everything you need","Cushy Sofa Bed 5 Stars","Should've upgraded years ago"],
      images: ["/images/review/review1.png", "/images/review/review2.png","/images/review/review3.png",
              "/images/review/review4.png","/images/review/review5.png","/images/review/review6.png",
              "/images/review/review7.png","/images/review/review8.png"],
      description: [
        "Koala sofa bed is excellent quality. We keep it in our home office as a sofa however we have had guests sleep on it and they said it was extremely comfortable.",
        "The New Koala Mattress is amazing and exceeded all my expectations. I love how easy it is to change the comfort layer, our personal fave is the medium-firm support.",
        "I love EVERYTHING about this couch. It’s beautiful, the fabric is wonderful and cleans so well with either a soapy wipe or the Bissell. It was so easy to assemble and do by myself.",
        "Delivery was so quick, it was easy to set up and the mattress itself is so comfortable. Stoked not to be woken up every time hubby rolls over!!!",
        "We are very happy with this couch, it came in a timely manner, was super easy to put together and looks fantastic. I love that we can wash the covers too, with small kids at home, this comes in handy.",
        "This is the perfect addition to our home office / guest room. It has exceeded our expectations aesthetically as well as comfort levels. We are so happy with our purchase!",
        "Such a simple ordering, delivery and setup experience, and have been sleeping better than I have in years from the very first night.",
        "We absolutely love our Balmain Bed Base! It was incredibly easy to put together, and is so solid. Koala has restored our faith in bed frames that are supportive, minimalist and aesthetically pleasing.",
      ], 
      title: ["Terry", "David", "Lauren", "Vanessa", "Kimberley S.", "Ayesha A.", "Sarah", "Caleb K."], 
      address: ["Cushy Sofa Bed", "Koala Mattress", "Modern Sofa", "Koala SE Mattress", "Banglow Modular Sofa", "Balmin Bed Base", "Cushy Sofa Bed", "Koala Plus Mattress"]
    },
  ];

  const currentLink = links.find((link) => link.id === LinkId);

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

  // Calculate the progress as a percentage
  const progress = (currentIndex / (currentLink ? currentLink.images.length - 4 : 1)) * 100;

  return (
    <div className="bg-white px-40 pt-14 mb-12">
      <div className="flex justify-between relative">
        <div className="space-y-2 justify-start"> 
          <img alt="star" src="/images/rate/stars.png" />
          <h1 className="text-4xl font-bold"><span>Over </span><span className="text-gray-600">500,000 </span> <span>happy customers </span></h1>
          <h1 className="text-4xl font-bold mb-8"><span>and more than </span><span className="text-gray-600">100,000 </span><span>five-star reviews</span></h1> 
        </div>

        {/* Right-aligned buttons */}
        <div className="absolute right-0 space-x-2 mt-18">
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

      {/* Carousel Images and Content */}
      <div className="flex justify-start gap-8 w-full">
        {currentLink && currentLink.images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <div key={index} className="space-y-4">
            {/* Image */}
            <img 
              src={image} 
              alt={`Carousel Image ${currentIndex + index + 1}`} 
              className="rounded-lg w-95 h-80 hover:opacity-85 transition-opacity" 
            />

            {/* Review Details */}
            <div className="text-gray-900 bg-zinc-100 rounded-lg p-4 space-y-2 w-95 h-80">
              <span>
                <img className="h-4 w-22 mb-2" alt="star" src="/images/rate/starsgray.png" />
              </span>
              <h3 className="text-gray-900 font-bold text-xl">{currentLink.review[currentIndex + index]}</h3>
              <p className="text-gray-900 w-85 h-30">{currentLink.description[currentIndex + index]}</p>
              <p className="text-gray-900 font-bold">{currentLink.title[currentIndex + index]}</p>
              <p className="pb-2"><span>&#10004;</span> Verified Buyer</p>
              <a className="underline cursor-pointer" href="">Shop {currentLink.address[currentIndex + index]}</a>
            </div>
          </div>
        ))}
      </div>

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

export default Review


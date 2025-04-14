import { useEffect, useState } from 'react';
import axios from 'axios';

const BedroomHeader = () => {
  const [bedroomheader, setBedroomheader] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialIndex, setInitialIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/bedroomheader') 
      .then(response => {
        setBedroomheader(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setInitialIndex(currentIndex); 
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return; 
    const deltaX = e.clientX - startX;
    const indexChange = Math.sign(deltaX); 
    setCurrentIndex(prevIndex => {
      const newIndex = initialIndex - indexChange;
      return Math.max(0, Math.min(bedroomheader.length - 6, newIndex)); 
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false); 
  };

  const handleMouseLeave = () => {
    setIsDragging(false); 
  };

  const progress = (currentIndex / (bedroomheader.length - 6)) * 100;

  return (
    <div className="relative w-full px-40 my-8 cursor-pointer">
      

      {/* Carousel Images */}
      <div
        className="flex"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between gap-x-12">
          {bedroomheader.slice(currentIndex, currentIndex + 6).map((bedroom) => (
            <div key={bedroom.id}>
              <a className="rounded-xl" href={`${bedroom.url}`}>
                <img
                  src={bedroom.image}
                  alt={bedroom.title}
                  className="rounded-lg w-65 h-40 hover:border-1 hover:border-gray-400"
                />
              </a>
              <p className="font-bold text-md mt-2">{bedroom.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-2 bg-gray-300 mt-7 rounded-full">
        <div
          className="h-full bg-[#586A4D] rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
};

export default BedroomHeader
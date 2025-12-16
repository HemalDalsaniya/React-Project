import { useState } from 'react';
import {sofasheader} from '../data/sofas'

const SofasHeader = () => {
  // const [sofasheader, setSofasheader] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialIndex, setInitialIndex] = useState(0);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/sofasheader') 
  //     .then(response => {
  //       setSofasheader(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setInitialIndex(currentIndex); 
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return; 
    const deltaX = e.clientX - startX;
    const indexChange = Math.round(deltaX); // Adjust sensitivity by changing the divisor
    const newIndex = initialIndex - indexChange;
    setCurrentIndex(Math.max(0, Math.min(sofasheader.length - 6, newIndex))); 
  };

  const handleMouseUp = () => {
    setIsDragging(false); 
  };

  const handleMouseLeave = () => {
    setIsDragging(false); 
  };

  const progress = (currentIndex / (sofasheader.length - 6)) * 100;

  return (
    <div className="relative w-full px-40 my-8 cursor-pointer">
      <div
        className="flex"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between gap-x-12">
          {sofasheader.slice(currentIndex, currentIndex + 6).map((sofa) => ( 
            <div key={sofa.id}>
              <a className="rounded-xl" href={`${sofa.url}`}>
                <img
                  src={sofa.image}
                  alt={sofa.title}
                  className="rounded-lg w-65 h-40 hover:border-1 hover:border-gray-400"
                />
              </a>
              <p className="font-bold text-md mt-2">{sofa.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-2 bg-gray-300 mt-7 rounded-full">
        <div
          className="h-full bg-[#586A4D] rounded-full"
          style={{ width: `${progress}%` }}>

        </div>
      </div>
    </div>
  );
};

export default SofasHeader;
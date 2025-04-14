import Van from '/icons/Van.png';
import Calender from '/icons/Calender.png';
import Warrenty from '/icons/Warrenty.png';
import { useNavigate } from 'react-router-dom';

const Content = () => {

  const navigate= useNavigate();

  return (
    <div className="py-1 bg-zinc-100">

      <div className="flex items-center justify-center  text-gray-700 pr-1 hover:text-gray-500"><span className="text-xl pr-1">★ ★ ★ ★ ★</span>100,000+ five star reviews</div>

      <div className="video-container w-full flex pt-1 relative cursor-pointer">
      <video
        width="100%" 
        height="auto"
        autoPlay={true} 
        loop 
        muted={true}
        playsInline={true}
      >
        <source src="//au.koala.com/cdn/shop/videos/c/vp/61ed8c57d173414d8bc5dd6671e83ee5/61ed8c57d173414d8bc5dd6671e83ee5.HD-720p-2.1Mbps-41243426.mp4?v=0" type="video/mp4" />
      </video>

       <div className="text-overlay absolute top-0 left-0 right-0 bottom-0 flex items-center text-white px-40">

        <div className="py-16 justify-left pr-200">
        <h1 className="text-7xl font-bold">The cool change has arrived</h1>
        <div className="text-2xl font-bold py-6"><p>Koala Polar + Mattress. Keep your cool all year long.</p></div>
        <div className="flex text-black bg-white rounded-full w-72 h-14 font-semibold text-md items-center justify-center" onClick={() => navigate('/collections/bedroom')}>SHOP NOW</div>
       </div>
       

       </div>
      </div>

      <div className="flex items-center justify-center py-3 gap-3 text-black text-md">
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


    </div>
  )
}

export default Content
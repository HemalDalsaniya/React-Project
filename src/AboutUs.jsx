import { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const [aboutUs, setAboutUs] = useState([]); 

    useEffect(() => {
        
        axios.get('http://localhost:3000/aboutUs')
          .then(response => {
           // console.log(response.data);
            setAboutUs(response.data); 
          })
          .catch(error => {
            console.error('Error fetching about us data:', error);
          });
    }, []);  

    return (
        <div className="bg-white px-40 pt-14 mb-16 ">
            <div className="flex justify-between mb-5">
            <h1 className="text-4xl font-bold justify-start">A little about us</h1>
            <Link  className="border-1 font-bold rounded-full h-14 w-44 p-4 text-center" to="/pages/whykoala">LEARN MORE</Link>
            </div>
            <div className="flex relative">
            <img src="//au.koala.com/cdn/shop/files/Forest_image_1.png?v=1732492791&width=1680" alt="about us" className="rounded-xl w-full h-48" />
        
            <div className="text-overlay absolute top-0 left-0 right-0 bottom-0 flex items-center text-white justify-between">
                <div><h2 className=" flex text-3xl font-bold justify-start w-[450px] p-8">Our mission is to help plant and protect 2 billion trees in 10 years</h2></div>
                <div><p className=" flex text-xl justify-end w-[750px] p-6">We love creating habitats for all Aussies, including those of the furry persuasion. 
                    Shockingly, 95% of koalas perished during the horrific 2019-20 bushfires, so we have partnered with not-for-profit organisation WWF-Australia with the aim 
                    of regenerating the homes of this devastated population.</p></div>
            </div>
            </div>

            <div className="flex justify-between mt-4">
                {aboutUs.map((about) => (
                    <div key={about.id}>
                        <div className="rounded-xl">
                            {/* Corrected the image class names */}
                            <img src={about.image} alt="about us" className="rounded-lg w-95 h-80" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;

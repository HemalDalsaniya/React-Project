import { useState, useEffect } from 'react';
import axios from 'axios'; 

const WhyKoalaHome = () => {
    const [whyKoala, setWhyKoala] = useState([]); 

    useEffect(() => {
    
        axios.get('http://localhost:3000/whyKoala')
          .then(response => {
           // console.log(response.data); 
            setWhyKoala(response.data); 
          })
          .catch(error => {
            console.error('Error fetching about us data:', error);
          });
    }, []);  

    return (
        <div className="bg-white px-40 pt-14 mb-10 ">

            <div className="text-center mb-8 space-y-3">
            <p className="text-gray-500 font-semibold">Why Koala?</p>
            <h1 className="text-4xl font-bold">We’re in the business of making things good</h1>  
            </div>

            <div className="flex justify-between mt-4">
                {whyKoala.map((koala) => (
                    <div key={koala.id} className="space-y-3" >
                        <div className="rounded-xl">
                          <img src={koala.image} alt="about us" className="rounded-lg w-125 h-80" />
                        </div>
                        <p className="font-bold text-lg w-125">{koala.title}</p>
                        <p className=" text-lg w-125">{koala.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyKoalaHome

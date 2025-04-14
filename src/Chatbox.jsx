import { useState } from 'react';
import Chaticon from '/icons/Chaticon.png';
import Closeicon from '/icons/Closeicon.png';

const Chatbox = () => {
const [isChatOpen, setIsChatOpen] = useState(false);
const [aboutKoala, setAboutKoala] = useState(false);
const [messages, setMessages] = useState([]);
const [suggestedQuestions, setSuggestedQuestions] = useState([]);
const [suggestedQuestions1, setSuggestedQuestions1] = useState([]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleCloseClick = () => {
    setIsChatOpen(false); 
    setAboutKoala(false); 
  }; 

  const handleBackClick = () => {
    setAboutKoala(false);
    setSuggestedQuestions([]);
    setSuggestedQuestions1([]);
    setMessages([]);
  };

  const handleClick = (option) => {
    setAboutKoala(!aboutKoala);
    let userMessage = '';
    let automatedResponse = '';

    if (option === 'aboutKoala') {
      userMessage = 'About Koala';
      automatedResponse = 'Koala is proud to create high-quality furniture that’s designed for better living and sustainability. What would you like to know more about?';
    }
  
    setMessages([
      ...messages,
      { sender: 'user', text: userMessage },
    ]);
  
    // Simulate a delay for the automated response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'automated', text: automatedResponse },
      ]);
      
      // Set suggested questions after the automated response
      setSuggestedQuestions([
        "Why choose Koala?",
        "Koala's delivery options",
        "Do you have a showroom?",
      ]);
    }, 2000); // 2 seconds delay   
  };

  const handleSuggestedQueClick = (selectedQuestion) => {
    let userMessage = selectedQuestion;
    let automatedResponse = '';

    setSuggestedQuestions([]);

    // Determine the automated response based on the selected question
    switch(selectedQuestion) {
        case "Why choose Koala?":
            automatedResponse = "We're known for creating modern, eco-friendly furniture designed for convenience and comfort. Our products emphasise sustainability, using certified timber and environmentally conscious materials. With fast delivery, easy, tool-free assembly, and a 120 Night Trial on all products, Koala makes furniture shopping hassle-free. We're also committed to giving back to the planet, partnering with WWF Australia to protect natural habitats";
            break;
        case "Koala's delivery options":
            automatedResponse = 'We offer various delivery options, including express delivery for your convenience.';
            break;
        case "Do you have a showroom?":
            automatedResponse = 'Yes, we have showrooms where you can experience our products in person. Would you like to know the nearest location?';
            break;
        default:
            automatedResponse = 'Could you please specify what you need help with?';
            break;
    }

    // Update messages with user message
    setMessages([
      ...messages, 
      { sender: 'user', text: userMessage }
    ]);

    // Simulate a delay for the automated response
    setTimeout(() => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'automated', text: automatedResponse },
        ]);

        setSuggestedQuestions1([
          "Yes",
          "No, I am all set",
          "Go Back",
        ]);

    }, 2000); // 2 seconds delay 
};

const handleSuggestedQue1Click = (selectedQue) => {
  let userMessage = selectedQue;
  let automatedResponse = '';

  setSuggestedQuestions1([]);

  // Determine the automated response based on the selected question
 switch (selectedQue) {
  case 'Yes':
    automatedResponse =
      'Please connect to our team.';
    break;
  case 'No, I am all set':
    automatedResponse =
      'Ok, Thank you.';
    break;
  case 'Go Back':
    automatedResponse =
      "Koala is proud to create high-quality furniture that’s designed for better living and sustainability. What would you like to know more about?";
    break;
  default:
    automatedResponse = 'Could you please specify what you need help with?';
    break;
}

  // Update messages with user message
  setMessages([...messages, { sender: 'user', text: userMessage }]);

  // Simulate a delay for the automated response
  setTimeout(() => {
      setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'automated', text: automatedResponse },
      ]);
  }, 2000); // 2 seconds delay 
};

  return (
    <div>
      {/* Sticky Chat Icon */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-white text-white p-4 rounded-full shadow-lg focus:outline-none cursor-pointer z-1"
      >
        {isChatOpen ? (
        <img
                src={Closeicon}  
                alt="Close" 
                width="30px"
                height="30px" 
                onClick={handleCloseClick} 
              />):(<img
                src={Chaticon}  
                alt="Chat" 
                width="30px"
                height="30px" 
                onClick={toggleChat} 
              />)}
       
      </button>

      {/* Chat Window */}
      {isChatOpen && (
       
        <div className={`fixed z-50 bottom-25 right-4 bg-gradient-to-b from-[#586A4D] to-[#aec79e] p-4 w-96 h-[70%] rounded-lg shadow-lg text-gray-900
         ${isChatOpen ? 'z-50 opacity-100' : 'z-0'}`}>
                 
                <h1 className="text-white mt-3 font-bold text-2xl p-3 ">How can we help?</h1>
          
                <div className="bg-white rounded-lg m-3 p-2 cursor-pointer">
                    <div className="p-1 hover:bg-zinc-100 rounded-md w-full flex justify-between" onClick={() => handleClick('aboutKoala')}>
                        <div className="p-1">About Koala</div>
                        <div className="p-1 text-gray-700">&#11166;</div>
                    </div>  
                    <div className="p-1 hover:bg-zinc-100 rounded-lg w-full flex justify-between">
                        <div className="p-1">Our Products</div>
                        <div className="p-1 text-gray-700">&#11166;</div>
                    </div> 
                    <div className="p-1 hover:bg-zinc-100 rounded-lg w-full flex justify-between">
                        <div className="p-1">Shipping and Delivery</div>
                        <div className="p-1 text-gray-700">&#11166;</div>
                    </div> 
                    <div className="p-1 hover:bg-zinc-100 rounded-lg w-full flex justify-between">
                        <div className="p-1">Koala&aposs 120 Night Trial</div>
                        <div className="p-1 text-gray-700">&#11166;</div>
                    </div>    
                </div>

                <div className="bg-white rounded-lg mx-3 mt-5 p-2 cursor-pointer">
                    <div className="p-1 rounded-md w-full flex justify-between">
                        <div className="flex bg-zinc-100 w-10 h-10 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
                        <path d="M11.9311 3.08561C11.7334 2.97146 11.4129 2.97146 11.2152 3.08561L4.77137 6.80594C4.57365 6.92009 4.57365 7.10516 4.77137 7.21931L7.27729 8.66611C7.37614 8.72318 7.53642 8.72318 7.63528 8.66611L14.4371 4.73909C14.5359 4.68202 14.5359 4.58948 14.4371 4.53241L11.9311 3.08561Z" fill="#586A4D"></path>
                        <path d="M15.869 5.35915C15.7702 5.30207 15.6099 5.30207 15.511 5.35915L8.70924 9.28616C8.61039 9.34324 8.61039 9.43577 8.70924 9.49285L11.2152 10.9396C11.4129 11.0538 11.7334 11.0538 11.9311 10.9396L18.3749 7.21931C18.5727 7.10516 18.5727 6.92009 18.3749 6.80594L15.869 5.35915Z" fill="#586A4D"></path>
                        <path d="M11.9865 12.3038C11.9865 12.0755 12.1468 11.7979 12.3445 11.6837L18.7883 7.96338C18.986 7.84923 19.1463 7.94176 19.1463 8.17006V15.6107C19.1463 15.839 18.986 16.1166 18.7883 16.2308L12.3445 19.9511C12.1468 20.0653 11.9865 19.9727 11.9865 19.7444V12.3038Z" fill="#586A4D"></path>
                        <path d="M4 8.17006C4 7.94176 4.16028 7.84923 4.35799 7.96338L6.86391 9.41017C6.96277 9.46725 7.04291 9.60605 7.04291 9.7202V11.3737C7.04291 11.4878 7.12304 11.6266 7.2219 11.6837L7.93788 12.0971C8.03673 12.1542 8.11687 12.1079 8.11687 11.9937V10.3403C8.11687 10.2261 8.19701 10.1798 8.29587 10.2369L10.8018 11.6837C10.9995 11.7979 11.1598 12.0755 11.1598 12.3038V19.7444C11.1598 19.9727 10.9995 20.0653 10.8018 19.9511L4.35799 16.2308C4.16028 16.1166 4 15.839 4 15.6107L4 8.17006Z" fill="#586A4D"></path>
                        </svg></div>
                        <div className="p-1 flex justify-center items-center font-bold">Track and manage my orders</div>
                        <div className="p-1 flex justify-center items-center text-gray-700">&#11166;</div>
                        
                    </div>  
                </div>

                <div className="bg-white rounded-lg mx-3 mt-5 p-2 cursor-pointer">
                    <div className="p-1 rounded-md w-full flex justify-between">
                        <div className="p-1 flex w-10 justify-center items-center">
                            <img src="https://config.gorgias.io/production/zKB3oxwjLj17rkVO/smooch_inside/avatar_team_pictures/JWE4j73wgJ7ZlV9b/5a661991-48e0-4a44-afe7-8e587f5d9324.png" alt="Koala Customer Service Chat logo"/>
                        </div>
                        <div className="p-1 flex-1 justify-center items-center">
                            <h3 className="font-bold">Koala Customer Service Chat</h3>
                            <p className="text-gray-500">Leave a Message</p>
                        </div>
                        <div className="p-1 flex justify-center items-center text-gray-700"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                        <g><path d="M16.445 2.58975L2.86592 10.0185C2.33564 10.3075 2.40303 11.0076 2.93037 11.2187L6.04463 12.4577L14.4616 5.42347C14.6228 5.28734 14.8513 5.4957 14.7136 5.65406L7.65596 13.8079V16.0443C7.65596 16.7 8.49092 16.9584 8.90108 16.4833L10.7614 14.3358L14.4118 15.786C14.8278 15.9527 15.3024 15.7054 15.3786 15.2804L17.488 3.27874C17.5876 2.71755 16.9519 2.31194 16.445 2.58975Z" fill="#586A4D"></path></g>
                        </svg></div>          
                    </div>  
                </div>

                <div className="mt-22 cursor-pointer flex justify-center items-center">
                    <a aria-label="Powered by Gorgias. Click here to visit the Gorgias website, opens in a new tab">
                    <span className="text-[#d2d7de]">Powered by</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="67" height="16" fill="none" role="presentation" aria-label="Gorgias">
                    <path d="M13.245 16h.922c.214 0 .393-.188.405-.411V5.098c0-1.034-.798-1.868-1.788-1.868h-1.181c-.214 0-.394-.188-.394-.411v-.952C11.21.834 10.412 0 9.422 0H1.788C.798 0 0 .834 0 1.868v10.537c0 1.022.798 1.856 1.788 1.868h8.849c.079 0 .157.024.225.071l2.159 1.586c.067.047.146.07.225.07zm-2.148-3.219H1.81c-.225 0-.394-.176-.394-.411V1.891c0-.223.18-.411.394-.411H9.4c.214 0 .394.188.394.411v.928c0 .223-.18.411-.394.411H3.744c-.214 0-.394.188-.394.411v6.99c0 .223.18.411.394.411h7.061c.214 0 .393-.188.393-.411v-5.51c0-.223.18-.411.393-.411h1.158c.214 0 .393.188.393.411v8.576c0 .212-.225.329-.382.212l-1.439-1.057c-.067-.047-.146-.07-.225-.07zM9.591 9.551H4.959c-.101 0-.191-.082-.191-.2V4.91c0-.106.079-.2.191-.2h4.633c.101 0 .191.082.191.2v4.441c0 .106-.079.2-.191.2zm40.796-7.317c.59 0 1.069-.5 1.069-1.117S50.977 0 50.387 0s-1.069.5-1.069 1.117.479 1.117 1.069 1.117zM38.192 3.866v-.62H36.47v7.735h1.722V5.697l2.009-.869v-1.81h-.02l-1.989.848zm-6.673-.627c-1.119 0-2.029.383-2.722 1.158a3.95 3.95 0 0 0-.742 1.262c-.168.476-.257.982-.257 1.51 0 1.086.297 1.986.901 2.678.663.765 1.574 1.138 2.732 1.138 1.128 0 2.029-.383 2.712-1.158.643-.734.97-1.655.97-2.771s-.317-2.017-.94-2.72c-.663-.734-1.544-1.096-2.653-1.096zm1.346 5.502c-.327.424-.782.641-1.356.641-.614 0-1.119-.217-1.495-.652-.178-.196-.317-.445-.416-.724s-.148-.569-.148-.879c0-.62.158-1.138.485-1.572.356-.465.841-.703 1.465-.703.614 0 1.099.217 1.445.662.327.414.495.951.495 1.624.01.652-.148 1.189-.475 1.603zm16.649-5.493h1.712v7.746h-1.712V3.247zm-26.13-.008c-.98 0-1.782.3-2.405.9-.584.569-.881 1.282-.881 2.141 0 .765.257 1.396.772 1.903-.445.372-.663.817-.663 1.344 0 .321.04.6.109.838.069.248.208.455.426.641-.772.445-1.148 1.168-1.118 2.161.02.858.376 1.541 1.069 2.058s1.613.776 2.742.776 1.97-.227 2.544-.682.861-1.107.861-1.965c0-.848-.228-1.51-.683-1.975-.247-.248-.564-.445-.95-.62-.396-.165-.931-.31-1.623-.424s-1.188-.238-1.485-.393c-.139-.062-.228-.134-.267-.207s-.059-.176-.059-.31.089-.321.257-.558c.386.134.812.207 1.267.207.93 0 1.693-.29 2.296-.879.267-.269.475-.589.624-.951s.218-.765.218-1.21-.099-.869-.297-1.262l.713-.01v-1.52h-3.464zm-1.198 8.366l.356.062c1 .155 1.712.362 2.118.641.366.238.544.558.544.951 0 .827-.564 1.231-1.693 1.231-.663 0-1.198-.145-1.613-.424a1.34 1.34 0 0 1-.436-.455c-.109-.176-.158-.372-.158-.61s.069-.486.208-.744c.148-.269.376-.476.673-.652zm2.158-4.436c-.277.259-.604.393-.97.393-.495 0-.891-.145-1.198-.434-.139-.124-.238-.279-.317-.434-.069-.165-.109-.331-.109-.507a1.42 1.42 0 0 1 .099-.527c.218-.589.703-.879 1.465-.879.455 0 .822.124 1.079.372s.396.579.396.982c-.01.393-.158.745-.445 1.034zm34.444-2.244a3.55 3.55 0 0 1 .198 1.21v4.829h-1.683v-.362c-.505.238-.97.362-1.396.362-.534 0-.98-.052-1.356-.155s-.693-.258-.95-.455c-.525-.414-.792-1.003-.792-1.768 0-.683.317-1.262.97-1.717.703-.496 1.663-.745 2.871-.745l.277.01c.029 0 .057.002.087.005l.101.005.094.01.094.011c-.04-.765-.356-1.22-.95-1.344-.188-.041-.406-.062-.623-.062a3.34 3.34 0 0 0-.653.062c-.218.041-.426.103-.624.165-.435.145-.762.321-.95.507l-.02-.01-.208-1.582c.802-.445 1.693-.662 2.653-.662 1.495 0 2.445.558 2.861 1.686zm-1.485 4.209v-.993-.672a2.43 2.43 0 0 0-.386-.031h-.277c-1.01 0-1.653.238-1.93.703a.84.84 0 0 0-.119.434c0 .155.03.29.079.403.059.114.148.217.267.29.238.145.594.217 1.059.217a2.64 2.64 0 0 0 1.307-.352zm8.009-2.472c.287.145.525.321.703.527.327.372.495.869.495 1.51a2.03 2.03 0 0 1-.772 1.644c-.534.445-1.287.662-2.257.662-1.168 0-2.079-.207-2.722-.61V8.492c0-.01.04.031.109.114s.208.176.396.3a3.37 3.37 0 0 0 .663.321 4.96 4.96 0 0 0 1.703.29c.792 0 1.188-.279 1.188-.827 0-.176-.079-.31-.228-.393-.267-.145-.663-.259-1.188-.331-.525-.083-.95-.186-1.287-.331s-.614-.321-.822-.517c-.386-.383-.584-.879-.584-1.489 0-.745.277-1.334.822-1.758s1.297-.631 2.257-.631c.95 0 1.762.279 2.435.848l-.099.362-.238.683-.158.424c-.01.041-.02.062-.02.062-.01 0-.049-.052-.109-.155-.287-.352-.742-.579-1.346-.693-.188-.041-.376-.062-.574-.062-.831 0-1.247.259-1.247.786a.44.44 0 0 0 .257.414c.327.186.772.321 1.336.403.564.093.99.207 1.287.352zM44.476 3.239c-.98 0-1.782.3-2.405.9-.584.569-.881 1.282-.881 2.141 0 .765.257 1.396.772 1.903-.445.372-.663.817-.663 1.344 0 .321.04.6.109.838.069.248.208.455.426.641-.772.445-1.148 1.168-1.118 2.161.02.858.376 1.541 1.069 2.058s1.613.776 2.742.776 1.97-.227 2.544-.682.861-1.107.861-1.965c0-.848-.228-1.51-.683-1.975-.247-.248-.564-.445-.95-.62-.396-.165-.93-.31-1.623-.424s-1.188-.238-1.485-.393c-.139-.062-.228-.134-.267-.207s-.059-.176-.059-.31.089-.321.257-.558c.386.134.812.207 1.267.207.93 0 1.693-.29 2.296-.879.267-.269.475-.589.624-.951s.218-.765.218-1.21-.099-.869-.297-1.262l.713-.01v-1.52h-3.464zm-1.198 8.366l.356.062c1 .155 1.712.362 2.118.641.366.238.544.558.544.951 0 .827-.564 1.231-1.693 1.231-.663 0-1.198-.145-1.613-.424a1.34 1.34 0 0 1-.435-.455c-.109-.176-.158-.372-.158-.61s.069-.486.208-.744c.148-.269.376-.476.673-.652zm2.158-4.436c-.277.259-.604.393-.97.393-.495 0-.891-.145-1.198-.434-.139-.124-.238-.279-.317-.434-.069-.165-.109-.331-.109-.507s.03-.352.099-.527c.218-.589.703-.879 1.465-.879.455 0 .822.124 1.079.372s.396.579.396.982c-.01.393-.158.745-.445 1.034z" fill="#d2d7de"></path>
                   </svg></span></a>
                </div>
        </div>
      )}

     {aboutKoala && (
      <div className={`fixed z-50 bottom-25 right-4 bg-white w-96 h-[70%] rounded-lg shadow-lg text-gray-900
          ${aboutKoala ? 'z-50 opacity-100' : 'z-0'}`}>

          <div className="sticky top-0 flex justify-start items-center bg-[#586A4D] h-16 rounded-lg rounded-b-none cursor-pointer" onClick={handleBackClick}>
            <div className="p-3 flex justify-center items-center text-white">&#11164;</div>
            <div className="p-2 flex justify-center items-center font-semibold text-white">Koala Customer Service Chat Bot</div>
          </div>

          
         <div className="overflow-y-auto h-[calc(100%-4rem)] p-6">
          
            <div className="space-y-3">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${ message.sender === 'user' ? 'justify-end' : 'justify-start'} `}>
              {message.sender === 'user' && (
              <div className="flex justify-end">
                <div className="p-4 rounded-lg rounded-tr-none bg-[#586A4D] text-white">
                  {message.text}
                </div>
              </div>
            )}

            {message.sender === 'automated' && (
              <div>
                <div className="flex space-x-2">
                  <div className="flex w-8 justify-center items-center">
                    <img src="https://config.gorgias.io/production/zKB3oxwjLj17rkVO/smooch_inside/avatar_team_pictures/JWE4j73wgJ7ZlV9b/5a661991-48e0-4a44-afe7-8e587f5d9324.png" alt="Merchant's avatar logo" />
                  </div>
                  <div className="flex items-center justify-start font-bold">Koala Customer Service Chat Bot</div>
                </div>

                <div className="flex p-2 ms-8 rounded-lg rounded-tl-none bg-zinc-100 text-gray-700">
                  {message.text}
                </div>
                <div className="flex p-2 ms-8 text-gray-700 text-sm">
                  Automated
                </div>
              </div>
            )}
            </div>
      ))}
      </div>

      {/* Suggested Questions */}
      {suggestedQuestions.length > 0 && (
        <div className="p-4 mt-2 text-sm">
          {suggestedQuestions.map((question, index) => (
            <div
              key={index}
              className="p-2 mb-2 text-gray-700 cursor-pointer border hover:bg-[#586A4D] hover:text-white float-end w-52"
              onClick={() => handleSuggestedQueClick(question)}
            >
              {question}
            </div>
          ))}
        </div>
      )}

      {suggestedQuestions1.length > 0 && (
        <div className="p-4 mt-2 text-sm">
          {suggestedQuestions1.map((question, index) => (
            <div
              key={index}
              className="p-2 mb-2 text-gray-700 cursor-pointer border hover:bg-[#586A4D] hover:text-white float-end w-52"
              onClick={() => handleSuggestedQue1Click(question)}
            >
              {question}
            </div>
          ))}
        </div>
        )}
       </div>
     </div>
     )}
   
    </div>
  )
}

export default Chatbox
         
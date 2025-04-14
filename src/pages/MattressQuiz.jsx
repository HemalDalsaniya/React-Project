import Header from '../Header';
import Head from '../Head';
import Subscribe from '../Subscribe';
import Footer from '../Footer';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const MattressQuiz = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState("");

   const {location} = useLocation();
  
    useEffect( () => {
      window.scrollTo(0,0);
    },[location])

  const questions = [
    {
      id: 1,
      image: "/images/quiz/quiz1.png",
      question: "Who are you shopping for?*",
      options: ["Myself", "Me and my partner", "Child (aged 3-9)", "Tween/Teen (aged 10+)", "Guest bedroom"],
    },
    {
      id: 2,
      image: "/images/quiz/quiz2.png",
      question: "What size are you looking for?*",
      options: ["Single(W92*L188)", "King Single(W107*L203)", "Double(W138*L188)", "Queen(W153*L203)", "King(w183*L203)"],
    },
    {
      id: 3,
      image: "/images/quiz/quiz3.png",
      question: "What firmness level would suit you best?*",
      options: ["Firm", "Medium", "Plush", "I'm not sure"],
    },
    {
      id: 4,
      image: "/images/quiz/quiz5.png",
      question: "What’s your go-to position for comfy sleep?*",
      options: ["Back", "Side", "Stomach", "It varies","I'm not sure"],
    },
    {
      id: 5,
      image: "/images/quiz/quiz6.png",
      question: "What do you dislike about your current mattress?",
      options: ["It's not a standard size", "It's too firm", "I can feel my partner's movement", "It causes aches/pain",
               "It sinks/sags", "I'm too hot/sweating", "It makes noise when moving", "Its too soft/lacks support"],
    },
    {
      id: 6,
      image: "/images/quiz/quiz7.png",
      question: "What budget do you have in mind?",
      options: ["$$$$: I'm all for better sleep, budget comes second", "$$$: Great sleep matter, but I've got other priorities",
               "$$: Quality sleep is essential, but my budget is tight", "i'm not sure"],
    }
  ];

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    if (currentSlide < questions.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleEmailSubmit = async () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
  
    try {
      // Save answers to db.json
      const saveResponse = await fetch("http://localhost:3000/quizresponses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, answers }),
      });
  
      if (!saveResponse.ok) {
        const errorData = await saveResponse.json(); // Parse error response
        throw new Error(`Failed to save responses: ${errorData.message || saveResponse.statusText}`);
      }
  
      // Send email using EmailJS
      const templateParams = {
        email: email,
        answers: answers.join(', '), // Convert answers array to a string
      };
  
      const emailResponse = await emailjs.send(
        'service_0qsaku8', // Replace with your EmailJS service ID
        'template_36o63ac', // Replace with your EmailJS template ID
        templateParams,
       // 'qYCi3QToN0C2uVWdg' // Replace with your EmailJS user ID
       'g_iC8lfeqHJiC0Tit'
      );
  
      if (emailResponse.status !== 200) {
        throw new Error("Failed to send email.");
      }
  
      alert("Thank you! Your responses have been saved and emailed.");
    } catch (error) {
      console.error("Error:", error);
      alert(`Something went wrong: ${error.message}`);
    }
  };
  
  return (
    <>
      <div>
        <Header />
        <Head />

        <div>
          <div className="flex h-150 mx-10 my-20 bg-zinc-100 rounded-xl text-[#586A4D]">
            <div className="w-1/2 flex flex-col px-28 py-28 text-[#586A4D] overflow-y-scroll">
              {currentSlide < questions.length ? (
                <div>
                  <h2 className="text-4xl font-bold mb-10">
                    {questions[currentSlide].question}
                  </h2>
                  <div className="space-y-2">
                    {questions[currentSlide].options.map((option, index) => (
                      <li key={index} className="list-none">
                        <button
                          key={index} onClick={() => handleAnswer(option)}
                          className="px-6 py-2 w-96 rounded-3xl text-[#586A4D] font-bold text-xl text-left bg-[#d5d7d4] hover:bg-[#afb9aa] border-1 border-[#586A4D] cursor-pointer"
                        > {option} </button>
                      </li>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-4xl font-bold mb-6">The Koala SE Mattress is for you!</h2>
                  <h2 className="text-xl font-semibold mb-3">Get personalised results and exclusive deals in your inbox to turn your sleep dreams into a reality.</h2>
                  <h2 className="text-2xl font-bold mb-3">Where should we send your results?</h2>
                  <h2 className="text-xl font-semibold mb-3">By entering your email address, you agree that you have read and understood Koala’s Privacy Policy and Website Terms.</h2>
                  <h2 className="text-xl font-bold mb-1">Email</h2>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-b-3 py-2 mb-8 text-2xl w-full focus:outline-none"
                  />
                  <button
                    onClick={handleEmailSubmit}
                    className="bg-[#586A4D] text-white font-bold px-5 py-2 rounded-3xl cursor-pointer"
                  >
                    OK
                  </button>
                </div>
              )}
            </div>

            <div className="w-1/2 flex">
              {currentSlide < questions.length ? (
                <img
                  src={questions[currentSlide].image}
                  alt="Slide"
                  className="w-full h-full rounded-r-xl"
                />
              ) : (
                <div className="text-center">
                  <img
                    src="/images/quiz/quiz4.png"
                    alt="Slide"
                    className="w-full h-full rounded-r-xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default MattressQuiz;


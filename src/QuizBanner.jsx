import { Link } from 'react-router-dom';
const QuizBanner = () => {

  return (
    <>
    <div className="flex justify-between mx-40 h-32 bg-zinc-100 rounded p-8">
        <h2 className="flex justify-start text-3xl text-black font-bold items-center">Not sure which mattress is right for you?</h2>
        <div className="flex justify-end items-center gap-6">
        <Link  className="border-1 border-gray-500 hover:border-black bg-white text-gray-700 font-bold py-4 px-6 rounded-full cursor-pointer" to="/pages/mattressQuiz">TAKE THE QUIZ</Link>
        <Link  className="border-1 border-gray-500 hover:border-black bg-white text-gray-700 font-bold py-4 px-6 rounded-full cursor-pointer" to="/collections/mattresses#compare">COMPARE MATTRESSES</Link>  
        </div>
    </div>
    </>
  )
}

export default QuizBanner
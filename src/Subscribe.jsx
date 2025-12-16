import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Subscribe = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
      try {
        // Send a POST request to the json-server endpoint
        const response = await axios.post('http://localhost:3000/subscribers', data);
  
        if (response.status === 201) {
          console.log('Form submitted successfully!', response.data);
          reset();
   
        } else {
          console.error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };

  return (
    <>
    
    <div className="bg-zinc-100 text-center py-8">
        <h1 className="text-4xl font-bold mb-8">Subscribe to our emails</h1> 
        <p className="mb-8">Be the first to know about new collections and exclusive offers.</p>

      <div className="flex justify-center py-4">
        <form onSubmit={handleSubmit(onSubmit)} className="text-gray-500 space-x-3">
      <input type="text" name="Name" placeholder="First Name" className="rounded border-gray-400 border-1 text-gray-900 w-60 h-13 p-2 focus:border-2 caret-current"
      {...register("Name", { 
        required: "This Field is required", 
         })} />

         <input type="email" name="Email" placeholder="Enter Your Email" className="rounded border-gray-400 border-1 text-gray-900 w-60 h-13 p-2 focus:border-2 caret-current"
         {...register("Email", {
            required: "This Field is required",
          })} />

         <button type="submit" className="bg-[#586A4D] rounded-full text-white text-center w-60 h-13">SIGN UP</button>
      

      <p className="my-3 text-gray-500">By clicking  &aposSign up&apos you agree that you have read and understood Koala’s &nbsp;   
      <Link to="/policies/privacypolicy" className="text-sky-600 underline">Privacy Policy</Link>.</p>

        <div className="flex items-center justify-center space-x-2 cursor-pointer">
        <input type="checkbox" name="right" value="false" className="w-5 h-5 accent-white" required/><span className="text-gray-500">I agree to receive marketing communications and product updates from Koala.</span>
        </div>
        </form>
        </div>
      </div>
    
    </>
  )
}

export default Subscribe
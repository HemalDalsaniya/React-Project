import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Import axios
import Header from '../Header';
import Head from '../Head';
import Subscribe from '../Subscribe';
import Footer from '../Footer';
import { useForm } from 'react-hook-form';

const Contact = () => {

  const {location} = useLocation();
 
   useEffect( () => {
     window.scrollTo(0,0);
   },[location])

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send a POST request to the json-server endpoint
      const response = await axios.post('http://localhost:3000/registrations', data);

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
      <div>
        <Header />
        <Head />

        <div className="py-12 w-[700px] justify-self-center">
          <div className="rounded">
            <div className="border-1 px-3 py-6">
              <h1 className="text-3xl font-semibold">Register Here</h1>
            </div>

            <div className="border-1 border-t-0 p-5 w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-gray-900">
                <label className="text-xl">Full Name </label><span className="text-red-500 text-xl">*</span><br />
                <input
                  type="text"
                  name="Name"
                  defaultValue=""
                  className="border-1 rounded w-full h-12 p-3"
                  placeholder="Full Name"
                  {...register("Name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[A-Za-z\s]+$/i,
                      message: "Name must only contain letters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Name cannot exceed 20 characters",
                    },
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters long",
                    },
                  })}
                />
                {errors.Name && <span>{errors.Name.message}</span>}
                <br />

                <label className="text-xl">Email </label><span className="text-red-500 text-xl">*</span><br />
                <input
                  type="email"
                  name="Email"
                  defaultValue=""
                  className="border-1 rounded w-full h-12 p-3"
                  placeholder="your@email.com"
                  {...register("Email", {
                    required: "Email is required",
                  })}
                />
                {errors.Email && <span>{errors.Email.message}</span>}
                <br />

                <label className="text-xl">Password </label><span className="text-red-500 text-xl">*</span><br />
                <input
                  type="password"
                  name="Password"
                  defaultValue=""
                  className="border-1 rounded w-full h-12 p-3"
                  placeholder="Password"
                  {...register("Password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{6,20}$/,
                      message:
                        "Password must be 6-20 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
                    },
                  })}
                />
                {errors.Password && <span>{errors.Password.message}</span>}
                <br />

                <label className="text-xl">Subject </label><span className="text-red-500 text-xl">*</span><br />
                <select
                  className="border-1 rounded w-full h-12 p-3"
                  {...register("Subject", {
                    required: "Subject is required",
                  })}
                >
                  <option value="">Select a Subject</option>
                  <option value="Koala Product Information">Koala Product Information</option>
                  <option value="Help Placing a New Order">Help Placing a New Order</option>
                  <option value="Change or Update an Existing Order">Change or Update an Existing Order</option>
                  <option value="Shipping, Delivery and Tracking">Shipping, Delivery and Tracking</option>
                  <option value="Product Assistance and Warranty">Product Assistance and Warranty</option>
                  <option value="120 Night Returns">120 Night Returns</option>
                </select>
                {errors.Subject && <span>{errors.Subject.message}</span>}
                <br />

                <label className="text-xl">Message </label><span className="text-red-500 text-xl">*</span><br />
                <textarea
                  type="text"
                  name="Message"
                  defaultValue=""
                  className="border-1 rounded w-full h-28 p-3"
                  placeholder="Write your message here"
                  {...register("Message", {
                    required: "Message is required",
                  })}
                />
                {errors.Message && <span>{errors.Message.message}</span>}
                <br /><br />

                <label>
                  <button type="submit" className="w-full bg-[#586A4D] rounded cursor-pointer h-12 font-semibold text-white p-2 text-lg hover:bg-zinc-600">
                    Send
                  </button>
                </label>
                <br /><br />

                <div className="text-sm">
                  This site is protected by reCAPTCHA Enterprise and the Google{" "}
                  <a target="_blank" href="https://policies.google.com/privacy" className="text-blue-600">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a target="_blank" href="https://policies.google.com/terms" className="text-blue-600">
                    Terms of Service
                  </a>{" "}
                  apply.
                </div>
              </form>
            </div>
          </div>
        </div>

        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
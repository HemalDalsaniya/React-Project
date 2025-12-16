import Logo from '/icons/Logo.png';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
 
    try {
      
      const response = await axios.get('http://localhost:3000/registrations');
      const registrations = response.data;

      const user = registrations.find(
        (user) => user.Email === data.Email && user.Password === data.Password
      );

      if (user) {
        alert('Login successful!');
        
        navigate('/'); 
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error checking credentials:', error);
      alert('There was an error with the login process. Please try again.');
    }
  };

  return (
    <>
      <div className="bg-zinc-100 w-screen h-screen flex justify-center items-center">
        <div className="w-[500px] h-[400px] bg-white">

          <div id="logo" className="flex items-center justify-center w-full h-32">
            <img src={Logo} alt="Logo" width="200px" height="200px" />
          </div>

          <div className="flex px-8 w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-gray-900 w-full">

              <label className="text-xl font-bold text-center">Log In</label><br />

              <input
                type="email"
                name="Email"
                defaultValue=""
                className="border-1 rounded w-full h-12 p-3 mt-3"
                placeholder="your@email.com"
                {...register("Email", {
                  required: "Email is required",
                })}
              />
              {errors.Email && <span>{errors.Email.message}</span>}
              <br />

              <input
                type="password"
                name="Password"
                defaultValue=""
                className="border-1 rounded w-full h-12 p-3"
                placeholder="Password"
                {...register("Password", {
                  required: "Password is required",
                //  pattern: {
                 ////   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{6,20}$/,
                 //   message:
                  //    "Password must be 6-20 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
                //  },
                })}
              />
              {errors.Password && <span>{errors.Password.message}</span>}
              <br />

              <label>
                <button
                  type="submit"
                  className="w-full bg-[#586A4D] rounded cursor-pointer h-12 font-semibold text-white p-2 text-lg hover:bg-zinc-600"
                >
                  Continue
                </button>
              </label>
              <br /><br />

              <div className="text-sm">
                <a
                  target="_blank" href="/policies/privacypolicy"
                  // href="https://au.koala.com/64361365640/policies/27680014472.html?locale=en"
                  className="hover:underline hover:text-[#586A4D]"
                >
                  Privacy
                </a>
              </div>

            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;

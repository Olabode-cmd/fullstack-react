import Image from "../../assets/image.jpg";
import Paystack from "../../assets/paystack.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#0D2A45]">
        <div className="max-w-lg mx-auto p-5">
          <div className="logo">
            <img src={Paystack} className="w-[130px] mx-auto" />
          </div>

          <div className="bg-white py-6 px-8 w-full mt-5 rounded-md">
            <form>
              <h1 className="uppercase text-center text-gray-700 font-light text-md">
                create account
              </h1>

              <div className="space-y-4 mt-10">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full text-sm px-4 py-3 border border-gray-200 rounded-sm focus:outline-none"
                  required
                />

                <input
                  type="number"
                  placeholder="Phone number"
                  className="w-full text-sm px-4 py-3 border border-gray-200 rounded-sm focus:outline-none"
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full text-sm px-4 py-3 border border-gray-200 rounded-sm focus:outline-none"
                  required
                />

                <button className="bg-[#6CC986] px-3 py-3 text-base text-white border-none w-full rounded-md">
                  Create account
                </button>

                {/* <input */}

                <div className="space-y-2 text-center mt-4 text-sm">
                  <Link to="/login" className="text-blue-600 text-base block">
                    Already have an account? Login here.
                  </Link>
                </div>
              </div>
            </form>
          </div>

          <div className="lower-section"></div>
        </div>
      </div>
    </>
  );
};

export default Signup;

// start with variable name, set it equal to an arrow function, that returns JSX
// variable name, arrow function, return

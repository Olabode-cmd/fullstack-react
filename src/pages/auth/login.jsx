import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import Paystack from '../../assets/paystack.svg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      username: username,
      password: password
    }

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you store the token in localStorage
        },
        body: JSON.stringify(formData)
      })

      // 405 : Method Not Allowed
      // 401 : Unauthorized
      // 403 : Forbidden or Access Denied

      if (!response.ok){
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();
      localStorage.setItem('token', data.accessToken)
      toast.success('Login successful!');
      navigate('/products');
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false)
    }
  }

    return (
      <>
        <div className="w-full min-h-screen bg-[#0D2A45]">
          <div className="max-w-lg mx-auto p-5">
            <div className="logo">
              <img src={Paystack} className="w-[130px] mx-auto" />
            </div>

            <div className="bg-white py-6 px-8 w-full mt-5 rounded-md">
              <form onSubmit={handleSubmit}>
                <h1 className="uppercase text-center text-gray-700 font-light text-md">
                  log into your account
                </h1>

                <div className="space-y-4 mt-10">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full text-sm px-4 py-3 border border-gray-200 rounded-sm focus:outline-none"
                    required
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-sm px-4 py-3 border border-gray-200 rounded-sm focus:outline-none"
                    required
                  />

                  <button type="submit" className="bg-[#6CC986] px-3 py-3 text-base text-white border-none w-full rounded-md">
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <FaSpinner className="animate-spin text-white" />
                      </div>
                    ) : (
                      'Login'
                    )}
                  </button>

                  {/* condition ? "" : ""  -- ternary operator*/}

                  {/* <input */}

                  <div className="space-y-2 text-center mt-4 text-sm">
                    <Link to='/create-account' className="text-blue-600 text-base block">Don't have an account? Sign up here.</Link>
                  </div>
                </div>
              </form>
            </div>

            <div className="lower-section"></div>
          </div>
        </div>
      </>
    );
}

export default Login;

// start with variable name, set it equal to an arrow function, that returns JSX
// variable name, arrow function, return
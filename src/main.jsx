import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Homepage from './pages/home.jsx'
import About from './pages/about.jsx'
import Profile from './pages/profile.jsx'
import Explore from './pages/explore.jsx'
import Privacy from './pages/privacy.jsx'
import FindJobs from './pages/findjobs.jsx'
import Designer from './pages/designer.jsx'
import Cart from './pages/cart.jsx'
import Products from './pages/products.jsx'

import Login from './pages/auth/login.jsx'
import Signup from './pages/auth/signup.jsx'

import BlogPage from './pages/blogpost.jsx'
import BlogDetails from './pages/[blogId].jsx'

import LoginAssignment from './pages/login.jsx'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
 <StrictMode>
  <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/posts/:id' element={<BlogDetails />} />


        <Route path='/login' element={<Login />} />
        <Route path='/create-account' element={<Signup />} />

        <Route path='/assignment' element={<LoginAssignment />} />
      </Routes>
    </BrowserRouter>
 </StrictMode>
)

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './pages/about.jsx'
import Profile from './pages/profile.jsx'
import Explore from './pages/explore.jsx'
import Privacy from './pages/privacy.jsx'
import FindJobs from './pages/findjobs.jsx'
import Designer from './pages/designer.jsx'

import Login from './pages/auth/login.jsx'
import SignUP from './pages/auth/signup.jsx'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/designer' element={<Designer />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/find-jobs' element={<FindJobs />} />
      <Route path='/explore' element={<Explore />} />

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUP />} />
    </Routes>
  </BrowserRouter>
)

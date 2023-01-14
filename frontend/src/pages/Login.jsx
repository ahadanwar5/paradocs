import React from 'react'

import Navbar from '../components/Navbar'
import SignIn from '../components/SignIn'
import Footer from '../components/Footer'
const Login = () => {
  return (
    <div>
      <Navbar />
      <div style={{ borderTop: "2px solid rgb(240, 240, 240)",}}></div>
      <SignIn />
      <Footer />
    </div>
  )
}

export default Login

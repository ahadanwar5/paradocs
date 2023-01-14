import React from "react";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Footer from "../components/Footer";

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <div style={{ borderTop: "2px solid rgb(240, 240, 240)",}}></div>
      <Register />
      <Footer />
    </div>
  );
};

export default SignUp;

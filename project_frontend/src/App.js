import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Wish from "./pages/Wish";
import Cart from "./pages/Cart";
import ProductScreen from "./pages/ProductScreen";
import Shipping from "./components/Shipping";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import OrderDetails from "./components/OrderDetails";
import Account from "./components/Account";
import UserProfile from "./components/UserProfile";
import OrderHistory from "./components/OrderHistory";
import Medicines from "./components/Medicines";
import Lifestyle from "./components/Lifestyle";
import Organic from "./components/Organic";
import HealthCare from "./components/HealthCare";
import Carebaby from "./components/Carebaby";
import PersonalCare from "./components/PersonalCare";

function App() {
  return (
    <Router>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/shop/Medicines" element={<Medicines />} />
          <Route path="/shop/Lifestyle" element={<Lifestyle />} />
          <Route path="/shop/Organic" element={<Organic />} />
          <Route path="/shop/HealthCare" element={<HealthCare />} />
          <Route path="/shop/Carebaby" element={<Carebaby />} />
          <Route path="/shop/PersonalCare" element={<PersonalCare />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/wish" element={<Wish />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/account" element={<Account />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

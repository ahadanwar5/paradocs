import React, { useContext } from "react";
import "../styles/navbar.css";
import { Store } from "../Store";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLine,
  faPiedPiper,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCartShopping,
  faGripVertical,
  faRulerVertical,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, wish, userInfo } = state; //Comes from the initial state
  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    navigate("/");
  };

  const profileHandler = () => {
    navigate("/account");
  };
  return (
    <>
      <div class="container-fluid top-navbar-styling">
        {userInfo ? (
          <span class="float-left top-navbar-user-styling">
            Welcome {userInfo.name}
          </span>
        ) : (
          <span class="float-left top-navbar-user-styling">Welcome Guest</span>
        )}

        <div class="float-right" style={{ width: "20%" }}>
          <span class="top-navbar-address-styling">Comsats Lahore</span>
          <span class="top-navbar-address-styling2">|</span>
          <FontAwesomeIcon icon={faFacebook} class="navbar-icon-styling" />
          <FontAwesomeIcon icon={faTwitter} class="navbar-icon-styling" />
          <FontAwesomeIcon icon={faWhatsapp} class="navbar-icon-styling" />
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <img
            src={require("../assets/logo.png")}
            className="logo-styling"
            alt="Paradocs"
          />

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  <span class="navbar-link-styling">Home</span>
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/shop"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="navbar-link-styling">Products</span>
                </Link>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link class="dropdown-item" to="/shop/Medicines">
                    <span class="navbar-link-styling">Medicines</span>
                  </Link>
                  <Link class="dropdown-item" to="/shop/Lifestyle">
                    <span class="navbar-link-styling">Lifestyle</span>
                  </Link>
                  <Link class="dropdown-item" to="/shop/PersonalCare">
                    <span class="navbar-link-styling">Personal Care</span>
                  </Link>
                  <Link class="dropdown-item" to="/shop/Carebaby">
                    <span class="navbar-link-styling">Carebaby</span>
                  </Link>
                  <Link class="dropdown-item" to="/shop/HealthCare">
                    <span class="navbar-link-styling">Health Care</span>
                  </Link>
                  <Link class="dropdown-item" to="/shop/Organic">
                    <span class="navbar-link-styling">Organic</span>
                  </Link>
                </div>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  <span class="navbar-link-styling">About</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/delivery"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <span class="navbar-link-styling">Delivery</span>
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/contact"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <span class="navbar-link-styling">Contact</span>
                </Link>
              </li>
            </ul>
            {userInfo ? (
              <>
                <button
                  type="button"
                  class="btn btn-outline-dark ml-1 navbar-button-styling"
                  data-mdb-ripple-color="dark"
                  onClick={profileHandler}
                >
                  Profile
                </button>
                <span class="navbar-separator-styling">|</span>
                <FontAwesomeIcon
                  class="navbar-cart-styling"
                  icon={faCartShopping}
                  onClick={() => {
                    navigate("/cart");
                  }}
                />
                <span class="badge badge-danger badge-navbar-styling">
                  {cart.cartItems.length}
                </span>
              </>
            ) : (
              <>
                <button
                  type="button"
                  class="btn btn-outline-dark ml-1 navbar-button-styling"
                  data-mdb-ripple-color="dark"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>

                <span class="navbar-separator-styling">|</span>
                <FontAwesomeIcon
                  class="navbar-cart-styling"
                  icon={faCartShopping}
                  onClick={() => {
                    navigate("/cart");
                  }}
                />
                <span class="badge badge-danger badge-navbar-styling">
                  {cart.cartItems.length}
                </span>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

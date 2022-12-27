import React, { useState, useEffect, useContext } from "react";
import '../styles/navbar.css'
import { faArrowRightToBracket, faBagShopping, faBars, faCaretRight, faCartShopping, faHeart, faShoppingBag, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, Link } from "react-router-dom";
import { Store } from '../Store'

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { state, dispatch:ctxDispatch } = useContext(Store);
  const {cart, wish, userInfo} = state;
  const signoutHandler = () => {
    ctxDispatch({type: 'USER_SIGNOUT'});
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/login';
  }
  return (
    <>
    <div className="top-header">
      
        {
        userInfo ? (<Link to='/account'><span className="user-name-header">Welcome{userInfo.name}</span></Link>) : (<span className="user-name-header">Welcome User</span>)
    }
      <div className="icons">
        
          {
            userInfo ? (<Link to="#signout" onClick={signoutHandler}><span><FontAwesomeIcon icon={faArrowRightToBracket} /> LogOut</span></Link>) : (<a href="/login"><span>Login | Sign Up</span></a>)
          }
          <a href="/cart"><span><FontAwesomeIcon icon={faCartShopping} />{cart.cartItems.length > 0 && (<span className='totalItems'>{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>)}</span></a>
        
          <a href="/wish"><span><FontAwesomeIcon icon={faShoppingBasket} />{wish.wishItems.length > 0 && (<span className='totalItems'>{wish.wishItems.length}</span>)} </span></a>
          
          
          </div>
       
       
 
    </div>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
        <Link to="/"><img src="/images/logo/logo.png" className='logo' alt="" /></Link>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li className="list">
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="list">
              <NavLink to="/shop" activeClassName="active">Products</NavLink>
            </li>
            <li className="list">
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
           
            <li className="list">
              <NavLink to="/about" activeClassName="active">Blog</NavLink>
            </li>
            <li className="list">
              <NavLink to="/about" activeClassName="active">Delivery</NavLink>
            </li>
            <li className="list">
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="/"
                >
                <img className="social-icon" src="/images/socials/twitter.png" alt="" />
              </a>
            </li>
            <li>
              <a
                href="/"
                >
                <img className="social-icon" src="/images/socials/facebook.png" alt="" />
              </a>
            </li>
            <li>
              <a
                href="/"
                >
                <img className="social-icon" src="/images/socials/instagram.png" alt="" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <FontAwesomeIcon icon={faBars}/>
            </a>
          </div>
        </div>
      </nav>

    
    </>
  );
};

export default Navbar;
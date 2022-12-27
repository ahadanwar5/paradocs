import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className='f-container'>
        <div className="f-row">
          <div className="f-col">
            <h2>ParaDocs</h2>
            <ul>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/delivery">Delivery </NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/privacy">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/faqs"> FAQs</NavLink>
              </li>
              <li>
                <NavLink to="/faqs">Refund Policy</NavLink>
              </li>
            </ul>

          </div>
          <div className="f-col">
            <h2>Popular Categories</h2>
            <ul>
              <li>
                <NavLink to="/">Oral Care</NavLink>
              </li>
              <li>
                <NavLink to="/">Herbal Care</NavLink>
              </li>
              <li>
                <NavLink to="/">Men's Health</NavLink>
              </li>
              <li>
                <NavLink to="/">Women's Health</NavLink>
              </li>
              <li>
                <NavLink to="/">Baby Nutrition</NavLink>
              </li>
              <li>
                <NavLink to="/">Support and Braces</NavLink>
              </li>
            </ul>
          </div>
          <div className="f-col">
            <h2>Connect with us</h2>
            <p >
            Tel: 0349-4328407
            <br />
            <br />
            Email: dontcontactus@dawaai.pk
            <br />
            <br />
            Ahad ka Ghar-Ali View Park, Lahore Punjab
            <br />
            <br/>
            </p>            
            <div className="socials">
                <a href="/"><img src="/images/socials/facebook.png" alt="" /></a>
                <a href="/"><img src="/images/socials/instagram.png" alt="" /></a>
                <a href="/"><img src="/images/socials/twitter.png" alt="" /></a>
                <a href="/"><img src="/images/socials/youtube.png" alt="" /></a>
            </div>
          </div>
          <div className="f-col">
            <img src="https://lirp.cdn-website.com/8592f054/dms3rep/multi/opt/payment-methods-1920w.png" alt="paymentmethods" />
          </div>
        </div>
        <div className="f-copyrow">
            <p>© 2022 ParaDocs.pk. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
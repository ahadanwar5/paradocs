import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import "../styles/about.css"


const About = () => {
  return (
    <div>
      <Navbar />
      <div className='a-row'>
          <div className='a-col-sm-4'>
          <h3>The Trusted</h3> 
          <br/>
          <h3>Online</h3> 
          <br/>
          <h3>Medicine</h3> 
          <br/>
          <h3>Partner</h3>   
          <br/>
          <h4>For More than</h4>
          <br/>
          <h4>Seven Million</h4>
          <br/>
          <h4>Loyal</h4>
          <br/>
          <h4>CUSTOMERS</h4>
          <br/>
            
          </div>
          <div className='a-col-sm-4'>
            <h1>About Us</h1>
            <br/>
            
            <h5>Who we are - Pakistan's most convenient online pharmacy</h5>
            <p>
            ParaDocs.com is one of Pakistan’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 7 million happy customers – PAN Pakistan. At ParaDocs.com, we help you look after your own health effortlessly as well as take care of loved ones wherever they may reside in Pakistan.You can buy and send medicines from any corner of the country - with just a few clicks of the mouse.
            <br/>
            <br/>
            </p>

           <h5>What we do – Offer fast online access to medicines with convenient home delivery</h5>
           <p>
            At ParaDocs.com, we make a wide range of prescription medicines and other health products conveniently available all across Pakistan. Even second and third tier cities and rural villages can now have access to the latest medicines.Since we also offer generic alternatives to most medicines, online buyers can expect significant savings.
          </p>
          
          <h2>CONVENIENCE</h2>
          <p>
          Heavy traffic,lack of parking, monsoons, shop closed, forgetfulness… these are some of the reasons that could lead to skipping of vital medications.          Since taking medicines regularly is a critical component of managing chronic medical conditions, it’s best not to run out of essential medicines. Just log on to ParaDocs.com, place your order online and have your medicines delivered to you – without leaving the comfort of your home.
          <br/>
          What’s more, with easy access to reliable drug information, you get to know all about your medicine at ParaDocs.com, and once you’re a ParaDocs customer, you’ll get regular refill reminders, so you’ll never again come up short of medicines.
          </p>

          <h2>ONE-STOP SHOP</h2>
          <p>
          At ParaDocs.com, we not only provide you with a wide range of medicines listed under various categories, we also offer a wide choice of OTC products including wellness products, vitamins, diet/fitness supplements, herbal products, pain relievers, diabetic care kits, baby/mother care products, beauty care products and surgical supplies.
          </p>

          <h2>TRUST</h2>
          <p> 
            With the highest standards of ethical pharmacy practice, ParaDocs is committed to providing authentic cum affordable medicines as well as a customer service philosophy that is worthy of our valued customers’ loyalty.We offer a superior online shopping experience, which includes ease of navigation and absolute transactional security.
          </p>
        
          </div>
          <div className='a-col-sm-4'>
          <i className='fa text-blue'>	&#8220; </i>
          <p id='p-review'>
          <span>
          It's very helpful to buy medicine online. I ordered medicine. Got right time delivered and secured. Satiesfied customer service. Thanks ParaDocs!   
          </span> 
          </p>
          <i className='fa-right text-blue'>	&#8221; </i>                    
           <p id='review-author'>
            - AHAD ANWAR    
          </p>  
          
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default About

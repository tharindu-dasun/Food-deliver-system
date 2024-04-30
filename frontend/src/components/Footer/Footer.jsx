import react from "react";
import './Footer.css'
import {assets} from "../../assets/assets.js";

const Footer = () => {
  return(
      <div className='footer' id='footer'>
          <div className='footer-content'>
              <div className='footer-content-left'>
                  <img src={assets.logo} alt=""/>
                  <p>"Effortlessly order delicious meals online with our user-friendly food ordering website. Explore diverse menus, customize your selections, and enjoy convenient delivery or pickup options for a satisfying dining experience."</p>
                  <div className="footer-social-icons">
                      <img src={assets.facebook_icon}/>
                      <img src={assets.twitter_icon}/>
                      <img src={assets.linkedin_icon}/>
                  </div>
              </div>
              <div className='footer-content-center'>
                  <h2>COMPANY</h2>
                  <ul>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Delivery</li>
                      <li>Privecy Policy</li>
                  </ul>
              </div>
              <div className='footer-content-right'>
                  <h2>Get in touch</h2>
                  <ul>
                      <li>0112356897</li>
                      <li>hello@gmail.com</li>
                  </ul>
              </div>
          </div>
          <hr/>
          <p className="footer-copyright">copyrights@2024</p>
      </div>
  )
}

export default Footer

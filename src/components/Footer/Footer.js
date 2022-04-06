import React from 'react'
import './Footer.css'
import facebook from './icons/facebook-f-brands.svg'
import instagram from './icons/instagram-brands.svg'
import linkedin from './icons/linkedin-in-brands.svg'
import youtube from './icons/youtube-brands.svg'
import pinterest from './icons/pinterest-p-brands.svg'
import twitter from './icons/twitter-brands.svg'

function Footer() {
  return (
      <div>
          <div className='footer-content'>
              <div className="logo">
                  <img src="https://europeanit-inst.com/wp-content/uploads/2020/02/logo-large-TM.png-300.png" alt="" />
              </div>
              <div className="follow-us">
                  <h2>Follow Us</h2>
                  <img className='social-icon' src={facebook} alt="" />
                  <img className='social-icon' src={instagram} alt="" />
                  <img className='social-icon' src={linkedin} alt="" />
                  <img className='social-icon' src={youtube} alt="" />
                  <img className='social-icon' src={pinterest} alt="" />
                  <img className='social-icon' src={twitter} alt="" />
              </div>
              <div className="motivate-speech">
                  <img src="https://europeanit-inst.com/wp-content/uploads/2020/03/your-journy-to.png" alt="" />
              </div>
          </div>
          <div className='copy-text'>
              <p>Copyright ©2022 European IT Solutions Institute. All Rights Reserved.</p>
          </div>
    </div>
  )
}

export default Footer
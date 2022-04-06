import { faClock, faEnvelope, faLocationDot, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
      <div className='contact-us-container'>
          <div className="address">
              <FontAwesomeIcon className='icon' icon={faLocationDot}></FontAwesomeIcon>
              <h3 className='heading'>Address</h3>
              <p>Noor Mansion (3rd Floor), Plot#04,
                  Main Road#01, Mirpur-10, Dhaka-1216</p>
          </div>
          <div className="callus">
              <FontAwesomeIcon className='icon' icon={faMobileScreenButton}></FontAwesomeIcon>
              <h3 className='heading'>Call Us</h3>
              <p>+880 188 99 77 950</p>
              <p>+880 188 99 77 951</p>
              <p>+880 188 99 77 952</p>
          </div>
          <div className="mail">
              <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
              <h3 className='heading'>Email</h3>
              <p>info@europeanit-inst.com</p>
              <p>help@europeanit-inst.com</p>

          </div>
          <div className="work-hour">
              <FontAwesomeIcon className='icon' icon={faClock}></FontAwesomeIcon>
              <h3 className='heading'>Work Hours</h3>
              <p>Monday - Sunday
                  10AM - 09PM</p>
          </div>
    </div>
  )
}

export default ContactUs
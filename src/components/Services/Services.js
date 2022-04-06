import { faGraduationCap, faPeopleGroup, faStamp, faTv } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Services.css'

function Services() {
  return (
      <div className='services-container'>
          <div className='card'>
              <FontAwesomeIcon className='icon' icon={faStamp} />
              <h3>6 months/ 1 Year Diploma Course</h3>
          </div>
          <div className='card'>
              <FontAwesomeIcon className='icon' icon={faPeopleGroup}></FontAwesomeIcon>
              <h3>Apply for Free Seminar</h3>
          </div>
          <div className='card'>
              <FontAwesomeIcon className='icon' icon={faTv}></FontAwesomeIcon>
              <h3>Free Online Tutorials</h3>
          </div>
          <div className='card'>
              <FontAwesomeIcon className='icon' icon={faGraduationCap}></FontAwesomeIcon>
              <h3>Apply for New Courses</h3>
          </div>
    </div>
  )
}

export default Services
import React from 'react'
import useCourses from '../../hooks/useCourses'
import './CareerCouncelling.css'

function CareerCouncelling() {
    const [projects, setProjects] = useCourses()
  return (
      <div className='councellinf-container'>
          <div className="input-section">
              <p className='career-text'>CAREER</p>

              <h2 className='councelling-text'>Counselling</h2>
              <div className="message-section">
                  <div className="info">
                      <div className="top">
                          <input className='input' type="text" placeholder='name' />
                          <input className='input' type="text" placeholder='email' />
                      </div>
                      <div className="bottom">
                          <input className='input' type="text" placeholder='phone' />
                          <select className='input select'>
                              <option value="" selected>Select course</option>
                              {
                                  projects.map(project => <option key={project.id}>{project.courseName}</option>)
                              }
                          </select>
                      </div>
                  </div>
                  <div className="message">
                      <input className='input message' type="text" placeholder='Type your message' />
                  </div>
              </div>
              <button className='submit-btn'>SUBMIT</button>
          </div>
          <img className='career-councelling-img' src="https://europeanit-inst.com/wp-content/uploads/2021/08/European-IT-Counselling-Image.png" alt="" />
    </div>
  )
}

export default CareerCouncelling
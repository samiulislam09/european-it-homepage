import React from 'react'
import './Menu.css'

function Menu() {
  return (
      <div className='menu'>
          <div className="menu-item">
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">About Us</a></li>
                  <li><a href="/">Courses</a></li>
                  <li><a href="/">Success Stories</a></li>
                  <li><a href="/">Event</a></li>
                  <li><a href="/">Gallery</a></li>
                  <li><a href="/">News</a></li>
                  <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
          <button className='admission-now-btn'>admission now</button>
    </div>
  )
}

export default Menu
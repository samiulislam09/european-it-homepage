import React from 'react'
import './JobPlacement.css'

function JobPlacement() {
  return (
      <div className='job-placement'>
          <div className="details">
              <p className='job'>Job</p>
              <h2 className='placement'>Placement</h2>
              <img src="https://europeanit-inst.com/wp-content/uploads/2021/08/European-IT-Rukaiya-Khatun.jpg" alt="" />
              <p>European IT manage the job for talented students through their job placement cell at European IT's firm as well as other firms. I was a student of Pabna Polytechnic Institute. I have completed my industrial attachment from European IT Institute in 2019. From my childhood, I was very much interested in Graphic Design Sector. For that, I have chosen the subject for industrial attachment Graphic Design. It was an awesome experience when I was a student of European IT. The Instructor of this Institute always supported us. After completed my industrial attachment I got a job opportunity from the European IT firm. Not only me but also some of my friends had got the opportunity.</p>
              <h1 className='name'>Mst Rukiea Khatun</h1>
              <p className='post'>Graphic Designer</p>
          </div>
          <div className='video'>
              <iframe width="600" height="500" src="https://www.youtube.com/embed/lvUYeGI0yHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
    </div>
  )
}

export default JobPlacement
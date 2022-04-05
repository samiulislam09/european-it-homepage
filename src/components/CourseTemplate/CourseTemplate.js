import React from 'react'
import './CourseTemplate.css'


function CourseTemplate(props) {
    const { courseName, img, category } = props.project;
  return (
      <div className='card'>
          <img src={img} alt="" />
          <div className="info">
              <p className='course-name'>{courseName }</p>
              <p className='course-category'>{category }</p>
          </div>
    </div>
  )
}

export default CourseTemplate
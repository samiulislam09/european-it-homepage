import React from 'react'
import useCourses from '../../hooks/useCourses'
import CourseTemplate from '../CourseTemplate/CourseTemplate';
import './Courses.css'

function Courses() {
    const [projects, setProjects] = useCourses()
    console.log(projects);
  return (
      <div className='courses-container'>
          <div className="title">
            <p className='popular-text'>MOST POPULAR</p>
            <h1 className='course-program-text'>Course Programs</h1>
          </div>
          <div className="cards">
              {
                  projects.map(project => <CourseTemplate key={project.id} project={project}></CourseTemplate>)
              }
          </div>
          <button className='all-courses-btn'>See All Courses</button>

    </div>
  )
}

export default Courses
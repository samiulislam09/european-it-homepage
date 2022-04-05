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
            <p>MOST POPULAR</p>
            <h1>Course Programs</h1>
          </div>
          <div className="cards">
              {
                  projects.map(project => <CourseTemplate key={project.id} project={project}></CourseTemplate>)
              }
          </div>

    </div>
  )
}

export default Courses
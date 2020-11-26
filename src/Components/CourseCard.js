import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { CourseContextApi } from './CourseApi';
import './courseCard.css'

class CourseCard extends Component {
  static contextType = CourseContextApi;
  render(){
  const courses = this.context
  // const {id, title, level, duration} = value
    return (
      <React.Fragment>
        {
          courses.map((course)=>{
            return (
                <React.Fragment key={course.id}>
                  <Link to={`/${course.title}`}>
                    <div className="course">
                      <div className="course-content">
                        <h2>{course.title}</h2>
                        <h3>{course.level}</h3>
                        <p>Duration: {course.duration}</p>
                        <i className="fa fas-book"></i>
                      </div>
                    </div>
                  </Link>
                </React.Fragment>
                )
          })
        }
      </React.Fragment>
    )
  }
}


function print(x){
  // x.target.preventDefault();
  console.log(x.title)
}

export default CourseCard
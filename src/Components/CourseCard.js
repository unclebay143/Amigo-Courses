import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { CourseContextApi } from './CourseApi';
import './courseCard.css'

class CourseCard extends Component {
  static contextType = CourseContextApi;
  render(){
  const value = this.context
  // const {id, title, level, duration} = value
    return (
      <React.Fragment>
        {
          value.map((x)=>{
            return (
                <React.Fragment key={x.id}>
                  <Link to={`/${x.title}`}>
                    <div className="child">
                      <div className="child-content">
                        <h2>{x.title}</h2>
                        <h3>{x.level}</h3>
                        <p>{x.duration}</p>
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
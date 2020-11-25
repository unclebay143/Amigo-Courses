import React, {Component} from 'react'
import { CourseContextApi } from './CourseApi'
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
            <React.Fragment>
              <div className="child" key={x.id}>
                <div className="child-content">
                  <h2>{x.title}</h2>
                  <h3>{x.level}</h3>
                  <p>{x.duration}</p>
                </div>
              </div>
            </React.Fragment>
              )
        })
      }
      </React.Fragment>
    )
  }
}


export default CourseCard
import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import './recommended.css' 
class Recommended extends Component {
  constructor(props){
    super(props)
    this.recommendedCourses = [
      {
        id: uuidv4(),
        title: "Git Version Control",
        url: "",
        price: "$5",
        img: ""
      },
      {
        id: uuidv4(),
        title: "Free Online Hosting Site",
        url: "",
        price: "$3",
        img: ""
      },
      {
        id: uuidv4(),
        title: "Full Stack Explained",
        url: "",
        price: "$9",
        img: ""
      },
      {
        id: uuidv4(),
        title: "Frontend Courses",
        url: "",
        price: "$5",
        img: ""
      },
    ]
  }
  render() {
    return (
      <React.Fragment>
        <div className="recommended-container">
        {
          this.recommendedCourses.map((recommendedCourse)=>{
            return (
              <div className="recommended">
                <img src={recommendedCourse.img} alt={recommendedCourse.title}/>
                <h3 className="title">{recommendedCourse.title}</h3>
                <p className="price">{recommendedCourse.price}</p>
              </div>
            )
          })
        }
        </div>
      </React.Fragment>
    )
  }
}

export default Recommended
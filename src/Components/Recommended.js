import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import './recommended.css' ;
import Slack from './assets/img/slack.gif'
class Recommended extends Component {
  constructor(props){
    super(props)
    this.recommendedCourses = [
      {
        id: uuidv4(),
        title: "Git Version Control",
        url: "",
        price: "$15",
        img: "https://miro.medium.com/max/4400/1*y7D5jICmjzvxZP6z-5EtDg.png"
      },
      {
        id: uuidv4(),
        title: "Free Online Hosting Site",
        url: "",
        price: "$3",
        img: "https://cdn3.wpbeginner.com/wp-content/uploads/2018/12/freewebsitehosting.png"
      },
      {
        id: uuidv4(),
        title: "Basic Animation For your next project",
        url: "",
        price: "$19",
        img: "https://miro.medium.com/max/1200/1*2SJH2tItiljweyRgivf9JQ.gif"
      },
      {
        id: uuidv4(),
        title: "Full Stack Explained",
        url: "",
        price: "$16",
        img: "https://hackernoon.com/hn-images/1*9npNPVH7iNJ64Koq7EcW5A.jpeg"
      },
      {
        id: uuidv4(),
        title: "Tailwind css for beginners",
        url: "",
        price: "$15",
        img: "https://res.cloudinary.com/practicaldev/image/fetch/s--UvuknDGQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/fad1jqxb2np7x3lrxl3h.gif"
      },
      {
        id: uuidv4(),
        title: "Frontend Explained",
        url: "",
        price: "$15",
        img: "https://miro.medium.com/max/850/1*rw0Ly2m3Uge8cl0i6LxT5A.jpeg"
      },
      {
        id: uuidv4(),
        title: "Data Structure",
        url: "",
        price: "$25",
        img: "https://5.imimg.com/data5/TK/YX/MK/SELLER-1943297/data-structures-training-in-gurgaon-500x500.png"
      },
      {
        id: uuidv4(),
        title: "Slack",
        url: "",
        price: "$7",
        img: Slack
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
              <div className="recommended" key={recommendedCourse.id}>
                <img src={recommendedCourse.img} alt={recommendedCourse.title}/>
                <h3 className="title">{recommendedCourse.title}</h3>
                <div className="price-tag">
                 <p className="price">{recommendedCourse.price}</p>
                 <a href="#" className="action-icon"> <i className="fas fa-shopping-cart"></i> Purchase</a>
                </div>
                <i className="fa fas-store"></i>
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
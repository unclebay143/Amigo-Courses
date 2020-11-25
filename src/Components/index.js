import React, { Component } from 'react';
import Button from './layout/Buttons';
import './body.css';
import Landing from './landing.svg'
// import CountDown from './CountDown'
import { CourseContextApi } from './CourseApi';
import CourseCard from './CourseCard';

class Body extends Component {
  static contextType = CourseContextApi;
  render() {
    const value = this.context;
    console.log(value)
    return (
        <React.Fragment>
            <div className="main">
              <section className="left-body">
                <h4>Start your coding journey with us!</h4>
                <Button className="btn get-started-btn" label="Get Started" to="https://google.com" />
              </section>
              <div className="right-body">
                <img src={Landing} alt="landing" />
              </div>
            </div>
            <div>
              {/* <CountDown /> */}
              <div className="course-lead">Available Courses</div>
              <hr className="course-lead-liner"/>
              <div className="course-card">
                <div className="card-container">
                  <CourseCard />
                </div>
              </div>
            </div>
        </React.Fragment>
    )
  }
}

export default Body
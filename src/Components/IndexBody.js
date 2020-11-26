import React, { Component } from 'react';
import Button from './layout/Buttons';
import './body.css';
import Landing from './landing.svg'
// import CountDown from './CountDown'
import { CourseContextApi } from './CourseApi';
import CourseCard from './CourseCard';
import Recommended from './Recommended';
class Body extends Component {
  static contextType = CourseContextApi;
  render() {
    const value = this.context;
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
              <h4 className="course-lead">Available Courses</h4>
              <hr className="course-lead-liner"/>
              <div className="course-card">
                <div className="card-container">
                  <CourseCard />
                </div>
              </div>

              <h4 className="recommended-lead">What to Learn Next</h4>
              <div className="recommended-section">
                <Recommended/>
              </div>
            </div>
        </React.Fragment>
    )
  }
}

export default Body
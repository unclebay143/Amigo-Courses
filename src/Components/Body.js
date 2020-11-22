import React, { Component } from 'react';
import Button from './layout/Buttons';
import './body.css';
import Landing from './landing.svg'
import CountDown from './CountDown'

class Body extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <section className="left-body">
            <h4>Start your coding journey with us!</h4>
            <Button label="Get Started" to="https://google.com" />
          </section>
          <section className="right-body">
            <img src={Landing} alt="landing" />
          </section>
        </div>
        <div>
          <CountDown />
          <section className="partners">
          </section>
        </div>
      </div>
    )
  }
}

export default  Body
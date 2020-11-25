import React, { Component } from 'react'
import './countdowns.css'
class CountDown extends Component {
  constructor(){
    super()
    this.state = {
      hour: 24,
      minute: 10,
      second: 10
    }
    // console.log(typeof(this.state.hour))
   const hourTimer = () => {
      this.setState({
        
        hour: this.state.hour - 1,
        // minute: this.state.minute + 2,
        // second: this.state.second + 1
      })
    }
   const minuteTimer = () => {
      this.setState({
        // hour: this.state.hour + 1,
        minute: this.state.minute - 2,
        // second: this.state.second + 1
      })
    }
   const secondTimer = () => {
      this.setState({
        // hour: this.state.hour + 1,
        // minute: this.state.minute + 2,
        second: this.state.second - 1
      })
          if(this.state.second === 0){
            this.setState({
              second: 60
            })

          }
      }
    setInterval(hourTimer , 3600000)
    setInterval(minuteTimer , 60000)
    setInterval(secondTimer , 1000)
  }
  render() {
    return (
      <div  className="counters">
        <ul>
          <span> New course in </span>
          {/* <li><span> New course in </span> {this.state.hour} Hours : </li> */}
          <li>{this.state.hour} Hours : </li>
          <li> {this.state.minute} Minutes : </li>
          <li> {this.state.second}  Seconds</li>
        </ul>
      </div>
    )
  }
}
export default CountDown
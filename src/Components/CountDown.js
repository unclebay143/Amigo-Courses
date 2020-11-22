import React, { Component } from 'react'
import './countdowns.css'
class CountDown extends Component {
  constructor(){
    super()
    this.state = {
      hour: 0,
      minute: 0,
      second: 0
    }
    // console.log(typeof(this.state.hour))
   const hourTimer = () => {
      this.setState({
        hour: this.state.hour + 1,
        // minute: this.state.minute + 2,
        // second: this.state.second + 1
      })
    }
   const minuteTimer = () => {
      this.setState({
        // hour: this.state.hour + 1,
        minute: this.state.minute + 2,
        // second: this.state.second + 1
      })
    }
   const secondTimer = () => {
      this.setState({
        // hour: this.state.hour + 1,
        // minute: this.state.minute + 2,
        second: this.state.second + 1
      })
          if(this.state.second === 60){
            this.setState({
              second: 0
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
          <li> {this.state.hour} : </li>
          <li> {this.state.minute} : </li>
          <li> {this.state.second}  </li>
        </ul>
      </div>
    )
  }
}
export default CountDown
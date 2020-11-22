import React, { Component } from 'react'
import './buttons.css'
class Button extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <a id={this.props.id} className="btn" href={this.props.to}>{this.props.label}</a>
    )
  }
}


export default Button
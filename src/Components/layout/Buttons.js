import React, { Component } from 'react'
import './buttons.css'
class Button extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const {id, to, label, className } = this.props
    return (
      <a id={id} className= {className} href={to}>{label}</a>
    )
  }
}


export default Button
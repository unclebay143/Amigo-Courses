import React, { Component } from 'react';
import './inputStyles.css';
class InputFormGroup extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {type, placeholder } = this.props
    return (
    <React.Fragment>
      <input className="input-box" type={type} placeholder={placeholder} />
    </React.Fragment>
    )
  }
}


export default InputFormGroup;



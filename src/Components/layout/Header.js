import React from 'react'
import './header.css'
import InputFormGroup from './InputFormGroup'
import Button from './Buttons'
function Header() {
  return (
    <div>
      <div className="navbar">
        <h4 className="logo">Amigo Junior Dev</h4>
        <h4 className="logo-mini">AJD</h4>
        <i className="hamburger fa fa-bars"></i>
        <section className="navbar-link">
          <a href="/">Home</a>
          <a href="/">Internship</a>
          <a href="/">Courses</a>
          <InputFormGroup 
            type="text" 
            placeholder="Enter Username" 
          />
          <InputFormGroup 
            type="password" 
            placeholder="Enter Password" 
          />
          <Button 
            id="loginBtn" 
            label = "Login" 
            to = "https://google.com"
          />
        </section>
      </div>
    </div>
  )
}


export default Header
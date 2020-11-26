import React from 'react'
import './header.css'
import InputFormGroup from './InputFormGroup'
import Button from './Buttons'
import {Link} from 'react-router-dom'

function Header() {
  return (
      <React.Fragment>
        <div className="navbar">
          <Link to='/' className="logo">Amigo Junior Dev</Link>
          <h4 className="logo-mini">AJD</h4>
          <i className="hamburger fa fa-bars"></i>
          <section className="navbar-link">
            <Link to="/">Home</Link>
            <Link to="/internship">Internship</Link>
            <Link to="/courses">Courses</Link>
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
      </React.Fragment>
  )
}

// function Header(){
//   return <h1>Header</h1>
// }

function Internship(){
  return <h1>Internship</h1>
}

function Courses(){
  return <h1>Courses</h1>
}

export { Header, Internship, Courses }
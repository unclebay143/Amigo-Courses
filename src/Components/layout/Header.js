import React from 'react'
import './header.css'
import Button from './Buttons'
function Header() {
  return (
    <div>
      <div className="navbar">
        <h4 className="logo">Amigo Junior Dev</h4>
        <section className="navbar-link">
          <a>Home</a>
          <a>Internship</a>
          <a>Courses</a>
          <Button id="loginBtn" label = "Login" to = "https://google.com" />
        </section>
      </div>
    </div>
  )
}


export default Header
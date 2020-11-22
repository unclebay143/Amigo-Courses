import React from 'react'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Buttons'
function Header() {
  return (
    <div>
      <div className="">
        {/* <h4 className="logo">Amigo Junior Dev</h4>
        <section className="navbar-link">
          <a>Home</a>
          <a>Internship</a>
          <a>Courses</a>
          <Button id="loginBtn" label = "Login" to = "https://google.com" />
        </section> */}
        <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand logo" href="#">Amigo Junior Developer</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
</nav>

      </div>
    </div>
  )
}


export default Header
import React from 'react'
import './footer.css'
import Button from './Buttons'
function Footer() {
  return (
    <div className="footer-section">
    <div className="linethrough">
      {/* <h4></h4> */}
    </div>
      <footer>
        <section className="social">
          <ul>
            <h4>Social:</h4>
            <hr/>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </section>
        <section className="address">
        <ul>
          <h4>Location:</h4>
          <hr/>
          <li>Head Office: No 23, Mowe Abuja</li>
          <li>Address 2: No 123, Nyanya Abuja</li>
        </ul>
        </section>
        <section>
          <ul>
          <h4>Phone:</h4>
          <hr/>
          <li>+234 903515 7444</li>
          <li>+234 903515 7444</li>
          </ul>
        </section>
        <section className="subscribe-section">
        <ul>
          <h4>NewsLetter</h4>
          <hr/>
          <li>
          <form className="subscribeForm">
            <input type="email" placeholder="Enter Email" />
            <Button label="Subscribe" id="subscribeBtn"/>
          </form>
          </li>
          {/* <li className="developer">Designed with love by unclebay</li> */}
        </ul>
        </section>
      </footer>
    </div>
  )
}


export default Footer
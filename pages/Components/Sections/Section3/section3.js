import React from 'react'
import './style.scss'
function Section3() {
    return (
      <div>
          <div className="form">
          <h1>Login Form</h1>
          <div>
            <form>
                <input type="text" placeholder="Enter Your First  name"/>
                <input type="text" placeholder="Enter Your Last  name"/>
                <input type="text" placeholder="Enter Your Email"/>
                <input type="password" className="password"/>
                <textarea placeholder="Enter Your Message"></textarea>
                <button className="button0">Submit</button>
            </form>
            </div>
          </div>
      </div>  
    )
}

export default Section3

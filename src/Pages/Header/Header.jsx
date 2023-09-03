import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo.png'
import './header.css'

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">

      <div>
        <Link to="/" className="nav-logo">
        <img src={Logo}  ></img></Link>
      </div>

      <div>
      <Link to="/" className="nav-logo">
        <p>IETE</p>
        </Link>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"} >
    <li >
      <div>
        <h3>
The Institution of Electronics and Telecommunication Engineers, Chennai</h3>
      </div></li>

      <li className="nav-item"> <div> 
         <Link to='/home' 
          className="nav-links"
          onClick={handleClick}>Home</Link>
         </div></li>

         <li className="nav-item"> <div>
         <Link  className="nav-links"
                onClick={handleClick} to='/excutive-committe' >Excutive-committe</Link>
         </div></li>

         <li className="nav-item"> <div> 
         <Link className="nav-links"
                onClick={handleClick} to='/events' >Events</Link>
         </div></li>

         <li className="nav-item"> <div> 
         <Link  className="nav-links"
                onClick={handleClick} to='/membership' >Membership</Link>
         </div></li>

         <li className="nav-item"> <div> 
         <Link  className="nav-links"
                onClick={handleClick} to='/chencon2021' >Chencon2021</Link>
         </div></li>


         <li className="nav-item"> <div> 
         <Link className="nav-links"
                onClick={handleClick} to='/chenlink1' >Chenlink1</Link>
      </div></li>

      <li className="nav-item"> <div>
         <Link  className="nav-links"
                onClick={handleClick} to='/chenlink2' >Chenlink2</Link>
         </div></li>

         <li className="nav-item"> <div>
         <Link className="nav-links"
                onClick={handleClick} to='/chenlink3' >Chenlink3</Link>
         </div></li>

         <li className="nav-item" > <div>
         <Link  className="nav-links"
                onClick={handleClick} to='/contact' >Contact</Link>
         </div></li>

         </ul>
         <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

         </div>
         </nav>
    </div>
    
  )
}

export default Header
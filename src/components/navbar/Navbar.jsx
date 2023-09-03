import "./NavbarStyles.css";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from './logo.png'
export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div style={{
        display:'flex',
        gap:20,
        width:420,
        marginTop:40,
        // border:'1px solid white'
      }} >
        <Link to="/" >
        <img style={{
          width:60,
          height:60
        }} src={Logo}  ></img></Link>
        <Link to="/">
        <h1 style={{
          marginTop:10
        }}  >IETE</h1>
      </Link>
      <h3 style={{
        color:'white',
        
      }} >
The Institution of Electronics and Telecommunication Engineers, Chennai</h3>
      </div>
     

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
        <Link  className="nav-links"
               to='/excutive-committe' >Excutive-committe</Link>
          </li>

        <li>
        <Link className="nav-links"
               to='/events' >Events</Link>
        </li>

        <li>
        <Link  className="nav-links"
                to='/membership' >Membership</Link>
      </li>

     
        <li>
          
          <div className="combo"  >
          <span className="span" >Chencon</span>
          

          <div className="dropdown-content">
                     <ol className='dropl'>
                      <li><Link  className="nav-links" to='/chencon2021' >Chencon2021</Link></li>
                      <li><Link  className="nav-links" to='/chencon2022' >Chencon2021</Link></li>
                       
                     </ol>
          </div>
          </div>
        </li>
        
        <li>
          
          <div className="combo"  >
          <span className="span" >Chenlink Newsletter</span>
          

          <div className="dropdown-content">
                     <ol className='dropl'>


                     <li>
        <Link className="nav-links"
              to='/chenlink1' >Chenlink1</Link>
     </li>
        <li>
        <Link className="nav-links"
               to='/chenlink2' >Chenlink2</Link>
        </li>
        <li>
        <Link className="nav-links"
              to='/chenlink3' >Chenlink3</Link>
      </li>
                       
                     </ol>
          </div>
          </div>
        </li>
        

        
        <li>
        <Link  className="nav-links"
             to='/contact' >Contact</Link>
       </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

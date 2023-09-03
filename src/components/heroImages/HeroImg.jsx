import "./HeroImgStyles.css";
import { React } from "react";

import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const HeroImg = () => {
  return (
    <div className="hero">
      <Navbar/>
      <div className="mask">
        <img className="into-img" src={IntroImg} alt='Hero Image' />
      </div>

      <div className="content">
       
        <h1>Learning Today,</h1>
        <h1>Leading Tomorrow</h1>
        <div>
          <Link to="/upcoming" >
         
    <p style={{
 color: "rgb(85, 104, 254)",
fontSize:24
    }} >
          UPCOMING EVENTS & UPDATES</p>
          </Link>
          {/* <Footer/> */}
        </div>
      </div>
    </div>
  );
};


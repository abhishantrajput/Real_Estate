import React from "react";
import "../Styles/Hero.css";
import hero_image from "../../public/hero-image.png";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="flexCenter paddings innerwidth hero-container">
        <div className="hero-left ">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover <br />
              most Suitable <br />
              Property
            </h1>
          </div>
          <div className="hero-des">
            <span>
              Find the variety of Property thats suits you very easily.
            </span>
            <br />
            <span>Forgot all Duffuculties that stops you to find home.</span>
          </div>
          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="btn">Search</button>
          </div>

          <div className=" flexCenter stats">
            <div className=" flexColCenter stat">
              <span>
                <CountUp start={666} end={800} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className=" flexColCenter stat">
              <span>
                <CountUp start={543} end={600} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className=" flexColCenter stat">
              <span>
                <CountUp start={1} end={28} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-container">
            <img src={hero_image}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import "./../Styles/GetStarted.css";

const GetStarted = () => {
  return (
    <section className=" GetStarted-wrapper">
      <div className=" innerWidth paddings GetStarted-container">
        <div className="flexColCenter innerContainer">
        <h1>Get Start With Homys</h1>
        <p className="secondaryText">
          Subscribe and find super attractive price quotes from us. Find your
          residence soon
        </p>
        <div className="btn">
            <a href="mailto:abhishantsinghrajput@gmail.com">Get Started</a>
            {/* <a href="tel:98889899"> Now</a> */}
            
        </div>


        </div>
      </div>
    </section>
  );
};

export default GetStarted;

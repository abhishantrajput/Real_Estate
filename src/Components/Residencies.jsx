import React from "react";
import "./../Styles/Residencies.css";
import "swiper/css";
import data from "./../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { SliderSettings } from "../utils/Common";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="innerWidth paddings r-container">
        <div className="r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...SliderSettings}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className=" flexColCenter r-card ">
                <img src={card.image}></img>
                <div className="card-price ">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </div>
                <span className="primaryText">{card.name}</span>

                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;



const SliderButton = () => {
    const swiper = useSwiper();
  return (
    <div className="r-buttons ">
      <button className="btn1" onClick={()=>swiper.slidePrev()}>&lt;</button>
      <button className="btn2" onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  );
};

import React, { useState } from "react";
import "./../Styles/Value.css";
import data from "./../utils/accordion";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";

import "react-accessible-accordion/dist/fancy-example.css";
import img3 from "./../../public/value.png";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left Part Of Value Component */}

        <div className="left-value">
          <div className="image-container">
            <img src={img3}></img>
          </div>
        </div>

        {/* Right part of Value Component */}

        <div className="flexColStart right-value">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">Values we give to you</span>
          <span className="secondaryText">
            We are always Ready to help by Providing the best Serivce for you
            <br />
            We believe in balance Environment to provide you Good service
          </span>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="accordion-container"
          >
            {data.map((item, i) => {
              // const [className,setClassName] = useState(null);
              return (
                <AccordionItem
                  className="accordion-item"
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className=" flexCenter accordion-button">
                      <div className="flexCenter icon">{item.icon}</div>

                      <span className="primaryText">{item.heading}</span>
                      <span className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

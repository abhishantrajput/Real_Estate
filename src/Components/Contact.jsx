import React from "react";

import "./../Styles/Contact.css";
import img5 from "./../../public/contact.jpg";

import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="paddings innerWidth flexCenter contact-container">
        {/* left side */}

        <div className="flexColStart left-contact">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          <div className="contents">
            

          <div className="flexStart contact-modes">
            <div className="flexStart row">
              <div className="flexCenter mode">
                <div className="flexStart mode1">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter btn">
                  Call Now
                </div>
              </div>
            </div>
          </div>
          <div className="flexColStart contact-modes">
            <div className="flexColStart row">
              <div className="flexCenter mode">
                <div className="flexStart mode1">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat </span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter btn">
                  Chat Now
                </div>
              </div>
            </div>
          </div>
          <div className="flexColStart contact-modes">
            <div className="flexStart row">
              <div className="flexCenter mode">
                <div className="flexStart mode1">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call </span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter btn">
                  Video Call
                </div>
              </div>
            </div>
          </div>
          <div className="flexColStart contact-modes">
            <div className="flexColStart row">
              <div className="flexCenter mode">
                <div className="flexStart mode1">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenterText size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message </span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter btn">
                  Message
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* right-side */}

        <div className="right-contact">
          <div className="image-container">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

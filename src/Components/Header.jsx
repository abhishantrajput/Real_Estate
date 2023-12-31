import React from "react";
import "../Styles/Header.css";

import { useState } from "react";
import img1 from "../../public/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened,setmenuOpeneed] = useState(false);

  const getmenustyle = (menuOpened)=>{
    if(document.documentElement.clientWidth<=800){
      return{
        right:!menuOpened && "-100%"
      }
    }
  }
  return (

    <section className="h-wrapper">
      <div className="h-container flexCenter innerWidth paddings">
        <img src={img1}></img>

        <OutsideClickHandler
        onOutsideClick={()=>{
          setmenuOpeneed(false)

        }}>


        <div className="h-menu flexCenter" style={getmenustyle(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Contact us</a>
          <a href="">Get Started</a>
          <button className="btn">
            <a>Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setmenuOpeneed((prev)=>!prev)}>
          <BiMenuAltRight size={34} color="white" />
        </div>
      </div>
    </section>
  );
};

export default Header;

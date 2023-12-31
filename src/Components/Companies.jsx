import React from 'react'

import "../Styles/Companies.css"

import img1 from "./../../public/equinix.png"
import img2 from "./../../public/tower.png"
import img3 from "./../../public/prologis.png"
import img4 from "./../../public/realty.png"



const Companies = () => {
  return (
    <section className='c-wrapper'>


        <div className="paddings innterwidth flexCenter c-container">

            <img src={img1}></img>
            <img src={img2}></img>
            <img src={img3}></img>
            <img src={img4}></img>

        </div>

    </section>
  )
}

export default Companies

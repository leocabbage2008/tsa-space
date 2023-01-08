import React from "react";
import "../assets/css/Hero.css";
//for ian
export default function Hero({ image, text }) {
    return (
        <div className="hero">
            <img id="banner" src={image} alt="" />
            {/* <h1>{text}</h1> */}
        </div>
    );
}

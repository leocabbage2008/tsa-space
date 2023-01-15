import React from "react";
import Layout from "../components/Layout";
import video from "../assets/images/world.mp4";
import "../assets/css/HomePage.css";
// https://commons.wikimedia.org/wiki/File:Polar_Vortex_in_Color.jpg
export default function HomePage() {
    return (
        <Layout>
            {/* <Hero image={titan}>
        <h1 style={{ marginRight: 10 }}>fatty acid</h1>
      </Hero> */}
            <div className="hero-container">
                <video autoPlay muted loop src={video}></video>
                <div className="hero">
                    <h1>Travel to Titan</h1>
                    <h2>A new adventure</h2>
                    <div className="hero-flex">
                        <a href="/details">details</a>
                        <a href="/home">home</a>
                    </div>
                </div>
            </div>
            <div className="content">
                <h1>Home Page</h1>
            </div>
        </Layout>
    );
}

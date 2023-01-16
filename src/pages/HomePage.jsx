import React from "react";
import Layout from "../components/Layout";
import video from "../assets/images/world.mp4";
// import launch from '../assets/images/launch.jpg';
import rocket from "../assets/images/rocket_transparent.png";
import "../assets/css/HomePage.css";
export default function HomePage() {
    return (
        <Layout>
            {/* <Hero image={titan}>
        <h1 style={{ marginRight: 10 }}>fatty acid</h1>
      </Hero> */}
            <div className="hero-container">
                <video autoPlay muted loop src={video}></video>
                <div className="hero">
                    <h1>Out of this World</h1>
                    <h2>Next frontier for travel</h2>
                    <div className="hero-flex">
                        <a className="link" href="/details">
                            details
                        </a>
                        <a className="link" href="/about">
                            about
                        </a>
                    </div>
                </div>
            </div>
            <div className="top-block">
                <div className="top-block-img-container">
                    <img src={rocket} className="top-block-img" alt="" />
                </div>
                <div className="block-content">
                    <h1>
                        The Future <br></br>of Travel
                    </h1>
                    <h2 className="description">
                        Check out our rocket{" "}
                        <a className="link" href="/details">
                            here
                        </a>
                    </h2>
                </div>
                
            </div>
            <div className="content">
                <h1>Locations</h1>
                <h2>
                    With over 400 locations throught the Solar system, we have variety of locations and experiences for you to enjoy!
                    From the scorching hot surface of Mercury and Venus to the frigid moons of the Jovian planets, we provide the nesscary
                    equipment you need to have a great vacation with us.
                </h2>

                <hr></hr>
                
                <h1>The Fleet</h1>
                <h2>
                    Our highly specialized spaceship fleet is more than capable to fly you to the far reaches of our solar system.
                    With the activities offered by our spaceships, days of travel will go by in an instant and you'll almost want to stay on it!
                </h2>
            </div>
        </Layout>
    );
}

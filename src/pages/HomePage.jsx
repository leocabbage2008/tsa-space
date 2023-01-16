import React from "react";
import Layout from "../components/Layout";
import video from "../assets/images/world.mp4";
import launch from "../assets/images/launch.jpg";
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
                <div className="top-block-content">
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
            <div className="left-block">
                <div className="left-block-background" />
                <div className="description block-content">
                    <h1>
                        Step into the future, purchase{" "}
                        <a className="link" href="/purchase">
                            here
                        </a>
                    </h1>
                </div>
                <div className="block-img-container">
                    <img src={launch} className="block-img" alt="" />
                </div>
            </div>
        </Layout>
    );
}

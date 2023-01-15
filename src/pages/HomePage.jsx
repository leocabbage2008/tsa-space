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
                        <a href="/details">details</a>
                        <a href="/home">home</a>
                    </div>
                </div>
            </div>
            <div className="left-block">
                <div className="left-block-background" />
                <div className="block-img-container">
                    {/* <Parallax> */}
                    <img src={rocket} className="block-img" alt="" />
                    {/* </Parallax> */}
                </div>
                <div className="block-content">
                    <h1>
                        The Future <br></br>of Travel
                    </h1>
                </div>
            </div>
            <div className="content">
                <h1>An Introduction to our Company</h1>
                <h2>
                    Welcome to Milky Way Space Program, the premier space
                    tourism company dedicated to providing the ultimate outer
                    space travel experience for individuals looking for the
                    adventure of a lifetime. We are a team of experts in the
                    field of space technology, engineering and operation, and we
                    work closely with government space agencies and private
                    spaceflight companies to offer our customers a variety of
                    space travel options. Whether you want to take a suborbital
                    flight to experience the thrill of weightlessness or take a
                    trip to Titan, we have a program that will suit your needs.
                    We pride ourselves in providing a safe and enjoyable
                    journey, and our team is dedicated to making sure you have
                    the experience of a lifetime. Join us as we take you to the
                    final frontier of space travel.
                </h2>
                <h2>
                    --------------------------------------------------------------------------------------------------------------
                </h2>
                <h1>Cutting Edge Technology</h1>
                <h2>
                    While the temperature on Titan may go down to −290 °F or
                    −179 °C, don’t worry! We have protected suits that are 100%
                    safe and make walking on Titan as easy as walking on Earth!
                    In addition, our spacecraft uses state of the art thrusters
                    allowing super fast speeds, allowing you to travel to titan
                    in just 3 days! (or more depending on your package)
                </h2>
                <h2>
                    --------------------------------------------------------------------------------------------------------------
                </h2>

                <h1>Attractions</h1>
                <h2>
                    Titan has a surface thats somewhat similar to Earths giving
                    possibilities for rivers with methane and sand dunes in the
                    equatorial regions. Be prepared for a world that seems like
                    Earth but eerily different! Titan's lower gravity also
                    allows for some great games of Basketball inside our visitor
                    center but don't worry, if you are tired of the low gravity
                    and the muscle atrophy that comes with it we can change the
                    gravity back to what you are used to.
                </h2>
                <h2>
                    --------------------------------------------------------------------------------------------------------------
                </h2>
            </div>
        </Layout>
    );
}

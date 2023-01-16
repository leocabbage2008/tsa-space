import React from "react";
import Layout from "../components/Layout";
import "../assets/css/Titan.css";
export default function HomePage() {
    return (
        <Layout>
            <div className="content">
                <h1>The Red Planet</h1>
                <h2>Mars has many great places for you to visit. You could take a hike on one of the Solar System's largest volcanoes, Olympus Mons, 
                    or travel to the poles, where frozen water could've supported life billions of years ago.
                    Additionally, we offer trips on vehicles that go through some of Mars's "Seas".
                </h2>
                <hr></hr>
                <h1>Our Facilities</h1>
                <h2>With 26 locations on Mars, we provide security from dust storms for you to relax and enjoy Mars's low gravity.
                    We also provide seasonal events on Mars, as its season cycle matches Earth's. 
                </h2>
                <hr></hr>
                <h1>Close to Home</h1>
                <h2>Mars has many features that make it similar to Earth. Its day night cycle and seasonal cycle are close to Earth's
                    allowing you do only have to adapt to the gravity. Of source there are some key differences including it's lack of Atmosphere, Magnetic field,
                    low temperatures, and toxic soil but we provide suits that almost make it seem like you are back on Earth.
                </h2>
            </div>
        </Layout>
    );
}
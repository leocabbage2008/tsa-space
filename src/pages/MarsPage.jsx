import React from "react";
import Layout from "../components/Layout";
import "../assets/css/Titan.css";
export default function HomePage() {
    return (
        <Layout>
            <div className="content">
                <h1>The Red Planet</h1>
                <h2>Mars has many great places for you to visit. You could take a hike on one of the Solar System's largest volcanoes, Olympus Mons for starters.
                    Or you can travel to the poles and look at the frozen water that could've hade life billions of years ago in a different age.
                </h2>
                <h1>Our Facilities</h1>
                <h2>With over 100 locations on Mars, we provide places safe from Mar's dust storms for you to relax, sleep, and recover from Mars's low gravity.
                </h2>
                <h1>Close to Home</h1>
                <h2>Mars has many features that make it similar to Earth. It's day night cycle and seasonal cycle are close to Earth's
                    allowing you do only have to adapt to the gravity.
                </h2>
            </div>
        </Layout>
    );
}
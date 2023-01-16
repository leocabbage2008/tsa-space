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
                    If you aren't a bumpy terrain kind of person we offer trips on vehicles that go through some of Mars's 'Seas'.
                </h2>
                <h1>
                    --------------------------------------------------------------------------------------
                </h1>
                <h1>Our Facilities</h1>
                <h2>With 26 locations on Mars, we provide places safe from Mar's dust storms for you to relax, sleep, and recover from Mars's low gravity.
                    Also, we provide seasonal events on Mars as it's Seasons also have a cycle just like Earth. 
                </h2>
                <h1>
                    --------------------------------------------------------------------------------------
                </h1>
                <h1>Close to Home</h1>
                <h2>Mars has many features that make it similar to Earth. It's day night cycle and seasonal cycle are close to Earth's
                    allowing you do only have to adapt to the gravity. Of source there are some key differences including it's lack of Atmosphere, Magnetic field,
                    low temperatures, and toxic soil but we provide suits that almost make it seem like you are back on Earth.
                </h2>
            </div>
        </Layout>
    );
}
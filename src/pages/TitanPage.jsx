import React from "react";
import Layout from "../components/Layout";
import "../assets/css/Titan.css";
export default function HomePage() {
    return (
        <Layout>
            <div className="content">
            <h1>Cutting Edge Technology</h1>
                <h2>
                    While the temperature on Titan may go down to −290 °F or
                    −179 °C, don’t worry! We have protected suits that are 100%
                    safe and make walking on Titan as easy as walking on Earth!
                    In addition, our spacecraft uses state of the art thrusters
                    allowing super fast speeds, allowing you to travel to titan
                    in just 3 days! (or more depending on your package)
                </h2>
                <br/>
                <h1>Attractions</h1>
                <h2>Titan has a surface thats somewhat similar to Earths 
                giving possibilities for rivers with methane and sand dunes in the equatorial regions.
                Be prepared for a world that seems like Earth but eerily different!
                Titan's lower gravity also allows for some great games of Basketball inside our visitor center but don't worry,
                if you are tired of the low gravity and the muscle atrophy that comes with it we can change the gravity back to what you are used to.
                </h2>
                <br/>
                <h1>Locations</h1>
                <h2>With 9 locations on Titan, you can play hockey on Titan's ice, basketball with its low gravity of .138g or unwind and relax
                  at our hotel locations with artifical gravity. If you are in need of a view, you can set off from our Titan hiking locations and journey to
                  some great locations to view Titan's Earthlike landscape or journey above Titan's atmosphere to get a close view of Saturn's rings.
        </h2>
            </div>
        </Layout>
    );
}
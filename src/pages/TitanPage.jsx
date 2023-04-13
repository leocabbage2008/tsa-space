import React from "react";
import Layout from "../components/Layout";
import "../assets/css/Titan.css";
import PriceTable from "../components/PriceTableNeptune.jsx";
export default function HomePage() {
    const data = [
        {
            title: "Titan Hotel Access",
            price: "$1.1M",
            list: [
                "Stay at all of our locations on Titan",
                "Does not include access to all of our Titan activities, pay seperately for activites",
            ],
        },
        {
            title: "Titan Full",
            price: "$1.5M",
            list: [
                "Stay at all of our locations on Titan",
                "Includes access to all of our Titan activities",
            ],
        },
        {
            title: "6+ party bundle",
            price: "$1.35M",
            list: ["Same as full plan but with a discount for parties over 6!"],
        },
    ];
    return (
        <Layout>
            <div className="content">
                <h1 className="TitleT">Titan</h1>
                <h1 className="HeaderT">Cutting Edge Technology</h1>
                <h2 className="stuffT">
                    While the temperature on Titan may go down to −290 °F or
                    −179 °C, don’t worry! We have highly-engineered protection
                    suits that neutralizes outside conditions and makes walking
                    on Titan as easy as walking on Earth. In addition, our
                    spacecraft uses state-of-the-art thrusters for a max speed
                    of 1/20th the speed of light, allowing you to travel to
                    Titan in just 3 days!
                </h2>
                <hr></hr>
                <h1 className="HeaderT">Attractions</h1>
                <h2 className="stuffT">
                    Experience the thrill of flying with wingsuits in the unique
                    environment of Titan's thick atmosphere and low gravity -
                    the only place in the solar system where humans can soar
                    through the skies. Titan also has a surface thats somewhat
                    similar to Earth's, offering possibilities for rivers with
                    methane and sand dunes in the equatorial regions.
                </h2>
                <hr></hr>
                <h1 className="HeaderT">Locations</h1>
                <h2 className="stuffT">
                    With 9 locations on Titan, you can play hockey on Titan's
                    ice, basketball with its low gravity of .138g, or unwind and
                    relax at our hotel locations with artifical gravity. If you
                    want to see some picturesque landscapes, you can set off
                    from our Titan hiking locations and journey to some great
                    locations, including a journey above Titan's atmosphere to
                    get a great view of Saturn's rings.
                </h2>
                <h1 className="optionsT">Check out our purchase options</h1>

                <PriceTable data={data} />
            </div>
        </Layout>
    );
}

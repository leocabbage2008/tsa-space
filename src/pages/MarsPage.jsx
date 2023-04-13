import React from "react";
import Layout from "../components/Layout";
import "../assets/css/Mars.css";
import PriceTable from "../components/PriceTableMars.jsx";
export default function HomePage() {
    const data = [
        {
            title: "Mars Hotel Access",
            price: "$1M",
            list: [
                "Stay at all of our locations on Mars",
                "Does not include access to all of our Mars activities, pay seperately for activites",
            ],
        },
        {
            title: "Mars Full",
            price: "$3M",
            list: [
                "Stay at all of our locations on Mars",
                "Includes access to all of our Mars activities",
            ],
        },
        {
            title: "6+ party bundle",
            price: "$2M",
            list: ["Same as full plan but with a discount for parties over 6!"],
        },
    ];
    return (
        <Layout>
            <div className="content">
                <h1 className="TitleM">Mars</h1>
                <h1 className="HeaderM">The Red Planet</h1>
                <h2 className="stuffM">
                    Mars has many great places for you to visit. You could take
                    a hike on the Solar System's largest volcano, Olympus Mons
                    for starters. Or you can travel to the poles and look at the
                    frozen water that could've hade life billions of years ago
                    in a different age. If you aren't a bumpy terrain kind of
                    person we offer trips on vehicles that go through some of
                    Mars' Seas.
                </h2>
                <hr></hr>
                <h1 className="HeaderM">Our Facilities</h1>
                <h2 className="stuffM">
                    With 26 locations on Mars, we provide places safe from Mars
                    dust storms for you to relax, sleep, and recover from Mars's
                    low gravity. Also, we provide seasonal events on Mars as its
                    seasons have a cycle just like Earths'.
                </h2>
                <hr></hr>
                <h1 className="HeaderM">Close to Home</h1>
                <h2 className="stuffM">
                    Mars has many features that make it similar to Earth. It's
                    day night cycle and seasonal cycle are close to Earth's
                    allowing you do only have to adapt to the gravity. Of source
                    there are some key differences including it's lack of
                    Atmosphere, Magnetic field, low temperatures, and toxic soil
                    but we provide suits that almost make it seem like you are
                    back on Earth.
                </h2>
                <h1 className="optionsM">Check out our purchase options</h1>

                <PriceTable data={data} />
            </div>
        </Layout>
    );
}

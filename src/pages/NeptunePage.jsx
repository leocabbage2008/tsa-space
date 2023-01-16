import React from "react";
import Layout from "../components/Layout";
import "../assets/css/Titan.css";
import PriceTable from "../components/PriceTable.jsx";
export default function NeptunePage() {
    const data = [
        {
            title: "basic",
            price: "$50",
            list: ["1 day", "1 person"],
        },
        {
            title: "standard",
            price: "$100",
            list: ["1 day", "1 person", "1 vehicle"],
        },
        {
            title: "premium",
            price: "$150",
            list: ["1 day", "1 person", "1 vehicle", "1 hotel"],
        },
    ];
    return (
        <Layout>
            <div className="content">
                <h1>The God of Water and Seas</h1>
                <h2>
                    Neptune is one of the best places to visit in our solar
                    system. From its delightful rings to its icy surface, the
                    views are truly unmatched. With our best spacesuits, you
                    enjoy the surface for up to 5 hours without having to worry
                    about oxygen or temperature.
                </h2>
                <hr></hr>
                <h1>Our Facilities</h1>
                <h2>
                    With over 20 locations on Neptune, we provide places safe
                    from its massive storms for you to relax, sleep, and recover
                    from the cold temperatures. We have hot spas, malls, gyms,
                    and living quarters, all included in the package.
                </h2>
                <PriceTable data={data} />
            </div>
        </Layout>
    );
}

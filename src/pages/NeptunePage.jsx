import React from "react";
import Layout from "../components/Layout";
import "../assets/css/Neptune.css";
import PriceTable from "../components/PriceTableNeptune.jsx";
export default function NeptunePage() {
    const data = [
        {
            title: "Neptune Moon Hotel Access",
            price: "$4M",
            list: [
                "Stay at all of our locations on Neptune",
                "Does not include access to all of our Neptune activities, pay seperately for activites",
            ],
        },
        {
            title: "Neptune Full",
            price: "$4.5M",
            list: [
                "Stay at all of our locations on Neptune",
                "Includes access to all of our Neptune activities",
            ],
        },
        {
            title: "6+ party bundle",
            price: "$4.1M",
            list: ["Same as full plan but with a discount for parties over 6!"],
        },
    ];
    return (
        <Layout>
            <div className="content">
                <h1 className="TitleN">Neptune</h1>
                <h1 className="HeaderN">The God of Water and Seas</h1>
                <h2 className="stuffN">
                    Neptune is one of the best places to visit in our solar
                    system. From its delightful rings to its stunning blue
                    color, the views are truly unmatched.
                </h2>
                <hr></hr>
                <h1 className="HeaderN">Our Facilities</h1>
                <h2 className="stuffN">
                    Our top-of-the-line spacesuits offer up to 5 hours of
                    worry-free exploration on Neptune, leaving you free to
                    discover all that this planet has to offer. In addition, we
                    provide a network of 20 interconnected habitable satellites.
                    These satellites offer a range of amenities, including hot
                    spas, malls, gyms, and living quarters. So when you're ready
                    to take a break from your adventures and recharge, you can
                    rest easy.
                </h2>
                <h1 className="optionsN">Check out our purchase options</h1>
                <PriceTable data={data} />
            </div>
        </Layout>
    );
}

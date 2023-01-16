import React from "react";
import Layout from "../components/Layout";
import "../assets/css/PurchasePage.css";

export default function (PurchasePage) {
    return (
        <Layout>
            <div class="container">
                <h2>Select Your Plan</h2>
                <div class="price-row">
                    <div class="price-col col1">
                        <p>Mars</p>
                        <h3>
                            $250k/day
                        </h3>
                        <ul>
                            <li>Stay at all of our locations on Mars</li>
                            <li>Includes access to all of our Mars activities</li>
                            <li>Up to 6 people per ship</li>
                            <li>Travel costs may increase depending on starting location in the Solar System</li>
                        </ul>
                        <button>Purchase</button>
                    </div>
                    <div class="price-col col2">
                        <p>Titan</p>
                        <h3>
                            $1M/day
                        </h3>
                        <ul>
                            <li>Stay at all of our locations on Titan</li>
                            <li>Includes access to all of our Titan activities</li>
                            <li>Up to 6 people per ship</li>
                            <li>Travel costs may increase depending on starting location in the Solar System</li>
                        </ul>
                        <button>Purchase</button>
                    </div>
                    <div class="price-col col3">
                        <p>Premium</p>
                        <h3>
                            $2.5M/day
                        </h3>
                        <ul>
                            <li>Stay at all of our locations on Neptune</li>
                            <li>Includes access to all of our Neptune activities</li>
                            <li>Up to 6 people per ship</li>
                            <li>Travel costs may increase depending on starting location in the Solar System</li>
                        </ul>
                        <button>Purchase</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

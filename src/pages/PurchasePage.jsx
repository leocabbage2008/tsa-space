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
                        <p>Basic</p>
                        <h3>
                            500 Rs <span>/month</span>
                        </h3>
                        <ul>
                            <li>C programming basic</li>
                            <li>Variables in c</li>
                            <li>Function in c</li>
                            <li>Basic programs in c</li>
                        </ul>
                        <button>Buy Now</button>
                    </div>
                    <div class="price-col col2">
                        <p>Standard</p>
                        <h3>
                            1000 Rs <span>/month</span>
                        </h3>
                        <ul>
                            <li>Algorithms in c</li>
                            <li>Data structures in c</li>
                            <li>Medium+hard level programs</li>
                            <li>High quality study material</li>
                        </ul>
                        <button>Buy Now</button>
                    </div>
                    <div class="price-col col3">
                        <p>Premium</p>
                        <h3>
                            1200 Rs <span>/month</span>
                        </h3>
                        <ul>
                            <li>C programming basic</li>
                            <li>Algorithms in c</li>
                            <li>Data structures in c</li>
                            <li>All level programs</li>
                        </ul>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

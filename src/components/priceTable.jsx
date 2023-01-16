import React from "react";
import Layout from "../components/Layout";
import "../assets/css/Price_table.css";

export default function priceTable({ l1, l2, l3, p1, p2, p3 }) {
    return (
        <Layout>
            <div class="container">
                <div class="price-row">
                    <div class="price-col col1">
                        <p>Basic</p>
                        <h3>
                            {p1} <span>/day</span>
                        </h3>
                        {/* <ul>
                            <li>C programming basic</li>
                            <li>Variables in c</li>
                            <li>Function in c</li>
                            <li>Basic programs in c</li>
                        </ul> */}
                        {l1}
                        <button>Buy Now</button>
                    </div>
                    <div class="price-col col2">
                        <p>Standard</p>
                        <h3>
                            {p2} <span>/day</span>
                        </h3>
                        {/* <ul>
                            <li>Algorithms in c</li>
                            <li>Data structures in c</li>
                            <li>Medium+hard level programs</li>
                            <li>High quality study material</li>
                        </ul> */}
                        {l2}
                        <button>Buy Now</button>
                    </div>
                    <div class="price-col col3">
                        <p>Premium</p>
                        <h3>
                            {p3} <span>/day</span>
                        </h3>
                        {/* <ul>
                            <li>C programming basic</li>
                            <li>Algorithms in c</li>
                            <li>Data structures in c</li>
                            <li>All level programs</li>
                        </ul> */}
                        {l3}
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

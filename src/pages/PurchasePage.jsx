import React from "react";
import Layout from "../components/Layout";
import "../assets/css/PurchasePage.css";

export default function (PurchasePage) {
    return (
        <Layout>
            <div className="content">
                <h1>Explore our Destinations and plans</h1>
            <div class="columns">
                    <ul class="price">
                    <li class="header">Visiting Your Mother</li>
                    <li>25 bobux</li>
                    <li>1 Day Travel time</li>
                    <li>4 Days Long</li>
                    <li><a href="#" class="button">Purchase</a></li>
                </ul>
            </div>
            <div class="columns">
                    <ul class="price">
                    <li class="header">Planetary visit</li>
                    <li>250 bobux</li>
                    <li>1-7 Day Travel time</li>
                    <li>14 Days Long</li>
                    <li><a href="#" class="button">Purchase</a></li>
                </ul>
            </div>
            <div class="columns">
                    <ul class="price">
                    <li class="header">Transystem Odyssey</li>
                    <li>2500 bobux</li>
                    <li>1 months total Travel time</li>
                    <li>3 months Long</li>
                    <li><a href="#" class="button">Purchase</a></li>
                </ul>
            </div>
            </div>
            


        </Layout>
    );
}

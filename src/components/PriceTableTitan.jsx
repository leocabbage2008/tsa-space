import React from "react";
import "../assets/css/PriceTableTitan.css";

export default function PriceTable({ data }) {
    return (
        <div className="plan-container">
            {data.map((item, i) => {
                return (
                    <div className="price-row" key={i}>
                        <div className={`price-col col${i + 1}`}>
                            <p>{item.title}</p>
                            <div className="price">
                                <h3>{item.price}</h3>
                                <h4>/person/day</h4>
                            </div>
                            <ul>
                                {item.list.map((item, i) => {
                                    return <li key={i}>{item}</li>;
                                })}
                            </ul>
                            <a href="/purchase">
                                <button>Buy Now</button>
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

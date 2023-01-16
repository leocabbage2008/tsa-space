import React from 'react';
import '../assets/css/PriceTable.css';

export default function PriceTable({ data }) {
  console.log(data);
  return (
    <div className='plan-container'>
      {data.map((item, i) => {
        return (
          <div className='price-row' key={i}>
            <div className={`price-col col${i + 1}`}>
              <p>{item.title}</p>
              <h3>
                {item.price} <span>/person/day</span>
              </h3>
              <ul>
                {item.list.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
              <a href='/purchase'>
              <button>Buy Now</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

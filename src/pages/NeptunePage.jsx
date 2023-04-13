import React from 'react';
import Layout from '../components/Layout';
import '../assets/css/Neptune.css';
import PriceTable from '../components/PriceTable.jsx';
export default function NeptunePage() {
  const data = [
    {
      title: 'Neptune Moon Hotel Access',
      price: '$4M',
      list: [
        'Stay at all of our locations on Neptune',
        'Does not include access to all of our Neptune activities, pay seperately for activites',
      ],
    },
    {
      title: 'Neptune Full',
      price: '$4.5M',
      list: [
        'Stay at all of our locations on Neptune',
        'Includes access to all of our Neptune activities',
      ],
    },
    {
      title: '6+ party bundle',
      price: '$4.1M',
      list: ['Same as full plan but with a discount for parties over 6!'],
    },
  ];
  return (
    <Layout>
      <div className='content'>
        <h1 className='Title'>Neptune</h1>
        <h1>The God of Water and Seas</h1>
        <h2>
          Neptune is one of the best places to visit in our solar system. From
          its delightful rings to its icy surface, the views are truly
          unmatched. With our best spacesuits, you enjoy the surface for up to 5
          hours without having to worry about oxygen or temperature.
        </h2>
        <hr></hr>
        <h1>Our Facilities</h1>
        <h2>
          With over 20 locations on Neptune, we provide places safe from its
          massive storms for you to relax, sleep, and recover from the cold
          temperatures. We have hot spas, malls, gyms, and living quarters, all
          included in the package.
        </h2>
        <h1 className='options'>Check out our purchase options</h1>
        <PriceTable data={data} />
      </div>
    </Layout>
  );
}

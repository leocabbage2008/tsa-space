import React from 'react';
import Layout from '../components/Layout';
export default function HomePage() {
  return (
    <Layout>
      <h1>Home Page</h1>
      <span>
        <a href='/error'>error</a>
      </span>
      <span>
        <a href='/sources'>sources</a>
      </span>
      <span>
        <a href='/ref'>references</a>
      </span>
    </Layout>
  );
}

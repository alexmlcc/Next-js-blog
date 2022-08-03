import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Travel Tapes',
      }}
    >
      <h1>About</h1>
      <p>Personal Travel Blog</p>
    </Layout>
  );
};

export default About;

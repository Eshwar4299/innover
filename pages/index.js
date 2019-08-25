import React from 'react'
import Head from 'next/head'
import Nav from '../components/navigation/nav'
import Content from '../components/content/content';
import Footer from '../components/footer/footer';

const Home = () => (
  <div>
    <Head>
      <title>Innover</title>
    </Head>

    <Nav />
    <Content />
    <Footer />
  </div>
)

export default Home

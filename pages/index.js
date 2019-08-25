import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/navigation/nav'
import Content from '../components/content/content';

const Home = () => (
  <div>
    <Head>
      <title>Innover</title>
    </Head>

    <Nav />
    <Content />
  </div>
)

export default Home

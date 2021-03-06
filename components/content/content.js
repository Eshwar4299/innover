import React from 'react'
import Link from 'next/link'
import Cards from '../card-layout/cards'


const Content = () => (
    <div className='hero'>
    <h1 className='title'>Welcome to Innover!</h1>
    <p className='description'>
      To get started, please let me develop this website faster.
    </p>

    <div className='row'>
      <Link href='https://github.com/zeit/next.js#setup'>
        <a className='card'>
          <h3>Slider &rarr;</h3>
          <p>We should start developing slider</p>
        </a>
      </Link>
      <Link href='https://github.com/zeit/next.js/tree/master/examples'>
        <a className='card'>
          <h3>About us &rarr;</h3>
          <p>Should find some thing to tell about us. Just Kidding! i'm talking about content side.</p>
        </a>
      </Link>
      <Link href='https://github.com/zeit/next.js'>
        <a className='card'>
          <h3>Community &rarr;</h3>
          <p>There was always a room for improvement our community should help people to achieve that</p>
        </a>
      </Link>
    </div>
    <Cards />

    <style jsx>{`
    .hero {
      margin:auto;
      width:90%;
      color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Content

import React from 'react'

const links = [
  { href: '', label: 'Home' },
  { href: '', label: 'Jobs' },
  { href: '', label: 'Contact' },
  { href: '', label: 'SignIn' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav className="navBar">
  <a className="company-title" href='/'>
  Innover
  </a>
  <ul>
  {links.map(({ key, href, label }) => (
    <li key={key}>
    <a href={href}>{label}</a>
    </li>
  ))}
  </ul>
  
  <style jsx>{`
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
    Helvetica, sans-serif;
    box-sizing: border-box;
  }
  
  nav {
    display:flex;
    justify-content: space-between;
    background-color:grey;
  }
  
  ul {
    display: flex;
    list-style: none;
  }
  
  nav > ul {
    padding: 0px;
  }
  
  
  li {
    color:white;
    display: flex;
    padding: 10px 15px;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    
  }
  
  .company-title{
    margin:20px;
    font-size:30px;
  }
  `}</style>
  </nav>
)

export default Nav

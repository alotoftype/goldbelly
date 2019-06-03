import React from 'react'
import Logo from '../images/gb-logo.svg';

const Header = () => {
    return (
        <header>
  <section className="important-nav">
  <ul className="left">
    <li><a href="/">about</a></li>
     <li> <a href="/">Corporate Gifts</a></li>
      <li><a href="/">Customer</a></li>
  </ul>
  <div className="promo">
    <p><a href="/">$15 Off First 3 Orders</a></p>
  </div>
  </section>
  <section className="main-nav">
  <img src={Logo} alt="" className="logo"/>
  <nav>
    <ul>
      <li>Popular Now</li>
      <li>Top Gifts</li>
      <li>sweets</li>
    </ul>
  </nav>
  </section>
  
  </header>
    )
}

export default Header

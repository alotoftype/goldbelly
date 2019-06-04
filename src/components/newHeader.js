import React from 'react'
import Logo from '../images/gb-logo.svg';

const Header = () => {
    return (
        <header>
  <section className="important-nav">
  <div className="left">
  <ul className="">
    <li><a href="/">about</a></li>
     <li> <a href="/">Corporate Gifts</a></li>
      <li><a href="/">Customer</a></li>
  </ul>
  </div>
  <div className="promo">
    <p><a href="/">$15 Off First 3 Orders</a></p>
  </div>
  </section>
  <section className="main-nav">
  <div className="logo">
  <img src={Logo} alt="" className=""/>
  </div>
 
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

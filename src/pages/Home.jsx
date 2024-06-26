import React from "react";
import Hero from '../assets/img/hero.svg?react';
import Button from '../assets/icon/button.svg?react';

const Home = () => {
  return (
    <div className="mx-auto text-center pt-4" style={{ zIndex: 1 }}>
      <h1 className="title text-uppercase font-weight-bold">Dream in comfort</h1>
      <h4 className="subhead text-white">Creating your perfect sleep sanctuary with us</h4>
      <div className="button-container">
          <Button className="icon-button" y2="" />
          <button className="text-button text-color">Shop Now</button>
      </div>
      <Hero className="img-fluid" />
    </div>
  )
}

export default Home;

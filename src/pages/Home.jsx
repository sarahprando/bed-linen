import React from "react";
import Hero from '../assets/img/hero.svg?react';

const Home = () => {
  return (
    <div className="container text-center" style={{ zIndex: 1 }}>
      <h1 className="title">Dream in comfort</h1>
      <h4>Creating your perfect sleep sanctuary with us</h4>
      <Hero />
    </div>
  )
}

export default Home;

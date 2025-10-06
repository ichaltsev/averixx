import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Tokenomics from '../components/sections/Tokenomics';
import Ecosystem from '../components/sections/Ecosystem';
import Roadmap from '../components/sections/Roadmap';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Tokenomics />
      <Ecosystem />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Home;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
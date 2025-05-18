import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video - using an image as placeholder */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/90 z-10"
          style={{ mixBlendMode: 'multiply' }}
        />
        <img 
          src="https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg" 
          alt="YouTube editing background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div 
        className={`relative z-10 text-center px-4 max-w-5xl transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Portfolio de Hiro
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          Montage Vidéo Sur YouTube
        </p>
        <button 
          onClick={scrollToPortfolio}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold 
          hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
        >
          Voir mes projets
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero
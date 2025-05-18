import React from 'react';
import { Film, Instagram, Youtube, Twitch, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Film className="w-6 h-6 text-purple-500 mr-2" />
            <span className="text-xl font-bold text-white">VideoMaster</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-purple-500 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-purple-500 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-purple-500 hover:text-white transition-colors">
              <Twitch className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-purple-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} VideoMaster. Tous droits réservés.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import SectionHeading from './SectionHeading';
import { MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Contact" subtitle="Discutons de votre projet" />
        
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-xl text-gray-300 mb-8">
            Tu veux bosser avec moi ? Rejoins mon Discord et on en parle !
          </p>
          
          <a
            href="https://discord.gg/EKFXdJj5Cm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold 
            hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Rejoindre le Discord
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact
import React from 'react';
import SectionHeading from './SectionHeading';
import { Quote, Star } from 'lucide-react';

const Clients = () => {
  const testimonial = {
    name: "Nekaii",
    role: "Streamer Twitch",
    content: "Super monteur ! Il est rapide, efficace, il me permet de faire mes best-of de live. Je recommande.",
    avatar: "https://cdn.discordapp.com/attachments/1363568726129250497/1373691713616478340/channels4_profile.jpg?ex=682b559a&is=682a041a&hm=5f0c0b25ac7639eb7fda5fba425c75da6c6f17949ab8322c30246941706b9e47&"
  };

  return (
    <section id="clients" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Avis Client" subtitle="Ce que pensent mes clients" />
        
        <div className="max-w-2xl mx-auto">
          <div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 relative"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-500/30" />
            
            <div className="flex items-center mb-6">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-purple-500"
              />
              <div>
                <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                <p className="text-sm text-purple-400">{testimonial.role}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg italic">"{testimonial.content}"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients
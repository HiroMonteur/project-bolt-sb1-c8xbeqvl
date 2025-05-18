import React from 'react';
import SectionHeading from './SectionHeading';
import { Youtube, Clock, Sparkles, Video } from 'lucide-react';

const AboutCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const About = () => {
  const services = [
    {
      icon: <Youtube className="w-6 h-6 text-white" />,
      title: "Spécialiste YouTube",
      description: "Je me concentre uniquement sur YouTube, avec une expertise dans les formats qui fonctionnent sur la plateforme."
    },
    {
      icon: <Video className="w-6 h-6 text-white" />,
      title: "Formats Courts",
      description: "Création de TikTok et shorts percutants pour maximiser votre visibilité sur les réseaux."
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Best-of de Lives",
      description: "Transformation de vos streams en contenus dynamiques et engageants."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Style Unique",
      description: "Un montage propre et rythmé, parfaitement adapté à votre contenu YouTube."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Mon Style" subtitle="Une approche YouTube-first du montage" />
        
        <div className="mt-8 mb-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-300">
            Je suis monteur sur YouTube uniquement, je peux si vous le désirez vous faire des TikTok 
            et des best-off mais ça se limite à ça, je ne fais pas de film ou de documentaire !
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AboutCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About
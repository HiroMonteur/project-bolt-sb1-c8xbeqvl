import React from 'react';
import SectionHeading from './SectionHeading';
import { Play } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Exemple de Montage #1",
      description: "Un aperçu de mon style de montage dynamique et rythmé",
      youtubeId: "oZExsnC0Ghs",
      thumbnail: `https://img.youtube.com/vi/oZExsnC0Ghs/maxresdefault.jpg`
    },
    {
      id: 2,
      title: "Exemple de Montage #2",
      description: "Une autre démonstration de mes compétences en montage",
      youtubeId: "pVk5B6S5xuI",
      thumbnail: `https://img.youtube.com/vi/pVk5B6S5xuI/maxresdefault.jpg`
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Mes Projets" subtitle="Découvrez mes dernières réalisations" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500 rounded-full p-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Play className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
              <div className="p-4 bg-gray-800">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio
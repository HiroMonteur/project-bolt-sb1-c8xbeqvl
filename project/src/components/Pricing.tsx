import React from 'react';
import SectionHeading from './SectionHeading';
import { Check } from 'lucide-react';

interface PricingPlan {
  title: string;
  emoji: string;
  description: string;
  price: number;
  features: string[];
  highlight?: boolean;
}

const PriceCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div 
      className={`rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
        plan.highlight 
          ? 'bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg shadow-purple-500/20' 
          : 'bg-gradient-to-br from-gray-800 to-gray-900'
      }`}
    >
      <div className={`p-8 ${plan.highlight ? 'text-white' : ''}`}>
        <div className="text-4xl mb-4">{plan.emoji}</div>
        <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
        <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/80' : 'text-gray-400'}`}>{plan.description}</p>
        
        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-bold">{plan.price}€</span>
          <span className={`ml-1 ${plan.highlight ? 'text-white/80' : 'text-gray-400'}`}>/ vidéo</span>
        </div>
        
        <ul className="space-y-2 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={`w-5 h-5 mr-2 mt-0.5 ${plan.highlight ? 'text-white' : 'text-purple-500'}`} />
              <span className={plan.highlight ? 'text-white/90' : 'text-gray-300'}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  const plans: PricingPlan[] = [
    {
      title: "Short",
      emoji: "🎬",
      description: "Format court (TikTok, Reels, Shorts)",
      price: 15,
      features: [
        "Montage dynamique",
        "Transitions fluides",
        "Synchronisation audio/vidéo",
        "Jusqu'à 1 minute"
      ]
    },
    {
      title: "Vidéo Longue - Script Écrit",
      emoji: "🧠",
      description: "Vidéo structurée avec scénario écrit à l'avance",
      price: 25,
      features: [
        "Montage professionnel",
        "Structure narrative",
        "Effets visuels basiques",
        "Jusqu'à 15 minutes"
      ]
    },
    {
      title: "Vidéo Gaming (1h record)",
      emoji: "🎮",
      description: "Montage dynamique basé sur 1h d'enregistrement brut",
      price: 40,
      highlight: true,
      features: [
        "Sélection des meilleurs moments",
        "Effets visuels adaptés",
        "Montage rythmé et dynamique",
        "Jusqu'à 15 minutes finales"
      ]
    },
    {
      title: "Vidéo Gaming (2h+ record)",
      emoji: "🔥",
      description: "Travail approfondi, tri de moments forts, effets, etc.",
      price: 55,
      features: [
        "Analyse approfondie du contenu",
        "Effets visuels avancés",
        "Storytelling optimisé",
        "Jusqu'à 30 minutes finales"
      ]
    },
    {
      title: "Montage Rediff Twitch",
      emoji: "📺",
      description: "Sélection, découpe et dynamisation d'un live stream",
      price: 30,
      features: [
        "Découpage stratégique",
        "Dynamisation du contenu",
        "Ajout de transitions",
        "Format personnalisable"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Tarifs" subtitle="Des offres adaptées à vos besoins" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12 mb-16">
          {plans.map((plan, index) => (
            <PriceCard key={index} plan={plan} />
          ))}
        </div>
        
        <div className="bg-gray-800 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Tous les montages incluent</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Transitions propres et fluides",
              "Synchronisation audio/vidéo précise",
              "Style adapté à votre contenu",
              "Une révision gratuite",
              "Livraison en format HD",
              "Optimisation pour les plateformes"
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-purple-500" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <p className="text-gray-400 mb-4">Des besoins particuliers ? Je m'adapte !</p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              Contactez-moi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

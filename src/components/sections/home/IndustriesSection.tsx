// src/components/sections/home/IndustriesSection.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import industriesDetailsData from '@/data/industriesDetailsData';

const IndustriesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50" id="industries">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center">
          <div>
            <div className="text-blue-500 text-sm uppercase tracking-wider font-medium mb-3">
              SETORES ATENDIDOS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Nossos Setores de Atuação
            </h2>
          </div>
          <Link 
            to="/industrias"
            className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors mt-4 md:mt-0"
          >
            Ver todos os setores <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesDetailsData.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-xl group h-64 cursor-pointer"
                onMouseEnter={() => setHoveredCard(industry.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Link envolvendo todo o card */}
                <Link
                  to={`/industrias/${industry.id}`}
                  className="absolute inset-0 z-20"
                  aria-label={`Ver detalhes de ${industry.title}`}
                ></Link>
                {/* Card Image */}
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <img 
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                
                {/* Card Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="h-full flex flex-col">
                    {/* Icon and Title always visible */}
                    <div className="flex items-center mb-2">
                      <div className={`w-10 h-10 rounded-full ${industry.color} flex items-center justify-center mr-3 shadow-sm`}>
                        <Icon size={16} className="text-white" />
                      </div>
                    </div>
                    
                    {/* Title always visible */}
                    <h3 className="text-2xl font-bold text-white mt-auto">
                      {industry.title}
                    </h3>
                    
                    {/* Description visible on hover */}
                    <div
                      className={`mt-2 overflow-hidden transition-all duration-300 ${
                        hoveredCard === industry.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-white/90 text-sm">
                        {industry.shortDescription}
                      </p>
                      <span 
                        className="inline-flex items-center text-blue-300 font-medium text-sm mt-2 hover:text-blue-100 transition-colors"
                      >
                        Saiba mais <ArrowRight size={14} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
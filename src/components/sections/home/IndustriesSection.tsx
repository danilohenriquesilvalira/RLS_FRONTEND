import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import industriesData from '@/data/industriesData';

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="py-20 relative z-10 bg-white" id="industries">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-6"
          >
            Setores de Atuação
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Soluções Personalizadas para <span className="text-primary-600">Cada Indústria</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos tecnologias e sistemas específicos para os desafios únicos de cada setor industrial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-16">
          {industriesData.map((industry, index) => {
            // Desestruturando para extrair o componente Icon
            const { icon: Icon } = industry;
            
            return (
              <motion.button
                key={industry.id}
                className={`relative p-6 rounded-xl group transition-all duration-300 ${activeIndustry === index ? `bg-gradient-to-br ${industry.color} text-white shadow-lg` : 'bg-white shadow-sm hover:shadow border border-gray-100'}`}
                onClick={() => setActiveIndustry(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${activeIndustry === index ? 'bg-white/20' : `bg-gradient-to-br ${industry.color} text-white`}`}>
                  <Icon size={24} />
                </div>
                <h3 className={`text-lg font-semibold mb-1 ${activeIndustry === index ? 'text-white' : 'text-gray-800'}`}>
                  {industry.title}
                </h3>
                <div className={`w-8 h-1 rounded ${activeIndustry === index ? 'bg-white/50' : 'bg-primary-600'} mb-3`} />
                <ChevronRight className={`absolute bottom-4 right-4 ${activeIndustry === index ? 'text-white/70' : 'text-primary-500'}`} size={18} />
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`${industriesData[activeIndustry].bgColor} rounded-2xl p-8 shadow-sm border border-gray-100`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                {/* Correção aqui - usar a desestruturação para obter o componente Icon */}
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${industriesData[activeIndustry].color} text-white`}>
                  {(() => {
                    const Icon = industriesData[activeIndustry].icon;
                    return <Icon size={32} />;
                  })()}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Soluções para {industriesData[activeIndustry].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {industriesData[activeIndustry].description}
                </p>
                <ul className="space-y-3">
                  {industriesData[activeIndustry].features.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-start"
                    >
                      <div className={`min-w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br ${industriesData[activeIndustry].color} text-white mr-3 mt-0.5`}>
                        <Check size={14} />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button
                  variant="primary"
                  size="md"
                  to={`/industrias/${industriesData[activeIndustry].id}`}
                  icon={<ChevronRight size={18} />}
                  className={`mt-8 shadow-md bg-gradient-to-r ${industriesData[activeIndustry].color}`}
                >
                  Conheça os casos de sucesso
                </Button>
              </div>
              <div className="relative">
                <div className="relative h-72 md:h-80 rounded-xl overflow-hidden shadow-md">
                  <img 
                    src={industriesData[activeIndustry].image} 
                    alt={industriesData[activeIndustry].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white font-medium mb-1">Case em destaque</div>
                    <div className="text-white/80 text-sm">Projeto de automação completa para cliente do setor</div>
                  </div>
                </div>
                
                {/* Elementos decorativos */}
                <div className={`absolute -top-4 -right-4 w-16 h-16 ${industriesData[activeIndustry].bgColor} rounded-full z-0`} />
                <div className={`absolute -bottom-4 -left-4 w-12 h-12 ${industriesData[activeIndustry].bgColor} rounded-full z-0`} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustriesSection;
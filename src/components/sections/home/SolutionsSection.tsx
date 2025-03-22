import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import solutionsData from '@/data/solutionsData';

const SolutionsSection = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      id="solutions"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 opacity-95 z-0" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-dots-pattern bg-repeat" />
      </div>
      
      <motion.div 
        className="absolute right-0 top-0 bottom-0 w-1/3 bg-primary-400 opacity-10 skew-x-12 -mr-20"
        animate={{ x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
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
            className="inline-block px-4 py-1 rounded-full bg-white/20 text-white font-medium text-sm mb-6 backdrop-blur-sm"
          >
            Soluções Tecnológicas
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Tecnologias <span className="text-primary-300">de Ponta</span> para sua Indústria
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Sistemas inteligentes que conectam, monitoram e otimizam seus processos industriais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsData.slice(0, 6).map((solution, index) => {
            const Icon = solution.icon;
            
            return (
              <motion.div
                key={solution.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-lg group-hover:from-primary-400 group-hover:to-secondary-400 transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-200 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-primary-100 mb-6 group-hover:text-white transition-colors">
                    {solution.shortDescription}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-primary-300 font-medium flex items-center group-hover:text-white transition-colors"
                    onClick={() => window.location.href = `/solucoes/${solution.id}`}
                  >
                    Saiba mais <ArrowRight size={16} className="ml-1" />
                  </motion.button>
                </div>
                
                {/* Background animation */}
                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br from-primary-400/30 to-secondary-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            variant="white"
            size="lg"
            to="/solucoes"
            icon={<ArrowRight size={18} />}
          >
            Ver todas as soluções
          </Button>
          <Button
            variant="ghost"
            size="lg"
            to="/contato"
            className="border-2 border-white/40 text-white hover:bg-white/10"
          >
            Solicitar demonstração
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
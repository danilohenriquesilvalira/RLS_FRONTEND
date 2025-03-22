import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Cpu } from 'lucide-react';
import Button from '@/components/ui/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Efeito de parallax no scroll
    if (imageRef.current && bgRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      tl.to(imageRef.current, {
        y: 100,
        ease: "none"
      });

      tl.to(bgRef.current, {
        y: 50,
        ease: "none"
      }, 0);

      return () => {
        // Limpa o ScrollTrigger
        if (tl.scrollTrigger) {
          tl.scrollTrigger.kill();
        }
      };
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      id="hero"
    >
      {/* Background shapes */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-6"
            >
              Automação Industrial Inteligente em Portugal
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block">Transforme sua</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                Indústria com Automação Avançada
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Com mais de 30 anos de experiência, oferecemos soluções completas de automação e controle industrial que aumentam a produtividade, reduzem custos operacionais e garantem a qualidade do seu processo.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button
                variant="primary" 
                size="lg"
                to="/solucoes"
                icon={<ArrowRight size={20} />}
                className="shadow-lg shadow-primary-600/20"
              >
                Conheça nossas soluções
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="/contato"
              >
                Fale com um especialista
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <p className="text-gray-500 font-medium">Tecnologias:</p>
              <div className="flex space-x-4">
                {['Siemens', 'Allen-Bradley', 'ABB', 'Schneider', 'Mitsubishi'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                    className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center"
                  >
                    <span className="font-bold text-xs text-gray-700">{tech.charAt(0)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 z-0" />
              <motion.div 
                className="absolute inset-0 z-10 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                <img 
                  src="/images/hero-bg.jpg" 
                  alt="Automação Industrial" 
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
              </motion.div>
              
              {/* Elementos flutuantes */}
              <motion.div 
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20 flex items-center space-x-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Sistema Operando</span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">Eficiência Operacional</span>
                  <span className="text-green-600 font-bold">97.8%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "97.8%" }}
                    transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary-100 rounded-full z-0" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-secondary-100 rounded-full z-0" />
            <motion.div 
              className="absolute -bottom-4 right-20 w-8 h-8 bg-yellow-100 rounded-full z-0"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-sm text-gray-500 mb-2">Scroll para explorar</span>
        <ChevronDown className="text-gray-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import solutionsData from '@/data/solutionsData';

const SolucoesPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Nossas Soluções | RLS Automação';
  }, []);

  return (
    <Layout pageTitle="Nossas Soluções">
      {/* Hero Banner */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-r from-primary-800 to-secondary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Soluções em Automação Industrial
            </motion.h1>
            <motion.p 
              className="text-xl text-primary-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tecnologias avançadas para otimizar seus processos produtivos, aumentar a eficiência operacional e impulsionar sua competitividade no mercado.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                variant="white"
                size="lg"
                to="/contato"
                icon={<ArrowRight size={18} />}
              >
                Solicitar consultoria gratuita
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Nosso Portfólio de <span className="text-primary-600">Soluções</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos um conjunto completo de tecnologias e serviços para diversos setores industriais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((solution, index) => (
              <Card 
                key={solution.id} 
                animate 
                delay={index * 0.1} 
                hoverEffect
                className="h-full flex flex-col"
              >
                <Card.Header>
                  <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6 flex items-center justify-center">
                    <solution.icon size={32} />
                  </div>
                  <Card.Title>{solution.title}</Card.Title>
                </Card.Header>
                
                <Card.Body className="flex-grow">
                  <p className="text-gray-600 mb-6">
                    {solution.shortDescription}
                  </p>
                  <div className="space-y-2 mb-6">
                    {solution.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <ChevronRight size={16} className="text-primary-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card.Body>
                
                <Card.Footer className="mt-auto">
                  <Link 
                    to={`/solucoes/${solution.id}`}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors"
                  >
                    Saiba mais <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Como <span className="text-primary-600">Implementamos</span> Nossas Soluções
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nosso processo estruturado garante resultados consistentes e de alta qualidade para cada projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Análise",
                description: "Avaliamos seus processos atuais e identificamos oportunidades de melhoria."
              },
              {
                title: "Projeto",
                description: "Desenvolvemos uma solução personalizada para atender às suas necessidades específicas."
              },
              {
                title: "Implementação",
                description: "Executamos a instalação e configuração dos sistemas com mínima interrupção."
              },
              {
                title: "Suporte",
                description: "Oferecemos treinamento e assistência contínua para garantir o sucesso a longo prazo."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary-200 z-0 -ml-4">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-primary-500 rounded-full" />
                  </div>
                )}
                
                <div className="relative z-10 bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-full">
                  <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para impulsionar sua produção?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma consulta personalizada e descubra como nossas soluções podem transformar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="white"
              size="lg"
              to="/contato"
              icon={<ArrowRight size={18} />}
            >
              Solicitar orçamento
            </Button>
            <Button
              variant="ghost"
              size="lg"
              to="/casos-de-sucesso"
              className="border-2 border-white text-white"
            >
              Ver casos de sucesso
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolucoesPage;
import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/home/HeroSection';
import FeaturesSection from '@/components/sections/home/FeaturesSection';
import SolutionsSection from '@/components/sections/home/SolutionsSection';
import IndustriesSection from '@/components/sections/home/IndustriesSection';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import CtaSection from '@/components/sections/home/CtaSection';

// Gerenciador de animações
import { animateOnScroll } from '@/animations/gsapAnimations';

const HomePage = () => {
  useEffect(() => {
    // Configurar animações de scroll
    animateOnScroll('.animate-on-scroll', {
      start: 'top 80%',
      toggleActions: 'play none none none'
    });
    
    // Atualizar o título da página
    document.title = 'RLS Automação | Soluções em Automação Industrial';
  }, []);

  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <IndustriesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default HomePage;
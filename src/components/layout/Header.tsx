import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Menu, X, ChevronDown, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const location = useLocation();

  // Controla o estado do header baseado no scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu quando a rota muda
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
    setIsIndustriesOpen(false);
  }, [location]);

  // Variantes de animação
  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' }
  };

  const dropdownVariants = {
    closed: { opacity: 0, y: -5, display: "none" },
    open: { opacity: 1, y: 0, display: "block" }
  };

  const navItems = [
    { title: 'Início', path: '/' },
    { 
      title: 'Soluções', 
      path: '/solucoes',
      hasDropdown: true,
      isOpen: isSolutionsOpen,
      setOpen: setIsSolutionsOpen,
      dropdownItems: [
        { title: 'Sistemas SCADA', path: '/solucoes/scada' },
        { title: 'IoT Industrial', path: '/solucoes/iot-industrial' },
        { title: 'Integração MES/ERP', path: '/solucoes/integracao-mes-erp' },
        { title: 'Automação com PLCs', path: '/solucoes/automacao-plcs' },
        { title: 'Redes Industriais', path: '/solucoes/redes-industriais' },
        { title: 'Ver todas', path: '/solucoes' }
      ]
    },
    { 
      title: 'Indústrias', 
      path: '/industrias',
      hasDropdown: true,
      isOpen: isIndustriesOpen,
      setOpen: setIsIndustriesOpen,
      dropdownItems: [
        { title: 'Manufatura', path: '/industrias/manufatura' },
        { title: 'Petroquímica', path: '/industrias/petroquimica' },
        { title: 'Alimentos e Bebidas', path: '/industrias/alimentos' },
        { title: 'Farmacêutica', path: '/industrias/farmaceutica' },
        { title: 'Logística', path: '/industrias/logistica' },
        { title: 'Ver todas', path: '/industrias' }
      ]
    },
    { title: 'Sobre Nós', path: '/sobre' },
    { title: 'Contato', path: '/contato' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              initial={{ rotate: -10, scale: 0.8 }} 
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center"
            >
              <Cpu className="text-white" size={20} />
              <div className="absolute -right-1 -top-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                RLS
              </h1>
              <p className="text-xs text-gray-500 -mt-1">AUTOMAÇÃO INDUSTRIAL</p>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <div key={item.title} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`px-3 py-2 text-gray-700 hover:text-primary-600 font-medium flex items-center transition-colors ${location.pathname.includes(item.path) ? 'text-primary-600' : ''}`}
                      onClick={() => item.setOpen(!item.isOpen)}
                      onMouseEnter={() => item.setOpen(true)}
                      onMouseLeave={() => item.setOpen(false)}
                    >
                      {item.title}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    <AnimatePresence>
                      {item.isOpen && (
                        <motion.div
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={dropdownVariants}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-60 bg-white shadow-lg rounded-lg py-2 z-20"
                          onMouseEnter={() => item.setOpen(true)}
                          onMouseLeave={() => item.setOpen(false)}
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.title}
                              to={dropdownItem.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors ${location.pathname === item.path ? 'text-primary-600' : ''}`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+351935479757" className="flex items-center text-gray-700 hover:text-primary-600">
              <Phone size={18} className="mr-2" />
              <span className="font-medium">+351 935 479 757</span>
            </a>
            <Button 
              variant="primary" 
              size="md" 
              to="/contato"
              className="shadow-lg shadow-primary-600/20"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col">
              {navItems.map((item) => (
                <div key={item.title} className="border-b border-gray-100 py-2">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className={`flex justify-between items-center w-full py-2 text-gray-700 font-medium ${location.pathname.includes(item.path) ? 'text-primary-600' : ''}`}
                        onClick={() => item.setOpen(!item.isOpen)}
                      >
                        {item.title}
                        <ChevronDown size={16} className={`transition-transform ${item.isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {item.isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-1 overflow-hidden"
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.title}
                                to={dropdownItem.path}
                                className="block py-2 pl-2 border-l-2 border-gray-200 text-gray-600 hover:text-primary-600 hover:border-primary-600"
                              >
                                {dropdownItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block py-2 text-gray-700 font-medium ${location.pathname === item.path ? 'text-primary-600' : ''}`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-4 space-y-4">
                <a href="tel:+351935479757" className="flex items-center justify-center text-gray-700 py-2 border border-gray-200 rounded-lg">
                  <Phone size={18} className="mr-2" />
                  <span className="font-medium">+351 935 479 757</span>
                </a>
                <Button 
                  variant="primary" 
                  size="md" 
                  to="/contato" 
                  fullWidth
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
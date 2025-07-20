
import { useState, useEffect } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ChefHat className="h-7 w-7 md:h-8 md:w-8 text-chef-olive" />
            <span className="text-lg md:text-xl font-playfair font-bold text-chef-olive">
              Giuliano
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-chef-olive hover:text-chef-terracotta transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-chef-olive hover:text-chef-terracotta transition-colors"
            >
              Servizi
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-chef-olive hover:text-chef-terracotta transition-colors"
            >
              Chi Sono
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-chef-olive hover:text-chef-terracotta transition-colors"
            >
              Progetti
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-chef-olive hover:bg-chef-olive/90 text-white"
            >
              Contatti
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-chef-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-chef-olive" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full glass-effect border-t">
            <div className="section-padding py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-chef-charcoal hover:text-chef-olive transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-chef-charcoal hover:text-chef-olive transition-colors"
              >
                Servizi
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-chef-charcoal hover:text-chef-olive transition-colors"
              >
                Chi Sono
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left text-chef-charcoal hover:text-chef-olive transition-colors"
              >
                Progetti
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-chef-olive hover:bg-chef-olive/90 text-white"
              >
                Contatti
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


import { ArrowDown, Star, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpeg)' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/background.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container-max section-padding relative z-10  md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in  md:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold leading-tight mb-6">
                Trasforma le urgenze di ogni giorno in 
                <span className="text-chef-olive drop-shadow-lg"> successi concreti</span>
              </h1>
              
              <p className="text-xl sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                Con esperienza internazionale e un metodo pratico, ti supporto nel rendere 
                il menù più efficace, il lavoro più fluido e il team più performante.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-chef-olive">10+</div>
                <div className="text-xs md:text-sm text-gray-300">Anni di esperienza</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-chef-olive">30+</div>
                <div className="text-xs md:text-sm text-gray-300">Ristoranti</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-chef-olive">200+</div>
                <div className="text-xs md:text-sm text-gray-300">ore di formazione erogate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 py-2 md:py-0">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-chef-olive hover:bg-chef-olive/90 text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              >
                Consulenza Gratuita
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-chef-charcoal text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Scopri di Più
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="lg:block hidden animate-slide-in-left">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                Hai bisogno di:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-yellow-400" />
                  <span className="text-white">Supporto extra per eventi, catering o nei momenti di picco</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-chef-olive" />
                  <span className="text-white">Un menu più strategico, efficace e profittevole</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-chef-terracotta" />
                  <span className="text-white">Potenziare le competenze del tuo staff di cucina</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  );
};
